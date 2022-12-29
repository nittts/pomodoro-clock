import { IHistory } from "../../@types/history.types";
import { Container } from "./styles/card.styles";

interface ICardProps {
  history: IHistory;
}

function Card({ history }: ICardProps) {
  const { breaks, date, quote, reps, status } = history;

  return (
    <Container status={status}>
      <div className="stats">
        <p>{date}</p>
        <p>
          Breaks: {breaks.current} / {breaks.goal}
        </p>
      </div>
      <p>{status}</p>
      <div className="quote">
        <p>{quote.text}</p>
        <p>{quote.author}</p>
      </div>
    </Container>
  );
}

export default Card;
