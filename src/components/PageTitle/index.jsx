// Styles
import cx from 'classnames';
import styles from './PageTitle.module.scss';

const PageTitle = ({ title, className, theme = 'default' }) => (
  <h1 className={cx(styles.title, styles[theme], className)}>{title}</h1>
);

export default PageTitle;
