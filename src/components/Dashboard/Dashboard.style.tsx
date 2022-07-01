import styled from "styled-components";

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.black};
  margin-top: 2rem;

  @media screen and (min-width: 768px) {
    margin-left: 2rem;
  }
`;
