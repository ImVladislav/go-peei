"use client";
import Link from "next/link";

import { useState } from "react";

import { initialSocials, iconsData } from "@/app/constants/index";

import SvgComponent from "../SvgComponent/SvgComponent";

import s from "./Header.module.scss";
// import styles from "./socials.module.scss";

const SocialLinks = ({ socialName }: { socialName: string }) => {
  // const SocialLinks = (initialSocials: { href: string; name: string; }[], iconsData: any[] { socialName }: { socialName: string }) => {
  const [isHovered, setIsHovered] = useState("");

  let tumbler = "on";
  if (socialName === "off") {
    tumbler = "off";
  }
  console.log(tumbler);

  return (
    <ul className={s.socials__List}>
      {initialSocials.map(({ href, name }) => (
        <li className={s.socials__List_item} key={name}>
          <Link
            href={href}
            onMouseEnter={() => setIsHovered(name)}
            onMouseLeave={() => setIsHovered("")}
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
            {tumbler === "on" && <span>{name}</span>}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SocialLinks;

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

//             {name}
//           </Link>
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default Socials;
