import { useParams } from "react-router-dom";
import Posts from "data/Posts";
import CategoryTitle from "components/Dashboard/CategoryTitle";
import styled from "styled-components";

const StyledArticle = styled.article`
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

const Header = styled.header`
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

const Article = () => {
  const articleID: string | number = useParams().id!;

  const post = Posts.find((post) => post.id === parseInt(articleID))!;
  const cuttedText = post.content.match(/.{200,2000}/g);

  return (
    <StyledArticle>
      <Header>
        <img src={post.src} alt="" />
      </Header>
      <CategoryTitle article={false} category={post.category} />
      <h1>{post.title}</h1>
      {cuttedText?.map((text) => (
        <p>{text}</p>
      ))}
    </StyledArticle>
  );
};

export default Article;
