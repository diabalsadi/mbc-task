// React core
import { NavLink } from 'react-router-dom';
// Styles
import cx from 'classnames';
import styles from './NavigationMenu.module.scss';

const NavigationMenu = ({ isNavBarOpen, onAnimationEnd, closeNavbar }) => {
  const navigationLink = [
    {
      link: '/',
      text: 'Home Page',
    },
    {
      link: '/about',
      text: 'About',
    },
    {
      link: '/blog',
      text: 'Blog',
    },
    {
      link: '/contact',
      text: 'Contact',
    },
  ];

  return (
    <div
      className={cx(styles.container, { [styles.opened]: isNavBarOpen })}
      onAnimationEnd={onAnimationEnd}
    >
      <div className={styles.menuWrapper}>
        {navigationLink.map(({ link, text }, index) => (
          <NavLink to={link} key={`link-${index}`} className={styles.navLink} onClick={closeNavbar}>
            {text}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default NavigationMenu;
