import { CardContainer } from "../ui/CardContainer";
import { Sp } from "../ui/Sp";

export const CardPokemonCalc = (props) => {
  let hp = props.dados.stats[0].base_stat;
  let atk = props.dados.stats[1].base_stat;
  let def = props.dados.stats[2].base_stat;
  let satk = props.dados.stats[3].base_stat;
  let sdef = props.dados.stats[4].base_stat;
  let spd = props.dados.stats[5].base_stat;

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
      <Sp>Status Convertido</Sp>
      <Sp>
        {props.dados.stats[0].stat.name}: {convertStatus(hp)}
      </Sp>
      <Sp>
        {props.dados.stats[1].stat.name}: {convertStatus(atk)}
      </Sp>
      <Sp>
        {props.dados.stats[2].stat.name}: {convertStatus(def)}
      </Sp>
      <Sp>
        {props.dados.stats[3].stat.name}: {convertStatus(satk)}
      </Sp>
      <Sp>
        {props.dados.stats[4].stat.name}: {convertStatus(sdef)}
      </Sp>
      <Sp>
        {props.dados.stats[5].stat.name}: {convertStatus(spd)}
      </Sp>
    </CardContainer>
  );
};
