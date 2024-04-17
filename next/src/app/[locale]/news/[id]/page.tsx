import { newsItem } from '@/app/types'
import { getDataId } from '../../../../../libs/getData'
import NewsCardInfo from '../../components/NewsItem/NewsCardInfo/NewsCardInfo'
import ReadMore from '../../components/NewsItem/ReadMore/ReadMore'
import Title from '../../components/Title/Title'
import styles from '../news.module.scss'

const NewsDetails = async ({ params }: { params: { id: string } }) => {
	const { id } = params
	const data: newsItem = await getDataId('news', id)
	return (
		<div className={styles.section}>
			<div className='container'>
				<Title>новини</Title>
			</div>
			<NewsCardInfo newsItem={data} />
			<ReadMore />
		</div>
	)
}

export default NewsDetails
