export type navLinks = {
	col?: number
	href: string
	key: string
	label: string
}

export type socialsItem = {
	href: string
	name: string
}

export type projectsItem = {
	_id: string
	title: string
	titleEn?: string
	imageSrc: string
	description: string
	descriptionEn?: string
	total: number
	fundsRaised: number
	photoReport?: string[]
	report?: string
	closed: boolean
	link: string
}

export type reviewsItem = {
	_id: string
	name: string
	email: string
	message: string
	imageSrc: string
	verify: boolean
}

export type newsItem = {
	_id: string
	title: string
	titleEn?: string
	description: string
	descriptionEn?: string
	imageSrc: string
	createdAt: string
	firstNew: boolean
	photo?: string[]
}

export type GoalsType = {
	title: string
	desc: string
}

export type SvgProps = {
	path: string
	viewBox: string
	fill?: string
	name?: string
	fillHovered?: string
	isHovered?: boolean
}

export type workWithChildrenItem = {
	imageSrc: string
	title: string
	description: string
}

export type environmentalProtectionItem = {
	imageSrc: string
	title: string
	description: string
}

export type contactItem = {
	href: string
	name: string
}

export type reUseContentItem = {
	imgSrc: string
	imgStyle?: string
	title: string
	subtitle?: string
	list: {
		title?: string
		descriptionBefore?: string
		description?: string
		descriptionAfter?: string
		link?: string
		href?: string
	}[]
	btn?: boolean
}

export type listContentItem = {
	title: string
	list: {
		imgSrc: string
		imgStyle?: string
		title?: string
		description: string
	}[]
}

export type contactUsContentItem = {
	imgSrc: string
	imgAlt: string
	imgStyle?: string
	list: {
		description: string
		link?: string
		href?: string
		descAfter?: string
	}[]
}
