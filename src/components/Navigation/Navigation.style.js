import styled from "styled-components";

export const Navigation = styled.nav`
  width: 100vw;
  height: 3rem;
  background-color: ${({ theme }) => theme.colors.red};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;



export const HamburgerWrapper = styled.div`
  margin-right: 2rem;
  z-index: 9999;
  position: relative;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;