import { navFooter } from "@/app/constants/index";

import NavLink from "./NavLink";
import Socials from "../Socials/Socials";

import styles from "./navFooter.module.scss";

const NavFooter = () => {
  return (
    <nav className={styles.container}>
      <div className={styles.wrap}>
        <ul className={styles.list}>
          {navFooter.map(
            (item) =>
              item.col === 1 && (
                <li className={styles.item} key={item.key}>
                  <NavLink item={item} />
                </li>
              )
          )}
        </ul>
        <ul className={styles.list}>
          {navFooter.map(
            (item) =>
              item.col === 2 && (
                <li className={styles.item} key={item.key}>
                  <NavLink item={item} />
                </li>
              )
          )}
        </ul>
      </div>
      <div className={styles.wrap}>
        <ul className={styles.list}>
          {navFooter.map(
            (item) =>
              item.col === 3 && (
                <li className={styles.item} key={item.key}>
                  <NavLink item={item} />
                </li>
              )
          )}
        </ul>
        <Socials />
      </div>
    </nav>
  );
};

export default NavFooter;
