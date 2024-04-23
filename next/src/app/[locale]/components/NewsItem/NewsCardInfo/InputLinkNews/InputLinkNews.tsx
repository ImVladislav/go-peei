import Image from 'next/image'
import styles from './inputLinkNews.module.scss'

const InputLinkNews = ({ pageLink }: { pageLink: string }) => {
	const copyPageLink = (): void => {
		navigator.clipboard.writeText(pageLink)
	}
	return (
		<div className={styles.inputLink__wrap}>
			<input value={pageLink} readOnly className={styles.inputLink__input} />
			<button onClick={copyPageLink} className={styles.inputLink__btn}>
				<Image
					src='/news/copyIcon.svg'
					width={20}
					height={20}
					alt='copy'
					className={styles.inputLink__img}
				/>
			</button>
		</div>
	)
}

export default InputLinkNews
