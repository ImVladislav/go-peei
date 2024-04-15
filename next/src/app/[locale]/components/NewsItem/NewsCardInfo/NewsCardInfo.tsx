import { newsItem } from '@/app/types'
import React from 'react'
import { formatDate } from '../../formatDate'
import styles from './newsCardInfo.module.scss'

const NewsCardInfo: React.FC<{ newsItem: newsItem }> = ({ newsItem }) => {
	const imgStyle: React.CSSProperties = {
		background: `url(${newsItem.imageSrc})`,
		width: '360px',
		height: '180px',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
	}
	return (
		<div className={styles.section}>
			<div className={styles.card}>
				<div style={imgStyle}></div>
				<div className={styles.card__wrapDescription}>
					<h3 className={styles.card__title}>{newsItem.title}</h3>
					<p className={styles.card__description}>{newsItem.description}</p>
					<p className={styles.card__data}>
						<span className={styles.card__dataTitle}>Опубліковано: </span>
						{formatDate(newsItem.createdAt)}
					</p>
				</div>
			</div>
		</div>
	)
}

export default NewsCardInfo
