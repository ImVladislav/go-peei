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
  id: string;
  title: string;
  imageSrc: string;
  description: string;
  total: number;
  fundsRaised: number;
};

export type reviewsItem = {
  id: string;
  name: string;
  description: string;
  imageSrc: string;
};

export type newsItem = {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  date: string;
  firstNew: boolean;
};
