import styled from "styled-components";
import { CardContainer } from "../ui/CardContainer";
import { Sp } from "../ui/Sp";
import { corFundo } from "../ui/variaveis";

const Pokeball = styled.div`
  height: 100vh;
  width: 100%;
  background-color: ${corFundo};
  background-image: url("https://bk.ibxk.com.br/2016/8/programas/15344904184914733.png");
  background-size: 100%;
  background-position: 30%;
  background-repeat: no-repeat;
`;

export const CardInicio = () => {
  return (
    <CardContainer>
      <Pokeball>
        <Sp>
          Digite o nome ou id de um pokemon e pressione <strong>Enter</strong>
          ...
        </Sp>
      </Pokeball>
    </CardContainer>
  );
};
