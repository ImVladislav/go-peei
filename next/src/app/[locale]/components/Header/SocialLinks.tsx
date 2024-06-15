// "use client";
// import Link from "next/link";

// import { useState } from "react";

// import { initialSocials, iconsData } from "@/app/constants/index";

// import SvgComponent from "../SvgComponent/SvgComponent";

// import s from "./Header.module.scss";
// // import styles from "./socials.module.scss";
// interface SocialLinksProps {
//   socialName: string;
//   initialSocials: { href: string; name: string }[];
//   iconsData: any[];
// }

// // const SocialLinks = ({ socialName }: { socialName: string }) => {
// const SocialLinks = ({
//   socialName,
//   initialSocials,
//   iconsData,
// }: SocialLinksProps) => {
//   const [isHovered, setIsHovered] = useState("");

//   let tumbler = "on";
//   if (socialName === "off") {
//     tumbler = "off";
//   }

//   return (
//     <ul className={s.socials__List}>
//       {initialSocials.map(({ href, name }) => (
//         <li className={s.socials__List_item} key={name}>
//           <Link
//             href={href}
//             onMouseEnter={() => setIsHovered(name)}
//             onMouseLeave={() => setIsHovered("")}
//             className={s.social__link}
//           >
//             {iconsData.map(
//               (icon) =>
//                 icon.name === name && (
//                   <SvgComponent
//                     key={icon.name}
//                     viewBox={icon.viewBox}
//                     path={icon.path}
//                     isHovered={isHovered === name}
//                   />
//                 )
//             )}
//             {tumbler === "on" && <span>{name}</span>}
//           </Link>
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default SocialLinks;

"use client";
import Link from "next/link";
import { useState } from "react";
import SvgComponent from "../SvgComponent/SvgComponent";
import s from "./Header.module.scss";

interface SocialLinksProps {
  socialName: string;
  initialSocials: { href: string; name: string }[];
  iconsData: any[];
  customClassNameUl?: string;
  customClassNameLi?: string;
}

const SocialLinks = ({
  socialName,
  initialSocials,
  iconsData,
  customClassNameUl,
  customClassNameLi,
}: SocialLinksProps) => {
  const [isHovered, setIsHovered] = useState("");

  let tumbler = "on";
  if (socialName === "off") {
    tumbler = "off";
  }

  return (
    <ul className={customClassNameUl || s.socials__List}>
      {initialSocials.map(({ href, name }) => (
        <li className={customClassNameLi || s.socials__List_item} key={name}>
          <Link
            href={href}
            onMouseEnter={() => setIsHovered(name)}
            onMouseLeave={() => setIsHovered("")}
            className={s.social__link}
          >
            {iconsData.map(
              (icon) =>
                icon.name === name && (
                  <SvgComponent
                    key={icon.name}
                    viewBox={icon.viewBox}
                    path={icon.path}
                    isHovered={isHovered === name}
                  />
                )
            )}
            {tumbler === "on" && (
              <span className={s.social__link_span}>{name}</span>
            )}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SocialLinks;
