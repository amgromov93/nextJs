import React, { useRef, useState } from "react";
import Head from "next/head";
import { headerGsapAnimations } from "../model/gsapAnimations";

import { MainLayout } from "../components/MainLayout"

import Image from "next/image";
import burger from "../img/burger.png"

import styles from "../sass/style.module.scss";

import Form from "../components/Form";
import About from "../components/About";
import SliderContainer from "../components/Slider";
import Navigation from "../components/Navigation";

export default function HomePage() {
  const [burgerToggle, setBurgerToggle] = useState(false);
  
  const titleGsapClasses = styles.headingOne__mobile + ' ' + "header__title__gsap";
  const paragraphGsapClasses = styles.paragraph__mobile + ' ' + "header__paragraph__gsap";
  
  const menuBurger =
    <button onClick={() => setBurgerToggle(!burgerToggle)} className={styles.header__burger}>
      <Image src={burger} alt="burgerMenu" width={30} height={30}/>
    </button>
    
  const onLinkClick = () => {
    setBurgerToggle(false);
  };

  const component = useRef(null);

  headerGsapAnimations(component);

  const props = { 
    burgerToggle, 
    setBurgerToggle, 
    menuBurger, 
    onLinkClick
  };
  
  return (
    <>
      <Head>
        <title>Team | Instant collaboration for remote teams</title>
      </Head>
      <header className={styles.header}>
        <div className={styles.header__background}>
          <Navigation props={props}/>
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