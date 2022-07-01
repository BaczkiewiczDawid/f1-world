import styled from "styled-components";

export type PostDetails = {
    src: string;
    category: string;
    title: string;
    id: number,
  };

export const ImageContainer = styled.div`
  width: 90vw;
  height: 30vh;

  img {
    object-fit: cover;
    width: 90vw;
    height: 30vh;
  }

  @media screen and (min-width: 768px) {
    img {
      width: 40vw;
      height: 25vh;
    }
  }

  @media screen and (min-width: 1080px) {
    img {
      width: 22vw;
      height: 25vh;
    }
  }
`;

export const Article = styled.article`
  cursor: pointer;

  &:nth-child(n + 1) {
    margin-top: 4rem;
  }

  @media screen and (min-width: 768px) {
    width: 40vw;
    margin-left: 2rem;
  }

  @media screen and (min-width: 1080px) {
    width: 22vw;
  }
`;