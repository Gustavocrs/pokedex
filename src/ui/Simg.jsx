import styled from "styled-components";

export const Simg = styled.img`
  width: auto;
  max-width: 300px;
  height: 50vh;
  margin: 15px 0;
  filter: drop-shadow(0 0 10px #f1f1f1);
  transition: 500ms;

  @media screen and (max-height: 700px) {
    max-width: 200px;
    transition: 500ms;
  }

  @media screen and (max-height: 460px) {
    display: none;
    transition: 500ms;
  }

`;
