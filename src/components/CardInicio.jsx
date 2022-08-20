import styled from "styled-components";
import { CardContainer } from "../ui/CardContainer";
import { Sp } from "../ui/Sp";
import { corBranco } from "../ui/variaveis";

const PokeballTop = styled.div`
  height: 50vh;
  width: 100%;
  background-color: red;
`;

const PokeballBottom = styled.div`
  height: 50vh;
  width: 100%;
  background-color: ${corBranco};
`;

export const CardInicio = () => {
  return (
    <CardContainer>
      <PokeballTop></PokeballTop>

      <PokeballBottom>
        <Sp>
          Digite o nome ou id de um pokemon e pressione <strong>Enter</strong>
          ...
        </Sp>
      </PokeballBottom>
    </CardContainer>
  );
};
