import { newsItem } from '@/app/types'
import Image from 'next/image'
import Link from 'next/link'
import { getDataId } from '../../../../../libs/getData'
import NewsCardInfo from '../../components/NewsItem/NewsCardInfo/NewsCardInfo'
import ReadMore from '../../components/NewsItem/ReadMore/ReadMore'
import styles from '../news.module.scss'

const NewsDetails = async ({ params }: { params: { id: string } }) => {
	const { id } = params
	const data: newsItem = await getDataId('news', id)
	return (
		<div className={styles.section}>
			<div className='container'>
				<Link href='/news' className={styles.section__leftBtn}>
					<Image
						src='/news/leftArrow.svg'
						alt='back to news'
						width={40}
						height={40}
						className={styles.section__btnIcon}
					/>
				</Link>
			</div>
			<NewsCardInfo newsItem={data} />
			<ReadMore currentNewsItemId={data._id} />
		</div>
	)
}

export default NewsDetails
