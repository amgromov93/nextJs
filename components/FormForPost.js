import styles from "../sass/style.module.scss";

export default function FormForPost() {
  return (
    <div className={styles.post__form}>
      <h3 className={styles.paragraph}>Join the conversation</h3>
      <form className={styles.post__form__box}>
        <p className={styles.post__form__logo}></p>
        <textarea id="input" className={styles.post__form__input} type="text" placeholder="Comments" />
      </form>
    </div>
  )
}