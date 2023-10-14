import cx from 'classnames';
// Redux
import { useSelector } from 'react-redux';
import { getTheme } from '../../redux/selectors';
// Component
import NavBar from '../Navbar';
import ThemeToggle from '../ThemeToggle';
import Modal from '../Modal';
// Styles
import styles from './PageWrapper.module.scss';

const PageWrapper = ({ children }) => {
  const theme = useSelector(getTheme);

  return (
    <>
      <NavBar />
      <div className={cx(styles.container, styles[theme])}>{children}</div>
      <ThemeToggle />
      <Modal />
    </>
  );
};

export default PageWrapper;
