import DevTeamItem from '../DevTeamItem/DevTeamItem'
import { DEV_TEAM } from './dev-team-list.data'
import styles from './devTeamList.module.scss'

const DevTeamList = () => {
	return (
		<div>
			<section className={styles.section}>
				<ul className={styles.list}>
					{DEV_TEAM.map((item, index) => (
						<DevTeamItem item={item} key={index} />
					))}
				</ul>
			</section>
		</div>
	)
}

export default DevTeamList
