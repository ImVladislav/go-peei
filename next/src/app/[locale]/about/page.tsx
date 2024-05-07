import Image from 'next/image'
import AboutUs from '../components/About/AboutUs/AboutUs'
import Goals from '../components/About/Goals/Goals'
import Mission from '../components/About/Mission/Mission'
import Principles from '../components/About/Principles/Principles'
import Values from '../components/About/Values/Values'
import styles from './about.module.scss'

export default async function About() {
	return (
		<div className='container'>
			<div className={styles.wrap}>
				<AboutUs />
				<Mission />
				<Values />
				<Goals />
				<div className={styles.imgWrapper}>
					<Image
						src='/about/houses.png'
						alt='background image'
						fill
						className={styles.img}
					/>
				</div>
				<Principles />
			</div>
		</div>
	)
}
