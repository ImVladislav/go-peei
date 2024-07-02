'use client'
import { iconsData } from '@/app/constants/index'
import { socialsItem } from '@/app/types'
import Link from 'next/link'
import { useState } from 'react'
import SvgComponent from '../../SvgComponent/SvgComponent'
import styles from './devSocials.module.scss'

const DevSocials = ({ links }: { links: socialsItem[] }) => {
	const [isHovered, setIsHovered] = useState('')

	return (
		<ul className={styles.wrap}>
			{links.map(({ href, name }) => (
				<li className={styles.item} key={name}>
					<Link
						className={styles.link}
						href={href}
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
				</li>
			))}
		</ul>
	)
}

export default DevSocials
