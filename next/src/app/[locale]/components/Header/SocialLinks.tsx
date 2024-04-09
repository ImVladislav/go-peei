"use client";
import Link from "next/link";

import { useState } from "react";

import { initialSocials, iconsData } from "@/app/constants/index";

import SvgComponent from "../SvgComponent/SvgComponent";

import s from "./Header.module.scss";
// import styles from "./socials.module.scss";

const SocialLinks = () => {
  const [isHovered, setIsHovered] = useState("");
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
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SocialLinks;
