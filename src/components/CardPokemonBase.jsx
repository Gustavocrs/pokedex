import { CardContainerBase } from "../ui/CardContainer";
import { Stable, Sth, Std } from "../ui/Stable";
import { Sul, Sli } from "../ui/List";
import { Sh1 } from "../ui/Sh";
import { Text } from "../ui/Sp";
import { ConvertStatus } from "../functions/ConvertStatus";
import {
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

export const CardPokemonBase = (props) => {
  let pokeAbility = props.dados.abilities;
  let hp = {
    name: props.dados.stats[0].stat.name,
    value: props.dados.stats[0].base_stat,
    alias: "HP",
  };
  let atk = {
    name: props.dados.stats[1].stat.name,
    value: props.dados.stats[1].base_stat,
    alias: "ATK",
  };
  let def = {
    name: props.dados.stats[2].stat.name,
    value: props.dados.stats[2].base_stat,
    alias: "DEF",
  };
  let satk = {
    name: props.dados.stats[3].stat.name,
    value: props.dados.stats[3].base_stat,
    alias: "SATK",
  };
  let sdef = {
    name: props.dados.stats[4].stat.name,
    value: props.dados.stats[4].base_stat,
    alias: "SDEF",
  };
  let spd = {
    name: props.dados.stats[5].stat.name,
    value: props.dados.stats[5].base_stat,
    alias: "SPD",
  };

  let totalAtributos =
    hp.value + atk.value + def.value + satk.value + sdef.value + spd.value;

  let corPrimaria, corSecundaria;
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
    <CardContainerBase
      style={{
        background: `linear-gradient(to right,${corPrimaria}, ${corSecundaria})`,
      }}
    >
      <Sh1>
        {props.dados.name} #{props.dados.id}
      </Sh1>
      <Stable>
        <thead>
          <tr>
            <Sth colSpan="3">Status</Sth>
          </tr>
        </thead>

        <tbody>
          <tr>
            <Std>{hp.value}</Std>
            <Std>{hp.alias}</Std>
            <Std>{(hp.value / 2).toFixed()}</Std>
          </tr>
          <tr>
            <Std>{atk.value}</Std>
            <Std>{atk.alias}</Std>
            <Std>{ConvertStatus(atk.value, atk.alias)}</Std>
          </tr>
          <tr>
            <Std>{def.value}</Std>
            <Std>{def.alias}</Std>
            <Std>{ConvertStatus(def.value, def.alias)}</Std>
          </tr>
          <tr>
            <Std>{satk.value}</Std>
            <Std>{satk.alias}</Std>
            <Std>{ConvertStatus(satk.value, satk.alias)}</Std>
          </tr>
          <tr>
            <Std>{sdef.value}</Std>
            <Std>{sdef.alias}</Std>
            <Std>{ConvertStatus(sdef.value, sdef.alias)}</Std>
          </tr>
          <tr>
            <Std>{spd.value}</Std>
            <Std>{spd.alias}</Std>
            <Std>{ConvertStatus(spd.value, spd.alias)}</Std>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <Sth colSpan="3">Total: {totalAtributos}</Sth>
          </tr>
        </tfoot>
      </Stable>

      <Stable>
        <thead>
          <tr>
            <Sth colSpan="3">Habilidades</Sth>
          </tr>
        </thead>
        <tbody>
          <tr>
            <Std>
              <Sul>
                {pokeAbility.map((hab) => (
                  <Sli key={hab.ability.name}>
                    <Text>{hab.ability.name}</Text>
                  </Sli>
                ))}
              </Sul>
            </Std>
          </tr>
        </tbody>
      </Stable>
    </CardContainerBase>
  );
};
