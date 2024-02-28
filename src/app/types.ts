export type navLinks = {
  href: string;
  key: string;
  label: string;
};

export type projectItem = {
  id: string;
  title: string;
  imageSrc: string;
  description: string;
  total: number;
  fundsRaised: number;
};
export type reviewItem = {
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
