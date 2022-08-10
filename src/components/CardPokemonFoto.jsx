import styled from "styled-components";
import {
  fontePadrao,
  tamPadraoTitulo,
  tamPadraoTexto,
  corPreto,
} from "../ui/variaveis";

const CardContainerFotoPoke = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: gray;
  @media screen and (max-width: 620px) {
    margin-top: 100px;
    height: auto;
  }
`;

const Sh1 = styled.h1`
  color: ${corPreto};
  font-size: ${tamPadraoTitulo};
  margin-top: 30px;
  text-align: center;
  &::first-letter {
    text-transform: uppercase;
  }
`;

const Simg = styled.img`
  width: 250px;
  height: auto;
`;

const Sp = styled.p`
  line-height: 30px;
  margin-left: 30px;
  font-size: ${tamPadraoTexto};
  font-family: ${fontePadrao};
  color: ${corPreto};
  text-transform: uppercase;
  margin: 15px 0;
`;

export const CardPokemonFoto = (props) => {
  let imagemPokeDreamWorld =
    props.dados.sprites.other.dream_world.front_default;
  let imagemPokeDefault = props.dados.sprites.front_default;
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
      <Simg
        src={imagemPokeDreamWorld ? imagemPokeDreamWorld : imagemPokeDefault}
        alt="Foto do Pokemon"
      />
      <Sp>{tipoDois ? tipoUm + " / " + tipoDois : tipoUm}</Sp>
    </CardContainerFotoPoke>
  );
};
