import { newsItem } from '@/app/types'
import { getDataId } from '../../../../../libs/getData'
import ButtonSvg from '../../components/Button/ButtonSvg'
import NewsCardInfo from '../../components/NewsItem/NewsCardInfo/NewsCardInfo'
import ReadMore from '../../components/NewsItem/ReadMore/ReadMore'
import styles from './newsItem.module.scss'

const NewsDetails = async ({ params }: { params: { id: string } }) => {
	const { id } = params
	const data: newsItem = await getDataId('news', id)

	return (
		<div className={styles.section}>
			<div className='container'>
				<ButtonSvg
					nameSvg='LeftArrow'
					href='/news'
					styleSvg={styles.section__leftBtn}
					fill='#0d490d'
					fillHovered='#fffefe'
				/>
			</div>
			<NewsCardInfo newsItem={data} />
			<ReadMore currentNewsItemId={data._id} />
		</div>
	)
}

export default NewsDetails
