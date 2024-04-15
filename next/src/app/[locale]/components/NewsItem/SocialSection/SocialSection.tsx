import Image from 'next/image'
import Link from 'next/link'
import styles from './socialSection.module.scss'
import { SOCIALS } from './socials.data'

const SocialSection = () => {
	return (
		<div className={styles.section}>
			<h3 className={styles.section__title}>Поділитися:</h3>
			<div className={styles.social__wrap}>
				{SOCIALS.map((item, index) => (
					<Link className={styles.social__svgLink} href='/' key={index}>
						<Image src={item.icon} width={24} height={24} alt={item.name} />
					</Link>
				))}
			</div>
			<div className={styles.inputLink__wrap}>
				<input className={styles.inputLink__input} />
				<button className={styles.inputLink__btn}>
					<Image src='/news/copyIcon.svg' width={36} height={36} alt='copy' />
				</button>
			</div>
		</div>
	)
}

export default SocialSection
