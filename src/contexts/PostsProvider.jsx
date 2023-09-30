import { useJsonFetch } from '../hooks/useJsonFetch';
import { PostsContext } from './PostsContext';

export default function PostsProvider(props) {
  const activePost = null;

  let {
    data: posts,
    loading,
    error,
    resendRequest: reloadPosts,
  } = useJsonFetch(`${process.env.REACT_APP_BASE_URL}/posts`);

  const getPostById = (id) => {
    return posts.find((post) => post.id == id);
  };

  const deletePost = (id) => {
    posts = posts.filter((post) => post.id !== id);
  };

  return (
    <PostsContext.Provider
      value={{
        posts,
        activePost,
        loading,
        getPostById,
        deletePost,
        reloadPosts,
      }}
    >
      {props.children}
    </PostsContext.Provider>
  );
}
