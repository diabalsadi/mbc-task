// Redux
import { useSelector } from 'react-redux';
import { getTheme } from '../../redux/selectors';
// Styles
import cx from 'classnames';
import styles from './Article.module.scss';
// Assets
import fallbackSrc from '../../assets/images/MBC_Group.png';

const Article = ({ author, title, description, urlToImage }) => {
  const theme = useSelector(getTheme);

  return (
    <div className={cx(styles.container, styles[theme])}>
      <img
        width={200}
        height={200}
        src={urlToImage}
        alt={title}
        className={cx(styles.image, styles[theme])}
        onError={(e) => {
          e.target.src = fallbackSrc;
        }}
      />
      <div className={styles.info}>
        <h1 className={styles.title}>{title}</h1>
        {author && <span className={styles.author}>Author: {author}</span>}
        {description && <p>{description}</p>}
      </div>
    </div>
  );
};

export default Article;
