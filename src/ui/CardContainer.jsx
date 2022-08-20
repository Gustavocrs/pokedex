import styled from "styled-components";

export const CardContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;
  width: 100%;

  
  @media screen and (max-width: 620px) {
    width: 100%;
    height: 100vh;
    justify-content: flex-start;
    
  }
`;
