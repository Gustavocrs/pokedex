import { CardContainer } from "../ui/CardContainer";
import { Stable, Sth, Std } from "../ui/Stable";
import { ConvertStatus } from "../ui/ConvertStatus";

export const CardPokemonBase = (props) => {
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
  let habilidadeUm = props.dados.abilities[0].ability.name;
  let habilidadeDois;

  if (props.dados.abilities[1]) {
    habilidadeDois = props.dados.abilities[1].ability.name;
  } else {
    habilidadeDois = "";
  }

  return (
    <CardContainer>
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
              {habilidadeDois
                ? habilidadeUm + " / " + habilidadeDois
                : habilidadeUm}
            </Std>
          </tr>
        </tbody>
      </Stable>
    </CardContainer>
  );
};
