import { useHistory } from 'react-router';
import { PostDate } from './PostDate';

export const PostItem = ({ id, content, created }) => {
  const history = useHistory();

  const onClick = () => {
    history.push(`/posts/${id}`);
  };

  return (
    <div className="post_container" onClick={onClick}>
      <header className="post_header">
        <h3 className="post_author">Курочка Петухова</h3>
        <PostDate date={created} />
      </header>
      <div className="post_content">{content}</div>
    </div>
  );
};
