import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import { Postbook } from './components/Postbook/Postbook';
import { Menu } from './components/Menu/Menu';
import {
  HomePage,
  DriftPage,
  TimeAttackPage,
  ForzaPage,
} from './components/Menu/Page';

import PostsProvider from './contexts/PostsProvider';

import './styles/app.css';

export const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route
            path="/posts"
            render={(props) => (
              // поскольку PostsProvider нужен только для Postbook (а я всё делаю в одном репозитории), он находится тут
              <PostsProvider>
                <Postbook {...props} />
              </PostsProvider>
            )}
          />

          {/* Route без атрибута path, т. к. здесь 4 разных варианта, перед всеми нужен компонент Menu */}
          <Route>
            <Menu />
            <div className="page">
              <Route path="/" exact component={HomePage} />
              <Route path="/drift" component={DriftPage} />
              <Route path="/timeattack" component={TimeAttackPage} />
              <Route path="/forza" component={ForzaPage} />
            </div>
          </Route>
        </Switch>
      </Router>
    </>
  );
};
