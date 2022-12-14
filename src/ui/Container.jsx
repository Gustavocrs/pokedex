import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: transparent;
  overflow: hidden;
  div {
    display: none;
  }
  @media screen and (max-width: 620px) {
    flex-direction: column;
    width: 100%;
    height: auto;
  }
`;
