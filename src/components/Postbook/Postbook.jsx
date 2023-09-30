import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import { PostsContext } from '../../contexts/PostsContext';
import { LoadingSpinner } from './LoadingSpinner';

import { EditPost } from './PostForm/EditPost';
import { NewPost } from './PostForm/NewPost';
import { PostList } from './PostList';
import { ViewPost } from './ViewPost';

export const Postbook = ({ match: { url } }) => {
  const history = useHistory();
  const { posts, loading } = useContext(PostsContext);

  const onAddBtnClick = () => {
    history.push('/posts/new');
  };

  return (
    <Router>
      <Switch>
        <Route path={`${url}/new`} component={NewPost} />
        <Route path={`${url}/:id/edit`} component={EditPost} />
        <Route path={`${url}/:id`} component={ViewPost} />
        <Route path={url}>
          <div className="postbook_container">
            {loading ? (
              <LoadingSpinner radius="20" width="5" color="rgb(210, 70, 75)" />
            ) : (
              <>
                <button className="add-post-btn" onClick={onAddBtnClick}>
                  Добавить новый пост
                </button>
                <PostList posts={posts} />
              </>
            )}
          </div>
        </Route>
      </Switch>
    </Router>
  );
};
