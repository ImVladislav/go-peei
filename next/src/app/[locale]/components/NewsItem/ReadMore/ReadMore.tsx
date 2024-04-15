import Link from 'next/link'
import styles from './readMore.module.scss'

const ReadMore = () => {
	return (
		<div className={styles.section}>
			<h3 className={styles.section__title}>читайте також</h3>
			<ul className={styles.list}></ul>
			<div className={styles.list__box_link}>
				<Link href='/' className={styles.list__link}>
					Усі новини
				</Link>
			</div>
		</div>
	)
}

export default ReadMore
