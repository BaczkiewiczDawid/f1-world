import styled from "styled-components";

export const Navigation = styled.nav`
  width: 100vw;
  height: 3rem;
  background-color: ${({ theme }) => theme.colors.red};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;


export const LinksWrapper = styled.div`
  margin-right: 10rem;
`;