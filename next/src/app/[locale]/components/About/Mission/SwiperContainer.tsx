'use client'
import Image from 'next/image'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/scss'
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
			slidesPerView={1.03}
			grabCursor={true}
			modules={[Pagination]}
			spaceBetween={40}
			breakpoints={{
				768: {
					slidesPerView: 2.2,
				},
				1024: {
					slidesPerView: 2.3,
					spaceBetween: 48,
				},
				1200: {
					slidesPerView: 2.6,
				},
				1440: {
					slidesPerView: 3,
					spaceBetween: 0,
				},
			}}
			className={`mySwiper ${styles.swiper}`}
		>
			{data.map((item, index) => (
				<SwiperSlide className={styles.swiper_slide} key={index}>
					<div className={styles.item}>
						<Image src={item.icon} alt='icon' width={17} height={30} />
						<p className={styles.item__desc}>
							<Translator>{item.desc}</Translator>
						</p>
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	)
}

export default SwiperContainer
