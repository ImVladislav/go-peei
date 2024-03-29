'use client'

import { GoalsType } from '@/app/types'
import { useState } from 'react'
import Title from '../../Title/Title'
import { GOALS } from './goals.data'
import styles from './goals.module.scss'

const Goals = () => {
  const [hoveredTitle, setHoveredTitle] = useState<number | null>(null);
  const handleMouseEnter = (event: React.MouseEvent<HTMLDivElement>) => {
    setHoveredTitle(Number((event.currentTarget.id)));
  };

  return (
    <>
    {/* desktop */}
    <section className={`${styles.section} ${styles.desktop}`}>
      <Title width={250}>Цілі організації</Title>
      <div className={styles.content}>
        <ul className={styles.list}>
        {GOALS.map((item: GoalsType, index: number) => (
          <li key={index} className={styles.item}>
            <div id={index.toString()} className={
              `${styles.item__title_wrap} ${index === Number(hoveredTitle) 
                ? `${styles.active}` 
                : ''}`
              } onMouseEnter={handleMouseEnter}>
              <h3 className={styles.item__title}>{item.title}</h3>
            </div>
          </li>
        ))}
        </ul>
        <div className={styles.desc_wrap}>
        {GOALS.map((item: GoalsType, index: number) => 
          index === Number(hoveredTitle) 
          ? (
          <p key={index} className={styles.desc}>{item.desc}</p>
          ) : null)
          }
        </div>
      </div>
    </section>
    {/* mobile */}
    <section className={`${styles.section} ${styles.mobile}`}>
    <Title width={125}>Цілі організації</Title>
    <ul className={styles.list}>
        {GOALS.map((item: GoalsType, index: number) => (
          <li key={index} className={styles.item}>
            <div id={index.toString()} className={
              `${styles.item__title_wrap} ${index === Number(hoveredTitle) 
                ? `${styles.active}` 
                : ''}`
              } onMouseEnter={handleMouseEnter}>
              <h3 className={styles.item__title}>{item.title}</h3>
              <p className={
                `${styles.desc} ${index === Number(hoveredTitle)
              ? `${styles.active}`
              : ''}`}>
                {item.desc}
              </p>
            </div>
          </li>
        ))}
        </ul>
    </section>
    </>
  )
}

export default Goals