import {
  navLinks,
  projectsItem,
  reviewsItem,
  newsItem,
  socialsItem,
} from "@/app/types";

// NAVIGATION
export const navFooter: navLinks[] = [
  { col: 1, href: "/aboutUs", key: "aboutUs", label: "Про нас" },
  { col: 1, href: "/ourTeam", key: "ourTeam", label: "Наша команда" },
  {
    col: 1,
    href: "/ourPartners",
    key: "ourPartners",
    label: "Наші партнери",
  },
  {
    col: 1,
    href: "/officialDocuments",
    key: "officialDocuments",
    label: "Офіційні документи",
  },
  { col: 1, href: "/rule", key: "rule", label: "Правління" },
  {
    col: 2,
    key: "workWithChildren",
    label: "Робота з дітьми",
    href: "/work-with-children",
  },
  {
    col: 2,
    key: "workWithTeenagers",
    label: "Робота з молоддю",
    href: "/work-with-teenagers",
  },
  {
    col: 2,
    key: "charityActions",
    label: "Благодійні акції",
    href: "/charityActions",
  },
  {
    col: 2,
    key: "environmentalProtection",
    label: "Охорона довкілля",
    href: "/environmentalProtection",
  },
  { col: 2, key: "news", label: "Новини", href: "/news" },
  { col: 3, key: "support", label: "Підтримати донатом", href: "/support" },
  {
    col: 3,
    key: "partnership",
    label: "Стати партнером",
    href: "/partnership",
  },
  {
    col: 3,
    key: "volunteering",
    label: "Стати волонтером",
    href: "/volunteering",
  },
  { col: 3, href: "/reports", key: "reports", label: "Звіти" },
  { col: 3, href: "/contacts", key: "contacts", label: "Контакти" },
];

// Socials
export const initialSocials: socialsItem[] = [
  { href: "/whatsup", name: "WhatsUp" },
  { href: "/instagram", name: "Instagram" },
  { href: "/linkedin", name: "Linkedin" },
  { href: "/facebook", name: "Facebook" },
  { href: "/youtube", name: "YouTube" },
];

// Projects
export const initialProjects: projectsItem[] = [
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

// Reviews
export const initialReviews: reviewsItem[] = [
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
