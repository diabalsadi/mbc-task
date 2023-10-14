// React core
import { useEffect, useState } from 'react';
// Components
import NavigationMenu from '../NavigationMenu';
// Styles
import styles from './Navbar.module.scss';
// Assets
import { ReactComponent as MBC } from '../../assets/svgs/mbc-group-01.svg';
import { ReactComponent as Hamburger } from '../../assets/svgs/burger-menu-svgrepo-com.svg';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isNavBarOpen, setIsNavBarOpen] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const shouldRenderMenu = isNavBarOpen || isTransitioning;

  const handleClick = () => {
    setIsTransitioning(true);
    setIsNavBarOpen((prevOpen) => !prevOpen);
  };

  useEffect(() => {
    const body = document.body;
    if (isNavBarOpen) body.classList.add('noScroll');
    else body.classList.remove('noScroll');
  }, [isNavBarOpen]);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.hamburgerLogo} onClick={handleClick}>
          <Hamburger />
        </div>
        <Link to={{ pathname: '/' }}>
          <div className={styles.brandLogo}>
            <MBC />
          </div>
        </Link>

        {shouldRenderMenu && (
          <NavigationMenu
            closeNavbar={() => setIsNavBarOpen(false)}
            isNavBarOpen={isNavBarOpen}
            onAnimationEnd={() => setIsTransitioning(false)}
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
