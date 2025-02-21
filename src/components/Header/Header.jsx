import React, { useEffect, useState } from 'react';
import styles from '../Header/Header.module.css';
import { FaHammer } from 'react-icons/fa';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoMdClose } from 'react-icons/io';

const Header = () => {
  const [mobile, setMobile] = useState(() => {
    const mediaQuery = window.matchMedia('(max-width:768px)');
    return mediaQuery.matches;
  });
  const [mobileMenu, setMobileMenu] = useState(false);

  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  const handleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width:768px)');
    const checkMedia = () => {
      setMobile(mediaQuery.matches);
    };
    window.addEventListener('resize', checkMedia);

    return () => {
      window.removeEventListener('resize', checkMedia);
    };
  }, [mobile]);

  return (
    <header className={styles.header}>
      <a className={styles.logo} href="./">
        Moveis
        <i>
          <FaHammer />
        </i>
      </a>
      <div className={styles.containerMenuMobile}>
        {mobile && (
          <button onClick={handleMobileMenu} className={`${styles.buttonMenu} ${mobileMenu && styles.buttonMenuActive}`}>
            {mobileMenu ? (
              <i>
                <IoMdClose />
              </i>
            ) : (
              <i>
                <RxHamburgerMenu />
              </i>
            )}
          </button>
        )}
        <nav className={mobile ? `${styles.navMobile} ${mobileMenu && styles.navMobileActive}` : styles.navDesktop}>
          <a onClick={() => handleScroll('perguntas')}>Perguntas</a>
          <a onClick={() => handleScroll('contato')}>Contato</a>
          <a onClick={() => handleScroll('localizacao')}>Local</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
