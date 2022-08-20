import styled from "styled-components";
import { corAzulClaro, corCoralClaro } from "./variaveis";

export const Sul = styled.ul``;

export const Sli = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  list-style: none;
  font-size: 1rem;

  &:nth-child(odd) {
    background-color: ${corAzulClaro};
  }
  &:nth-child(even) {
    background-color: ${corCoralClaro};
  }
`;
