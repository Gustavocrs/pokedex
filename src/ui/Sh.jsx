import styled from "styled-components";

import {
  corBranco,
  tamPadraoTitulo,
  tamMedioTitulo,
  corPreto,
} from "./variaveis";

const Sh = styled.h1`
  margin-top: 8vh;
  text-align: center;
  &::first-letter {
    text-transform: uppercase;
  }
`;

export const Sh1 = styled(Sh)`
  filter: drop-shadow(0 0 10px ${corPreto});
  color: ${corBranco};
  font-size: ${tamPadraoTitulo};
  margin-bottom: 10px;
`;

export const Sh2 = styled(Sh)`
  filter: drop-shadow(0 0 10px ${corPreto});
  color: ${corPreto};
  font-size: ${tamMedioTitulo};

`;
