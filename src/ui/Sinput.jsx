import styled from "styled-components";
import { corBranco } from "../ui/variaveis";
export const SInput = styled.input`
  position: fixed;
  top: 10px;
  padding: 10px;
  width: 100%;
  height: 40px;
  color: ${corBranco};
  outline: none;
  text-align: center;
  background-color: black;
  opacity: 50%;
  &:focus {
    color: ${corBranco};
    opacity: 100%;
    transition: 1500ms;
  }
  &::placeholder {
    color: ${corBranco};
    opacity: 60%;
    text-transform: uppercase;
  }

  @media screen and (max-width: 620px) {
    width: 100%;
    border-radius: 0;
    border: none;
    &::placeholder {
      font-size: 0.9rem;
    }
  }
`;
