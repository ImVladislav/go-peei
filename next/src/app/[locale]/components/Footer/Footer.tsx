"use client";

import { useRouter } from "next/navigation";
import Logo from "../Logo/Logo";
import Button from "../Button/Button";
import NavFooter from "./Nav/NavFooter";
import Copyright from "./Copyright/Copyright";

import styles from "./footer.module.scss";

const Footer = () => {
  const router = useRouter();
  return (
    <div className={styles.background}>
      <div className="container">
        <div className={styles.wrap}>
          <div className={styles.logo}>
            <Logo width={303} height={84} />
            <Button onClick={() => router.push("/financial")}>
              Підтримати нас
            </Button>
          </div>
          <NavFooter />
        </div>
        <Copyright />
      </div>
    </div>
  );
};

export default Footer;
