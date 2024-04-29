import { newsItem } from '@/app/types'
import Image from 'next/image'
import Link from 'next/link'
import { formatDate } from '../../formatDate'
import styles from './singleNewsItem.module.scss'

interface SingleNewsItemProps {
	newsItem: newsItem
	newStyle?: string
}

const SingleNewsItem = async ({ newsItem, newStyle }: SingleNewsItemProps) => {
	return (
		<>
			<li key={newsItem._id} className={`${styles.newsItem} ${newStyle}`}>
				<div className={styles.newsItem__wrap}>
					<Link href={`/news/${newsItem._id}`}>
						<h3 className={styles.newsItem__title}>{newsItem.title}</h3>
					</Link>
					<div className={styles.newsItem__imgBox}>
						<Image
							src={newsItem.imageSrc}
							alt={newsItem.title}
							fill
							className={styles.newsItem__img}
						/>
					</div>
				</div>
				<p className={styles.newsItem__date}>
					{formatDate(newsItem.createdAt)}
				</p>
			</li>
		</>
	)
}

export default SingleNewsItem
