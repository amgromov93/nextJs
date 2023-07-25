import Link from "next/link"
import { MainLayout } from "../components/MainLayout"

import Image from "next/image";
import burger from "../img/burger.png"
import logo from "../img/logo.png";

import styles from "../sass/style.module.scss";
import Form from "../components/Form";
import About from "../components/About";
import SliderContainer from "../components/Slider";

export default function HomePage() {
  const headerContainerClasses = styles.container + ' ' + styles.header__container;
  const menuBurger =
    <button className={styles.header__burger}>
      <Image src={burger} alt="burgerMenu" width={30} height={30}/>
    </button>

  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__background}>
          <div className={headerContainerClasses}>
            <Link href={'/'}>
              <Image src={logo} alt="logo" className={styles.logo} />
            </Link>
            {menuBurger}
            <nav className={styles.header__nav}>
              <h1>NAVIGATION</h1>
            </nav>
          </div>
          <section className={styles.container}>
            <article className={styles.header__title}>
              <h1 className={styles.headingOne__mobile}>Instant collaboration for remote teams</h1>
              <p className={styles.paragraph__mobile}>All-in-one place for your remote team to chat, collaborate and track project progress.</p>
            </article>
            <Form />
          </section>
        </div>
      </header>
      <MainLayout>
        <About />
        <SliderContainer />
      </MainLayout>
    </>
  )
} 