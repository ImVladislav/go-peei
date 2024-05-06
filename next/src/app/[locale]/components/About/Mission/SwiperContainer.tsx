'use client'
import Image from 'next/image'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper } from 'swiper/react'
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
import Translator from '../../translator/Translator'
import styles from './mission.module.scss'

type MissionItem = {
	icon: string
	desc: string
}

const SwiperContainer = ({ data }: { data: MissionItem[] }) => {
	return (
		<Swiper
			slidesPerView={2}
			spaceBetween={24}
			navigation={{
				nextEl: '.s-button-next',
				prevEl: '.s-button-prev',
			}}
			modules={[Pagination, Navigation]}
			breakpoints={{
				768: {
					slidesPerView: 2,
				},
				900: {
					slidesPerView: 2.5,
				},

				1024: {
					slidesPerView: 2.5,
				},
				1228: {
					slidesPerView: 2.7,
				},
				1440: {
					slidesPerView: 3,
				},
			}}
			className={`mySwiper ${styles.swiper}`}
		>
			{data.map((item, index) => (
				<li key={index} className={styles.item}>
					<Image src={item.icon} alt='icon' width={17} height={30} />
					<p className={styles.item__desc}>
						<Translator>{item.desc}</Translator>
					</p>
				</li>
			))}
		</Swiper>
	)
}

export default SwiperContainer
