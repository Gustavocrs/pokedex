import styled from "styled-components";
import { CardContainer } from "../ui/CardContainer";

export const CardPokemonMoves = (props) => {
  let pokeMoves = props.dados.moves;
  return (
    <CardContainer>
      <p>Moves</p>
    </CardContainer>
  );
};
