import styled, { css } from "styled-components";

const SidebarContainer = styled.div<{ isOpen: boolean }>`
  ${({ theme, isOpen }) => {
    return css`
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      flex-flow: column nowrap;
      width: ${isOpen ? "20%" : "0%"};
      height: 100vh;
      background-color: ${theme.background};
      color: ${theme.color};
      box-shadow: 1px 0px 4px 4px rgba(0, 0, 0, 0.15);

      overflow: hidden;
      transform: ${isOpen ? "translateX(0vw)" : "translateX(-100vw)"};

      @media (max-width: 900px) {
        position: absolute;
        z-index: 2;
        width: 100vw;
      }

      > svg {
        color: red;
      }
    `;
  }}
`;

const SidebarFooter = styled.div`
  ${({ theme }) => {
    return css`
      display: flex;
      flex-flow: column nowrap;
      align-items: center;
      justify-content: space-evenly;

      width: 100%;
      height: 15%;

      a {
        text-align: center;
        text-decoration: none;
        text-transform: uppercase;
        font-weight: 700;
        color: ${theme.background};
        box-sizing: border-box;
        border-left: 1em solid ${theme.accentLight};
        background-color: ${theme.color};
        width: 100%;
        padding: 5% 0%;

        :hover {
          transform: scale(1.1);
          background-color: ${theme.color};

          border-left: 5em solid ${theme.accentMedium};
        }

        :active {
          background-color: ${theme.color};

          border-left-color: ${theme.accentDark};
        }
      }
    `;
  }}
`;

const SidebarHeader = styled.div`
  ${({ theme }) => {
    return css`
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 15%;
      position: relative;

      svg {
        display: block;
        position: absolute;
        top: 1%;
        left: 1%;

        color: ${theme.color};
        filter: drop-shadow(0px 0px 10px ${theme.accentLight});

        :hover {
          cursor: pointer;
        }
      }

      p {
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        justify-content: space-evenly;
        width: 100%;
        padding: 2% 0;
        height: max-content;
        background-color: ${theme.color};
        color: ${theme.background};

        span {
          font-size: 2em;
          color: ${theme.accentDark};

          &:after {
            content: "m";
          }
        }
      }

      @media (min-width: 700px) {
        svg {
          display: none;
        }
      }
    `;
  }}
`;

const SidebarBody = styled.div`
  ${({ theme }) => {
    return css`
      display: flex;
      align-items: center;
      flex-flow: column nowrap;
      justify-content: space-around;
      width: 100%;
      height: 70%;

      label:hover {
        cursor: pointer;
      }

      > .accentContainer {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-flow: row nowrap;
        height: max-content;
        width: 100%;

        label {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 25%;
          background-color: transparent;
          padding: 0.5em 0;

          &.active {
            background-color: ${theme.accentLight};
          }
        }
      }

      > .colorModeContainer {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        font-size: 2em;
        width: 100%;

        label {
          display: flex;
          align-items: center;
          flex-flow: column nowrap;
          justify-content: space-evenly;
          width: 25%;
          text-align: center;
        }
      }

      > h3 {
        font-size: 2em;
      }

      input[type="range"] {
        width: 90%;
        background-color: transparent;

        &::-webkit-slider-runnable-track,
        &::-moz-range-track {
          height: 75%;
          box-shadow: inset 0 0 0em 0.2em ${theme.color};
          background-color: ${theme.accentLight};
          border-radius: 10px;
        }

        &::-webkit-slider-runnable-thumb,
        &::-moz-range-thumb {
          position: relative;
          border-radius: 9999px;
          border: 0.1em solid black;
          height: 1.2em;
          width: 1.2em;
          background-color: ${theme.accentLight};

          box-shadow: inset 0 0 0em 0.2em ${theme.color};
        }
      }
    `;
  }}
`;

const SidebarRadio = styled.div`
  ${({ color }) => {
    return css`
      background-color: #fff;
      width: 1em;
      height: 1em;
      border-radius: 9999px;
      position: relative;
      box-shadow: 1px 1px 4px 1px rgba(0, 0, 0, 0.15);
      border: 0.1em solid black;

      :after {
        width: 77%;
        background-color: #fff;
        height: 77%;
        left: 10%;
        top: 10%;
        border-radius: 9999px;
        position: absolute;
        display: block;
        content: " ";
      }

      &.active {
        ::after {
          background-color: ${color};
        }
      }
    `;
  }}
`;
export { SidebarContainer, SidebarFooter, SidebarHeader, SidebarBody, SidebarRadio };
