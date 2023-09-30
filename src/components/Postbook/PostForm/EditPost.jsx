import { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { PostsContext } from '../../../contexts/PostsContext';
import { usePostData } from '../../../hooks/usePostData';
import { PostForm } from './PostForm';

export const EditPost = ({
  match: {
    params: { id },
  },
}) => {
  const history = useHistory();
  const { posts, loading, error, getPostById, reloadPosts } =
    useContext(PostsContext);
  const { postData } = usePostData(`${process.env.REACT_APP_BASE_URL}/posts`);

  const [post, setPost] = useState({ id: 0, created: '', content: '' });

  const onFormSubmit = async (data) => {
    await postData(data);
    history.push(`/posts/${id}`);
    reloadPosts();
  };

  const onBack = () => {
    history.push(`/posts/${id}`);
  };

  useEffect(() => {
    const post = getPostById(id);
    setPost({ ...post });
  }, [posts]);

  return loading ? (
    'Loading...'
  ) : error ? (
    'Error('
  ) : (
    <div className="edit-post">
      <button className="back-btn" onClick={onBack}>
        ←
      </button>
      <PostForm
        data={post}
        onFormSubmit={onFormSubmit}
        submitBtnText="Отправить"
      />
    </div>
  );
};
