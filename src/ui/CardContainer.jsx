import styled from "styled-components";

export const CardContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;
  width: 100%;
  overflow: hidden;

  @media screen and (max-width: 245px) {
    min-height: 240px;
  }

  @media screen and (max-width: 620px) {
    justify-content: center;
  }
`;

export const CardContainerBase = styled(CardContainer)`
  justify-content: flex-start;
`;
