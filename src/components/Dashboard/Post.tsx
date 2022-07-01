import {
  PostDetails,
  Article,
  ImageContainer,
} from "components/Dashboard/Post.style";
import { StyledLink } from "components/Dashboard/PostsList.style";
import CategoryTitle from "components/Dashboard/CategoryTitle";

const Post = ({ src, category, title, id }: PostDetails) => {
  return (
    <Article>
      <StyledLink to={`/post/${id}`} >
        <ImageContainer>
          <img src={src} alt="" />
        </ImageContainer>
        <CategoryTitle article={true} category={category} />
        <p>{title}</p>
      </StyledLink>
    </Article>
  );
};

export default Post;
