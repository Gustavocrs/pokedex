import { CardContainer } from "../ui/CardContainer";
import { Pokedex, Pokeball } from "../ui/Simg";

export const CardInicio = () => {
  return (
    <CardContainer>
      <Pokedex />
      <Pokeball
        src={"https://bk.ibxk.com.br/2016/8/programas/15344904184914733.png"}
      />
    </CardContainer>
  );
};
