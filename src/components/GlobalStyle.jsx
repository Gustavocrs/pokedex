import { createGlobalStyle } from "styled-components";
import { fontePadrao, tamPadraoTexto } from "../ui/variaveis";

export const GlobalStyle = createGlobalStyle`

*{
 margin: 0;
 padding: 0;
 box-sizing: border-box;
 font-size: ${tamPadraoTexto};
 font-family: ${fontePadrao};
}`;
