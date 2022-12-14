import styled from "styled-components";

const SwitchButton = styled.button`
  width: 100%;
  height: 40px;
  position: fixed;
  bottom: 0;
  background: transparent;
  padding: 5px;
  margin-bottom: 10px;
  border: none;
  cursor: pointer;
  opacity: 60%;
  background-color: black;
  span {
    color: white;
    font-size: 1rem;
    padding: 10px;
    border-radius: 5px;
    opacity: 60%;
    text-transform: uppercase;
  }
  &:hover {
    opacity: 80%;
    transition: 1500ms;
    span {
      opacity: 100%;
      transition: 1500ms;
    }
  }
`;

export const Button = ({ onClick, children }) => {
  return (
    <SwitchButton onClick={onClick}>
      <span>{children}</span>
    </SwitchButton>
  );
};
