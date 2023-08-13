import Head from "next/head";

import PostContainer from "../../components/PostContainer";
import Navigation from "../../components/Navigation";
import { MainLayout } from "../../components/MainLayout";

import styles from "../../sass/style.module.scss";

import darkLogo from "../../img/darkLogo.png";
import burgerBlack from "../../img/burgerBlack.png";

export default function Post() {

  return (
    <>
      <Head>
        <title>Team | Post</title>
      </Head>
      <header>
        <Navigation 
          className={styles.header_black} 
          logo={darkLogo}
          burger={burgerBlack}
        />
      </header>
      <MainLayout>
        <PostContainer />
      </MainLayout>
    </>
  )
}