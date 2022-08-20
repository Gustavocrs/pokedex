import styled from "styled-components";
import PokeLogo from "../../src/img/Pokedex_logo.png";
import { CardContainer } from "../ui/CardContainer";
import { Pokeball } from "../ui/Simg";
import {
  corBranco,
  corPreto,
  corFundo,
  tamPadraoTexto,
  fontePadrao,
} from "../ui/variaveis";

const Pokedex = styled.section`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  height: 100vh;
  width: 100%;
  background-color: ${corFundo};
  background-image: url(${PokeLogo});
  background-position: center;
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
    height: 100vh;
    background-size: 80%;
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

export const CardInicio = () => {
  return (
    <CardContainer>
      <Pokedex />
      <Pokeball
        src={"https://bk.ibxk.com.br/2016/8/programas/15344904184914733.png"}
      />
    </CardContainer>
  );
};
