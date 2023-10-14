// React core
import { useEffect } from 'react';
// Redux
import { getTheme } from '../../redux/selectors';
import { toggleModal } from '../../redux/slices/modal';
import { toggleTheme } from '../../redux/slices/themes';
import { useDispatch, useSelector } from 'react-redux';
// Components
import IconButton from '../IconButton';
// Styles
import styles from './ThemeToggle.module.scss';
// Assets
import { ReactComponent as DarkMood } from '../../assets/svgs/dark-mode.svg';
import { ReactComponent as LightMood } from '../../assets/svgs/light-mode.svg';

const ThemeToggle = () => {
  const dispatcher = useDispatch();

  const theme = useSelector(getTheme);

  useEffect(() => {
    const { body } = document;
    if (theme === 'dark') body.classList.add(theme);
    else body.classList.remove('dark');
  }, [theme]);

  return (
    <div className={styles.container}>
      <IconButton
        icon={theme === 'light' ? <DarkMood /> : <LightMood />}
        label={theme === 'light' ? 'dark' : 'light'}
        onClick={() => {
          dispatcher(toggleTheme());
          dispatcher(
            toggleModal(theme === 'light' ? 'Dark Mode On' : 'Light Mode On')
          );
        }}
      />
    </div>
  );
};

export default ThemeToggle;
