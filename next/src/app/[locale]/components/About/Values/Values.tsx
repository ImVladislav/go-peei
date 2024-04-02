'use client'

import Image from 'next/image'
import Title from '../../Title/Title'
import { VALUES } from './values.data'
import styles from './values.module.scss'

const Values = () => {
  return (
      <section className={styles.section}>
      <Title>Наші<span className={styles.accentTitle}> Цінності</span></Title>
      <div className={styles.parallax}>
      <ul className={styles.list}>
        {VALUES.map((item, index) => (
          <li key={index} className={styles.item}>
            <Image src={item.icon} alt='icon' width={20} height={20} className={styles.item__icon}/>
            <p className={styles.item__desc}>{item.desc}</p>
          </li>
        ))}
      </ul>
      </div>
    </section>
  )
}

export default Values