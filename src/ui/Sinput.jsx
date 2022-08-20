import styled from "styled-components";
import { corBranco } from "../ui/variaveis";
export const SInput = styled.input`
  position: fixed;
  top: 15px;
  padding: 10px;
  width: 350px;
  height: 50px;
  border-radius: 20px;
  border: 2px solid ${corBranco};
  color: ${corBranco};
  outline: none;
  text-align: center;
  background-color: black;
  opacity: 60%;
  &::placeholder {
    color: ${corBranco};
    opacity: 60%;
    text-transform: uppercase;
  }
`;
