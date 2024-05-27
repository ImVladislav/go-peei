'use client'
import Image from 'next/image'
import styles from './loader.module.scss'

interface ILoaderProps {
	newStyles?: string
	width?: number
	height?: number
}

const Loader = ({ width, height, newStyles }: ILoaderProps) => {
	return (
		<div className={styles.spinner}>
			<Image
				src='/loader/leaf-loader.svg'
				alt='loader'
				width={width}
				height={height}
				className={`${styles.icon} ${newStyles}`}
			/>
		</div>
	)
}

export default Loader
