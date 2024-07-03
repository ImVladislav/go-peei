import Loader from './components/Loader/Loader'
import styles from './main.module.scss'

const Loading = () => {
	return (
		<div className={styles.loadingWrapper}>
			<Loader width={60} height={60} />
		</div>
	)
}

export default Loading
