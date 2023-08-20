import styles from "../sass/style.module.scss";
import FormForPost from "./FormForPost";

export default function PostItem({ post, numOfData }) {
  const titleImageClasses = styles.paddingNone + ' ' + styles.post__titleImage;
  const textClasses = styles.paragraph + ' ' + styles.post__text;

  return (
    <>
      <article className={styles.post__box} key={post[numOfData].id}>
        <h4 className={styles.headingOne__mobile}>{post[numOfData].title}</h4>
        <div className={styles.post__author}>
          {post[numOfData].userImg}
          <p className={styles.post__author__name}>{post[numOfData].name}</p>
          <p className={styles.post__author__date}>{post[numOfData].date}</p>
        </div>
        <div className={titleImageClasses}>
          {post[numOfData].image}
        </div>
        <p className={textClasses}>{post[numOfData].text}</p>
        <div className={styles.post__writtenByBlock}>
          {post[numOfData].userImg}
          <p>Written by</p>
          <p>{post[numOfData].name}</p>
          <p>{post[numOfData].job}</p>
        </div>
      </article>
      <FormForPost />
    </>
  )
}