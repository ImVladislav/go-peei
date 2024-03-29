'use client'

import Image from 'next/image'
import { useState } from 'react'
import Title from '../../Title/Title'
import { PRINCIPLES } from './principles.data'
import styles from './principles.module.scss'

const Principles = () => {
  const [showMore, setShowMore] = useState<boolean>(false);

  const handleToggleShowMore = ():void => {
    setShowMore((prevShowMore) => !prevShowMore);
  };
  return (
    <>
    {/* mobile */}
    <section className={`${styles.section} ${styles.mobile}`}>
      <Title>наші принципи</Title>
      <ul className={styles.list}>
        {PRINCIPLES.slice(0, showMore ? PRINCIPLES.length : 3).map((item) => (
          <li key={item.id} className={styles.item}>
            <div className={styles.item__top_wrap}>
              <Image src={item.icon} alt='checkmark' width={24} height={24} />
              <h3 className={styles.item__title}>{item.title}</h3>
            </div>
            <p className={styles.item__desc}>{item.desc}</p>
          </li>
        ))}
      </ul>
      {PRINCIPLES.length > 3 && (
        <button onClick={handleToggleShowMore} className={styles.showMoreBtn}>{
          showMore ? 'Приховати' : 'Показати більше'
        }</button>
      )}
    </section>

    {/* desktop */}
    <section className={`${styles.section} ${styles.desktop}`}>
      <Title width={260}>наші принципи</Title>
      <ul className={styles.list}>
        {PRINCIPLES.map((item) => (
          <li key={item.id} className={styles.item}>
            <div className={styles.item__top_wrap}>
              <Image src={item.icon} alt='checkmark' width={24} height={24} />
              <h3 className={styles.item__title}>{item.title}</h3>
            </div>
            <p className={styles.item__desc}>{item.desc}</p>
          </li>
        ))}
      </ul>
    </section>
    </>
  )
}

export default Principles