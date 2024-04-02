"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { navLinks } from "@/app/types";

import styles from "./navFooter.module.scss";

const NavLink = ({ item }: { item: navLinks }) => {
  const pathname = usePathname();
  const activeStyle = pathname === `/uk${item.href}` || pathname === item.href;

  return (
    <Link
      className={`${styles.link} ${activeStyle && styles.active}`}
      href={item.href}
    >
      {item.label}
    </Link>
  );
};

export default NavLink;
