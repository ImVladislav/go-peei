export type navLinks = {
  col: number;
  href: string;
  key: string;
  label: string;
};

export type socialsItem = {
  href: string;
  name: string;
};

export type projectsItem = {
  _id: string;
  title: string;
  imageSrc: string;
  description: string;
  total: number;
  fundsRaised: number;
};

export type reviewsItem = {
  _id: string;
  name: string;
  email: string;
  message: string;
  imageSrc: string;
  verify: boolean;
};

export type newsItem = {
  _id: string;
  title: string;
  description: string;
  imageSrc: string;
  createdAt: string;
  firstNew: boolean;
};

export type GoalsType = {
  title: string;
  desc: string;
};

export type SvgProps = {
  path: string;
  viewBox: string;
  fill?: string;
  name?: string;
  fillHovered?: string;
  isHovered?: boolean;
};

export type workWithChildrenItem = {
  imageSrc: string;
  title: string;
  description: string;
};

export type environmentalProtectionItem = {
  imageSrc: string;
  title: string;
  description: string;
};



export type contactItem = {
  href: string;
  name: string;
};
export type reUseContentItem = {
  imgSrc: string;
  title: string;
  subtitle?: string;
  description: string[];
};

export type listContentItem = {
  title: string;
  list: { imgSrc: string; description: string }[];
};

export type contactUsContentItem = {
  imgSrc: string;
  imgAlt: string;
  imgStyle?: string;
  description: string[];
};

