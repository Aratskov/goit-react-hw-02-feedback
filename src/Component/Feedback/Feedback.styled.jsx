import styled from "styled-components";

export const Button = styled.button`
  min-width: 130px;
  height: 30px;
  border-radius: 25px;
  cursor: pointer;

  & + & {
    margin-left: 10px;
  }

  &:active {
    background-color: blue;
  }
`;
