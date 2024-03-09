import Link from "next/link";

import { navFooter } from "@/app/constants/index";

import Socials from "../Socials/Socials";

import styles from "./navFooter.module.scss";

const NavFooter = () => {
  return (
    <nav className={styles.wrap}>
      <ul className={styles.list}>
        {navFooter.map(
          (item) =>
            item.col === 1 && (
              <li className={styles.item} key={item.key}>
                <Link className={styles.link} href={item.href}>
                  {item.label}
                </Link>
              </li>
            )
        )}
      </ul>
      <ul className={styles.list}>
        {navFooter.map(
          (item) =>
            item.col === 2 && (
              <li className={styles.item} key={item.key}>
                <Link className={styles.link} href={item.href}>
                  {item.label}
                </Link>
              </li>
            )
        )}
      </ul>
      <ul className={styles.list}>
        {navFooter.map(
          (item) =>
            item.col === 3 && (
              <li className={styles.item} key={item.key}>
                <Link className={styles.link} href={item.href}>
                  {item.label}
                </Link>
              </li>
            )
        )}
      </ul>
      <Socials />
    </nav>
  );
};

export default NavFooter;
