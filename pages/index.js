import React, { useRef } from "react";
import Head from "next/head";
import { headerGsapAnimations } from "../model/gsapAnimations";

import { MainLayout } from "../components/MainLayout"

import styles from "../sass/style.module.scss";

import Form from "../components/Form";
import About from "../components/About";
import SliderContainer from "../components/Slider";
import Navigation from "../components/Navigation";

import logo from "../img/logo.png";
import burger from "../img/burger.png";

export default function HomePage() {
  const titleGsapClasses = styles.headingOne__mobile + ' ' + "header__title__gsap";
  const paragraphGsapClasses = styles.paragraph__mobile + ' ' + "header__paragraph__gsap";

  const component = useRef(null);

  headerGsapAnimations(component);
  
  return (
    <>
      <Head>
        <title>Team | Instant collaboration for remote teams</title>
      </Head>
      <header className={styles.header}>
        <div className={styles.header__background}>
          <Navigation logo={logo} burger={burger}/>
          <section ref={component} className={styles.container}>
            <article className={styles.header__title}>
              <h1 className={titleGsapClasses}>Instant collaboration for remote teams</h1>
              <p className={paragraphGsapClasses}>All-in-one place for your remote team to chat, collaborate and track project progress.</p>
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