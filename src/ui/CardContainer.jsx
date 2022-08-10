import styled from "styled-components";

export const CardContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 470px;
  width: 100%;
  overflow: hidden;  

  @media screen and (max-width: 620px) {
    width: 100%;
    height: 100vh;
  }
`;
