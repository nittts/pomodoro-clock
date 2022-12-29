import styled, { css } from "styled-components";

const ClockContainer = styled.div<{ progress: string; goal: number }>`
  ${({ theme, progress }) => {
    return css`
      display: flex;
      flex-flow: column nowrap;
      align-items: center;
      justify-content: center;
      background-color: ${theme.background};
      border-radius: 4px;
      height: 80vh;
      width: 90%;
      box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.25);

      > .clock {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 60%;
        width: 100%;

        .border {
          display: flex;
          align-items: center;
          justify-content: center;
          transform: rotate(180deg);
          background: ${`conic-gradient(${theme.accentDark} ${Number(progress) * 3.6}deg, #dfdfdf ${
            Number(progress) * 3.6
          }deg)`};
          width: 15em;
          height: 15em;
          border-radius: 50%;
          position: relative;
          color: black;
          filter: drop-shadow(0px 0px 30px ${theme.accentLight});

          p {
            transform: rotate(-180deg);
            z-index: 2;
            font-size: 3em;
            width: 100%;
            text-align: center;
            font-family: "Poppins", sans-serif;
            font-weight: 700;
            color: ${theme.accentDark};
          }

          ::after {
            border-radius: 50%;
            background-color: ${theme.background};
            display: block;
            content: "";
            width: 85%;
            height: 85%;
            position: absolute;
          }
        }
      }

      @media (min-width: 900px) {
        height: 80vh;
        width: 40%;
      }
    `;
  }}
`;

const ClockFooter = styled.div`
  ${({ theme }) => {
    return css`
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      height: 10%;
      width: 100%;

      button {
        border-radius: 16px;
        font-family: "Poppins", sans-serif;
        background-color: ${theme.background};
        color: ${theme.accentDark};
        width: 12em;
        font-weight: 700;
        padding: 0.6em;
        border: 0.5em solid ${theme.accentDark};

        :active {
          border: 0.5em solid ${theme.accentDark};
          color: ${theme.background};
          background-color: ${theme.accentDark};
        }
      }

      @media (max-width: 900px) {
        button {
          font-size: 0.7em;
          width: 12em;
        }
      }
    `;
  }}
`;

const ClockBody = styled.div`
  ${({ theme }) => {
    return css`
      display: flex;
      align-items: center;
      flex-flow: column nowrap;
      justify-content: flex-start;

      height: 30%;
      width: 100%;

      > p {
        text-align: center;
        font-family: "Poppins", sans-serif;
        color: ${theme.accentDark};
        width: 50%;
        margin: 1%;
        font-size: 1em;
      }

      .breaks {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        width: 80%;
        height: 20%;

        > p {
          width: 1.5em;
          height: 1.5em;
          border-radius: 50%;
          background-color: ${theme.color};

          &.completed {
            background-color: ${theme.backgroundCover};
          }
        }
      }

      .quote {
        width: 80%;
        height: 50%;
        display: flex;
        flex-flow: column nowrap;
        align-items: flex-start;
        justify-content: center;
        font-family: "Poppins", sans-serif;
        font-size: 0.9em;
        color: ${theme.color};

        p:nth-of-type(1) {
          font-size: 0.8em;
        }

        p:nth-of-type(2) {
          margin: 0.5em;
        }
      }
    `;
  }}
`;

export { ClockContainer, ClockFooter, ClockBody };
