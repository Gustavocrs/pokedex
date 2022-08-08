import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: #f1f1f1;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;

  .box {
    margin: 10px 0;
    position: fixed;
  }

  @media screen and (max-width: 620px) {
    width: 100%;
    height: 100vh;
  }
`;
