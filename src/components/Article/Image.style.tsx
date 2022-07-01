import styled from "styled-components";

export const Header = styled.header`
  width: 90vw;
  height: 30vh;

  img {
    object-fit: cover;
    width: 90vw;
    height: 30vh;
  }

  @media screen and (min-width: 1080px) {
    width: 60vw;
    height: 40vh;

    img {
      width: 60vw;
      height: 40vh;
    }
  }
`;