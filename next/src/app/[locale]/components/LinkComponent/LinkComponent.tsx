"use client";
import Link from "next/link";
import { useState } from "react";

import { SvgProps } from "@/app/types";

import SvgComponent from "../SvgComponent/SvgComponent";

interface SocialLinksProps {
  href: string;
  name: string;
  iconsData: SvgProps[];
  newStyles?: string;
  isVisible?: boolean;
  iconName?: string;
}

const LinkComponent = ({
  href,
  name,
  iconsData,
  newStyles,
  isVisible = false,
  iconName,
}: SocialLinksProps) => {
  const [isHovered, setIsHovered] = useState("");

  return (
    <Link
      href={href}
      onMouseEnter={() => setIsHovered(name)}
      onMouseLeave={() => setIsHovered("")}
      className={newStyles}
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
      {iconName && <p>{iconName}</p>}
      {isVisible && <span>{name}</span>}
    </Link>
  );
};

export default LinkComponent;
