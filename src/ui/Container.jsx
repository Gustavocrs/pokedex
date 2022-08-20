import styled from "styled-components";
import { corBranco } from "../ui/variaveis";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: ${corBranco};
  overflow: hidden;
  @media screen and (max-width: 620px) {
    flex-direction: column;
    width: 100%;
    height: auto;
  }
`;
