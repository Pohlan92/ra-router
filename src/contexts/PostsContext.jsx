import { createContext } from 'react';
export const PostsContext = createContext({
  posts: [],
  error: null,
  loading: false,
});
