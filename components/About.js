import Link from "next/link";
import { aboutGsapAnimations } from "../model/gsapAnimations";

import styles from "../sass/style.module.scss";
import { useRef } from "react";

export default function About() {
  const aboutClasses = styles.container + ' ' + styles.about;

  const secondImgClasses = styles.about__positionLeft + ' ' + styles.about__positionLeft_second;
  const thirdImgClasses = styles.about__positionLeft + ' ' + styles.about__positionLeft_third;
  const firthImgClasses = styles.about__positionLeft + ' ' + styles.about__positionLeft_firth;

  const aboutItems = [
    {
      id: 1,
      image: <div className={styles.about__positionRight} />,
      title: 'Chats for your distributed teams',
      paragraph: 'Team combines the immediacy of real-time chat with an email threading model. With Team, you can catch up on important conversations while ignoring irrelevant ones.',
      link: <Link className={styles.link} href={'/'}>Learn more</Link>,
    },
    {
      id: 2,
      image: <div className={secondImgClasses} />,
      title: 'Chats for your distributed teams',
      paragraph: 'Team combines the immediacy of real-time chat with an email threading model. With Team, you can catch up on important conversations while ignoring irrelevant ones.',
      link: <Link className={styles.link} href={'/'}>Learn more</Link>,
    },
    {
      id: 3,
      image: <div className={thirdImgClasses} />,
      title: 'Choose how you want to work',
      paragraph: 'In Team, you’ve got all the flexibility to work when, where and how it’s best for you. You can easily chat, send audio and video clips, or hop on a huddle to talk things out live.',
      link: <Link className={styles.link} href={'/'}>Learn more</Link>,
    },
    {
      id: 4,
      image: <div className={firthImgClasses} />,
      title: 'Move faster with your Team tools',
      paragraph: 'With your other work apps connected to Team, you can work faster by switching tabs less. And with powerful tools like Workflow Builder, you can automate away routine tasks.',
      link: <Link className={styles.link} href={'/'}>Learn more</Link>,
    },
  ]

  const itemsToRender = aboutItems.map(item => {
    return (
      <article key={item.id} className={styles.about__box + ' ' + `about__box__${item.id}`}>
        {item.image}
        <div className={aboutClasses}>
          <h2 className={styles.headingOne__mobile + ' ' + `about__item__title__${item.id}`}>{item.title}</h2>
          <p className={styles.paragraph__mobile + ' ' + `about__item__text__${item.id}`}>{item.paragraph}</p>
          {item.link}
        </div>
      </article>
    )
  })

  const component = useRef(null);

  aboutGsapAnimations(component);

  return (
    <section className={styles.about} ref={component}>
      {itemsToRender}
    </section>
  )
}