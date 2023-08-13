import Head from "next/head";
import Navigation from "../../components/Navigation";
import { MainLayout } from '../../components/MainLayout';
import styles from "../../sass/style.module.scss";

import darkLogo from "../../img/darkLogo.png";
import burgerBlack from "../../img/burgerBlack.png";
import Blog from "../../components/Blog";

export default function BlogPage() {
  return (
    <>
      <Head>
        <title>Team | Blog</title>
      </Head>
      <header>
        <Navigation 
          className={styles.header_black} 
          logo={darkLogo}
          burger={burgerBlack}
        />
      </header>
      <MainLayout>
        <Blog />
      </MainLayout>
    </>
  )
}