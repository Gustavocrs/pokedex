import styled from "styled-components";
import { fontePadrao, tamPadraoTexto } from "./variaveis";

export const Sp = styled.p`
  line-height: 30px;
  margin-left: 30px;
  font-size: ${tamPadraoTexto};
  font-family: ${fontePadrao};
  
  &::first-letter {
    text-transform: uppercase;
    font-weight: bold;
  }
  &&:nth-child(1) {
    font-weight: bold;
    margin-bottom: 20px;
    text-transform: uppercase;
  }
`;
