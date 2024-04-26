import { navFooter } from "@/app/constants/index";

import NavLink from "./NavLink";

import styles from "./navFooter.module.scss";

const NavFooter = () => {
  return (
    <nav className={styles.container}>
      <ul className={styles.list}>
        {navFooter.map(
          (item) =>
            item && (
              <li className={styles.item} key={item.key}>
                <NavLink item={item} />
              </li>
            )
        )}
      </ul>
    </nav>
  );
};

export default NavFooter;
