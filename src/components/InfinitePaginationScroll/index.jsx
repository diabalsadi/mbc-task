// React core
import { useEffect } from 'react';
// Redux
import { getArticles } from '../../redux/selectors';
import { getBlogs } from '../../redux/slices/articles';
import { useDispatch, useSelector } from 'react-redux';
// Component
import PageTitle from '../PageTitle';

const InfinitePagination = ({ children }) => {
  const dispatcher = useDispatch();
  const blogs = useSelector(getArticles);

  const handleOnScroll = () => {
    if (
      !blogs.isLoading &&
      blogs.isMoreData &&
      window.innerHeight + Math.round(window.scrollY) >=
        document.body.offsetHeight
    ) {
      dispatcher(getBlogs());
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleOnScroll);
    return () => {
      window.removeEventListener('scroll', handleOnScroll);
    };
  }, []);

  return (
    <div>
      {children}
      {(blogs.isLoading || blogs.isError) && (
        <PageTitle
          title={
            blogs.isError
              ? 'Fetching error !!'
              : blogs.isMoreData
              ? 'Loading ....'
              : 'No more data'
          }
        />
      )}
    </div>
  );
};

export default InfinitePagination;
