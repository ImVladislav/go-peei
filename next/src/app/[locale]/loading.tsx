import Loader from './components/Loader/Loader'
import styles from './main.module.scss'

const Loading = () => {
	return (
		<div className={styles.section}>
			<Loader width={103} height={103} />
		</div>
	)
}

export default Loading
