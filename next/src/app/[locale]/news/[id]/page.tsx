import { newsItem } from '@/app/types'
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
					<svg
						width='24'
						height='24'
						viewBox='0 0 24 24'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
						className={styles.section__btnIcon}
					>
						<path
							d='M10 16L6 12M6 12L10 8M6 12H18'
							stroke='#0D490D'
							strokeWidth='1.5'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
					</svg>
				</Link>
			</div>
			<NewsCardInfo newsItem={data} />
			<ReadMore currentNewsItemId={data._id} />
		</div>
	)
}

export default NewsDetails
