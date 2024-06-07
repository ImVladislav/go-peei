import defaultLogo from "../../../../public/partners/partnersLogo/defaultPartnersLogo.png";
import steadyLogo from "../../../../public/partners/partnersLogo/steady.png";

const partnerItems = [
  {
    partner: "Steady",
    src: steadyLogo,
  },
  {
    partner: "fop",
  },
    {
    partner: "fop",
  },
      {
    partner: "fop",
  },
        {
    partner: "fop",
  },
          {
    partner: "fop",
  },
            {
    partner: "fop",
  },
              {
    partner: "fop",
  },
  // Додайте більше об'єктів за необхідності
];

const defaultImageSrc = defaultLogo;

const formattedPartnerItems = partnerItems.map(item => ({
  partner: item.partner,
  src: item.src || defaultImageSrc,
}));

export { formattedPartnerItems };