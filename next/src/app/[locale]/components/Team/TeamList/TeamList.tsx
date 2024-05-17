import Image from 'next/image'
import { TEAM } from './team-list.data'
import styles from './teamList.module.scss'

const TeamList = () => {
	return (
		<div>
			<section className={styles.section}>
				<ul className={styles.list}>
					{TEAM.map((item, index) => (
						<li key={index}>
							<div className={styles.item__imgWrapper}>
								<Image
									src={item.image}
									alt={item.name}
									fill
									className={styles.item__img}
								/>
							</div>
							<h3 className={styles.item__title}>{item.name}</h3>
							<p className={styles.item__position}>{item.position}</p>
							<div className={styles.item__emailWrapper}>
								<Image
									src='team/Email.svg'
									alt='email'
									width={24}
									height={24}
								/>
								<p className={styles.item__email}>{item.email}</p>
							</div>
							<p className={styles.item__about}>{item.about}</p>
						</li>
					))}
				</ul>
			</section>
		</div>
	)
}

export default TeamList
