import { newsItem } from '@/app/types'
import Image from 'next/image'
import Link from 'next/link'
import { getData } from '../../../../../../libs/getData'
import Translator from '../../translator/Translator'
import SingleNewsItem from './SingleNewsItem'
import SwiperContainer from './SwiperContainer'
import styles from './readMore.module.scss'

const ReadMore = async ({
	currentNewsItemId,
}: {
	currentNewsItemId: string
}) => {
	const data: newsItem[] = await getData('news')

	return (
		<div className='container'>
			{/* mobile */}
			<div className={`${styles.section} ${styles.mobile}`}>
				<h3 className={styles.section__title}>
					<Translator>readAlso</Translator>
				</h3>
				<ul className={styles.news__list}>
					{data?.map(
						item =>
							item._id !== currentNewsItemId && (
								<SingleNewsItem key={item._id} newsItem={item} />
							)
					)}
				</ul>
				<div className={styles.more__box}>
					<Link href='/news' className={styles.more__link}>
						<Translator>allNews</Translator>
					</Link>
				</div>
			</div>

			{/* desktop */}
			<div className={`${styles.section} ${styles.desktop}`}>
				<h3 className={styles.section__title}>
					<Translator>readAlso</Translator>
				</h3>

				<div className={styles.btn_wrap}>
					<button className={`s-button-prev ${styles.btn}`}>
						<Image src='/main/icon-next.svg' alt='next' width={8} height={16} />
					</button>
					<button className={`s-button-next ${styles.btn}`}>
						<Image src='/main/icon-prev.svg' alt='prev' width={8} height={16} />
					</button>
				</div>
				<SwiperContainer data={data} currentNewsItemId={currentNewsItemId} />
			</div>
		</div>
	)
}

export default ReadMore
