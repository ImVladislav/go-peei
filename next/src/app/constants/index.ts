import {
	SvgProps,
	contactItem,
	environmentalProtectionItem,
	navLinks,
	socialsItem,
	workWithChildrenItem,
} from '@/app/types'

// NAVIGATION
export const navFooter: navLinks[] = [
	{ href: '/about', key: 'aboutUs', label: 'aboutUs' },
	{ href: '/team', key: 'ourTeam', label: 'ourTeam' },
	{ key: 'news', label: 'news', href: '/news' },
	// {
	//   href: "/ourPartners",
	//   key: "ourPartners",
	//   label: "ourPartners",
	// },
	{
		href: '/officialDocuments',
		key: 'officialDocuments',
		label: 'officialDocuments',
	},
	// { href: "/rule", key: "rule", label: "boardOfManagement" },
	{
		key: 'workWithChildren',
		label: 'workWithChildren',
		href: '/activities/work-with-children',
	},
	{
		key: 'workWithTeenagers',
		label: 'workWithTeenagers',
		href: '/activities/work-with-teenagers',
	},
	{
		key: 'charityActions',
		label: 'charityActions',
		href: '/activities/projects',
	},
	{
		key: 'environmentalProtection',
		label: 'environmentalProtection',
		href: '/activities/environmental-protection',
	},

	{
		key: 'financially',
		label: 'financially',
		href: 'https://payhub.com.ua/#/service/98840',
	},
	{
		key: 'partnership',
		label: 'partnership',
		href: '/support/partnership',
	},
	{
		key: 'volunteering',
		label: 'volunteering',
		href: '/support/volonter',
	},
	// { href: "/reports", key: "reports", label: "reports" },
	{ href: '/contacts', key: 'contacts', label: 'contacts' },
]

// Header contacts
export const headerContacts: contactItem[] = [
	{ href: 'tel:+380506558561', name: '+38(050) 655 85 61' },
	{ href: 'mailto:copeeiua@gmail.com', name: 'copeeiua@gmail.com' },
]

// Socials
export const initialSocials: socialsItem[] = [
	{ href: 'https://web.whatsapp.com/', name: 'WhatsUp' },
	{ href: 'https://www.instagram.com/', name: 'Instagram' },
	{ href: 'https://linkedin.com/', name: 'Linkedin' },
	{ href: 'https://www.facebook.com/PLATFORMECOENERGY', name: 'Facebook' },
	{ href: 'https://www.youtube.com/', name: 'YouTube' },
	{ href: 'https://web.telegram.org/', name: 'Telegram' },
]

// Socials Dev Team
export const TarovitaSocials: socialsItem[] = [
	{
		href: 'https://www.linkedin.com/in/lidiia-tarovyta?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
		name: 'Linkedin',
	},
	{ href: 'https://t.me/LidiiaTarovyta', name: 'Telegram' },
	{ href: 'https://www.behance.net/lidiiataro', name: 'Behance' },
]

export const OlgaSocials: socialsItem[] = [
	{
		href: 'https://www.linkedin.com/in/olha-lypetska/',
		name: 'Linkedin',
	},
	{ href: 'https://t.me/Olha56', name: 'Telegram' },
	{ href: 'https://www.behance.net/Olha_Lypetska', name: 'Behance' },
]

export const PrunenkoSocials: socialsItem[] = [
	// {
	// 	href: 'https://www.linkedin.com/',
	// 	name: 'Linkedin',
	// },
	{ href: 'https://t.me/IrynaPrunenko', name: 'Telegram' },
	{ href: 'https://github.com/IrynaPrn/Personal', name: 'Github' },
]

export const BodnaryukSocials: socialsItem[] = [
	{
		href: 'https://www.linkedin.com/in/iryna-bodnariuk',
		name: 'Linkedin',
	},
	{ href: 'https://t.me/Aanggelss', name: 'Telegram' },
	{ href: 'https://github.com/Irka-Bodnariuk', name: 'Github' },
]

export const GladyshkoSocials: socialsItem[] = [
	{
		href: 'https://www.linkedin.com/in/vlad-gladyshko?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BufdCKLrkR1mw80kFNWTBYQ%3D%3D',
		name: 'Linkedin',
	},
	{ href: 'https://t.me/YaVladislavv', name: 'Telegram' },
	{ href: 'https://github.com/ImVladislav', name: 'Github' },
]

export const ZavertayloSocials: socialsItem[] = [
	{
		href: 'https://www.linkedin.com/in/vladislav-zavertaylo-480626264/',
		name: 'Linkedin',
	},
	{ href: 'https://t.me/VladislavZaver', name: 'Telegram' },
	{ href: 'https://github.com/vladislavzaver91', name: 'Github' },
]

// all svg for the hover to work
export const iconsData: SvgProps[] = [
	{
		path: 'M0 2.219C0 1.2695 0.789 0.5 1.7625 0.5H22.2375C23.211 0.5 24 1.2695 24 2.219V22.781C24 23.7305 23.211 24.5 22.2375 24.5H1.7625C0.789 24.5 0 23.7305 0 22.781V2.219ZM7.4145 20.591V9.7535H3.813V20.591H7.4145ZM5.6145 8.273C6.87 8.273 7.6515 7.442 7.6515 6.401C7.629 5.3375 6.8715 4.529 5.6385 4.529C4.4055 4.529 3.6 5.339 3.6 6.401C3.6 7.442 4.3815 8.273 5.5905 8.273H5.6145ZM12.9765 20.591V14.5385C12.9765 14.2145 13.0005 13.8905 13.0965 13.6595C13.356 13.013 13.9485 12.3425 14.9445 12.3425C16.248 12.3425 16.7685 13.3355 16.7685 14.7935V20.591H20.37V14.375C20.37 11.045 18.594 9.497 16.224 9.497C14.313 9.497 13.4565 10.547 12.9765 11.2865V11.324H12.9525L12.9765 11.2865V9.7535H9.3765C9.4215 10.7705 9.3765 20.591 9.3765 20.591H12.9765Z',
		name: 'Linkedin',
		viewBox: '0 0 24 25',
	},
	{
		path: 'M24 12.5735C24 5.90454 18.6269 0.498535 11.9999 0.498535C5.36995 0.500035 -0.00305176 5.90454 -0.00305176 12.575C-0.00305176 18.6005 4.38595 23.5955 10.1219 24.5015V16.064H7.07695V12.575H10.1249V9.91253C10.1249 6.88704 11.9174 5.21603 14.6579 5.21603C15.9719 5.21603 17.3444 5.45154 17.3444 5.45154V8.42154H15.8309C14.3414 8.42154 13.8764 9.35303 13.8764 10.3085V12.5735H17.2034L16.6724 16.0625H13.8749V24.5C19.6109 23.594 24 18.599 24 12.5735Z',
		name: 'Facebook',
		viewBox: '0 0 24 25',
	},
	{
		path: 'M12.0765 0.498535H12.21C13.443 0.503035 19.6905 0.548035 21.375 1.00104C21.8842 1.13929 22.3483 1.40877 22.7207 1.78255C23.0932 2.15633 23.361 2.62131 23.4975 3.13103C23.649 3.70103 23.7555 4.45553 23.8275 5.23404L23.8425 5.39004L23.8755 5.78003L23.8875 5.93603C23.985 7.30703 23.997 8.59103 23.9985 8.87153V8.98403C23.997 9.27503 23.9835 10.646 23.8755 12.074L23.8635 12.2315L23.85 12.3875C23.775 13.2455 23.664 14.0975 23.4975 14.7245C23.361 15.2343 23.0932 15.6992 22.7207 16.073C22.3483 16.4468 21.8842 16.7163 21.375 16.8545C19.635 17.3225 13.0215 17.3555 12.105 17.357H11.892C11.4285 17.357 9.5115 17.348 7.5015 17.279L7.2465 17.27L7.116 17.264L6.8595 17.2535L6.603 17.243C4.938 17.1695 3.3525 17.051 2.622 16.853C2.11294 16.7149 1.64902 16.4457 1.27658 16.0722C0.904129 15.6987 0.636185 15.234 0.4995 14.7245C0.333 14.099 0.222 13.2455 0.147 12.3875L0.135 12.23L0.123 12.074C0.0485451 11.0577 0.00752298 10.0391 0 9.02003L0 8.83554C0.003 8.51303 0.015 7.39853 0.096 6.16853L0.1065 6.01403L0.111 5.93603L0.123 5.78003L0.156 5.39004L0.171 5.23404C0.243 4.45553 0.3495 3.69953 0.501 3.13103C0.637456 2.62131 0.905298 2.15633 1.27776 1.78255C1.65022 1.40877 2.11426 1.13929 2.6235 1.00104C3.354 0.806035 4.9395 0.686035 6.6045 0.611035L6.8595 0.600535L7.1175 0.591535L7.2465 0.587035L7.503 0.576535C8.93056 0.530641 10.3587 0.505138 11.787 0.500035L12.0765 0.498535ZM9.6 5.31353V12.5405L15.8355 8.92853L9.6 5.31353Z',
		name: 'YouTube',
		viewBox: '0 0 24 18',
	},
	{
		path: 'M20.4015 3.98908C19.3014 2.87833 17.9911 1.99775 16.5471 1.39872C15.1031 0.799696 13.5543 0.494209 11.991 0.500083C5.4405 0.500083 0.102 5.83708 0.096 12.3891C0.096 14.4876 0.645 16.5291 1.6815 18.3366L0 24.5001L6.306 22.8471C8.04973 23.7984 10.0046 24.2962 11.991 24.2946H11.997C18.549 24.2946 23.886 18.9576 23.892 12.3996C23.8933 10.8367 23.5855 9.28894 22.9862 7.8455C22.3869 6.40206 21.5094 5.09143 20.4015 3.98908ZM11.991 22.2816C10.2198 22.2802 8.48134 21.8036 6.957 20.9016L6.597 20.6856L2.856 21.6666L3.855 18.0171L3.621 17.6406C2.63071 16.0661 2.10697 14.2431 2.1105 12.3831C2.1105 6.94408 6.546 2.50708 11.997 2.50708C13.2956 2.50475 14.5818 2.75949 15.7815 3.25662C16.9812 3.75375 18.0706 4.48342 18.987 5.40358C19.9063 6.32031 20.6352 7.4099 21.1315 8.60957C21.6279 9.80925 21.8819 11.0953 21.879 12.3936C21.873 17.8521 17.4375 22.2816 11.991 22.2816ZM17.4135 14.8806C17.118 14.7321 15.6585 14.0136 15.384 13.9116C15.111 13.8141 14.9115 13.7631 14.7165 14.0601C14.517 14.3556 13.947 15.0291 13.776 15.2226C13.605 15.4221 13.428 15.4446 13.131 15.2976C12.8355 15.1476 11.877 14.8356 10.743 13.8201C9.858 13.0326 9.2655 12.0576 9.0885 11.7621C8.9175 11.4651 9.072 11.3061 9.2205 11.1576C9.351 11.0256 9.516 10.8096 9.6645 10.6386C9.8145 10.4676 9.864 10.3416 9.9615 10.1436C10.059 9.94258 10.0125 9.77158 9.939 9.62308C9.864 9.47458 9.2715 8.00908 9.021 7.41808C8.781 6.83458 8.5365 6.91558 8.3535 6.90808C8.1825 6.89758 7.983 6.89758 7.7835 6.89758C7.63286 6.90142 7.48464 6.9363 7.3481 7.00005C7.21156 7.06381 7.08965 7.15505 6.99 7.26808C6.717 7.56508 5.9535 8.28358 5.9535 9.74908C5.9535 11.2146 7.0185 12.6231 7.1685 12.8226C7.3155 13.0221 9.2595 16.0206 12.243 17.3106C12.948 17.6181 13.503 17.7996 13.9365 17.9376C14.649 18.1656 15.2925 18.1311 15.8055 18.0576C16.3755 17.9706 17.562 17.3376 17.8125 16.6431C18.0585 15.9471 18.0585 15.3531 17.9835 15.2286C17.91 15.1026 17.7105 15.0291 17.4135 14.8806Z',
		name: 'WhatsUp',
		viewBox: '0 0 24 25',
	},
	{
		path: 'M24 12C24 15.1826 22.7357 18.2348 20.4853 20.4853C18.2348 22.7357 15.1826 24 12 24C8.8174 24 5.76516 22.7357 3.51472 20.4853C1.26428 18.2348 0 15.1826 0 12C0 8.8174 1.26428 5.76516 3.51472 3.51472C5.76516 1.26428 8.8174 0 12 0C15.1826 0 18.2348 1.26428 20.4853 3.51472C22.7357 5.76516 24 8.8174 24 12ZM12.4305 8.859C11.2625 9.345 8.9295 10.35 5.4315 11.874C4.8645 12.099 4.567 12.32 4.539 12.537C4.494 12.9015 4.9515 13.0455 5.574 13.242L5.8365 13.3245C6.4485 13.524 7.2735 13.7565 7.701 13.7655C8.091 13.7755 8.525 13.6155 9.003 13.2855C12.272 11.0795 13.959 9.9645 14.064 9.9405C14.139 9.9225 14.244 9.9015 14.313 9.9645C14.382 10.0275 14.376 10.1445 14.3685 10.176C14.3235 10.3695 12.528 12.0375 11.5995 12.9015C11.31 13.1715 11.1045 13.362 11.0625 13.4055C10.97 13.5 10.876 13.5931 10.7805 13.6845C10.2105 14.2335 9.7845 14.6445 10.803 15.3165C11.2935 15.6405 11.6865 15.906 12.078 16.173C12.504 16.464 12.93 16.7535 13.482 17.1165C13.622 17.2085 13.757 17.302 13.887 17.397C14.3835 17.751 14.832 18.069 15.3825 18.018C15.7035 17.988 16.035 17.688 16.203 16.788C16.6005 14.6625 17.382 10.059 17.562 8.1615C17.5733 8.00377 17.5668 7.84526 17.5425 7.689C17.528 7.56301 17.467 7.44696 17.3715 7.3635C17.2348 7.26965 17.0723 7.22088 16.9065 7.224C16.4565 7.2315 15.762 7.473 12.4305 8.859Z',
		name: 'Telegram',
		viewBox: '0 0 24 24',
	},
	{
		path: 'M12 0.5C8.7435 0.5 8.334 0.515 7.0545 0.572C5.775 0.632 4.9035 0.833 4.14 1.13C3.33877 1.43049 2.61321 1.9031 2.0145 2.5145C1.4031 3.11321 0.930488 3.83877 0.63 4.64C0.333 5.402 0.1305 6.275 0.072 7.55C0.015 8.8325 0 9.2405 0 12.5015C0 15.7595 0.015 16.1675 0.072 17.447C0.132 18.725 0.333 19.5965 0.63 20.36C0.9375 21.149 1.347 21.818 2.0145 22.4855C2.6805 23.153 3.3495 23.564 4.1385 23.87C4.9035 24.167 5.7735 24.3695 7.0515 24.428C8.3325 24.485 8.7405 24.5 12 24.5C15.2595 24.5 15.666 24.485 16.947 24.428C18.2235 24.368 19.098 24.167 19.8615 23.87C20.6622 23.5693 21.3872 23.0967 21.9855 22.4855C22.653 21.818 23.0625 21.149 23.37 20.36C23.6655 19.5965 23.868 18.725 23.928 17.447C23.985 16.1675 24 15.7595 24 12.5C24 9.2405 23.985 8.8325 23.928 7.5515C23.868 6.275 23.6655 5.402 23.37 4.64C23.0695 3.83877 22.5969 3.11321 21.9855 2.5145C21.3868 1.9031 20.6612 1.43049 19.86 1.13C19.095 0.833 18.222 0.6305 16.9455 0.572C15.6645 0.515 15.258 0.5 11.997 0.5H12ZM10.9245 2.663H12.0015C15.2055 2.663 15.585 2.6735 16.8495 2.732C18.0195 2.7845 18.6555 2.981 19.0785 3.1445C19.638 3.362 20.0385 3.623 20.4585 4.043C20.8785 4.463 21.138 4.862 21.3555 5.423C21.5205 5.8445 21.7155 6.4805 21.768 7.6505C21.8265 8.915 21.8385 9.2945 21.8385 12.497C21.8385 15.6995 21.8265 16.0805 21.768 17.345C21.7155 18.515 21.519 19.1495 21.3555 19.5725C21.1617 20.0929 20.8549 20.5637 20.457 20.951C20.037 21.371 19.638 21.6305 19.077 21.848C18.657 22.013 18.021 22.208 16.8495 22.262C15.585 22.319 15.2055 22.3325 12.0015 22.3325C8.7975 22.3325 8.4165 22.319 7.152 22.262C5.982 22.208 5.3475 22.013 4.9245 21.848C4.40375 21.6549 3.9324 21.3485 3.5445 20.951C3.14591 20.5634 2.83849 20.092 2.6445 19.571C2.481 19.1495 2.2845 18.5135 2.232 17.3435C2.175 16.079 2.163 15.6995 2.163 12.494C2.163 9.2885 2.175 8.912 2.232 7.6475C2.286 6.4775 2.481 5.8415 2.646 5.4185C2.8635 4.859 3.1245 4.4585 3.5445 4.0385C3.9645 3.6185 4.3635 3.359 4.9245 3.1415C5.3475 2.9765 5.982 2.7815 7.152 2.7275C8.259 2.6765 8.688 2.6615 10.9245 2.66V2.663ZM18.4065 4.655C18.2174 4.655 18.0301 4.69225 17.8554 4.76461C17.6807 4.83698 17.522 4.94305 17.3883 5.07677C17.2545 5.21048 17.1485 5.36923 17.0761 5.54394C17.0037 5.71864 16.9665 5.9059 16.9665 6.095C16.9665 6.2841 17.0037 6.47135 17.0761 6.64606C17.1485 6.82077 17.2545 6.97952 17.3883 7.11323C17.522 7.24695 17.6807 7.35302 17.8554 7.42539C18.0301 7.49775 18.2174 7.535 18.4065 7.535C18.7884 7.535 19.1547 7.38329 19.4247 7.11323C19.6948 6.84318 19.8465 6.47691 19.8465 6.095C19.8465 5.71309 19.6948 5.34682 19.4247 5.07677C19.1547 4.80671 18.7884 4.655 18.4065 4.655ZM12.0015 6.338C11.1841 6.32525 10.3723 6.47523 9.61347 6.77921C8.85459 7.08319 8.16377 7.53511 7.58123 8.10863C6.99868 8.68216 6.53605 9.36585 6.22026 10.1199C5.90448 10.8739 5.74185 11.6833 5.74185 12.5007C5.74185 13.3182 5.90448 14.1276 6.22026 14.8816C6.53605 15.6356 6.99868 16.3193 7.58123 16.8929C8.16377 17.4664 8.85459 17.9183 9.61347 18.2223C10.3723 18.5263 11.1841 18.6763 12.0015 18.6635C13.6193 18.6383 15.1623 17.9779 16.2975 16.8249C17.4326 15.6719 18.0689 14.1188 18.0689 12.5007C18.0689 10.8827 17.4326 9.32962 16.2975 8.17662C15.1623 7.02363 13.6193 6.36324 12.0015 6.338ZM12.0015 8.4995C12.5269 8.4995 13.0471 8.60298 13.5324 8.80402C14.0178 9.00506 14.4588 9.29974 14.8303 9.67122C15.2018 10.0427 15.4964 10.4837 15.6975 10.9691C15.8985 11.4544 16.002 11.9746 16.002 12.5C16.002 13.0254 15.8985 13.5456 15.6975 14.0309C15.4964 14.5163 15.2018 14.9573 14.8303 15.3288C14.4588 15.7003 14.0178 15.9949 13.5324 16.196C13.0471 16.397 12.5269 16.5005 12.0015 16.5005C10.9405 16.5005 9.92296 16.079 9.17272 15.3288C8.42248 14.5785 8.001 13.561 8.001 12.5C8.001 11.439 8.42248 10.4215 9.17272 9.67122C9.92296 8.92098 10.9405 8.4995 12.0015 8.4995Z',
		name: 'Instagram',
		viewBox: '0 0 24 25',
	},
	{
		path: 'M5.46967 11.4697C5.17678 11.7626 5.17678 12.2374 5.46967 12.5303L9.46967 16.5303C9.76256 16.8232 10.2374 16.8232 10.5303 16.5303C10.8232 16.2374 10.8232 15.7626 10.5303 15.4697L7.81066 12.75H18C18.4142 12.75 18.75 12.4142 18.75 12C18.75 11.5858 18.4142 11.25 18 11.25H7.81066L10.5303 8.53033C10.8232 8.23744 10.8232 7.76256 10.5303 7.46967C10.2374 7.17678 9.76256 7.17678 9.46967 7.46967L5.46967 11.4697Z',
		name: 'LeftArrow',
		viewBox: '0 0 24 24',
	},
	{
		path: 'M5.28033 0.21967C4.98744 -0.0732233 4.51256 -0.0732233 4.21967 0.21967L0.21967 4.21967C-0.0732231 4.51256 -0.0732231 4.98744 0.21967 5.28033C0.512563 5.57322 0.987437 5.57322 1.28033 5.28033L4 2.56066L4 12.75C4 13.1642 4.33579 13.5 4.75 13.5C5.16421 13.5 5.5 13.1642 5.5 12.75L5.5 2.56066L8.21967 5.28033C8.51256 5.57322 8.98744 5.57322 9.28033 5.28033C9.57322 4.98744 9.57322 4.51256 9.28033 4.21967L5.28033 0.21967Z',
		name: 'UpArrow',
		viewBox: '0 0 10 14',
	},
	{
		path: 'M4 4.5H20C21.1046 4.5 22 5.39543 22 6.5V18.5C22 19.6046 21.1046 20.5 20 20.5H4C2.89543 20.5 2 19.6046 2 18.5V6.5C2 5.39543 2.89543 4.5 4 4.5ZM13.65 15.95L20 11.5V9.4L12.65 14.55C12.2591 14.8213 11.7409 14.8213 11.35 14.55L4 9.4V11.5L10.35 15.95C11.341 16.6427 12.659 16.6427 13.65 15.95Z',
		name: 'Email',
		viewBox: '0 0 24 25',
	},
	{
		path: 'M6.94695 0.0834165C7.59544 0.0713763 8.243 0.137861 8.87551 0.28142C9.40806 0.397689 9.91367 0.614047 10.3655 0.918993C10.7828 1.22223 11.1129 1.6299 11.3228 2.10108C11.5641 2.68047 11.6805 3.30422 11.6644 3.93162C11.6918 4.62052 11.5158 5.30225 11.1585 5.89186C10.7825 6.44872 10.2629 6.89345 9.65465 7.17888C10.4801 7.40141 11.199 7.91114 11.6822 8.61639C12.1461 9.36366 12.3792 10.2311 12.3525 11.1102C12.3677 11.8112 12.2228 12.5063 11.9287 13.1428C11.6569 13.6979 11.2588 14.1818 10.7664 14.5555C10.2595 14.9252 9.68905 15.1986 9.08341 15.3624C8.45535 15.5361 7.80651 15.6234 7.15486 15.6218H0V0.0834165H6.94695ZM6.53412 6.36806C7.04364 6.38906 7.54521 6.23653 7.95677 5.93542C8.15388 5.75995 8.30721 5.5408 8.4045 5.2955C8.5018 5.05019 8.54037 4.78553 8.51712 4.52266C8.53031 4.21564 8.46918 3.90998 8.33892 3.63164C8.22842 3.41004 8.05661 3.22483 7.84391 3.09802C7.62848 2.95845 7.38643 2.86507 7.13308 2.82379C6.85818 2.77054 6.57845 2.74631 6.29849 2.75152H3.24132V6.38192H6.53412V6.36806ZM6.71232 12.9834C7.02046 12.9875 7.32796 12.9543 7.62809 12.8844C7.90236 12.8238 8.16247 12.7112 8.39436 12.5527C8.62153 12.3943 8.80506 12.1811 8.92798 11.933C9.0705 11.6165 9.13598 11.2708 9.11905 10.9241C9.14995 10.6082 9.10811 10.2894 8.99674 9.99222C8.88537 9.69499 8.70742 9.42722 8.47653 9.20941C7.98717 8.84898 7.38745 8.67043 6.78063 8.7045H3.24132V12.9834H6.71232Z M16.9689 12.9259C17.2233 13.1617 17.523 13.3433 17.8497 13.4597C18.1765 13.5761 18.5235 13.6249 18.8697 13.603C19.4185 13.6169 19.9567 13.4499 20.4013 13.1278C20.7629 12.8927 21.0368 12.5446 21.1804 12.1378H23.7653C23.4899 13.296 22.8173 14.321 21.8645 15.0346C20.9504 15.6413 19.8702 15.9486 18.7737 15.9137C17.9911 15.924 17.2144 15.7769 16.4897 15.4811C15.8342 15.2077 15.2463 14.7945 14.7671 14.2703C14.2897 13.721 13.9229 13.0847 13.687 12.3962C13.4221 11.6267 13.2925 10.8171 13.3038 10.0033C13.299 9.20322 13.433 8.40833 13.6998 7.65401C14.0583 6.59283 14.7438 5.67248 15.6578 5.02506C16.5719 4.37763 17.6675 4.0364 18.7875 4.05034C19.6144 4.03306 20.4321 4.22658 21.1636 4.61267C21.8247 4.97522 22.3951 5.48296 22.8318 6.0977C23.2784 6.74275 23.5986 7.46673 23.7752 8.23119C23.969 9.05208 24.0381 9.89746 23.9802 10.7389H16.2808C16.2184 11.5295 16.4651 12.3134 16.9689 12.9259ZM20.3468 7.01644C20.1314 6.80093 19.8722 6.63411 19.5868 6.5272C19.3015 6.42029 18.9965 6.37579 18.6925 6.39669C18.2892 6.38131 17.8887 6.47067 17.5302 6.65607C17.246 6.81254 16.9951 7.02308 16.7917 7.27583C16.6114 7.51279 16.4771 7.78143 16.3957 8.06784C16.3223 8.30671 16.2765 8.55317 16.259 8.80244H21.0279C20.9864 8.15264 20.7497 7.53051 20.3488 7.01743L20.3468 7.01644Z M15.6443 1.1209H21.62V2.6485H15.6443V1.1209Z',
		name: 'Behance',
		viewBox: '0 0 24 16',
	},
	{
		path: 'M12.0099 0C5.36875 0 0 5.40833 0 12.0992C0 17.4475 3.43994 21.9748 8.21205 23.5771C8.80869 23.6976 9.02724 23.3168 9.02724 22.9965C9.02724 22.716 9.00757 21.7545 9.00757 20.7527C5.6667 21.474 4.97099 19.3104 4.97099 19.3104C4.43409 17.9082 3.63858 17.5478 3.63858 17.5478C2.54511 16.8066 3.71823 16.8066 3.71823 16.8066C4.93117 16.8868 5.56763 18.0486 5.56763 18.0486C6.64118 19.8913 8.37111 19.3707 9.06706 19.0501C9.16638 18.2688 9.48473 17.728 9.82275 17.4276C7.15817 17.1471 4.35469 16.1055 4.35469 11.458C4.35469 10.1359 4.8316 9.05428 5.58729 8.21304C5.46807 7.91263 5.0504 6.67043 5.70677 5.00787C5.70677 5.00787 6.72083 4.6873 9.00732 6.24981C9.98625 5.98497 10.9958 5.85024 12.0099 5.84911C13.024 5.84911 14.0577 5.98948 15.0123 6.24981C17.299 4.6873 18.3131 5.00787 18.3131 5.00787C18.9695 6.67043 18.5515 7.91263 18.4323 8.21304C19.2079 9.05428 19.6652 10.1359 19.6652 11.458C19.6652 16.1055 16.8617 17.1269 14.1772 17.4276C14.6148 17.8081 14.9924 18.5292 14.9924 19.6711C14.9924 21.2936 14.9727 22.5957 14.9727 22.9962C14.9727 23.3168 15.1915 23.6976 15.7879 23.5774C20.56 21.9745 23.9999 17.4475 23.9999 12.0992C24.0196 5.40833 18.6312 0 12.0099 0Z',
		name: 'Github',
		viewBox: '0 0 24 24',
	},
]

export const headerIconsData: SvgProps[] = [
	{
		path: 'M17 21.5003C15.3463 21.4988 13.7183 21.0901 12.26 20.3103L11.81 20.0603C8.70075 18.3886 6.15169 15.8395 4.48 12.7303L4.23 12.2803C3.42982 10.8137 3.00713 9.17097 3 7.50027V6.83027C2.99958 6.29723 3.21196 5.78607 3.59 5.41027L5.28 3.72027C5.44413 3.55487 5.67581 3.47515 5.90696 3.50453C6.13811 3.53391 6.34248 3.66907 6.46 3.87027L8.71 7.73027C8.93753 8.12316 8.87183 8.62003 8.55 8.94027L6.66 10.8303C6.50304 10.9855 6.46647 11.2253 6.57 11.4203L6.92 12.0803C8.17704 14.4087 10.0893 16.3175 12.42 17.5703L13.08 17.9303C13.275 18.0338 13.5148 17.9972 13.67 17.8403L15.56 15.9503C15.8802 15.6285 16.3771 15.5628 16.77 15.7903L20.63 18.0403C20.8312 18.1578 20.9664 18.3622 20.9957 18.5933C21.0251 18.8245 20.9454 19.0562 20.78 19.2203L19.09 20.9103C18.7142 21.2883 18.203 21.5007 17.67 21.5003H17Z',
		name: '+38(050) 655 85 61',
		viewBox: '0 0 24 25',
	},
	{
		path: 'M4 4.50049H20C21.1046 4.50049 22 5.39592 22 6.50049V18.5005C22 19.6051 21.1046 20.5005 20 20.5005H4C2.89543 20.5005 2 19.6051 2 18.5005V6.50049C2 5.39592 2.89543 4.50049 4 4.50049ZM13.65 15.9505L20 11.5005V9.40049L12.65 14.5505C12.2591 14.8218 11.7409 14.8218 11.35 14.5505L4 9.40049V11.5005L10.35 15.9505C11.341 16.6432 12.659 16.6432 13.65 15.9505Z',
		name: 'copeeiua@gmail.com',
		viewBox: '0 0 24 25',
	},
]

// work with children page
export const workWithChildrenData: workWithChildrenItem[] = [
	{
		imageSrc:
			'/workWithChildren/hands-cupping-plant-save-environment-campaign.jpg',
		title: 'ourCommitment',
		description: 'ourCommitmentDesc',
	},
	{
		imageSrc: '/workWithChildren/environment-education-day-concept.jpg',
		title: 'environmentalEducationItAllStartsWithKnowledge',
		description: 'environmentalEducationItAllStartsWithKnowledgeDesc',
	},
	{
		imageSrc: '/workWithChildren/kids-with-their-hands-up-with-copy-space.jpg',
		title: 'greenInitiativesOfYoungPeople',
		description: 'greenInitiativesOfYoungPeopleDesc',
	},
	{
		imageSrc: '/workWithChildren/sustainable-development-goals-still-life.jpg',
		title: 'anInvitationToChange',
		description: 'anInvitationToChangeDesc',
	},
	{
		imageSrc: '/workWithChildren/kids-learnign-about-environment.jpg',
		title: 'forPreservationForTheFuture',
		description: 'forPreservationForTheFutureDesc',
	},
]

// environmental protection page
export const environmentalProtectionData: environmentalProtectionItem[] = [
	{
		imageSrc:
			'/environmentalProtection/close-up-environment-sign-collection.jpg',
		title: 'issues',
		description: 'issuesDesc',
	},
	{
		imageSrc:
			'/environmentalProtection/sustainable-development-goals-still-life.jpg',
		title: 'innovationAsOneOfTheVectors',
		description: 'innovationAsOneOfTheVectorsDesc',
	},
	{
		imageSrc: '/environmentalProtection/sustainable-development.jpg',
		title: 'recyclingOfPlasticWaste',
		description: 'recyclingOfPlasticWasteDesc',
	},
	{
		imageSrc: '/environmentalProtection/3d-eco-project-environment.jpg',
		title: 'commitmentToSustainableDevelopment',
		description: 'commitmentToSustainableDevelopmentDesc',
	},
]

// Projects
// export const initialProjects: projectsItem[] = [
//   {
//     id: "1",
//     title: "Проєкт “Теплий та економний дім для ВПО”",
//     imageSrc: "/main/no-image.png",
//     description:
//       "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia veniam explicabo rem quae incidunt repellat doloremque? Aliquam, explicabo impedit, tempora, nam saepe consequuntur laborum id nihil officiis voluptas placeat quia.",
//     total: 50000,
//     fundsRaised: 25000,
//   },
//   {
//     id: "2",
//     title: "Проєкт “Теплий та економний дім для ВПО”",
//     imageSrc: "/main/no-image.png",
//     description:
//       "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia veniam explicabo rem quae incidunt repellat doloremque? Aliquam, explicabo impedit, tempora, nam saepe consequuntur laborum id nihil officiis voluptas placeat quia.",
//     total: 100000,
//     fundsRaised: 33000,
//   },
//   {
//     id: "3",
//     title: "Проєкт “Теплий та економний дім для ВПО”",
//     imageSrc: "/main/no-image.png",
//     description:
//       "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia veniam explicabo rem quae incidunt repellat doloremque? Aliquam, explicabo impedit, tempora, nam saepe consequuntur laborum id nihil officiis voluptas placeat quia.",
//     total: 30000,
//     fundsRaised: 17000,
//   },
// ];

// Reviews
// export const initialReviews: reviewsItem[] = [
//   {
//     id: "1",
//     name: "Вікторія",
//     description:
//       "Сайт організації - справжнє джерело інформації та натхнення для всіх, хто прагне долучитися до охорони довкілля. Він допомагає розуміти складність екологічних проблем і надихає до дії на благо нашої планети.",
//     imageSrc: "/main/ellipse1.svg",
//   },
//   {
//     id: "2",
//     name: "Олена",
//     description:
//       "Цей веб-сайт - справжнє джерело свіжої та цінної інформації Він не просто надає знання про проблеми екології, але й стимулює до конкретних кроків у збереженні природи. Тут я завжди знаходжу натхнення та ідеї для більш екологічного способу життя.",
//     imageSrc: "/main/ellipse2.svg",
//   },
//   {
//     id: "3",
//     name: "Вікторія",
//     description:
//       "Сайт організації - справжнє джерело інформації та натхнення для всіх, хто прагне долучитися до охорони довкілля. Він допомагає розуміти складність екологічних проблем і надихає до дії на благо нашої планети.",
//     imageSrc: "/main/ellipse1.svg",
//   },
//   {
//     id: "4",
//     name: "Олена",
//     description:
//       "Цей веб-сайт - справжнє джерело свіжої та цінної інформації Він не просто надає знання про проблеми екології, але й стимулює до конкретних кроків у збереженні природи. Тут я завжди знаходжу натхнення та ідеї для більш екологічного способу життя.",
//     imageSrc: "/main/ellipse2.svg",
//   },
// ];

// export const initialNews: newsItem[] = [
//   {
//     id: "1",
//     title: "Діти взяли участь у всеукраїнському суботнику",
//     description:
//       "Десятки тисяч дітей у всій Україні приєдналися до національного суботника, демонструючи високий рівень своєї екологічної свідомості та активну громадянську позицію.",
//     imageSrc: "/main/new1.png",
//     date: "07.02.2024",
//     firstNew: true,
//   },
//   {
//     id: "2",
//     title:
//       "Від сировини до нового життя: вторинна переробка на шляху до збереження ресурсів",
//     description:
//       "Десятки тисяч дітей у всій Україні приєдналися до національного суботника, демонструючи високий рівень своєї екологічної свідомості та активну громадянську позицію.",
//     imageSrc: "/main/new2.png",
//     date: "07.02.2024",
//     firstNew: false,
//   },

//   {
//     id: "3",
//     title:
//       "Від сировини до нового життя: вторинна переробка на шляху до збереження ресурсів",
//     description:
//       "Десятки тисяч дітей у всій Україні приєдналися до національного суботника, демонструючи високий рівень своєї екологічної свідомості та активну громадянську позицію.",
//     imageSrc: "/main/new3.png",
//     date: "07.02.2024",
//     firstNew: false,
//   },
//   {
//     id: "4",
//     title:
//       "Від сировини до нового життя: вторинна переробка на шляху до збереження ресурсів",
//     description:
//       "Десятки тисяч дітей у всій Україні приєдналися до національного суботника, демонструючи високий рівень своєї екологічної свідомості та активну громадянську позицію.",
//     imageSrc: "/main/new3.png",
//     date: "07.02.2024",
//     firstNew: false,
//   },
// ];
