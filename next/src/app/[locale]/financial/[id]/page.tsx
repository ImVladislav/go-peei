import { projectsItem } from '@/app/types'
import { getDataId } from '../../../../../libs/getData'
import FinancialComponent from '../../components/FinancialComponent/FinancialComponent'
import Title from '../../components/Title/Title'
import Translator from '../../components/translator/Translator'
import styles from '../financial.module.scss'

const FinancialPage = async ({
	params,
}: {
	params: { id: string; locale: string }
}) => {
	const { id, locale } = params

	const data: projectsItem = await getDataId('projects', id)

	return (
		<div className='container'>
			<section className={styles.section}>
				<div className={styles.section__content}>
					<div className={styles.section__titleWrapper}>
						<Title newStyles={styles.section__title}>
							<Translator>financialSupport</Translator>
						</Title>
					</div>
					<FinancialComponent project={data} locale={locale} />
				</div>
			</section>
		</div>
	)
}

export default FinancialPage
