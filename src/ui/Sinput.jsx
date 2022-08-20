import styled from "styled-components";
import { corBranco } from "../ui/variaveis";
export const SInput = styled.input`
  position: fixed;
  top: 10px;
  padding: 10px;
  width: 350px;
  height: 50px;
  border-radius: 20px;
  color: ${corBranco};
  outline: none;
  text-align: center;
  background-color: black;
  opacity: 50%;
  &::placeholder {
    color: ${corBranco};
    opacity: 60%;
    text-transform: uppercase;
  }

  @media screen and (max-width: 620px) {
    width: 100%;
    border-radius: 0;
    border: none
  }
`;
