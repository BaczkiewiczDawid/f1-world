import Post from "components/Dashboard/Post";
import { Section } from "components/Dashboard/PostsList.style";
import Posts from "data/Posts";

const PostsList = () => {
  return (
    <Section>
      {Posts.map((post) => (
        <Post
          src={post.src}
          category={post.category}
          description={post.description}
        />
      ))}
    </Section>
  );
};

export default PostsList;
