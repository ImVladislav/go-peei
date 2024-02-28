import { navLinks, projectItem, reviewItem, newsItem } from "@/app/types";

// NAVIGATION
export const NAV_LINKS: navLinks[] = [
  { href: "/", key: "home", label: "Головна" },
  { href: "/services", key: "services", label: "Послуги" },
  { href: "/gallery", key: "gallery", label: "Галерея" },
  { href: "/reviews", key: "reviews", label: "Відгуки" },
  { href: "/contacts", key: "contacts", label: "Контакти" },
];

export const initialProjects: projectItem[] = [
  {
    id: "1",
    title: "Проєкт “Теплий та економний дім для ВПО”",
    imageSrc: "/main/no-image.png",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia veniam explicabo rem quae incidunt repellat doloremque? Aliquam, explicabo impedit, tempora, nam saepe consequuntur laborum id nihil officiis voluptas placeat quia.",
    total: 50000,
    fundsRaised: 25000,
  },
  {
    id: "2",
    title: "Проєкт “Теплий та економний дім для ВПО”",
    imageSrc: "/main/no-image.png",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia veniam explicabo rem quae incidunt repellat doloremque? Aliquam, explicabo impedit, tempora, nam saepe consequuntur laborum id nihil officiis voluptas placeat quia.",
    total: 100000,
    fundsRaised: 33000,
  },
  {
    id: "3",
    title: "Проєкт “Теплий та економний дім для ВПО”",
    imageSrc: "/main/no-image.png",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia veniam explicabo rem quae incidunt repellat doloremque? Aliquam, explicabo impedit, tempora, nam saepe consequuntur laborum id nihil officiis voluptas placeat quia.",
    total: 30000,
    fundsRaised: 17000,
  },
];

export const initialReviews: reviewItem[] = [
  {
    id: "1",
    name: "Вікторія",
    description:
      "Сайт організації - справжнє джерело інформації та натхнення для всіх, хто прагне долучитися до охорони довкілля. Він допомагає розуміти складність екологічних проблем і надихає до дії на благо нашої планети.",
    imageSrc: "/main/ellipse1.svg",
  },
  {
    id: "2",
    name: "Олена",
    description:
      "Цей веб-сайт - справжнє джерело свіжої та цінної інформації Він не просто надає знання про проблеми екології, але й стимулює до конкретних кроків у збереженні природи. Тут я завжди знаходжу натхнення та ідеї для більш екологічного способу життя.",
    imageSrc: "/main/ellipse2.svg",
  },
  {
    id: "3",
    name: "Вікторія",
    description:
      "Сайт організації - справжнє джерело інформації та натхнення для всіх, хто прагне долучитися до охорони довкілля. Він допомагає розуміти складність екологічних проблем і надихає до дії на благо нашої планети.",
    imageSrc: "/main/ellipse1.svg",
  },
  {
    id: "4",
    name: "Олена",
    description:
      "Цей веб-сайт - справжнє джерело свіжої та цінної інформації Він не просто надає знання про проблеми екології, але й стимулює до конкретних кроків у збереженні природи. Тут я завжди знаходжу натхнення та ідеї для більш екологічного способу життя.",
    imageSrc: "/main/ellipse2.svg",
  },
];

export const initialNews: newsItem[] = [
  {
    id: "1",
    title: "Діти взяли участь у всеукраїнському суботнику",
    description:
      "Десятки тисяч дітей у всій Україні приєдналися до національного суботника, демонструючи високий рівень своєї екологічної свідомості та активну громадянську позицію.",
    imageSrc: "/main/new1.png",
    date: "07.02.2024",
    firstNew: true,
  },
  {
    id: "2",
    title:
      "Від сировини до нового життя: вторинна переробка на шляху до збереження ресурсів",
    description:
      "Десятки тисяч дітей у всій Україні приєдналися до національного суботника, демонструючи високий рівень своєї екологічної свідомості та активну громадянську позицію.",
    imageSrc: "/main/new2.png",
    date: "07.02.2024",
    firstNew: false,
  },

  {
    id: "3",
    title:
      "Від сировини до нового життя: вторинна переробка на шляху до збереження ресурсів",
    description:
      "Десятки тисяч дітей у всій Україні приєдналися до національного суботника, демонструючи високий рівень своєї екологічної свідомості та активну громадянську позицію.",
    imageSrc: "/main/new3.png",
    date: "07.02.2024",
    firstNew: false,
  },
  // {
  //   id: "4",
  //   title:
  //     "Від сировини до нового життя: вторинна переробка на шляху до збереження ресурсів",
  //   description:
  //     "Десятки тисяч дітей у всій Україні приєдналися до національного суботника, демонструючи високий рівень своєї екологічної свідомості та активну громадянську позицію.",
  //   imageSrc: "/main/ellipse2.svg",
  //   date: new Date(),
  // },
];
