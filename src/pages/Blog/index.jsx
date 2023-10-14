// Redux
import { useSelector } from 'react-redux';
import { getArticles } from '../../redux/selectors';
// Components
import Article from '../../components/Article';
import InfinitePagination from '../../components/InfinitePaginationScroll';
// Styles
import styles from './Blog.module.scss';

const Blog = () => {
  const blogs = useSelector(getArticles);

  return (
    <InfinitePagination>
      <div className={styles.articlesContainer}>
        {blogs.data.map((blog, index) => (
          <Article {...blog} key={`article-${index}`} />
        ))}
      </div>
    </InfinitePagination>
  );
};

export default Blog;
