import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "../sass/style.module.scss";

import { postData } from "../data/data.js";
import Loader from "./Loader";
import PostItem from "./PostItem";

export default function PostContainer() {
  const [state, setState] = useState(null);
  const post = postData();
  const router = useRouter();
  const numOfPost = state - 1;
  
  useEffect(() => {
    if(router.isReady){
      setState(router.query.id)
    }
  }, [!router.isReady])


  return (
    <section className={styles.container}>
      <h1>Post number {router.query.id}</h1>
      {state === null ? <Loader /> : <PostItem post={post} numOfPost={numOfPost}/>}
    </section>
  ) 
}