import Image from 'next/image'
import styles from './teamItem.module.scss'

interface itemProps {
	item: {
		image: string
		name: string
		about: string
		position: string
		email?: string
	}
}

const TeamItem = ({ item }: itemProps, key: string) => {
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
						<h3 className={styles.item__title}>{item.name}</h3>
						<p className={styles.item__position}>{item.position}</p>
						<div className={styles.item__emailWrapper}>
							<Image src='team/Email.svg' alt='email' width={24} height={24} />
							<p className={styles.item__email}>{item.email}</p>
						</div>
					</div>
				</div>

				<p className={styles.item__about}>{item.about}</p>
			</li>
		</>
	)
}

export default TeamItem
