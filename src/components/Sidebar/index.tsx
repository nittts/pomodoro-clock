import { useState } from "react";
import { BsGearFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useSession } from "../../store/Session";
import { theme } from "../../styles/accentThemes";
import { SidebarContainer, SidebarFooter, SidebarHeader, SidebarBody, SidebarRadio } from "./styles/sidebar.styles";

interface ISidebarProps {
  changeTheme: (name: string) => void;
  curTheme: string;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function Sidebar({ changeTheme, curTheme, isOpen, setIsOpen }: ISidebarProps) {
  const { dispatch, setDuration, setBreaks, sessionState } = useSession();
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <>
      <SidebarContainer isOpen={isOpen}>
        <SidebarHeader>
          <BsGearFill onClick={() => setIsOpen(!isOpen)} />
          <p>
            <span>{sessionState.duration.goal / 60}</span>duration
          </p>
          <p>
            <span>{sessionState.breaks.duration / 60}</span>break
          </p>
        </SidebarHeader>

        <SidebarBody>
          <h3>Accent Color</h3>
          <div className="accentContainer">
            {Object.keys(theme).map((color, index) => {
              return (
                <label
                  htmlFor="color"
                  className={curTheme === color ? "active" : ""}
                  onClick={() => {
                    changeTheme(color);
                  }}
                  key={`S${index}`}
                >
                  <SidebarRadio color={theme[color].accentLight} className={curTheme === color ? "active" : ""} />
                </label>
              );
            })}
          </div>

          <div className="colorModeContainer">
            <label
              htmlFor="Mode"
              onClick={() => {
                setDarkTheme(false);
                document.documentElement.style.setProperty("--background-color", "#fff");
                document.documentElement.style.setProperty("--text-color", "#242424");
              }}
            >
              <span>Light Mode</span>
              <SidebarRadio color={"var(--text-color)"} className={!darkTheme ? "active" : ""} />
            </label>
            <label
              htmlFor="Mode"
              onClick={() => {
                setDarkTheme(true);
                document.documentElement.style.setProperty("--background-color", "#242424");
                document.documentElement.style.setProperty("--text-color", "#fff");
              }}
            >
              <span>Dark Mode</span>
              <SidebarRadio color={"var(--background-color)"} className={darkTheme ? "active" : ""} />
            </label>
          </div>

          <h3>Session Duration</h3>
          <input
            type={"range"}
            min={5}
            max={60}
            step={5}
            onChange={(e) => {
              dispatch(
                setDuration({
                  goal: Number(e.target.value) * 60,
                  current: Number(e.target.value) * 60,
                })
              );
            }}
          />

          <h3>Break duration</h3>
          <input
            type={"range"}
            min={5}
            max={30}
            step={5}
            onChange={(e) => {
              dispatch(
                setBreaks({
                  ...sessionState.breaks,
                  duration: Number(e.target.value) * 60,
                })
              );
            }}
          />
        </SidebarBody>

        <SidebarFooter>
          <Link to={""} onClick={() => setIsOpen(!isOpen)}>
            clock
          </Link>
          <Link to={"/history"} onClick={() => setIsOpen(!isOpen)}>
            history
          </Link>
        </SidebarFooter>
      </SidebarContainer>
    </>
  );
}

export default Sidebar;
