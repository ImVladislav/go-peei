import DevTeamList from '../components/DevelopmentTeam/DevTeamList/DevTeamList'
import Title from '../components/Title/Title'
import Translator from '../components/translator/Translator'
import styles from './developmentTeam.module.scss'

export default async function DevelopmentTeam() {
	return (
		<div className={styles.section}>
			<div className='container'>
				<Title>
					<Translator>teamDev</Translator>
					<span className={styles.accentTitle}>
						{' '}
						<Translator>devTeam</Translator>
					</span>
				</Title>
				<DevTeamList />
			</div>
		</div>
	)
}
