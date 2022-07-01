import { useParams } from "react-router-dom";
import Posts from "data/Posts";
import CategoryTitle from "components/Dashboard/CategoryTitle";
import Image from "components/Article/Image";
import { StyledArticle } from "components/Article/Article.style";

const Article = () => {
  const articleID: string | number = useParams().id!;

  const post = Posts.find((post) => post.id === parseInt(articleID))!;
  const cuttedText = post.content.match(/.{200,2000}/g);

  return (
    <StyledArticle>
      <Image src={post.src} alt={post.alt} />
      <CategoryTitle article={false} category={post.category} />
      <h1>{post.title}</h1>
      {cuttedText?.map((text) => (
        <p key={Math.random()}>{text}</p>
      ))}
    </StyledArticle>
  );
};

export default Article;
