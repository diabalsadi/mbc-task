// React Core
import { useEffect } from 'react';
// Redux
import { useDispatch, useSelector } from 'react-redux';
import { getBlogs } from '../redux/slices/articles';
import { getArticles } from '../redux/selectors';

const useInitData = () => {
  const articles = useSelector(getArticles);

  const dispatcher = useDispatch();

  useEffect(() => {
    if (!articles.isLoading) dispatcher(getBlogs());
  }, []);
};

export default useInitData;
