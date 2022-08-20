import styled from "styled-components";
import { CardContainer } from "../ui/CardContainer";
import { Sh1 } from "../ui/Sh";
import { Simg } from "../ui/Simg";
import { Sp } from "../ui/Sp";
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
        <Sh1>
          {props.dados.name} #{props.dados.id}
        </Sh1>

        <Simg
          src={imagemPokeDreamWorld ? imagemPokeDreamWorld : imagemPokeDefault}
          alt="Foto do Pokemon"
        />
        <Sp>{tipoDois ? tipoUm + " / " + tipoDois : tipoUm}</Sp>
      </CardContainer>
    </>
  );
};
