import Link from "next/link";

import styles from "./copyright.module.scss";

const Copyright = () => {
  return (
    <div className={styles.wrap}>
      <p className={styles.copy}>
        <span>&copy;</span> 2024 Всі права захищено
      </p>
      <div>
        <div className={styles.inner}>
          <div className={styles.link_wrap}>
            <Link className={styles.link} href="/">
              Команда розробки сайту
            </Link>
            <Link className={styles.link} href="/">
              Privacy Policy
            </Link>
          </div>
          <div className={styles.link_wrap}>
            <Link className={styles.link} href="/">
              Terms of Service
            </Link>
            <Link className={styles.link} href="/">
              Cookies Settings
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Copyright;
