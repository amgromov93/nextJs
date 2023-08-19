import styles from "../sass/style.module.scss";

export default function PostItem({ post, numOfPost }) {
  return (
    <article key={post[numOfPost].id}>
      <h4>{post[numOfPost].title}</h4>
      <div>
        <p>{post[numOfPost].name}</p>
        <p>{post[numOfPost].date}</p>
      </div>
      <div className={styles.paddingNone}>
        {post[numOfPost].image}
      </div>
      <p>{post[numOfPost].text}</p>
      <div>
        <p className="logo"></p>
        <p>Written by</p>
        <p>{post[numOfPost].name}</p>
        <p>{post[numOfPost].job}</p>
      </div>
    </article>
  )
}