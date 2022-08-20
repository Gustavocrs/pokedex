import styled from "styled-components";

export const Simg = styled.img`
  width: 350px;
  max-width: 350px;
  height: auto;
  max-height: 200px;
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

export const Pokeball = styled.img`
  width: 350px;
  
  @media screen and (max-height: 700px) {
    max-width: 400px;
    transition: 500ms;
  }

  @media screen and (max-height: 460px) {
    display: none;
    transition: 500ms;
  }
`;
