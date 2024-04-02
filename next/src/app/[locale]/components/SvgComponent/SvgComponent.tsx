"use client";

import { SvgProps } from "@/app/types";

import styles from "./SvgComponent.module.scss";

const SvgComponent = ({
  path,
  viewBox,
  fill = "#0d490d",
  fillHovered = "#10880d",
  isHovered,
}: SvgProps) => {
  return (
    <svg
      className={styles.icon}
      viewBox={viewBox}
      fill={!isHovered ? fill : fillHovered}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d={path} />
    </svg>
  );
};

export default SvgComponent;
