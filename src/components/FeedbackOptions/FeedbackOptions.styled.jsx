import styled from "styled-components";

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Button = styled.button`
  padding: 8px;
  margin-left: 4px;
  background-color: transparent;
  cursor: pointer;
  border-radius: 4px;

  transition: all 250ms cubic-bezier(0.215, 0.61, 0.355, 1);

  :active {
    background-color: skyblue;
  }
  :hover {
    background-color: skyblue;
  }
`;
