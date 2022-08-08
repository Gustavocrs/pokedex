import styled from "styled-components";
import { corBranco } from "../ui/variaveis";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: ${corBranco};
  overflow: hidden;

  /* @media screen and (max-width: 620px) {
    width: 100%;
    height: 100vh;
  } */
`;
