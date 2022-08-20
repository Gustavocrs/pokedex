import styled from "styled-components";

import {
  corBranco,
  tamPadraoTitulo,
  tamMedioTitulo,
  corPreto,
} from "./variaveis";

const Sh = styled.h1`
  text-align: center;
  margin: 10px 0;
  filter: drop-shadow(0 0 10px ${corPreto});
  &::first-letter {
    text-transform: uppercase;
  }
`;

export const Sh1 = styled(Sh)`
  color: ${corBranco};
  font-size: ${tamPadraoTitulo};
`;

export const Sh2 = styled(Sh)`
  color: ${corPreto};
  font-size: ${tamMedioTitulo};
`;
