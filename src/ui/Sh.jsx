import styled from "styled-components";

import {
  corBranco,
  tamPadraoTitulo,
  tamMedioTitulo,
  corPreto,
} from "./variaveis";

const Sh = styled.h1`
  margin-top: 15vh;
  text-align: center;
  &::first-letter {
    text-transform: uppercase;
  }
`;

export const Sh1 = styled(Sh)`
  filter: drop-shadow(0 0 10px ${corPreto});
  color: ${corBranco};
  font-size: ${tamPadraoTitulo};
`;

export const Sh2 = styled(Sh)`
filter: drop-shadow(0 0 10px ${corBranco});
  color: ${corPreto};
  font-size: ${tamMedioTitulo};
`;
