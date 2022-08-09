import styled from "styled-components";
import {
  fontePadrao,
  tamPadraoTitulo,
  tamPadraoTexto,
  corBranco,
} from "../ui/variaveis";

const CardContainerFotoPoke = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100vh;
  background: gray;
`;

const Sh1 = styled.h1`
  color: #f1f1f1;
  font-size: ${tamPadraoTitulo};
  margin-top: 30px;
  &::first-letter {
    text-transform: uppercase;
  }
`;

const Simg = styled.img`
  width: 350px;
  height: auto;
`;

export const Sp = styled.p`
  line-height: 30px;
  margin-left: 30px;
  font-size: ${tamPadraoTexto};
  font-family: ${fontePadrao};
  color: ${corBranco};
  text-transform: uppercase;
  margin: 15px 0;
`;

export const CardPokemonFoto = (props) => {
  
  let tipoUm = props.dados.types[0].type.name;
  let tipoDois;

  if (props.dados.types[1]) {
    tipoDois = props.dados.types[1].type.name;
  } else {
    tipoDois = "";
  }

  return (
    <CardContainerFotoPoke>
      <Sh1>{props.dados.name}</Sh1>
      <Sp>n°{props.dados.id}</Sp>
      <Simg src={props.dados.sprites.front_default} alt="Foto do Pokemon" />
      <Sp>{tipoDois ? tipoUm + " / " + tipoDois : tipoUm}</Sp>
    </CardContainerFotoPoke>
  );
};
