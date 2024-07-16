"use client";
import Link from "next/link";
import { ReactNode, useState } from "react";

import { SvgProps } from "@/app/types";

import SvgComponent from "../SvgComponent/SvgComponent";

interface SocialLinksProps {
  href: string;
  name: string;
  iconsData: SvgProps[];
  newStyles?: string;
  isVisible?: boolean;
  iconName?: ReactNode;
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
      target="_blank"
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
      {iconName && <div>{iconName}</div>}
      {isVisible && <span>{name}</span>}
    </Link>
  );
};

export default LinkComponent;
