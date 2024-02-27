import { navLinks, projectItem, reviewItem } from "@/app/types";

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

    name: "Андрій",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia veniam explicabo rem quae incidunt repellat doloremque? Aliquam, explicabo impedit, tempora, nam saepe consequuntur laborum id nihil officiis voluptas placeat quia.",
    imageSrc: "/no-image.jpg",
  },
  {
    id: "2",

    name: "Валентина",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia veniam explicabo rem quae incidunt repellat doloremque? Aliquam, explicabo impedit, tempora, nam saepe consequuntur laborum id nihil officiis voluptas placeat quia.",
    imageSrc: "/no-image.jpg",
  },
  {
    id: "3",

    name: "Степан",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia veniam explicabo rem quae incidunt repellat doloremque? Aliquam, explicabo impedit, tempora, nam saepe consequuntur laborum id nihil officiis voluptas placeat quia.",
    imageSrc: "/no-image.jpg",
  },
  {
    id: "4",
    name: "Висиль",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia veniam explicabo rem quae incidunt repellat doloremque? Aliquam, explicabo impedit, tempora, nam saepe consequuntur laborum id nihil officiis voluptas placeat quia.",
    imageSrc: "/no-image.jpg",
  },
];
