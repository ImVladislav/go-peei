"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { navLinks } from "@/app/types";

import styles from "./navFooter.module.scss";
import Translator from "../../translator/Translator";

const NavLink = ({ item }: { item: navLinks }) => {
  const pathname = usePathname();
  const activeStyle = pathname === `/uk${item.href}` || pathname === item.href;

  return (
    <Link
      className={`${styles.link} ${activeStyle && styles.active}`}
      href={item.href}
    >
      <Translator>{item.label}</Translator>
    </Link>
  );
};

export default NavLink;
