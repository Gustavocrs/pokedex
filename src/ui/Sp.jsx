import styled from "styled-components";
import { fontePadrao, tamPadraoTexto } from "./variaveis";

export const Sp = styled.p`
  line-height: 30px;
  text-align: center;
  font-size: ${tamPadraoTexto};
  font-family: ${fontePadrao};
  margin-top: 270px;

  &:nth-child(1) {
    font-weight: bold;
    margin-bottom: 20px;
    text-transform: uppercase;
  }
  @media screen and (max-width: 620px) {
    margin-top: 20vh;
    height: 80vh;
    text-align: center;
  }
`;
