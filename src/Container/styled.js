import styled from "styled-components";

export const StyledContainer = styled.main`
  max-width: 750px;
  margin: 0 auto;
  margin-top: 60px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    margin-left: 10px;
    margin-right: 20px;
  }
`;
