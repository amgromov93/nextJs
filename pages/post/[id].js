import Head from "next/head";

import PostContainer from "../../components/PostContainer";
import Navigation from "../../components/Navigation";
import { MainLayout } from "../../components/MainLayout";

import styles from "../../sass/style.module.scss";

import darkLogo from "../../img/darkLogo.png";
import burgerBlack from "../../img/burgerBlack.png";
import { useRouter } from "next/router";
import { postData } from "../../data/data";

export default function Post() {
  const router = useRouter()
  const data = postData(); 

  const postTitle = data[router.query.id - 1]?.title;

  return (
    <>
      <Head>
        <title>Team | Post {postTitle}</title>
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