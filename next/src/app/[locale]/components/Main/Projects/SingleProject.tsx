import Image from 'next/image'

import { projectsItem } from '@/app/types'
import Button from '../../Button/Button'

import Link from 'next/link'
import Translator from '../../translator/Translator'
import styles from './projects.module.scss'
// import SupportUSBtnModal from "../../supportUSbtnModal/supportUSbtnModal";
// import { useTranslation } from "react-i18next";
interface ProjectProps {
	project: projectsItem
	locale: string
}

const SingleProject = async ({ project, locale }: ProjectProps) => {
	let progress = (100 / project.total) * project.fundsRaised
	// const { t } = useTranslation();
	const maxLength = 95

	const formatPrice = (price: number) => {
		if (price && typeof price === 'number') {
			const priceToString = price.toString()
			if (priceToString.length > 3) {
				return priceToString.replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
			}
		}
		return price
	}

	return (
		<li className={styles.item}>
			<Link
				className={styles.item__inner}
				href={`/activities/projects/${project._id}`}
			>
				<div className={styles.item__image}>
					<Image
						style={{
							objectFit: 'cover',
						}}
						src={project.imageSrc}
						alt={project.title}
						fill
						sizes='max-width: 360px'
					/>
				</div>

				<h3 className={styles.item__title}>
					<Translator>projects</Translator>"
					{locale === 'uk' ? project.title : project.titleEn}"
				</h3>

				<p className={styles.item__desc}>
					{locale === 'uk'
						? project.description.length > maxLength
							? `${project.description.slice(0, maxLength)}...`
							: project.description
						: project.descriptionEn && project.descriptionEn?.length > maxLength
						? `${project.descriptionEn.slice(0, maxLength)}...`
						: project.descriptionEn}
				</p>
			</Link>
			<div className={styles.item__box}>
				<div className={styles.item__progres_bar}>
					<div
						className={styles.item__progres_bar_fill}
						style={{ width: `${progress}%`, background: '#0d490d' }}
					></div>
				</div>
				<div className={styles.item__progres_bar_text}>
					<div className={styles.item__progres_bar_inner}>
						<p className={styles.item__progres_bar_label}>
							<Translator>collected</Translator>
						</p>
						<p className={styles.item__progres_bar_money}>
							{formatPrice(project.fundsRaised)} грн
						</p>
					</div>
					<div className={styles.item__progres_bar_inner}>
						<p className={styles.item__progres_bar_label}>
							<Translator>totalAmount</Translator>
						</p>
						<p className={styles.item__progres_bar_money}>
							{formatPrice(project.total)} грн
						</p>
					</div>
				</div>
			</div>
			{/* <SupportUSBtnModal
        stylesBtn={styles.item__btn}
        stylesBtnWrap={""}
        btnText={
          <Translator>{project.closed ? "donateСlosed" : "donate"}</Translator>
        }
        agreement={<Translator>agreementLite</Translator>}
      /> */}
			<Button
				newStyles={styles.item__btn}
				isLink
				href={`/activities/projects/${project._id}`}
			>
				<Translator>{project.closed ? 'donateСlosed' : 'donate'}</Translator>
			</Button>
		</li>
	)
}

export default SingleProject
