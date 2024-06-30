"use client";
import Link from "next/link";

import { useState } from "react";

import { initialSocials, iconsData } from "@/app/constants/index";

import SvgComponent from "../../SvgComponent/SvgComponent";

import styles from "./socials.module.scss";
import LinkComponent from "../../LinkComponent/LinkComponent";

const Socials = () => {
  const [isHovered, setIsHovered] = useState("");
  return (
    // <ul className={styles.wrap}>
    //   {initialSocials.map(({ href, name }) => (
    //     <li className={styles.item} key={name}>
    //       <Link
    //         className={styles.link}
    //         href={href}
    //         onMouseEnter={() => setIsHovered(name)}
    //         onMouseLeave={() => setIsHovered("")}
    //       >
    //         {iconsData.map(
    //           (icon) =>
    //             icon.name === name && (
    //               <SvgComponent
    //                 key={icon.name}
    //                 viewBox={icon.viewBox}
    //                 path={icon.path}
    //                 isHovered={isHovered === name}
    //               />
    //             )
    //         )}
    //       </Link>
    //     </li>
    //   ))}
    // </ul>
    <ul className={styles.list}>
      {initialSocials.map((item) => (
        <li className={styles.item} key={item.name}>
          <LinkComponent
            iconsData={iconsData}
            // isVisible
            href={item.href}
            name={item.name}
            newStyles={styles.link}
          />
        </li>
      ))}
    </ul>
  );
};

export default Socials;
