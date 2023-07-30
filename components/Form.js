import styles from "../sass/style.module.scss";

export default function Form() {
  const buttonGsapClasses = styles.paragraph__mobile + ' ' + "header__button__gsap";

  return (
    <form className={styles.form}>
      <input type="text" placeholder="Email" />
      <button className={buttonGsapClasses} type="button">Send</button>
    </form>
  )
}