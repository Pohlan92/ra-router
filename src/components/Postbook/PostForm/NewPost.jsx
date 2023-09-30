import { useContext } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { PostsContext } from '../../../contexts/PostsContext';
import { usePostData } from '../../../hooks/usePostData';
import { PostForm } from './PostForm';

export const NewPost = () => {
  const history = useHistory();
  const { reloadPosts } = useContext(PostsContext);
  const { data, loading, error, postData } = usePostData(
    `${process.env.REACT_APP_BASE_URL}/posts`,
  );

  const onFormSubmit = async (data) => {
    await postData(data);
    history.push(`/posts`);
    reloadPosts();
  };

  return loading ? (
    'Loading...'
  ) : (
    <div className="add-new-post">
      <PostForm onFormSubmit={onFormSubmit} submitBtnText="Отправить" />
    </div>
  );
};
