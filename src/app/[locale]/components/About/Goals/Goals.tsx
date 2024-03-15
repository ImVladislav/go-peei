'use client'

import { GoalType } from '@/app/types'
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
    <section className={styles.section}>
      <Title width={250}>Цілі організації</Title>
      <div className={styles.content}>
        <ul className={styles.list}>
        {GOALS.map((item: GoalType, index: number) => (
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
        {GOALS.map((item: GoalType, index: number) => 
          index === Number(hoveredTitle) 
          ? (
          <p key={index} className={styles.desc}>{item.desc}</p>
          ) : null)
          }
        </div>
      </div>
    </section>
  )
}

export default Goals


// старий дизайн
//--------------------------------
// import Image from 'next/image'
// import Title from '../../Title/Title'
// import { GOALS } from './goals.data'
// import styles from './goals.module.scss'

// const Goals = () => {
//   return (
//     <section className={styles.section}>
//       <Title width={250}>Цілі організації</Title>
//       <div className={styles.parallax}>
//       <ul className={styles.list}>
//         {GOALS.map(item => (
//           <div key={item.number} className={styles.wrap}>
//             <Image src={item.number} alt='number' width={60} height={136} className={styles.item__number} />
//           <li className={styles.item}>
//             <div className={styles.item__content}>
//               <Image src={item.icon} alt='leaf' width={17} height={30} />
//               <h3 className={styles.item__title}>{item.title}</h3>
//               <p className={styles.item__desc}>{item.desc}</p>
//             </div>
//           </li>
//           </div>
//         ))}
//       </ul>
//       </div>
//     </section>
//   )
// }

// export default Goals;