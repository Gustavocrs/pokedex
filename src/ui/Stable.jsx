import styled from "styled-components";
import {corAzulClaro, corCoralClaro} from './variaveis'

export const Stable = styled.table`
  width: auto;
`;
export const Sth = styled.th`
  height: 40px;
  text-transform: uppercase;
`;
export const Std = styled.td`
  width: 100px;
  
  text-align: center;
  &:nth-child(1) {
    text-align: right;
    width: 100px;
    background-color: ${corAzulClaro};
  }
  &:nth-child(2) {
    font-weight: bold;
    width: 200px;
    background-color: ${corCoralClaro};
    ::first-letter {
      text-transform: uppercase;
    }
  }
  &:nth-child(3) {
    text-align: left;
    width: 100px;
    background-color: ${corAzulClaro};
  }
`;
