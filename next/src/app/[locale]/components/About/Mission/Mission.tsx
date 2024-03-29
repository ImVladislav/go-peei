'use client'

import Image from 'next/image'
import Title from '../../Title/Title'
import { MISSION } from './mission.data'
import styles from './mission.module.scss'

const Mission = () => {
  return (
    <section className={styles.section}>
      <Title width={273}>Місія організації</Title>
      <div className={styles.top_content}>
        <Image src='/about/treee.svg' alt='tree' width={52} height={58} className={styles.top_content__icon} />
        <p className={styles.top_content__text}>Створення простору інноваційної активності в сфері екології та енергетики з метою формування країни свідомих громадян. Ми розглядаємо себе як каталізатора позитивних змін, що об'єднує усіх зацікавлених сторін для реалізації проектів розвитку територіальних громад та секторів національної економіки, а також підтримки інноваційних ідей у сфері екології та енергетики.
        </p>
      </div>
      <ul className={styles.list}>
        {MISSION.map((item, index) => (
          <li key={index} className={styles.item}>
            <Image src={item.icon} alt='icon' width={17} height={30} />
            <p className={styles.item__desc}>{item.desc}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Mission