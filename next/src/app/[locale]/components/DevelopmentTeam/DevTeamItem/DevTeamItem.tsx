import { socialsItem } from '@/app/types'
import Image from 'next/image'
import Translator from '../../translator/Translator'
import DevSocials from '../DevSocials/DevSocials'
import styles from './devTeamItem.module.scss'

interface itemProps {
	item: {
		image: string
		name: string
		position: string
		links: socialsItem[]
	}
}

const DevTeamItem = ({ item }: itemProps, key: string) => {
	return (
		<>
			<li className={styles.item}>
				<div className={styles.item__container}>
					<div className={styles.item__imgWrapper}>
						<Image
							src={item.image}
							alt={item.name}
							fill
							className={styles.item__img}
						/>
					</div>
					<div className={styles.item__infoWrapper}>
						<h3 className={styles.item__title}>
							<Translator>{item.name}</Translator>
						</h3>
						<p className={styles.item__position}>
							<Translator>{item.position}</Translator>
						</p>
						<DevSocials position={item.position} />
					</div>
				</div>
			</li>
		</>
	)
}

export default DevTeamItem
