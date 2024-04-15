import { newsItem } from '@/app/types'
import NewsCardInfo from '../../components/NewsItem/NewsCardInfo/NewsCardInfo'
import ReadMore from '../../components/NewsItem/ReadMore/ReadMore'
import SocialSection from '../../components/NewsItem/SocialSection/SocialSection'
import Title from '../../components/Title/Title'
import { getDataId } from '../../components/getData'
import styles from '../news.module.scss'

const NewsDetails = async ({ params }: { params: { id: string } }) => {
	const { id } = params
	const data: newsItem = await getDataId('news', id)
	return (
		<div className={styles.section}>
			<Title>новини</Title>
			<NewsCardInfo newsItem={data} />
			<SocialSection />
			<ReadMore />
		</div>
	)
}

export default NewsDetails
