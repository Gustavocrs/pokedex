import { CardContainer } from "../ui/CardContainer";
import { Stable, Sth, Std } from "../ui/Stable";

export const CardPokemonBase = (props) => {
  let hp = props.dados.stats[0].base_stat;
  let atk = props.dados.stats[1].base_stat;
  let def = props.dados.stats[2].base_stat;
  let satk = props.dados.stats[3].base_stat;
  let sdef = props.dados.stats[4].base_stat;
  let spd = props.dados.stats[5].base_stat;
  let totalAtributos = hp + atk + def + satk + sdef + spd;
  let habilidadeUm = props.dados.abilities[0].ability.name;
  let habilidadeDois;

  if (props.dados.abilities[1]) {
    habilidadeDois = props.dados.abilities[1].ability.name;
  } else {
    habilidadeDois = "";
  }

  const convertStatus = (status) => {
    if (status < 26) {
      status = 1;
    } else if (status < 47) {
      status = "D4";
    } else if (status < 67) {
      status = "D6";
    } else if (status < 87) {
      status = "D8";
    } else if (status < 107) {
      status = "D10";
    } else if (status < 120) {
      status = "D12";
    } else if (status < 130) {
      status = "D12+1";
    } else if (status < 140) {
      status = "D12+2";
    } else if (status < 150) {
      status = "D12+3";
    } else if (status < 160) {
      status = "D12+4";
    } else if (status < 170) {
      status = "D12+5";
    } else if (status < 180) {
      status = "D12+10";
    } else if (status < 190) {
      status = "D12+15";
    } else if (status < 200) {
      status = "D12+20";
    } else if (status < 210) {
      status = "D12+25";
    } else if (status < 220) {
      status = "D12+30";
    } else if (status < 230) {
      status = "D12+35";
    } else if (status < 240) {
      status = "D12+40";
    } else if (status < 250) {
      status = "D12+50";
    }

    return status;
  };

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
            <Std translate="no">{hp}</Std>
            <Std translate="no">HP</Std>
            <Std translate="no">{(hp / 2).toFixed()}</Std>
          </tr>
          <tr>
            <Std translate="no">{atk}</Std>
            <Std translate="no">ATK</Std>
            <Std translate="no">{convertStatus(atk)}</Std>
          </tr>
          <tr>
            <Std translate="no">{def}</Std>
            <Std translate="no">DEF</Std>
            <Std translate="no">{convertStatus(def)}</Std>
          </tr>
          <tr>
            <Std translate="no">{satk}</Std>
            <Std translate="no">SATK</Std>
            <Std translate="no">{convertStatus(satk)}</Std>
          </tr>
          <tr>
            <Std translate="no">{sdef}</Std>
            <Std translate="no">SDEF</Std>
            <Std translate="no">{convertStatus(sdef)}</Std>
          </tr>
          <tr>
            <Std translate="no">{spd}</Std>
            <Std translate="no">SPD</Std>
            <Std translate="no">{convertStatus(spd)}</Std>
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
