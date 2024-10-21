'use client'
import { projectsItem } from '@/app/types'
import Link from 'next/link'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import styles from '../../financial/financial.module.scss'
import LiqPayButton from '../../financial/LiqPayButton'
import ButtonSvg from '../Button/ButtonSvg'
import Translator from '../translator/Translator'

interface financialComponentProps {
	project?: projectsItem
	locale?: string
}

const FinancialComponent = ({ project, locale }: financialComponentProps) => {
	const [donationAmount, setDonationAmount] = useState(20)
	const [currency, setCurrency] = useState('UAH')
	const { t, i18n } = useTranslation()
	const currentLanguage = i18n.language
	const [selectedCurrency, setSelectedCurrency] = useState(
		currentLanguage === 'uk' ? 'UAH' : 'USD'
	)
	const [selectedInputBtn, setSelectedInputBtn] = useState(false)
	/* bank details fields data */
	const BANK_DETAILS_FIELDS = [
		{
			key: 'recipient',
			label: 'recipient',
			value: 'publicOrganizationPlatformEcoEnergy',
			id: 'client',
		},
		{
			key: 'iban',
			label: 'iban',
			value: 'ibanNumber',
			id: 'iban',
		},
		{
			key: 'edrpou',
			label: 'edrpou',
			value: 'edrpouNumber',
			id: 'edrpou',
		},
		{
			key: 'purposeOfPayment',
			label: 'purposeOfPayment',
			value: `${t('charitydonation')}: ${
				locale === 'uk' ? project?.title : project?.titleEn
			}`,
			id: 'purpose',
		},
	]

	const handleAmountButtonClick = (amount: number) => {
		setDonationAmount(amount)
	}

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value
		const parsedValue = parseFloat(value)

		if (!isNaN(parsedValue) && parsedValue >= 20) {
			setDonationAmount(parsedValue)
		} else if (parsedValue < 20) {
			setDonationAmount(currency === 'UAH' ? 20 : 5)
		}
	}

	const handleSelectInputBtn = () => {
		setSelectedInputBtn(!selectedInputBtn)
	}

	const handleCurrencyChange = (
		event: React.ChangeEvent<HTMLSelectElement>
	) => {
		const selected = event.target.value
		setSelectedCurrency(selected)

		if (selected === 'USD' || selected === 'EUR') {
			setDonationAmount(5)
		} else {
			setDonationAmount(20)
		}
	}

	const copyToClipboard = (value: string) => {
		navigator.clipboard
			.writeText(value)
			.then(() => {
				console.log('Value copied to clipboard:', value)
			})
			.catch(error => {
				console.error('Failed to copy value to clipboard:', error)
			})
	}

	const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY
	const privateKey = process.env.NEXT_PUBLIC_PRIVATE_KEY

	return (
		<div className={styles.container_mainBlock}>
			{/* left block; financial operationtyles */}
			<div className={styles.container_leftBlock}>
				<div className={styles.amoontBlock}>
					<h2 className={styles.title}>
						<Translator>specifyContributionAmount</Translator>
					</h2>
					<div className={`${styles.amoontBlock} ${styles.donateBtnWrapper}`}>
						<div className={styles.amoontBlock__inputWrapper}>
							<input
								className={styles.fixedAmountDonatInput}
								type='text'
								pattern='\d*'
								placeholder={selectedCurrency === 'UAH' ? '20' : '5'}
								value={donationAmount.toString()}
								onChange={handleInputChange}
							/>
							<p className={styles.amoontBlock__recomendationText}>
								<Translator>minimumContributionAmount</Translator>{' '}
								{selectedCurrency === 'UAH' ? '20' : '5'}{' '}
								{
									{
										UAH: `${locale === 'uk' ? 'грн' : 'uah'}`,
										USD: '$',
										EUR: '€',
									}[selectedCurrency]
								}
							</p>
						</div>
						<div
							className={`${styles.selectBtnWrapper} ${
								selectedInputBtn ? styles.active : ''
							}`}
						>
							<select
								className={`${styles.fixedAmountDonatBtn} ${styles.donatInputBtn}`}
								value={selectedCurrency}
								onChange={handleCurrencyChange}
								onClick={handleSelectInputBtn}
							>
								<option className={styles.amoontBlock__option} value='UAH'>
									UAH
								</option>
								<option className={styles.amoontBlock__option} value='USD'>
									USD
								</option>
								<option className={styles.amoontBlock__option} value='EUR'>
									EUR
								</option>
							</select>
						</div>
					</div>
				</div>
				{/* ammount donate buttons */}
				<div className='buttons'>
					<h2 className={styles.title}>
						<Translator>selectContributionAmount</Translator>
					</h2>
					<div className={styles.donateBtnWrapper}>
						<button
							className={`${styles.fixedAmountDonatBtn} ${styles.marginNone}`}
							onClick={() => handleAmountButtonClick(100.0)}
						>
							100
						</button>
						<button
							className={styles.fixedAmountDonatBtn}
							onClick={() => handleAmountButtonClick(200.0)}
						>
							200
						</button>
						<button
							className={styles.fixedAmountDonatBtn}
							onClick={() => handleAmountButtonClick(300.0)}
						>
							300
						</button>
					</div>
				</div>
				{/* liqpay button */}
				<div className={styles.payBtn} id='liqpay_checkout'>
					<LiqPayButton
						currency={selectedCurrency}
						public_key={publicKey}
						private_key={privateKey}
						amount={donationAmount}
						description={t('charitydonation')}
					/>
				</div>
				{/* offer contract */}
				<Link
					className={styles.offerLink}
					href='/officialDocuments/offert_contract'
				>
					<Translator>termsOfOffer</Translator>
				</Link>
			</div>
			{/* right block; bank details */}
			<div className={styles.container_rightBlock}>
				<div className={styles.bankDetailsBlock}>
					<h2 className={styles.headTitle}>
						<Translator>BankDetails</Translator>
					</h2>
					{BANK_DETAILS_FIELDS.map(field => (
						<div key={field.key} className={styles.bankDetailsBlock__infoField}>
							<h3 className={styles.bankDetailsBlock__subTitle}>
								<Translator>{field.label}</Translator>:
							</h3>
							<div className={styles.bankDetailsBlock__descriptionBlock}>
								<p className={styles.bankDetailsBlock__descriptionBlock__text}>
									<Translator>{field.value}</Translator>
								</p>
								<ButtonSvg
									nameSvg='Copy'
									onClick={() => copyToClipboard(field.value)}
									styleSvg={styles.leftBtn}
									fill='#141414'
									fillHovered='#0d490d'
								/>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default FinancialComponent
