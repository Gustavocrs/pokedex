import styled from "styled-components";
import { fontePadrao, tamPadraoTexto, corBranco, corPreto } from "./variaveis";

export const Sp = styled.p`
  line-height: 30px;
  font-size: ${tamPadraoTexto};
  font-family: ${fontePadrao};
  color: ${corBranco};
  filter: drop-shadow(0 0 10px ${corPreto});
  text-transform: uppercase;
  margin-bottom: 7vh;

  &:nth-child(1) {
    font-weight: bold;
    margin-bottom: 20px;
    text-transform: uppercase;
  }
  @media screen and (max-width: 620px) {
    text-align: center
  }
`;
