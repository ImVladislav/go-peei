export const navItems = [
  {
    title: { key: "aboutUs", label: "Про нас", href: "/about" },
    links: [
      { key: "aboutUs", label: "Про нас", href: "/about" },
      { key: "ourTeam", label: "Наша команда", href: "/team" },
      { key: "ourPartners", label: "Наші партнери", href: "/partners" },
      {
        key: "officialDocuments",
        label: "Офіційні документи",
        href: "/officialDocuments",
      },
      // { key: "reports", label: "Звіти", href: "/about/6" },
      { key: "contacts", label: "Контакти", href: "contacts" },
    ],
  },
  {
    title: {
      key: "activities",
      label: "Напрямки діяльності",
      href: "/activities",
    },
    links: [
      {
        key: "workWithChildren",
        label: "workWithChildren",
        href: "/activities/work-with-children",
      },
      {
        key: "workWithTeenagers",
        label: "workWithTeenagers",
        href: "/activities/work-with-teenagers",
      },
      {
        key: "charityActions",
        label: "Благодійні акції",
        href: "/activities/projects",
      },
      {
        key: "environmentalProtection",
        label: "environmentalProtection",
        href: "/activities/environmental-protection",
      },
    ],
  },
  // {
  //   title: { key: "news", label: "Новини", href: "/news" },
  //   links: [{ key: "news", label: "Новини", href: "/news" }],
  // },
  {
    title: { key: "support", label: "Підтримати", href: "/support" },
    links: [
      {
        key: "financially",
        label: "supportWithADonation",
        href: "/financial",
      },
      {
        key: "partnership",
        label: "becomeAPartner",
        href: "/support/partnership",
      },
      {
        key: "volunteering",
        label: "becomeAVolunteer",
        href: "/support/volonter",
      },
    ],
  },
];
