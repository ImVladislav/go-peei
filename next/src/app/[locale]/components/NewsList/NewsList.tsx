'use client'

import { newsItem } from '@/app/types'
import { useState } from 'react'
import SingleNewsItem from '../NewsItem/ReadMore/SingleNewsItem'
import Translator from '../translator/Translator'
import styles from './newsList.module.scss'

const NewsList = ({ data }: { data: newsItem[] }) => {
	const [showMore, setShowMore] = useState<boolean>(false)
	const handleToggleShowMore = (): void => {
		setShowMore(prevShowMore => !prevShowMore)
	}

	return (
		<>
			{/* mobile */}
			<div className={`${styles.section} ${styles.mobile}`}>
				<ul className={styles.list}>
					{data?.slice(0, showMore ? data.length : 4).map(item => (
						<SingleNewsItem
							key={item._id}
							newsItem={item}
							newStyle={styles.list__item}
						/>
					))}
				</ul>

				{data?.length > 4 && (
					<button onClick={handleToggleShowMore} className={styles.showMoreBtn}>
						<Translator>
							{showMore ? 'buttonHide' : 'buttonShowMore'}
						</Translator>
					</button>
				)}
			</div>

			{/* desktop */}
			<div className={`${styles.section} ${styles.desktop}`}>
				<ul className={styles.list}>
					{data?.slice(0, showMore ? data.length : 6).map(item => (
						<SingleNewsItem
							key={item._id}
							newsItem={item}
							newStyle={styles.list__item}
						/>
					))}
				</ul>

				{data?.length > 6 && (
					<button onClick={handleToggleShowMore} className={styles.showMoreBtn}>
						<Translator>
							{showMore ? 'buttonHide' : 'buttonShowMore'}
						</Translator>
					</button>
				)}
			</div>
		</>
	)
}

export default NewsList
