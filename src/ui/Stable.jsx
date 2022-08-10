import styled from "styled-components";
import { corAzulClaro, corCoralClaro } from "./variaveis";

export const Stable = styled.table`
  width: auto;
  min-width: 300px;
  margin-top: 20px;
`;
export const Sth = styled.th`
  height: 40px;
  text-transform: uppercase;
`;
export const Std = styled.td`
  width: 100px;
  text-align: center;
  &:nth-child(1) {
    width: 100px;
    min-width: 100px;
    background-color: ${corAzulClaro};
  }
  &:nth-child(2) {
    font-weight: bold;
    width: 100px;
    min-width: 100px;
    background-color: ${corCoralClaro};
    text-transform: uppercase;
  }
  &:nth-child(3) {
    width: 100px;
    min-width: 100px;
    background-color: ${corAzulClaro};
  }
`;
