'use client'

import { iconsData, initialSocials } from '@/app/constants'
import Link from 'next/link'
import { useState } from 'react'
import SvgComponent from '../../../SvgComponent/SvgComponent'
import styles from './socialsNews.module.scss'

const SocialsNews = () => {
	const [isHovered, setIsHovered] = useState('')
	return (
		<div className={styles.social__wrap}>
			{initialSocials.map(({ href, name }) => (
				<Link
					className={styles.social__svgLink}
					href={href}
					key={name}
					onMouseEnter={() => setIsHovered(name)}
					onMouseLeave={() => setIsHovered('')}
				>
					{iconsData.map(
						icon =>
							icon.name === name && (
								<SvgComponent
									key={icon.name}
									viewBox={icon.viewBox}
									path={icon.path}
									isHovered={isHovered === name}
								/>
							)
					)}
				</Link>
			))}
		</div>
	)
}

export default SocialsNews
