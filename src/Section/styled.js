import styled from "styled-components";

export const StyledSection = styled.section`
  border: 1px solid #ddd;
  background-color: white;
  margin: 10px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

export const Header = styled.header`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
  align-items: center;
  grid-gap: 10px;
  border-bottom: 1.5px solid #ddd;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    padding-bottom: 25px;
    gap: 5px;
  }
`;

export const Title = styled.h2`
  font-size: 20px;
  font-weight: 800;
  padding-left: 15px;
  font-family: Lato, "sans-serif";
`;
