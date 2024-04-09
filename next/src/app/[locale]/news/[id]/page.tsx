import Image from 'next/image'

import { newsItem } from '@/app/types'
// import Title from '../../components/Title/Title'
import { getDataId } from '../../components/getData'

import styles from '../news.module.scss'

const NewsDetails = async ({ params }: { params: { id: string } }) => {
	const { id } = params
	const data: newsItem = await getDataId('news', id)
	return (
		<div className='container'>
			<div className={styles.card}>
				<div className={styles.card__img}>
					<Image
						style={{
							objectFit: 'cover',
							objectPosition: 'center',
						}}
						src={data.imageSrc}
						alt={data.title}
						width={360}
						height={180}
					/>
				</div>
				<div className={styles.card__wrapDescription}>
					<h3 className={styles.card__title}>{data.title}</h3>
					<p className={styles.card__description}>{data.description}</p>
					<p className={styles.card__data}>
						<span className={styles.card__dataTitle}>Опубліковано: </span>
						{data.date}
					</p>
				</div>
			</div>
		</div>
	)
}

export default NewsDetails
