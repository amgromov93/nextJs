import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../sass/style.module.scss";

import { postData } from "../data/data.js";
import { useEffect } from "react";

export default function PostContainer() {
  const post = postData();
  const router = useRouter();
  
  useEffect(() => {
    if(router.isReady){
      
    }
  }, [!router.isReady])

  console.log(router.query);

  return (
    <section className={styles.container}>
      <h1>Post number {router.query.id}</h1>
      <>
        {/* <article key={post[router.query.id - 1].id}> */}
          {/* <h4>{post[0].title}</h4>
          <div>
            <p>{post[0].name}</p>
            <p>{post[0].date}</p>
          </div>
          <div className={styles.paddingNone}>
            <Image 
              src={post[0].image}
              layout="fill"
              objectFit="cover"
              alt="photo"
            />
          </div>
          <p>{post[0].text}</p>
          <div>
            <p className="logo"></p>
            <p>Written by</p>
            <p>{post[0].name}</p>
            <p>{post[0].job}</p>
          </div> */}
        {/* </article> */}
      </>
    </section>
  ) 
}