import { getData } from '../../../libs/getData'
import { newsItem, projectsItem, reviewsItem } from '../types'

import styles from './main.module.scss'

const Home = async () => {
	const projects: projectsItem[] = await getData('projects')
	const reviews: reviewsItem[] = await getData('reviews')
	const news: newsItem[] = await getData('news')

	return (
		<div className={styles.wrap}>
			<Hero />
			<WhatWeDo />
			{projects && <Projects data={projects} />}
			{reviews && <Reviews data={reviews} />}
			{news && <News data={news} />}
		</div>
	)
}

export default Home
