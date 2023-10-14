// Components
import PageTitle from '../../components/PageTitle';
// Styles
import styles from './NotFound.module.scss';

const NotFound = () => (
  <div className={styles.container}>
    <PageTitle className={styles.title} theme='big' title='404!!!' />
  </div>
);

export default NotFound;
