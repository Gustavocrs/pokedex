import styled from "styled-components";

const SwitchButton = styled.button`
  width: 100%;
  height: 50px;
  position: fixed;
  bottom: 0;
  background: transparent;
  padding: 5px;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  opacity: 60%;
`;

export const Button = ({ onClick, children }) => {
  return <SwitchButton onClick={onClick}>{children}</SwitchButton>;
};
