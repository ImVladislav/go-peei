'use client'

import { iconsData } from '@/app/constants'
import Link from 'next/link'
import { useState } from 'react'
import SvgComponent from '../SvgComponent/SvgComponent'

interface iconProps {
	nameSvg: string
	href?: string
	onClick?: () => void
	styleSvg: string
	fill?: string
	fillHovered?: string
}

const ButtonSvg = ({
	nameSvg,
	href = '#',
	onClick,
	styleSvg,
	fill,
	fillHovered,
}: iconProps) => {
	const [isHovered, setIsHovered] = useState('')
	return (
		<div>
			<Link
				className={styleSvg}
				href={href}
				onClick={onClick}
				key={nameSvg}
				onMouseEnter={() => setIsHovered(nameSvg)}
				onMouseLeave={() => setIsHovered('')}
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
			</Link>
		</div>
	)
}

export default ButtonSvg
