import styled from "styled-components";


export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  width: 90vw;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
    width: 100vw;
  }

  @media screen and (min-width: 1080px) {
    width: 75vw;
    margin: 0;
  }
`;