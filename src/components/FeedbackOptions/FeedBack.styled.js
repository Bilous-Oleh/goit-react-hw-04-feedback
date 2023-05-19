import styled from 'styled-components';

export const Button = styled.button`
  padding: 12px 24px;
  border-radius: 4px;
  box-shadow: 4px 4px 4px rgb(0 0 0 / 15%);
  text-transform: capitalize;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  &:not(:last-child) {
    margin-right: 10px;
  }
  :hover,
  :focus {
    background-color: orange;
    color: white;
    transition: all 0.2s;
  }
`;
