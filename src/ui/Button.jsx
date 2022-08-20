import styled from "styled-components";

const SwitchButton = styled.button`
  width: 100%;
  height: 50px;
  position: fixed;
  bottom: 0;
  background: transparent;
  padding: 5px;
  margin-bottom: 15px;
  border: none;
  cursor: pointer;
  opacity: 60%;
  span {
    color: white;
    background-color: black;
    font-size: 1.5rem;
    padding: 10px;
    border-radius: 15px;
  }
`;

export const Button = ({ onClick, children }) => {
  return (
    <SwitchButton onClick={onClick}>
      <span>{children}</span>
    </SwitchButton>
  );
};
