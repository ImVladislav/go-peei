import TeamList from '../components/Team/TeamList/TeamList'
import Title from '../components/Title/Title'
import Translator from '../components/translator/Translator'
import styles from './team.module.scss'

export default async function Team() {
	return (
		<div className={styles.section}>
			<div className='container'>
				<Title>
					<Translator>our</Translator>
					<span className={styles.accentTitle}>
						{' '}
						<Translator>team</Translator>
					</span>
				</Title>
				<TeamList />
			</div>
		</div>
	)
}
