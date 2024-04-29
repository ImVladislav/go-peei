// import { Metadata } from "next";
import i18nConfig from '@/i18nConfig'
import { dir } from 'i18next'
import { Exo_2 } from 'next/font/google'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'

import '@/app/styles/index.scss'
// import ExampleClientComponent from "../../../components/ExampleClientComponent";
import TranslationsProvider from '../../../components/TranslationsProvider'
import initTranslations from '../i18n'
import ButtonScrollTop from './components/Button/ButtonScrollTop'
const exo = Exo_2({ subsets: ['latin'] })

export const metadata = {
	title: 'Peei',
	description: 'Generated by create next app',
}

export function generateStaticParams() {
	return i18nConfig.locales.map(locale => ({ locale }))
}

export default async function RootLayout({ children, params: { locale } }) {
	const i18nNamespaces = ['home', 'navbar', 'financial', 'translation']

	const { resources } = await initTranslations(locale, i18nNamespaces)

	return (
		<TranslationsProvider
			namespaces={i18nNamespaces}
			locale={locale}
			resources={resources}
		>
			<html lang={locale} dir={dir(locale)}>
				<body className={exo.className} suppressHydrationWarning={true}>
					<div className='wrapper'>
						<Header locale={locale} />
						<main>{children}</main>
						{/* Button scroll top */}
						<ButtonScrollTop
							nameSvg='UpArrow'
							fill='#0d490d'
							fillHovered='#fffefe'
						/>

						<Footer locale={locale} />
					</div>
					<div id='modal-root'></div>
				</body>
			</html>
		</TranslationsProvider>
	)
}
