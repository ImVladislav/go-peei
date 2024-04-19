import { newsItem } from '@/app/types'
import Image from 'next/image'
import Link from 'next/link'
import { getData } from '../../../../../../libs/getData'
import { formatDate } from '../../formatDate'
import styles from './readMore.module.scss'

const ReadMore = async ({
	currentNewsItemId,
}: {
	currentNewsItemId: string
}) => {
	const data: newsItem[] = await getData('news')
	const itemsToShow = data
		.filter(item => item._id !== currentNewsItemId)
		.slice(0, 2)

	return (
		<div className='container'>
			<div className={styles.section}>
				<h3 className={styles.section__title}>читайте також</h3>
				<ul className={styles.news__list}>
					{itemsToShow?.map(item => (
						<li key={item._id} className={styles.news__item}>
							<div className={styles.news__itemWrap}>
								<h3 className={styles.news__title}>{item.title}</h3>
								<div className={styles.news__imgBox}>
									<Image
										src={item.imageSrc}
										alt={item.title}
										fill
										className={styles.news__img}
									/>
								</div>
							</div>
							<p className={styles.news__date}>{formatDate(item.createdAt)}</p>
						</li>
					))}
				</ul>
				<div className={styles.more__box}>
					<Link href='/news' className={styles.more__link}>
						Усі новини
					</Link>
				</div>
			</div>
		</div>
	)
}

export default ReadMore
