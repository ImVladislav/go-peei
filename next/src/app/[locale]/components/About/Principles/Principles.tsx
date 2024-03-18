'use client'

import Image from 'next/image'
import Title from '../../Title/Title'
import { PRINCIPLES } from './principles.data'
import styles from './principles.module.scss'

const Principles = () => {
  return (
    <section className={styles.section}>
      <Title width={260}>наші принципи</Title>
      <ul className={styles.list}>
        {PRINCIPLES.map((item, index) => (
          <li key={index} className={styles.item}>
            <div className={styles.item__top_wrap}>
              <Image src={item.icon} alt='checkmark' width={24} height={24} />
              <h3 className={styles.item__title}>{item.title}</h3>
            </div>
            <p className={styles.item__desc}>{item.desc}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Principles