import styled, { css } from "styled-components";

const Container = styled.div<{ status: string }>`
  ${({ theme, status }) => {
    return css`
      display: flex;
      align-items: center;
      justify-content: flex-start;
      width: 100%;
      height: 10%;
      padding: 0 1%;
      background-color: ${theme.color};
      border-left: 1em solid ${theme.accentLight};
      color: ${theme.background};

      .stats {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        gap: 25%;
        flex-flow: column nowrap;
        font-weight: 700;
        padding: 0 1%;
        width: 15%;
        height: 100%;

        p {
          width: 100%;
        }
      }

      > p {
        text-align: center;
        margin: 1%;
        width: 15%;
        padding: 1%;
        border-radius: 4px;
        background-color: red;
        font-weight: 700;
        color: ${status === "Completed" ? "	hsl(120, 73%, 25%)" : "hsl(358, 77%, 25%)"};
        background-color: ${status === "Completed" ? "#90EE90" : "#E3242b"};
        border: 0.2em solid ${status === "Completed" ? "	hsl(120, 73%, 30%)" : "hsl(358, 77%, 30%)"};
      }

      .quote {
        height: 90%;
        width: 65%;
        padding: 2%;

        > p + p {
          margin-top: 2%;
          font-weight: 700;
        }
      }

      @media (max-width: 900px) {
        height: auto;

        > p {
          font-size: 0.6em;
        }

        .stats {
          font-size: 0.5em;
        }

        .quote {
          font-size: 0.7em;
        }
      }
    `;
  }}
`;

export { Container };
