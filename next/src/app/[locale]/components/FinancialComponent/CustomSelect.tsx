import { useState } from 'react'
import styles from '../../financial/financial.module.scss'

interface CustomSelectProps {
	selectedCurrency: string
	setSelectedCurrency: (currency: string) => void
}

const CustomSelect = ({
	selectedCurrency,
	setSelectedCurrency,
}: CustomSelectProps) => {
	const [isOpen, setIsOpen] = useState<boolean>(false)
	const currencies = ['UAH', 'USD', 'EUR']

	const handleOptionClick = (currency: string) => {
		setSelectedCurrency(currency)
		setIsOpen(false)
	}

	return (
		<div className={styles.selectBtnBlock}>
			<div
				className={`${styles.selectBtn} ${isOpen ? styles.active : ''}`}
				onClick={() => setIsOpen(!isOpen)}
			>
				<p className={styles.selectBtn__itemText}>{selectedCurrency}</p>
				<div className={styles.svgIcon__thumb}>
					<svg
						width='11'
						height='6'
						viewBox='0 0 11 6'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
						className={styles.svgIcon}
					>
						<path d='M5.5 5.5L0.5 0.5H10.5L5.5 5.5Z' fill='#1C1B1F' />
					</svg>
				</div>
			</div>

			{isOpen && (
				<ul className={`${styles.optionsList} ${isOpen ? styles.active : ''}`}>
					{currencies.map(currency => (
						<li
							key={currency}
							className={styles.optionsList__option}
							onClick={() => handleOptionClick(currency)}
						>
							<p className={styles.optionsList__item}>{currency}</p>
						</li>
					))}
				</ul>
			)}
		</div>
	)
}

export default CustomSelect
