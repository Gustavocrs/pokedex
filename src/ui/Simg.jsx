import styled from "styled-components";
import {
  corBranco,
  corPreto,
  corFundo,
  tamPadraoTexto,
  fontePadrao,
} from "../ui/variaveis";
import PokeLogo from '../img/Pokedex_logo.png'

export const Simg = styled.img`
  width: 350px;
  max-width: 350px;
  height: auto;
  max-height: 400px;
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

export const Pokedex = styled.section`
  display: flex;
  justify-content: space-around;
  height: 50vh;
  width: 100%;
  background-color: ${corFundo};
  background-image: url(${PokeLogo});
  background-position: 50% 80%;
  background-size: 30%;
  background-repeat: no-repeat;

  p {
    line-height: 30px;
    font-size: ${tamPadraoTexto};
    font-family: ${fontePadrao};
    color: ${corBranco};
    filter: drop-shadow(0 0 10px ${corPreto});
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 10vh;
  }
  @media screen and (max-width: 620px) {
    width: 100%;
    background-size: 80%;
    background-position: 50% 50%;
  }

  @media screen and (max-height: 530px) {
    background-size: 50%;
    transition: 500ms;
  }
  @media screen and (max-height: 400px) {
    background-size: 60%;
    transition: 500ms;
  }
`;