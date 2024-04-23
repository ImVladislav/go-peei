import { newsItem } from '@/app/types'
import Image from 'next/image'
import Link from 'next/link'
import { formatDate } from '../../formatDate'
import styles from './singleNewsItem.module.scss'

const SingleNewsItem = async ({ newsItem }: { newsItem: newsItem }) => {
	return (
		<>
			<li key={newsItem._id} className={styles.newsItem}>
				<Link href={`/news/${newsItem._id}`}>
					<div className={styles.newsItem__wrap}>
						<h3 className={styles.newsItem__title}>{newsItem.title}</h3>
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
				</Link>
			</li>
		</>
	)
}

export default SingleNewsItem
