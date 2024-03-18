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
  description: string;
  imageSrc: string;
};

export type newsItem = {
  _id: string;
  title: string;
  description: string;
  imageSrc: string;
  date: string;
  firstNew: boolean;
};

export type GoalsType = {
  title: string;
  desc: string;
};