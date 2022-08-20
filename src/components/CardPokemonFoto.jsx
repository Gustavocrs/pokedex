import styled from "styled-components";
import { CardContainer } from "../ui/CardContainer";
import { Sh1 } from "../ui/Sh";
import {
  fontePadrao,
  tamPadraoTexto,
  corBranco,
  corPreto,
  corNor,
  corFig,
  corFly,
  corPoi,
  corGro,
  corRoc,
  corBug,
  corGho,
  corSte,
  corFir,
  corWat,
  corGra,
  corEle,
  corPsy,
  corIce,
  corDra,
  corDar,
  corFai,
} from "../ui/variaveis";

const CardContainerFotoPoke = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  @media screen and (max-width: 620px) {
    margin-top: 100px;
    height: 92vh;
  }
`;

const Simg = styled.img`
  width: 250px;
  height: auto;
  filter: drop-shadow(0 0 10px #f1f1f1);
`;

const Sp = styled.p`
  line-height: 30px;
  margin-left: 30px;
  font-size: ${tamPadraoTexto};
  font-family: ${fontePadrao};
  color: ${corBranco};
  filter: drop-shadow(0 0 10px ${corPreto});
  text-transform: uppercase;
  margin: 15px 0;
`;

export const CardPokemonFoto = (props) => {
  let corPrimaria, corSecundaria;
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

  switch (tipoUm) {
    case "normal":
      corPrimaria = corNor;
      break;
    case "fighting":
      corPrimaria = corFig;
      break;
    case "flying":
      corPrimaria = corFly;
      break;
    case "poison":
      corPrimaria = corPoi;
      break;
    case "ground":
      corPrimaria = corGro;
      break;
    case "rock":
      corPrimaria = corRoc;
      break;
    case "bug":
      corPrimaria = corBug;
      break;
    case "ghost":
      corPrimaria = corGho;
      break;
    case "steel":
      corPrimaria = corSte;
      break;
    case "fire":
      corPrimaria = corFir;
      break;
    case "water":
      corPrimaria = corWat;
      break;
    case "grass":
      corPrimaria = corGra;
      break;
    case "electric":
      corPrimaria = corEle;
      break;
    case "psychic":
      corPrimaria = corPsy;
      break;
    case "ice":
      corPrimaria = corIce;
      break;
    case "dragon":
      corPrimaria = corDra;
      break;
    case "dark":
      corPrimaria = corDar;
      break;
    case "fairy":
      corPrimaria = corFai;
      break;
    default:
      corPrimaria = "lightgray";
  }

  switch (tipoDois) {
    case "normal":
      corSecundaria = corNor;
      break;
    case "fighter":
      corSecundaria = corFig;
      break;
    case "flying":
      corSecundaria = corFly;
      break;
    case "poison":
      corSecundaria = corPoi;
      break;
    case "ground":
      corSecundaria = corGro;
      break;
    case "rock":
      corSecundaria = corRoc;
      break;
    case "bug":
      corSecundaria = corBug;
      break;
    case "ghost":
      corSecundaria = corGho;
      break;
    case "steel":
      corSecundaria = corSte;
      break;
    case "fire":
      corSecundaria = corFir;
      break;
    case "water":
      corSecundaria = corWat;
      break;
    case "grass":
      corSecundaria = corGra;
      break;
    case "electric":
      corSecundaria = corEle;
      break;
    case "psychic":
      corSecundaria = corPsy;
      break;
    case "ice":
      corSecundaria = corIce;
      break;
    case "dragon":
      corSecundaria = corDra;
      break;
    case "dark":
      corSecundaria = corDar;
      break;
    case "fairy":
      corSecundaria = corFai;
      break;
    default:
      corSecundaria = corPrimaria;
  }

  return (
    <>
      <CardContainer
        style={{
          background: `linear-gradient(to right,${corPrimaria}, ${corSecundaria})`,
        }}
      >
        <Sh1>{props.dados.name}</Sh1>
        <Sp>n°{props.dados.id}</Sp>
        <Simg
          src={imagemPokeDreamWorld ? imagemPokeDreamWorld : imagemPokeDefault}
          alt="Foto do Pokemon"
        />
        <Sp>{tipoDois ? tipoUm + " / " + tipoDois : tipoUm}</Sp>
      </CardContainer>
    </>
  );
};
