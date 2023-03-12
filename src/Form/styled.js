import styled from "styled-components";

export const StyledForm = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 20px;
  padding: 15px;
  background-color: ${({ theme }) => theme.colors.white};
  align-content: center;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    grid-template-columns: 1fr;
    grid-gap: 10px;
  } ;
`;

export const Input = styled.input`
  padding-left: 10px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    height: 35px;
    margin-left: 2px;
    margin-right: 2px;
  } ;
`;

export const Button = styled.button`
  background: ${({ theme }) => theme.colors.teal};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 2px;
  padding: 8px;
  transition: 1s cubic-bezier(0.68, -0.55, 0.27, 1.55);

  &:hover {
    filter: brightness(120%);
    transform: scale(1.1);
  }
`;
