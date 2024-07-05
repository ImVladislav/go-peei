'use client'

import { newsItem } from '@/app/types'
import Image from 'next/image'
import { useState } from 'react'
import PhotoSwiper from '../../../components/PhotoSwiper/PhotoSwiper'
import { formatDate } from '../../formatDate'
import Translator from '../../translator/Translator'
import InputLinkNews from './InputLinkNews/InputLinkNews'
import SocialsNews from './SocialsNews/SocialsNews'
import styles from './newsCardInfo.module.scss'

const NewsCardInfo = ({
	newsItem,
	locale,
}: {
	newsItem: newsItem
	locale: string
}) => {
	const [pageLink, setPageLink] = useState(
		`https://peei.org.ua/uk/news/${newsItem._id}`
	)

	return (
		<div className={styles.section}>
			{/* card section */}
			<div className={styles.card}>
				<div className={styles.card__imgWrapper}>
					<Image
						src={newsItem.imageSrc}
						alt={newsItem.title}
						fill
						className={styles.card__img}
					/>
				</div>
				<div className='container'>
					<div className={styles.card__wrapDescription}>
						<h3 className={styles.card__title}>
							{locale === 'uk' ? newsItem.title : newsItem.titleEn}
						</h3>
						<p className={styles.card__description}>
							{locale === 'uk' ? newsItem.description : newsItem.descriptionEn}
						</p>
					</div>

					{/* photo slider */}
					<div className={styles.boxPhoto}>
						{newsItem.photo?.length !== 0 && (
							<div>
								{newsItem.photo && <PhotoSwiper data={newsItem.photo} />}
							</div>
						)}
					</div>

					<div className={styles.bottomInfoWrap}>
						{/* box data */}
						<div className={styles.boxData}>
							<p className={styles.boxData__data}>
								<span className={styles.boxData__dataTitle}>
									<Translator>publishedBy</Translator>:{' '}
								</span>
								{formatDate(newsItem.createdAt)}
							</p>
						</div>
						{/* social section */}
						<div className={styles.socialSection}>
							<div className={styles.socialSection__topWrap}>
								<h3 className={styles.socialSection__title}>
									<Translator>toShare</Translator>:
								</h3>
								<SocialsNews />
							</div>
							<InputLinkNews pageLink={pageLink} />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default NewsCardInfo
