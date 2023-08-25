import { useState } from "react";
import { useRouter } from "next/router";

import Link from "next/link";
import Image from "next/image";

import styles from "../sass/style.module.scss";

import darkLogo from "../img/darkLogo.png";


export default function Navigation({ logo, burger }) {
  const [burgerToggle, setBurgerToggle] = useState(false);
  const router = useRouter();

  const headerContainerClasses = styles.container + ' ' + styles.header__container;
  const activeNavClasses = styles.header__nav + ' ' + styles.header__nav_active;
  const linkClasses = router.pathname === '/' ? styles.header__nav__links : styles.header__nav__links + ' ' + styles.header__nav__links_blackLinks;
  

  const menuBurger =
    <button onClick={() => setBurgerToggle(!burgerToggle)} className={styles.header__burger}>
      <Image src={burger} alt="burgerMenu" width={30} height={30}/>
    </button>
    
  const onLinkClick = () => {
    setBurgerToggle(false);
  };


  return (
    <div className={headerContainerClasses}>
      <Link href={'/'}>
        <Image 
          priority={true} 
          src={logo} 
          alt="logo" 
          className={styles.logo}
        />
      </Link>
      {menuBurger}
      <nav className={burgerToggle === false ? styles.header__nav : activeNavClasses}>
        <button onClick={() => setBurgerToggle(false)}>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.2 11.0001L21.35 1.8501C21.6875 1.5126 21.6875 0.987598 21.35 0.650098C21.0125 0.312598 20.4875 0.312598 20.15 0.650098L11 9.8001L1.84998 0.650098C1.51248 0.312598 0.987476 0.312598 0.649976 0.650098C0.312476 0.987598 0.312476 1.5126 0.649976 1.8501L9.79998 11.0001L0.649976 20.1501C0.312476 20.4876 0.312476 21.0126 0.649976 21.3501C0.799976 21.5001 1.02498 21.6126 1.24998 21.6126C1.47498 21.6126 1.69998 21.5376 1.84998 21.3501L11 12.2001L20.15 21.3501C20.3 21.5001 20.525 21.6126 20.75 21.6126C20.975 21.6126 21.2 21.5376 21.35 21.3501C21.6875 21.0126 21.6875 20.4876 21.35 20.1501L12.2 11.0001Z" fill="black"/>
          </svg>
        </button>
        <Link onClick={onLinkClick} className={styles.header__nav__links} href={'/'}>
          <Image className={styles.header__nav__logo} src={darkLogo} alt="darkLogo"/>
        </Link>
        <Link onClick={onLinkClick} className={linkClasses} href={'/'}>Product</Link>
        <Link onClick={onLinkClick} className={linkClasses} href={'/blog'}>Blog</Link>
        <Link onClick={onLinkClick} className={linkClasses} href={'/'}>Support</Link>
        <Link onClick={onLinkClick} className={linkClasses} href={'/'}>Log in</Link>
        <Link onClick={onLinkClick} className={linkClasses} href={'/'}>Get Access</Link>
      </nav>
    </div>
  )
}