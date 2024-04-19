'use client'

import { newsItem } from '@/app/types'
import Image from 'next/image'
import React, { useState } from 'react'
import { formatDate } from '../../formatDate'
import InputLinkNews from './InputLinkNews/InputLinkNews'
import SocialsNews from './SocialsNews/SocialsNews'
import styles from './newsCardInfo.module.scss'

const NewsCardInfo: React.FC<{ newsItem: newsItem }> = ({ newsItem }) => {
	const [pageLink, setPageLink] = useState(
		`http://localhost:3000/news/${newsItem._id}`
	)

	const copyPageLink = (): void => {
		navigator.clipboard.writeText(pageLink)
	}
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
						<h3 className={styles.card__title}>{newsItem.title}</h3>
						<p className={styles.card__description}>{newsItem.description}</p>
						{/* box data */}
						<div className={styles.boxData}>
							<p className={styles.boxData__data}>
								<span className={styles.boxData__dataTitle}>
									Опубліковано:{' '}
								</span>
								{formatDate(newsItem.createdAt)}
							</p>
						</div>
						{/* social section */}
						<div className={styles.socialSection}>
							<h3 className={styles.socialSection__title}>Поділитися:</h3>
							<SocialsNews />
							<InputLinkNews pageLink={pageLink} copyPageLink={copyPageLink} />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default NewsCardInfo
