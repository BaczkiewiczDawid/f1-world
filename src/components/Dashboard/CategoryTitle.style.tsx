import styled from "styled-components";

export type Category = {
  category: string,
  article: boolean,
}

export const Title = styled.h2<Category>`
  color: ${({ theme }) => theme.colors.red};
  font-size: 0.7rem;
  font-weight: 500;
  margin-top: 1rem;

  @media screen and (min-width: 768px) {
    margin-top: ${(props) => (props.article ? "0rem" : '2rem')};
  }
`;
