import Link from "next/link";

import styles from "../sass/style.module.scss";
import { postData } from "../data/data.js";
import { useState } from "react";

export default function Blog() {
  const [showMore, setShowMore] = useState(6);

  const blogClasses = styles.container + ' ' + styles.blog;
  const titleClasses = styles.blog__text_hidden + ' ' + styles.blog__title;
  const textClasses = styles.blog__text_hidden + ' ' + styles.blog__text;

  const posts = postData();

  const renderData = posts.map((post) => {
    if (post.id <= showMore) {
      return (
        <article key={post.id} className={styles.blog__item}>
          <div className={styles.blog__image}>
            {post.image}
          </div>
          <Link href={`/post/[id]`} as={`/post/${post.id}`}>
            <h4 className={titleClasses}>{post.title}</h4>
          </Link>
          <p className={textClasses}>{post.text}</p>
          <div className={styles.blog__userBox}>
            {post.userImg}
            <p>{post.name}</p>
            <p>{post.date}</p>
          </div>
        </article>
      )
    }
  })

  return (
    <section className={blogClasses}>
      <h2 className={styles.headingOne}>Blog</h2>
      <p className={styles.caption__mobile}>Open-source threaded team chat that helps teams stay productive and focused.</p>
      <section className={styles.blog__postBox}>
        {renderData}
      </section>
      <div className={styles.blog__buttonBlock}>
        <button onClick={() => {setShowMore(showMore + 4)}} type="button">Show more...</button>
      </div>
    </section>
  )
}