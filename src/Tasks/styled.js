import styled, { css } from "styled-components";

export const List = styled.ul`
  list-style-type: none;
  padding-left: 0;
  margin: 20px;
  min-height: 15px;
`;

export const Item = styled.li`
  padding: 15px;
  border-bottom: 1px solid #ddd;
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 20px;
  align-items: center;

  ${({ hidden }) =>
    hidden &&
    css`
      display: none;
    `}
`;

export const Content = styled.span`
  ${({ done }) =>
    done &&
    css`
      text-decoration: line-through;
    `}
`;

export const Button = styled.button`
  height: 25px;
  width: 25px;
  color: ${({ theme }) => theme.colors.white};
  border: none;

  &:active {
    border: 2px solid ${({ theme }) => theme.colors.black};
  }

  ${({ done }) =>
    done &&
    css`
      background-color: ${({ theme }) => theme.colors.green};
      transition: 2s;

      &:hover {
        background-color: ${({ theme }) => theme.colors.lightGreen};
      }
    `};

  ${({ remove }) =>
    remove &&
    css`
      background: ${({ theme }) => theme.colors.red};
      transition: 2s;

      &:hover {
        background: ${({ theme }) => theme.colors.lightRed};
      }
    `};
`;
