import { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { PostsContext } from '../../contexts/PostsContext';
import { useDeleteFetch } from '../../hooks/useDeleteFetch';

import { Button } from './Button';
import { PostDate } from './PostDate';

export const ViewPost = ({
  match: {
    params: { id },
  },
}) => {
  const history = useHistory();
  const { posts, getPostById, loading, error, deletePost, reloadPosts } =
    useContext(PostsContext);
  const { requestDelete } = useDeleteFetch(
    `${process.env.REACT_APP_BASE_URL}/posts/${id}`,
  );

  const [post, setPost] = useState({ id: 0, created: '', content: '' });

  const onEdit = () => {
    history.push(`/posts/${id}/edit`);
  };

  const onDelete = async () => {
    try {
      await requestDelete(id);
      history.push('/posts');
      reloadPosts();
    } catch {}
  };

  const onBack = () => {
    history.push('/posts');
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
    <div className="post-view">
      <button className="back-btn" onClick={onBack}>
        ←
      </button>
      <div className="post_container">
        <header className="post_header">
          <h3 className="post_author">Курочка Петухова</h3>
          <PostDate date={post.created} />
        </header>
        <div className="post_content">{post.content}</div>
        <div className="post_controls">
          <Button action="edit" id={id} onClick={onEdit}>
            Изменить
          </Button>
          <Button action="delete" id={id} onClick={onDelete}>
            Удалить
          </Button>
        </div>
      </div>
    </div>
  );
};
