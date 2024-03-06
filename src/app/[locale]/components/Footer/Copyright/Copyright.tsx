import Link from "next/link";

import styles from "./copyright.module.scss";

const Copyright = () => {
  return (
    <div className={styles.wrap}>
      <p className={styles.copy}>
        <span>&copy;</span> 2024 Всі права захищено
      </p>
      <div className={styles.inner}>
        <Link className={styles.link} href="/">
          Команда розробки сайту
        </Link>
        <Link className={styles.link} href="/">
          Privacy Policy
        </Link>
        <Link className={styles.link} href="/">
          Terms of Service
        </Link>
        <Link className={styles.link} href="/">
          Cookies Settings
        </Link>
      </div>
    </div>
  );
};

export default Copyright;
