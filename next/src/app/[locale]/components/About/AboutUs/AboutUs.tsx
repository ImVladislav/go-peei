'use client'

import Image from 'next/image'
import Title from '../../Title/Title'
import { ABOUT_US } from './about-us.data'
import styles from './aboutUs.module.scss'

const AboutUs = () => {
  return (
<section className={styles.section}>
  <Title width={130}>Про нас</Title>
  <p className={styles.text}><span className={styles.accent_text}>“Платформа еко-енергетичних ініціатив”</span> об'єднує зусилля активістів для сприяння сталому та екологічно безпечному майбутньому. За допомогою інноваційних технологій та співпраці з експертами у сфері відновлення ресурсів, ми прагнемо до зменшення негативного впливу відходів на наше середовище. </p>
  <div className={styles.bg_img}></div>
  <ul className={styles.list}>
  {ABOUT_US.map((item, index) => (
    <li key={index} className={styles.item}>
      <Image src={item.icon} alt='Icon' width={17} height={30} />
      <p className={styles.item__desc}>{item.desc}</p>
    </li>
  ))}
  </ul>
</section>
  )
}

export default AboutUs;
