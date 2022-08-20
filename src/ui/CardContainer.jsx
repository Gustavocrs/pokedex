import styled from "styled-components";

export const CardContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 100vh;
  width: 100%;
  overflow: hidden;
`;

export const CardContainerBase = styled(CardContainer)`
  justify-content: flex-start;
`;
