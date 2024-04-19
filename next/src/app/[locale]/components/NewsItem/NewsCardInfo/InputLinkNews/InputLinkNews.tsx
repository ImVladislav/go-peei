import Image from 'next/image'
import styles from './inputLinkNews.module.scss'

interface InputLinkNewsProps {
	pageLink: string
	copyPageLink: () => void
}

const InputLinkNews = ({ pageLink, copyPageLink }: InputLinkNewsProps) => {
	return (
		<div className={styles.inputLink__wrap}>
			<input value={pageLink} readOnly className={styles.inputLink__input} />
			<button onClick={copyPageLink} className={styles.inputLink__btn}>
				<Image src='/news/copyIcon.svg' width={36} height={36} alt='copy' />
			</button>
		</div>
	)
}

export default InputLinkNews
