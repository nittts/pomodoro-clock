import styled, { css } from "styled-components";

const Container = styled.div`
  ${({ theme }) => {
    return css`
      display: flex;
      flex-flow: column nowrap;
      align-items: center;
      justify-content: flex-start;
      gap: 1%;
      padding: 2%;
      width: 90%;
      height: 50vh;
      background-color: ${theme.background};
      font-family: "Poppins";

      @media (max-width: 900px) {
        box-sizing: border-box;
        width: 100vw;
        min-height: 100vh;
        height: auto;
        overflow-y: scroll;
        overflow-x: hidden;
        justify-content: space-evenly;
      }
    `;
  }}
`;

export { Container };
