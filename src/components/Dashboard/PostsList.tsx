import styled from "styled-components";
import Post from "components/Dashboard/Post";

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

const PostsList = () => {
  return (
    <Section>
      <Post
        src="https://images.unsplash.com/photo-1505739776745-f1a6bf1f5246?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        category="NEWS"
        description="AlphaTauri say Tsunoda has taken ‘a big step forward’ compared to his
        rookie season"
      />
      <Post
        src="https://images.unsplash.com/photo-1505739776745-f1a6bf1f5246?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        category="NEWS"
        description="AlphaTauri say Tsunoda has taken ‘a big step forward’ compared to his
        rookie season"
      />
      <Post
        src="https://images.unsplash.com/photo-1505739776745-f1a6bf1f5246?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        category="NEWS"
        description="AlphaTauri say Tsunoda has taken ‘a big step forward’ compared to his
        rookie season"
      />
      <Post
        src="https://images.unsplash.com/photo-1505739776745-f1a6bf1f5246?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        category="NEWS"
        description="AlphaTauri say Tsunoda has taken ‘a big step forward’ compared to his
        rookie season"
      />
      <Post
        src="https://images.unsplash.com/photo-1505739776745-f1a6bf1f5246?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        category="NEWS"
        description="AlphaTauri say Tsunoda has taken ‘a big step forward’ compared to his
        rookie season"
      />
      {/* <Article>
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
        </Article> */}
    </Section>
  );
};

export default PostsList;
