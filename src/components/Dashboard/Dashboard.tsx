import styled from "styled-components";

const ImageContainer = styled.div`
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

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.black};
  margin-top: 2rem;

  @media screen and (min-width: 768px) {
    margin-left: 2rem;
  }
`;

const Section = styled.section`
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

const Article = styled.article`
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

const CategoryTitle = styled.h2`
  color: ${({ theme }) => theme.colors.red};
  font-size: 0.7rem;
  font-weight: 500;
  margin-top: 1rem;

  @media screen and (min-width: 768px) {
    margin-top: 0;
  }
`;

const Dashboard = () => {
  return (
    <>
      <Title>Latest news</Title>
      <Section>
        <Article>
          <ImageContainer>
            <img
              src="https://images.unsplash.com/photo-1505739776745-f1a6bf1f5246?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt=""
            />
          </ImageContainer>
          <CategoryTitle>NEWS</CategoryTitle>
          <p>
            AlphaTauri say Tsunoda has taken ‘a big step forward’ compared to
            his rookie season
          </p>
        </Article>
        <Article>
          <ImageContainer>
            <img
              src="https://images.unsplash.com/photo-1505739776745-f1a6bf1f5246?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt=""
            />
          </ImageContainer>
          <CategoryTitle>NEWS</CategoryTitle>
          <p>
            AlphaTauri say Tsunoda has taken ‘a big step forward’ compared to
            his rookie season
          </p>
        </Article>
        <Article>
          <ImageContainer>
            <img
              src="https://images.unsplash.com/photo-1505739776745-f1a6bf1f5246?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt=""
            />
          </ImageContainer>
          <CategoryTitle>NEWS</CategoryTitle>
          <p>
            AlphaTauri say Tsunoda has taken ‘a big step forward’ compared to
            his rookie season
          </p>
        </Article>
        <Article>
          <ImageContainer>
            <img
              src="https://images.unsplash.com/photo-1505739776745-f1a6bf1f5246?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt=""
            />
          </ImageContainer>
          <CategoryTitle>NEWS</CategoryTitle>
          <p>
            AlphaTauri say Tsunoda has taken ‘a big step forward’ compared to
            his rookie season
          </p>
        </Article>
        <Article>
          <ImageContainer>
            <img
              src="https://images.unsplash.com/photo-1505739776745-f1a6bf1f5246?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt=""
            />
          </ImageContainer>
          <CategoryTitle>NEWS</CategoryTitle>
          <p>
            AlphaTauri say Tsunoda has taken ‘a big step forward’ compared to
            his rookie season
          </p>
        </Article>
      </Section>
    </>
  );
};

export default Dashboard;
