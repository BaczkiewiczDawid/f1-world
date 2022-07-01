import { PostDetails, Article, ImageContainer, CategoryTitle } from "components/Dashboard/Post.style";

const Post = ({ src, category, description }: PostDetails) => {
  return (
    <Article>
      <ImageContainer>
        <img src={src} alt="" />
      </ImageContainer>
      <CategoryTitle>{category}</CategoryTitle>
      <p>{description}</p>
    </Article>
  );
};

export default Post;
