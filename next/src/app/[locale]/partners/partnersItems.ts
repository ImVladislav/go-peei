import defaultLogo from "../../../../public/partners/partnersLogo/defaultPartnersLogo.png";
import steadyLogo from "../../../../public/partners/partnersLogo/steady.png";

const partnerItems = [
  {
    partner: "Steady",
    src: steadyLogo,
  },
  {
    partner: "ФОП",
  },
    {
    partner: "ФОП",
  },
      {
    partner: "ФОП",
  },
        {
    partner: "ФОП",
  },
          {
    partner: "ФОП",
  },
            {
    partner: "ФОП",
  },
              {
    partner: "ФОП",
  },
  // Додайте більше об'єктів за необхідності
];

const defaultImageSrc = defaultLogo;

const formattedPartnerItems = partnerItems.map(item => ({
  partner: item.partner,
  src: item.src || defaultImageSrc,
}));

export { formattedPartnerItems };