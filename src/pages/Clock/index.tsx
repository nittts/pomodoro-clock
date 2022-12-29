import { useEffect, useState } from "react";
import { ClockContainer, ClockFooter, ClockBody } from "./styles/clock.styles";
import { useSession } from "../../store/Session";
import { useClockHistory } from "../../store/History";
import getSingleQuote from "../../services/quoteAPI";

function Clock() {
  const { sessionState, setBreaks, setReps, resetSession, setStatus, setQuote, setDuration } = useSession();
  const { dispatch, saveHistory } = useClockHistory();

  const [clockActive, setClockActive] = useState(false);
  const [coffeeBreak, setCoffeeBreak] = useState(false);
  const [repTime] = useState(sessionState.duration.goal);

  function handleTimer() {
    setClockActive(!clockActive);

    if (!clockActive) {
      dispatch(setStatus("Running"));
    } else {
      dispatch(setStatus("Paused"));
    }
  }

  function resetTimer() {
    dispatch(saveHistory({ ...sessionState, status: "Stopped" }));
    setClockActive(false);
    dispatch(resetSession());
    getSingleQuote().then((res) => {
      dispatch(setQuote(res));
    });
  }

  useEffect(() => {
    const timing = setInterval(() => {
      if (clockActive) {
        dispatch(setDuration({ ...sessionState.duration, current: sessionState.duration.current - 1 }));
      }
    }, 1000);

    if (sessionState.duration.current <= 0) {
      clearInterval(timing);
      setClockActive(false);

      if (coffeeBreak) {
        dispatch(setDuration({ ...sessionState.duration, current: repTime }));
        dispatch(setBreaks({ ...sessionState.breaks, current: sessionState.breaks.current + 1 }));

        setCoffeeBreak(false);
      } else {
        if (sessionState.breaks.current === sessionState.breaks.goal) {
          dispatch(saveHistory({ ...sessionState, status: "Completed" }));
          dispatch(setReps({ ...sessionState.reps, current: 0 }));
          dispatch(setBreaks({ ...sessionState.breaks, current: 0 }));
          dispatch(setDuration({ ...sessionState.duration, current: (repTime / 5) * 3 }));
        } else {
          dispatch(setReps({ ...sessionState.reps, current: sessionState.reps.current + 1 }));
          dispatch(setDuration({ ...sessionState.duration, current: sessionState.breaks.duration }));
        }

        setCoffeeBreak(true);
      }
    }

    return () => {
      clearInterval(timing);
    };
  }, [sessionState, clockActive]);

  return (
    <ClockContainer
      progress={
        coffeeBreak
          ? ((sessionState.duration.current / sessionState.breaks.duration) * 100).toFixed(0)
          : ((sessionState.duration.current / sessionState.duration.goal) * 100).toFixed(0)
      }
      goal={0}
    >
      <div className="clock">
        <div className="border">
          <p>
            {Math.floor(sessionState.duration.current / 60)} :{" "}
            {Math.floor(sessionState.duration.current % 60) === 0
              ? "00"
              : Math.floor(sessionState.duration.current % 60)}
          </p>
        </div>
      </div>
      <ClockBody>
        <p>{sessionState.date}</p>
        <p>{sessionState.status}</p>

        <div className="breaks">
          {new Array(sessionState.breaks.goal).fill(sessionState.breaks.goal).map((_, index) => {
            return <p key={`B${index}`} className={sessionState.breaks.current >= index + 1 ? "completed" : ""}></p>;
          })}
        </div>

        <div className="quote">
          <p>{sessionState.quote.text}</p>
          <p>{sessionState.quote.author}</p>
        </div>
      </ClockBody>
      <ClockFooter>
        <button onClick={handleTimer}>Pause / Resume</button>
        <button onClick={resetTimer}> Reset timer</button>
      </ClockFooter>
    </ClockContainer>
  );
}

export default Clock;
