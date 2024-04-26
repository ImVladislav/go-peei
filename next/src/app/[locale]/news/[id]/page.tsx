import { newsItem } from '@/app/types'
import Image from 'next/image'
import Link from 'next/link'
import { getDataId } from '../../../../../libs/getData'
import NewsCardInfo from '../../components/NewsItem/NewsCardInfo/NewsCardInfo'
import ReadMore from '../../components/NewsItem/ReadMore/ReadMore'
import styles from './newsItem.module.scss'

const NewsDetails = async ({ params }: { params: { id: string } }) => {
	const { id } = params
	const data: newsItem = await getDataId('news', id)

	return (
		<div className={styles.section}>
			<div className='container'>
				<Link href='/news' className={styles.section__leftBtn}>
					<Image
						src='/news/leftArrow.svg'
						width={24}
						height={24}
						alt='arrow'
						className={styles.section__leftBtnIcon}
					/>
				</Link>
			</div>
			<NewsCardInfo newsItem={data} />
			<ReadMore currentNewsItemId={data._id} />
		</div>
	)
}

export default NewsDetails
