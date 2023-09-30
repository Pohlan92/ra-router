import { PostItem } from './PostItem';

export const PostList = ({ posts }) => {
  return (
    <ul className="post_list">
      {posts.map((post) => (
        <PostItem {...post} key={post.id} />
      ))}
    </ul>
  );
};
