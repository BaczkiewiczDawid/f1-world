import Post from "components/Dashboard/Post";
import { Section } from "components/Dashboard/PostsList.style";
import Posts from "data/Posts";

const PostsList = () => {
  return (
    <Section>
      {Posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          src={post.src}
          category={post.category}
          title={post.title}
        />
      ))}
    </Section>
  );
};

export default PostsList;
