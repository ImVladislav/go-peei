'use client'
import React, { useState } from 'react'
import s from '../Financial.module.scss'
import LiqPayButton from '../LiqPayButton'

import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import Title from '../../components/Title/Title'
import Translator from '../../components/translator/Translator'

import Image from 'next/image'
import CopySvg from '../../../../../public/financial/copy.svg'

const FinancialPage: React.FC = () => {
	const [donationAmount, setDonationAmount] = useState(20)
	const [currency, setCurrency] = useState('UAH')
	const { t, i18n } = useTranslation()
	const currentLanguage = i18n.language
	const [selectedCurrency, setSelectedCurrency] = useState(
		currentLanguage === 'uk' ? 'UAH' : 'USD'
	)

	const handleAmountButtonClick = (amount: number) => {
		setDonationAmount(amount)
	}

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value
		const parsedValue = parseFloat(value)

		if (!isNaN(parsedValue) && parsedValue >= 20) {
			setDonationAmount(parsedValue)
		} else if (parsedValue < 20) {
			setDonationAmount(20)
		}
	}

	const handleCurrencyChange = (
		event: React.ChangeEvent<HTMLSelectElement>
	) => {
		setSelectedCurrency(event.target.value)
	}

	const [fields] = useState([
		// {
		// 	key: 'accountNumberFormat',
		// 	label: t('accountNumberFormat'),
		// 	value: t('platformEcoEnergyInitiatives'),
		// 	id: 'account',
		// },
		{
			key: 'recipient',
			label: t('recipient'),
			value: t('publicOrganizationPlatformEcoEnergy'),
			id: 'client',
		},
		{
			key: 'iban',
			label: t('iban'),
			value: t('ibanNumber'),
			id: 'iban',
		},
		{
			key: 'edrpou',
			label: t('edrpou'),
			value: t('edrpouNumber'),
			id: 'edrpou',
		},
		{
			key: 'purposeOfPayment',
			label: t('purposeOfPayment'),
			value: t('charitydonation'),
			id: 'purpose',
		},
	])

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
		<div className='container'>
			<section className={s.section}>
				<div className={s.section__content}>
					<div className={s.section__titleWrapper}>
						<Title newStyles={s.section__title}>
							<Translator>financialSupport</Translator>
						</Title>
					</div>
					<div className={s.container_mainBlock}>
						{/* left block; financial operations */}
						<div className={s.container_leftBlock}>
							<div className={s.amoontBlock}>
								<h2 className={s.title}>
									<Translator>selectContributionAmount</Translator>
								</h2>
								<div className={`${s.amoontBlock} ${s.donateBtnWrapper}`}>
									<div className={s.amoontBlock__inputWrapper}>
										<input
											className={s.fixedAmountDonatInput}
											type='text'
											pattern='\d*'
											placeholder={t('amount')}
											value={donationAmount.toString()}
											onChange={handleInputChange}
										/>
										<p className={s.amoontBlock__recomendationText}>
											Мінімальна сума внеску 20 грн
										</p>
									</div>
									<select
										className={`${s.fixedAmountDonatBtn} ${s.donatInputBtn}`}
										value={selectedCurrency}
										onChange={handleCurrencyChange}
									>
										<option className={s.amoontBlock__option} value='UAH'>
											UAH
										</option>
										<option className={s.amoontBlock__option} value='USD'>
											USD
										</option>
										<option className={s.amoontBlock__option} value='EUR'>
											EUR
										</option>
									</select>
								</div>
							</div>
							{/* ammount donate buttons */}
							<div className='buttons'>
								<h2 className={s.title}>Оберіть суму внеску</h2>
								<div className={s.donateBtnWrapper}>
									<button
										className={`${s.fixedAmountDonatBtn} ${s.marginNone}`}
										onClick={() => handleAmountButtonClick(100.0)}
									>
										100
									</button>
									<button
										className={s.fixedAmountDonatBtn}
										onClick={() => handleAmountButtonClick(200.0)}
									>
										200
									</button>
									<button
										className={s.fixedAmountDonatBtn}
										onClick={() => handleAmountButtonClick(300.0)}
									>
										300
									</button>
								</div>
							</div>
							{/* liqpay button */}
							<div className={s.payBtn} id='liqpay_checkout'>
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
								className={s.offerLink}
								href='/officialDocuments/offert_contract'
							>
								{t('termsOfOffer')}
							</Link>
						</div>
						{/* right block; bank details */}
						<div className={s.container_rightBlock}>
							<div className={s.bankDetailsBlock}>
								<h2 className={s.headTitle}>
									<Translator>BankDetails</Translator>
								</h2>
								{fields.map(field => (
									<div
										key={field.key}
										className={s.bankDetailsBlock__infoField}
									>
										<h3 className={s.bankDetailsBlock__subTitle}>
											{field.label}:
										</h3>
										<div className={s.bankDetailsBlock__descriptionBlock}>
											<p className={s.bankDetailsBlock__descriptionBlock__text}>
												{field.value}
											</p>
											<button
												className={
													s.bankDetailsBlock__descriptionBlock__copyBtn
												}
												onClick={() => copyToClipboard(field.value)}
											>
												<Image src={CopySvg} alt={'Copy'}></Image>
											</button>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default FinancialPage
