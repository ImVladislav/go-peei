'use client'
import { devTeamSocials, iconsData } from '@/app/constants/index'
import Link from 'next/link'
import { useState } from 'react'
import SvgComponent from '../../SvgComponent/SvgComponent'
import styles from './devSocials.module.scss'

const DevSocials = ({ position }: { position: string }) => {
	const [isHovered, setIsHovered] = useState('')

	let socialsToRender = devTeamSocials
	if (position === 'designer') {
		socialsToRender = [
			devTeamSocials[0], // Linkedin
			devTeamSocials[1], // Telegram
			devTeamSocials[2], // Behance
		]
	} else {
		socialsToRender = [
			devTeamSocials[0], // Linkedin
			devTeamSocials[1], // Telegram
			devTeamSocials[3], // Github (instead of Behance)
		]
	}

	return (
		<ul className={styles.wrap}>
			{socialsToRender.map(({ href, name }) => (
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
