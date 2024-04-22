import {
  SvgProps,
  workWithChildrenItem,
  navLinks,
  socialsItem,
  environmentalProtectionItem,
  contactItem,
} from "@/app/types";

// NAVIGATION
export const navFooter: navLinks[] = [
  { col: 1, href: "/about", key: "aboutUs", label: "aboutUs" },
  { col: 1, href: "/ourTeam", key: "ourTeam", label: "ourTeam" },
  {
    col: 1,
    href: "/ourPartners",
    key: "ourPartners",
    label: "ourPartners",
  },
  {
    col: 1,
    href: "/officialDocuments",
    key: "officialDocuments",
    label: "officialDocuments",
  },
  { col: 1, href: "/rule", key: "rule", label: "boardOfManagement" },
  {
    col: 2,
    key: "workWithChildren",
    label: "workWithChildren",
    href: "/activities/work-with-children",
  },
  {
    col: 2,
    key: "workWithTeenagers",
    label: "workWithTeenagers",
    href: "/activities/work-with-teenagers",
  },
  {
    col: 2,
    key: "charityActions",
    label: "charityActions",
    href: "/activities/projects",
    // href: "/charityActions",
  },
  {
    col: 2,
    key: "environmentalProtection",
    label: "environmentalProtection",
    href: "/activities/environmental-protection",
  },
  { col: 2, key: "news", label: "news", href: "/news" },
  {
    col: 3,
    key: "support",
    label: "supportWithADonation",
    href: "https://payhub.com.ua/#/service/98840",
  },
  {
    col: 3,
    key: "partnership",
    label: "becomeAPartner",
    href: "/partnership",
  },
  {
    col: 3,
    key: "volunteering",
    label: "becomeAVolunteer",
    href: "/volunteering",
  },
  { col: 3, href: "/reports", key: "reports", label: "reports" },
  { col: 3, href: "/contacts", key: "contacts", label: "contacts" },
];

// Header contacts
  export const headerContacts: contactItem[] = [
  { href: "mailto:copeeiua@gmail.com", name: "copeeiua@gmail.com" },
  { href: "tel:+380506558561", name: "380506558561" },

];


// Socials
export const initialSocials: socialsItem[] = [
  { href: "/whatsup", name: "WhatsUp" },
  { href: "https://www.instagram.com/", name: "Instagram" },
  { href: "https://linkedin.com/", name: "Linkedin" },
  { href: "https://www.facebook.com/", name: "Facebook" },
  { href: "https://www.youtube.com/", name: "YouTube" },
  
];



// all svg for the hover to work
export const iconsData: SvgProps[] = [
  {
    path: "M20.4015 3.98908C19.3014 2.87833 17.9911 1.99775 16.5471 1.39872C15.1031 0.799696 13.5543 0.494209 11.991 0.500083C5.4405 0.500083 0.102 5.83708 0.096 12.3891C0.096 14.4876 0.645 16.5291 1.6815 18.3366L0 24.5001L6.306 22.8471C8.04973 23.7984 10.0046 24.2962 11.991 24.2946H11.997C18.549 24.2946 23.886 18.9576 23.892 12.3996C23.8933 10.8367 23.5855 9.28894 22.9862 7.8455C22.3869 6.40206 21.5094 5.09143 20.4015 3.98908ZM11.991 22.2816C10.2198 22.2802 8.48134 21.8036 6.957 20.9016L6.597 20.6856L2.856 21.6666L3.855 18.0171L3.621 17.6406C2.63071 16.0661 2.10697 14.2431 2.1105 12.3831C2.1105 6.94408 6.546 2.50708 11.997 2.50708C13.2956 2.50475 14.5818 2.75949 15.7815 3.25662C16.9812 3.75375 18.0706 4.48342 18.987 5.40358C19.9063 6.32031 20.6352 7.4099 21.1315 8.60957C21.6279 9.80925 21.8819 11.0953 21.879 12.3936C21.873 17.8521 17.4375 22.2816 11.991 22.2816ZM17.4135 14.8806C17.118 14.7321 15.6585 14.0136 15.384 13.9116C15.111 13.8141 14.9115 13.7631 14.7165 14.0601C14.517 14.3556 13.947 15.0291 13.776 15.2226C13.605 15.4221 13.428 15.4446 13.131 15.2976C12.8355 15.1476 11.877 14.8356 10.743 13.8201C9.858 13.0326 9.2655 12.0576 9.0885 11.7621C8.9175 11.4651 9.072 11.3061 9.2205 11.1576C9.351 11.0256 9.516 10.8096 9.6645 10.6386C9.8145 10.4676 9.864 10.3416 9.9615 10.1436C10.059 9.94258 10.0125 9.77158 9.939 9.62308C9.864 9.47458 9.2715 8.00908 9.021 7.41808C8.781 6.83458 8.5365 6.91558 8.3535 6.90808C8.1825 6.89758 7.983 6.89758 7.7835 6.89758C7.63286 6.90142 7.48464 6.9363 7.3481 7.00005C7.21156 7.06381 7.08965 7.15505 6.99 7.26808C6.717 7.56508 5.9535 8.28358 5.9535 9.74908C5.9535 11.2146 7.0185 12.6231 7.1685 12.8226C7.3155 13.0221 9.2595 16.0206 12.243 17.3106C12.948 17.6181 13.503 17.7996 13.9365 17.9376C14.649 18.1656 15.2925 18.1311 15.8055 18.0576C16.3755 17.9706 17.562 17.3376 17.8125 16.6431C18.0585 15.9471 18.0585 15.3531 17.9835 15.2286C17.91 15.1026 17.7105 15.0291 17.4135 14.8806Z",
    name: "WhatsUp",
    viewBox: "0 0 24 25",
  },
  {
    path: "M0 2.219C0 1.2695 0.789 0.5 1.7625 0.5H22.2375C23.211 0.5 24 1.2695 24 2.219V22.781C24 23.7305 23.211 24.5 22.2375 24.5H1.7625C0.789 24.5 0 23.7305 0 22.781V2.219ZM7.4145 20.591V9.7535H3.813V20.591H7.4145ZM5.6145 8.273C6.87 8.273 7.6515 7.442 7.6515 6.401C7.629 5.3375 6.8715 4.529 5.6385 4.529C4.4055 4.529 3.6 5.339 3.6 6.401C3.6 7.442 4.3815 8.273 5.5905 8.273H5.6145ZM12.9765 20.591V14.5385C12.9765 14.2145 13.0005 13.8905 13.0965 13.6595C13.356 13.013 13.9485 12.3425 14.9445 12.3425C16.248 12.3425 16.7685 13.3355 16.7685 14.7935V20.591H20.37V14.375C20.37 11.045 18.594 9.497 16.224 9.497C14.313 9.497 13.4565 10.547 12.9765 11.2865V11.324H12.9525L12.9765 11.2865V9.7535H9.3765C9.4215 10.7705 9.3765 20.591 9.3765 20.591H12.9765Z",
    name: "Linkedin",
    viewBox: "0 0 24 25",
  },
  {
    path: "M12 0.5C8.7435 0.5 8.334 0.515 7.0545 0.572C5.775 0.632 4.9035 0.833 4.14 1.13C3.33877 1.43049 2.61321 1.9031 2.0145 2.5145C1.4031 3.11321 0.930488 3.83877 0.63 4.64C0.333 5.402 0.1305 6.275 0.072 7.55C0.015 8.8325 0 9.2405 0 12.5015C0 15.7595 0.015 16.1675 0.072 17.447C0.132 18.725 0.333 19.5965 0.63 20.36C0.9375 21.149 1.347 21.818 2.0145 22.4855C2.6805 23.153 3.3495 23.564 4.1385 23.87C4.9035 24.167 5.7735 24.3695 7.0515 24.428C8.3325 24.485 8.7405 24.5 12 24.5C15.2595 24.5 15.666 24.485 16.947 24.428C18.2235 24.368 19.098 24.167 19.8615 23.87C20.6622 23.5693 21.3872 23.0967 21.9855 22.4855C22.653 21.818 23.0625 21.149 23.37 20.36C23.6655 19.5965 23.868 18.725 23.928 17.447C23.985 16.1675 24 15.7595 24 12.5C24 9.2405 23.985 8.8325 23.928 7.5515C23.868 6.275 23.6655 5.402 23.37 4.64C23.0695 3.83877 22.5969 3.11321 21.9855 2.5145C21.3868 1.9031 20.6612 1.43049 19.86 1.13C19.095 0.833 18.222 0.6305 16.9455 0.572C15.6645 0.515 15.258 0.5 11.997 0.5H12ZM10.9245 2.663H12.0015C15.2055 2.663 15.585 2.6735 16.8495 2.732C18.0195 2.7845 18.6555 2.981 19.0785 3.1445C19.638 3.362 20.0385 3.623 20.4585 4.043C20.8785 4.463 21.138 4.862 21.3555 5.423C21.5205 5.8445 21.7155 6.4805 21.768 7.6505C21.8265 8.915 21.8385 9.2945 21.8385 12.497C21.8385 15.6995 21.8265 16.0805 21.768 17.345C21.7155 18.515 21.519 19.1495 21.3555 19.5725C21.1617 20.0929 20.8549 20.5637 20.457 20.951C20.037 21.371 19.638 21.6305 19.077 21.848C18.657 22.013 18.021 22.208 16.8495 22.262C15.585 22.319 15.2055 22.3325 12.0015 22.3325C8.7975 22.3325 8.4165 22.319 7.152 22.262C5.982 22.208 5.3475 22.013 4.9245 21.848C4.40375 21.6549 3.9324 21.3485 3.5445 20.951C3.14591 20.5634 2.83849 20.092 2.6445 19.571C2.481 19.1495 2.2845 18.5135 2.232 17.3435C2.175 16.079 2.163 15.6995 2.163 12.494C2.163 9.2885 2.175 8.912 2.232 7.6475C2.286 6.4775 2.481 5.8415 2.646 5.4185C2.8635 4.859 3.1245 4.4585 3.5445 4.0385C3.9645 3.6185 4.3635 3.359 4.9245 3.1415C5.3475 2.9765 5.982 2.7815 7.152 2.7275C8.259 2.6765 8.688 2.6615 10.9245 2.66V2.663ZM18.4065 4.655C18.2174 4.655 18.0301 4.69225 17.8554 4.76461C17.6807 4.83698 17.522 4.94305 17.3883 5.07677C17.2545 5.21048 17.1485 5.36923 17.0761 5.54394C17.0037 5.71864 16.9665 5.9059 16.9665 6.095C16.9665 6.2841 17.0037 6.47135 17.0761 6.64606C17.1485 6.82077 17.2545 6.97952 17.3883 7.11323C17.522 7.24695 17.6807 7.35302 17.8554 7.42539C18.0301 7.49775 18.2174 7.535 18.4065 7.535C18.7884 7.535 19.1547 7.38329 19.4247 7.11323C19.6948 6.84318 19.8465 6.47691 19.8465 6.095C19.8465 5.71309 19.6948 5.34682 19.4247 5.07677C19.1547 4.80671 18.7884 4.655 18.4065 4.655ZM12.0015 6.338C11.1841 6.32525 10.3723 6.47523 9.61347 6.77921C8.85459 7.08319 8.16377 7.53511 7.58123 8.10863C6.99868 8.68216 6.53605 9.36585 6.22026 10.1199C5.90448 10.8739 5.74185 11.6833 5.74185 12.5007C5.74185 13.3182 5.90448 14.1276 6.22026 14.8816C6.53605 15.6356 6.99868 16.3193 7.58123 16.8929C8.16377 17.4664 8.85459 17.9183 9.61347 18.2223C10.3723 18.5263 11.1841 18.6763 12.0015 18.6635C13.6193 18.6383 15.1623 17.9779 16.2975 16.8249C17.4326 15.6719 18.0689 14.1188 18.0689 12.5007C18.0689 10.8827 17.4326 9.32962 16.2975 8.17662C15.1623 7.02363 13.6193 6.36324 12.0015 6.338ZM12.0015 8.4995C12.5269 8.4995 13.0471 8.60298 13.5324 8.80402C14.0178 9.00506 14.4588 9.29974 14.8303 9.67122C15.2018 10.0427 15.4964 10.4837 15.6975 10.9691C15.8985 11.4544 16.002 11.9746 16.002 12.5C16.002 13.0254 15.8985 13.5456 15.6975 14.0309C15.4964 14.5163 15.2018 14.9573 14.8303 15.3288C14.4588 15.7003 14.0178 15.9949 13.5324 16.196C13.0471 16.397 12.5269 16.5005 12.0015 16.5005C10.9405 16.5005 9.92296 16.079 9.17272 15.3288C8.42248 14.5785 8.001 13.561 8.001 12.5C8.001 11.439 8.42248 10.4215 9.17272 9.67122C9.92296 8.92098 10.9405 8.4995 12.0015 8.4995Z",
    name: "Instagram",
    viewBox: "0 0 24 25",
  },
  {
    path: "M24 12.5735C24 5.90454 18.6269 0.498535 11.9999 0.498535C5.36995 0.500035 -0.00305176 5.90454 -0.00305176 12.575C-0.00305176 18.6005 4.38595 23.5955 10.1219 24.5015V16.064H7.07695V12.575H10.1249V9.91253C10.1249 6.88704 11.9174 5.21603 14.6579 5.21603C15.9719 5.21603 17.3444 5.45154 17.3444 5.45154V8.42154H15.8309C14.3414 8.42154 13.8764 9.35303 13.8764 10.3085V12.5735H17.2034L16.6724 16.0625H13.8749V24.5C19.6109 23.594 24 18.599 24 12.5735Z",
    name: "Facebook",
    viewBox: "0 0 24 25",
  },
  {
    path: "M12.0765 0.498535H12.21C13.443 0.503035 19.6905 0.548035 21.375 1.00104C21.8842 1.13929 22.3483 1.40877 22.7207 1.78255C23.0932 2.15633 23.361 2.62131 23.4975 3.13103C23.649 3.70103 23.7555 4.45553 23.8275 5.23404L23.8425 5.39004L23.8755 5.78003L23.8875 5.93603C23.985 7.30703 23.997 8.59103 23.9985 8.87153V8.98403C23.997 9.27503 23.9835 10.646 23.8755 12.074L23.8635 12.2315L23.85 12.3875C23.775 13.2455 23.664 14.0975 23.4975 14.7245C23.361 15.2343 23.0932 15.6992 22.7207 16.073C22.3483 16.4468 21.8842 16.7163 21.375 16.8545C19.635 17.3225 13.0215 17.3555 12.105 17.357H11.892C11.4285 17.357 9.5115 17.348 7.5015 17.279L7.2465 17.27L7.116 17.264L6.8595 17.2535L6.603 17.243C4.938 17.1695 3.3525 17.051 2.622 16.853C2.11294 16.7149 1.64902 16.4457 1.27658 16.0722C0.904129 15.6987 0.636185 15.234 0.4995 14.7245C0.333 14.099 0.222 13.2455 0.147 12.3875L0.135 12.23L0.123 12.074C0.0485451 11.0577 0.00752298 10.0391 0 9.02003L0 8.83554C0.003 8.51303 0.015 7.39853 0.096 6.16853L0.1065 6.01403L0.111 5.93603L0.123 5.78003L0.156 5.39004L0.171 5.23404C0.243 4.45553 0.3495 3.69953 0.501 3.13103C0.637456 2.62131 0.905298 2.15633 1.27776 1.78255C1.65022 1.40877 2.11426 1.13929 2.6235 1.00104C3.354 0.806035 4.9395 0.686035 6.6045 0.611035L6.8595 0.600535L7.1175 0.591535L7.2465 0.587035L7.503 0.576535C8.93056 0.530641 10.3587 0.505138 11.787 0.500035L12.0765 0.498535ZM9.6 5.31353V12.5405L15.8355 8.92853L9.6 5.31353Z",
    name: "YouTube",
    viewBox: "0 0 24 18",
  },
];

// work with children page
export const workWithChildrenData: workWithChildrenItem[] = [
  {
    imageSrc:
      "/workWithChildren/hands-cupping-plant-save-environment-campaign.jpg",
    title: "ourCommitment",
    description: "ourCommitmentDesc",
  },
  {
    imageSrc: "/workWithChildren/environment-education-day-concept.jpg",
    title: "environmentalEducationItAllStartsWithKnowledge",
    description: "environmentalEducationItAllStartsWithKnowledgeDesc",
  },
  {
    imageSrc: "/workWithChildren/kids-with-their-hands-up-with-copy-space.jpg",
    title: "greenInitiativesOfYoungPeople",
    description: "greenInitiativesOfYoungPeopleDesc",
  },
  {
    imageSrc: "/workWithChildren/sustainable-development-goals-still-life.jpg",
    title: "anInvitationToChange",
    description: "anInvitationToChangeDesc",
  },
  {
    imageSrc: "/workWithChildren/kids-learnign-about-environment.jpg",
    title: "forPreservationForTheFuture",
    description: "forPreservationForTheFutureDesc",
  },
];

// environmental protection page
export const environmentalProtectionData: environmentalProtectionItem[] = [
  {
    imageSrc:
      "/environmentalProtection/close-up-environment-sign-collection.jpg",
    title: "issues",
    description: "issuesDesc",
  },
  {
    imageSrc:
      "/environmentalProtection/sustainable-development-goals-still-life.jpg",
    title: "innovationAsOneOfTheVectors",
    description: "innovationAsOneOfTheVectorsDesc",
  },
  {
    imageSrc: "/environmentalProtection/sustainable-development.jpg",
    title: "recyclingOfPlasticWaste",
    description: "recyclingOfPlasticWasteDesc",
  },
  {
    imageSrc: "/environmentalProtection/3d-eco-project-environment.jpg",
    title: "commitmentToSustainableDevelopment",
    description: "commitmentToSustainableDevelopmentDesc",
  },
];
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
