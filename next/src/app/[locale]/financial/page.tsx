'use client'
import React from 'react'
import FinancialComponent from '../components/FinancialComponent/FinancialComponent'
import Title from '../components/Title/Title'
import Translator from '../components/translator/Translator'
import styles from './financial.module.scss'

const FinancialPage: React.FC = () => {
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
			value: 'charitydonation',
			id: 'purpose',
		},
	]

	return (
		<div className='container'>
			<section className={styles.section}>
				<div className={styles.section__content}>
					<div className={styles.section__titleWrapper}>
						<Title newStyles={styles.section__title}>
							<Translator>financialSupport</Translator>
						</Title>
					</div>
					<FinancialComponent />
				</div>
			</section>
		</div>
	)
}

export default FinancialPage
