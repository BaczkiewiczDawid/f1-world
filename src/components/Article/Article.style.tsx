import styled from "styled-components";

export const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 90vw;
  margin: 2rem auto;

  p {
    color: ${({ theme }) => theme.colors.black};
    font-weight: 300;
    letter-spacing: 1px;
    line-height: 1.3rem;
  }

  @media screen and (min-width: 1080px) {
    width: 60vw;
    justify-content: flex-start;
    margin: 2rem;
  }
`;
