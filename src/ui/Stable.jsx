import styled from "styled-components";
import { corAzulClaro, corBranco, corCoralClaro } from "./variaveis";

export const Stable = styled.table`
  width: 90%;
  min-width: 250px;
  margin-top: 10px;
  margin-bottom: 20px;
  background-color: ${corBranco};
  border-radius: 5px;
  padding: 10px;
`;

export const Sth = styled.th`
  height: 30px;
  text-transform: uppercase;
`;

export const Std = styled.td`
  width: 100px;
  text-align: center;
  &:nth-child(1) {
    width: 50px;
    min-width: 50px;
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
    width: 50px;
    min-width: 50px;
    background-color: ${corAzulClaro};
  }
`;
