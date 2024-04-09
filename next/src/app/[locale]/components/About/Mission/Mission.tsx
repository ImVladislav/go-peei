'use client'

import Image from 'next/image'
import Title from '../../Title/Title'
import Translator from '../../translator/Translator'
import { MISSION } from './mission.data'
import styles from './mission.module.scss'

const Mission = () => {
	return (
		<section className={styles.section}>
			<Title>
				<Translator>mission</Translator>{' '}
				<span className={styles.accentTitle}>
					<Translator>organizations</Translator>
				</span>
			</Title>
			<div className={styles.top_content}>
				<Image
					src='/about/treee.svg'
					alt='tree'
					width={52}
					height={58}
					className={styles.top_content__icon}
				/>
				<p className={styles.top_content__text}>
					<Translator>missionPrimaryText</Translator>
				</p>
			</div>
			<ul className={styles.list}>
				{MISSION.map((item, index) => (
					<li key={index} className={styles.item}>
						<Image src={item.icon} alt='icon' width={17} height={30} />
						<p className={styles.item__desc}>
							<Translator>{item.desc}</Translator>
						</p>
					</li>
				))}
			</ul>
		</section>
	)
}

export default Mission
