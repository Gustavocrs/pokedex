import styled from "styled-components";
import { CardContainer } from "../ui/CardContainer";
import {
  corBranco,
  corPreto,
  corFundo,
  tamPadraoTexto,
  fontePadrao,
} from "../ui/variaveis";

const Pokeball = styled.section`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 100vh;
  width: 100%;
  background-color: ${corFundo};
  background-image: url("https://bk.ibxk.com.br/2016/8/programas/15344904184914733.png");
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
    background-size: 30%;
    transition: 500ms;
  }
`;

export const CardInicio = () => {
  return (
    <CardContainer>
      <Pokeball>
        <p>
          Digite o nome ou id de um pokemon e pressione <strong>Enter</strong>
          ...
        </p>
      </Pokeball>
    </CardContainer>
  );
};
