import styled, { css } from "styled-components";
import backgroundIMG from "../../../assets/background.jpg";

const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: flex-start;
  justify-content: flex-start;

  height: 100vh;
  width: 100vw;
`;

const Content = styled.div<{ isOpen: boolean }>`
  ${({ theme, isOpen }) => {
    return css`
      display: flex;
      align-items: center;
      justify-content: center;
      width: ${isOpen ? "80vw" : "100vw"};
      height: 100%;
      position: relative;

      background: linear-gradient(to right, ${theme.backgroundCover}, ${theme.backgroundCover}), url(${backgroundIMG});
      background-size: cover;
      background-position: center;

      > svg {
        position: absolute;
        top: 1%;
        left: 1%;
        color: ${theme.background};
        filter: drop-shadow(0px 0px 10px ${theme.accentLight});

        :hover {
          cursor: pointer;
        }
      }

      background-repeat: no-repeat;
    `;
  }}
`;

export { Container, Content };
