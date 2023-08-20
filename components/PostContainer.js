import { useRouter } from "next/router";
import styles from "../sass/style.module.scss";

import { postData } from "../data/data.js";
import Loader from "./Loader";
import PostItem from "./PostItem";

export default function PostContainer() {
  const router = useRouter();
  const post = postData();

  const numOfPost = router.query.id;
  const numOfData = numOfPost - 1;

  const postClasses = styles.container + ' ' + styles.post;


  return (
    <section className={postClasses}>
      {router.query.id === undefined ? <Loader /> : <PostItem post={post} numOfData={numOfData}/>}
    </section>
  )
}