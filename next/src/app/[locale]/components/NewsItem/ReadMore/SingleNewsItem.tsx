import { newsItem } from '@/app/types'
import Image from 'next/image'
import Link from 'next/link'
import { formatDate } from '../../formatDate'
import styles from './singleNewsItem.module.scss'

interface SingleNewsItemProps {
	newsItem: newsItem
	newStyle?: string
	locale: string
}

const SingleNewsItem = async ({
	newsItem,
	newStyle,
	locale,
}: SingleNewsItemProps) => {
	return (
		<>
			<li key={newsItem._id} className={`${styles.newsItem} ${newStyle}`}>
				<Link
					href={`/news/${newsItem._id}`}
					className={styles.newsItem__titleLink}
				>
					<div className={styles.newsItem__wrap}>
						<h3 className={styles.newsItem__title}>
							{locale === 'uk' ? newsItem.title : newsItem.titleEn}
						</h3>

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
