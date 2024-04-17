'use client'

import { newsItem } from '@/app/types'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { formatDate } from '../../formatDate'
import styles from './newsCardInfo.module.scss'
import { SOCIALS } from './socials.data'

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
							<div className={styles.social__wrap}>
								{SOCIALS.map((item, index) => (
									<Link className={styles.social__svgLink} href='/' key={index}>
										<Image
											src={item.icon}
											width={24}
											height={24}
											alt={item.name}
										/>
									</Link>
								))}
							</div>
							{/* input link */}
							<div className={styles.inputLink__wrap}>
								<input
									value={pageLink}
									readOnly
									className={styles.inputLink__input}
								/>
								<button
									onClick={copyPageLink}
									className={styles.inputLink__btn}
								>
									<Image
										src='/news/copyIcon.svg'
										width={36}
										height={36}
										alt='copy'
									/>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default NewsCardInfo
