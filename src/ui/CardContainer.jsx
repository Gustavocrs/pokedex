import styled from "styled-components";

export const CardContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  overflow: hidden;

  @media screen and (max-width: 620px) {
    width: 100%;
  }
`;

export const CardContainerBase = styled(CardContainer)`
  justify-content: flex-start;
`;
