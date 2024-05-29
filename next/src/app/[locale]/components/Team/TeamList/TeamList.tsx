import TeamItem from '../TeamItem/TeamItem'
import { TEAM } from './team-list.data'
import styles from './teamList.module.scss'

const TeamList = () => {
	return (
		<div>
			<section className={styles.section}>
				<ul className={styles.list}>
					{TEAM.map((item, index) => (
						<TeamItem item={item} key={index} />
					))}
				</ul>
			</section>
		</div>
	)
}

export default TeamList
