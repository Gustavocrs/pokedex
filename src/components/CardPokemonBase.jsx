import { CardContainer } from "../ui/CardContainer";
import { Sp } from "../ui/Sp";

export const CardPokemonBase = (props) => {
  return (
    <CardContainer>
      <Sp>Status base</Sp>
      <Sp>
        {props.dados.stats[0].stat.name}: {props.dados.stats[0].base_stat}
      </Sp>
      <Sp>
        {props.dados.stats[1].stat.name}: {props.dados.stats[1].base_stat}
      </Sp>
      <Sp>
        {props.dados.stats[2].stat.name}: {props.dados.stats[2].base_stat}
      </Sp>
      <Sp>
        {props.dados.stats[3].stat.name}: {props.dados.stats[3].base_stat}
      </Sp>
      <Sp>
        {props.dados.stats[4].stat.name}: {props.dados.stats[4].base_stat}
      </Sp>
      <Sp>
        {props.dados.stats[5].stat.name}: {props.dados.stats[5].base_stat}
      </Sp>
    </CardContainer>
  );
};
