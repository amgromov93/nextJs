import Image from "next/image";
import Link from "next/link";
import styles from "../sass/style.module.scss";
import logo from "../img/logo.png";

export default function Footer() {
  const footerClasses = styles.footer + ' ' + styles.container;
  const titleClasses = styles.caption__mobile + ' ' + styles.footer__title;
  const categoryClasses = styles.headingThree__mobile + ' ' + styles.footer__category;
  const linkClasses = styles.caption__mobile + ' ' + styles.footer__link;

  return (
    <footer className={footerClasses}>
      <article>
        <Image src={logo} alt="logo" />
        <h2 className={titleClasses}>Collaboration platform for mordern team</h2>
      </article>
      <article>
        <h3 className={categoryClasses}>Stay up to date</h3>
        <p className={linkClasses}>Subscribe to our newsletter</p>
        <form>
          <input placeholder="Email"/>
        </form>
      </article>
      <article>
        <h3 className={categoryClasses}>Company</h3>
        <div className={styles.footer__linksContainer}>
          <Link className={styles.caption__mobile} href={'/'}>Product</Link>
          <Link className={styles.caption__mobile} href={'/'}>Blog</Link>
          <Link className={styles.caption__mobile} href={'/'}>Support</Link>
        </div>
      </article>
      <article>
        <h3 className={categoryClasses}>Features</h3>
        <div className={styles.footer__linksContainer}>
          <Link className={styles.caption__mobile} href={'/'}>Screen Sharing</Link>
          <Link className={styles.caption__mobile} href={'/'}>iOS & Android Apps</Link>
          <Link className={styles.caption__mobile} href={'/'}>File Sharing</Link>
          <Link className={styles.caption__mobile} href={'/'}>User Managment</Link>
        </div>
      </article>
      <article>
        <h3 className={categoryClasses}>Contact Us</h3>
        <Link href={'mailto:info@teamapp.com'}>info@teamapp.com</Link>
      </article>
      <article></article>
    </footer>
  )
}