import styles from "../sass/style.module.scss";

export default function Form() {
  return (
    <form className={styles.form}>
      <input type="text" placeholder="Email" />
      <button className={styles.paragraph__mobile} type="button">Send</button>
    </form>
  )
}