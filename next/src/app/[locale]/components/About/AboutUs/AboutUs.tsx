'use client'

import Image from 'next/image'
import Title from '../../Title/Title'
import Translator from '../../translator/Translator'
import { ABOUT_US } from './about-us.data'
import styles from './aboutUs.module.scss'

const AboutUs = () => {
	return (
		<section className={styles.section}>
			<Title>
				<Translator>about</Translator>
				<span className={styles.accentTitle}>
					{' '}
					<Translator>us</Translator>
				</span>
			</Title>
			<p className={styles.text}>
				<span className={styles.accent_text}>
					<Translator>PlatformForInitiatives</Translator>
				</span>{' '}
				<Translator>aboutUsPrimaryText</Translator>
			</p>
			<div className={styles.bg_img}></div>
			<ul className={styles.list}>
				{ABOUT_US.map((item, index) => (
					<li key={index} className={styles.item}>
						<Image src={item.icon} alt='Icon' width={17} height={30} />
						<p className={styles.item__desc}>
							<Translator>{item.desc}</Translator>
						</p>
					</li>
				))}
			</ul>
		</section>
	)
}

export default AboutUs
