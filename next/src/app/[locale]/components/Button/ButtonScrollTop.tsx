'use client'

import { iconsData } from '@/app/constants'
import { useEffect, useState } from 'react'
import SvgComponent from '../SvgComponent/SvgComponent'
import styles from './button.module.scss'

interface ButtonScrollTopProps {
	nameSvg: string
	fill?: string
	fillHovered?: string
}

const ButtonScrollTop = ({
	nameSvg,
	fill,
	fillHovered,
}: ButtonScrollTopProps) => {
	const [isHovered, setIsHovered] = useState('')
	const [showScrollToTop, setShowScrollToTop] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			window.scrollY > 400
				? setShowScrollToTop(true)
				: setShowScrollToTop(false)
		}
		window.addEventListener('scroll', handleScroll)
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	const scrollToTop = (): void => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}
	return (
		<div
			className={`${styles.scrollTopBtn} ${
				showScrollToTop ? styles.show : styles.hide
			}`}
			key={nameSvg}
			onMouseEnter={() => setIsHovered(nameSvg)}
			onMouseLeave={() => setIsHovered('')}
			onClick={scrollToTop}
		>
			{iconsData.map(
				icon =>
					icon.name === nameSvg && (
						<SvgComponent
							key={icon.name}
							viewBox={icon.viewBox}
							path={icon.path}
							fill={fill}
							fillHovered={fillHovered}
							isHovered={isHovered === nameSvg}
						/>
					)
			)}
		</div>
	)
}

export default ButtonScrollTop
