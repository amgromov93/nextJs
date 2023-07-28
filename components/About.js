import Image from "next/image";
import Link from "next/link";

import styles from "../sass/style.module.scss";

import mockup2 from "../img/aboutContainer/mockup2.jpg";
import mockup3 from "../img/aboutContainer/mockup3.jpg";
import mockup4 from "../img/aboutContainer/mockup4.jpg";

export default function About() {
  const aboutClasses = styles.container + ' ' + styles.about;

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
      image: <Image className={styles.about__positionLeft} priority='true' src={mockup2} alt="chats" />,
      title: 'Chats for your distributed teams',
      paragraph: 'Team combines the immediacy of real-time chat with an email threading model. With Team, you can catch up on important conversations while ignoring irrelevant ones.',
      link: <Link className={styles.link} href={'/'}>Learn more</Link>,
    },
    {
      id: 3,
      image: <Image className={styles.about__positionLeft} priority='true' src={mockup3} alt="chats" />,
      title: 'Choose how you want to work',
      paragraph: 'In Team, you’ve got all the flexibility to work when, where and how it’s best for you. You can easily chat, send audio and video clips, or hop on a huddle to talk things out live.',
      link: <Link className={styles.link} href={'/'}>Learn more</Link>,
    },
    {
      id: 4,
      image: <Image className={styles.about__positionLeft} priority='true' src={mockup4} alt="chats" />,
      title: 'Move faster with your Team tools',
      paragraph: 'With your other work apps connected to Team, you can work faster by switching tabs less. And with powerful tools like Workflow Builder, you can automate away routine tasks.',
      link: <Link className={styles.link} href={'/'}>Learn more</Link>,
    },
  ]

  const itemsToRender = aboutItems.map(item => {
    return (
      <article key={item.id} className={styles.about__box}>
        {item.image}
        <div className={aboutClasses}>
          <h2 className={styles.headingOne__mobile}>{item.title}</h2>
          <p className={styles.paragraph__mobile}>{item.paragraph}</p>
          {item.link}
        </div>
      </article>
    )
  })

  return (
    <section className={styles.about}>
      {itemsToRender}
    </section>
  )
}