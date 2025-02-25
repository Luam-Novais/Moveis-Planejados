import React, { useEffect, useState, useRef } from 'react';
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
  const menuContainerRef = useRef(null)

  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  const handleMobileMenu = (e) => {
    e.stopPropagation()
    setMobileMenu(!mobileMenu);
  };
  const handleOutsideClick = (e)=>{
    if(mobile && menuContainerRef.current && !menuContainerRef.current.contains(e.target)){
      setMobileMenu(false)
    }
  }
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
  useEffect(()=>{
    if(mobileMenu){
      document.addEventListener('click', handleOutsideClick)
      document.addEventListener('touchStart', handleOutsideClick)
    }else{
      document.removeEventListener('click', handleOutsideClick)
      document.removeEventListener('touchStart', handleOutsideClick)
    }
    return ()=>{
      document.removeEventListener('click', handleOutsideClick)
      document.removeEventListener('touchStart', handleOutsideClick)
    }
  },[mobileMenu])
  return (
    <header className={styles.header}>
      <a className={styles.logo} href="./">
        Moveis
        <i>
          <FaHammer />
        </i>
      </a>
      <div ref={menuContainerRef} className={styles.containerMenuMobile}>
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
        <nav id='navbar' className={mobile ? `${styles.navMobile} ${mobileMenu && styles.navMobileActive}` : styles.navDesktop}>
          <a onClick={() => handleScroll('perguntas')}>Perguntas</a>
          <a onClick={() => handleScroll('contato')}>Contato</a>
          <a onClick={() => handleScroll('localizacao')}>Local</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
