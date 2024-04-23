"use client";

import { useRouter } from "next/navigation";

import Logo from "../Logo/Logo";
import Button from "../Button/Button";
import NavFooter from "./Nav/NavFooter";
import Copyright from "./Copyright/Copyright";

import styles from "./footer.module.scss";
import Translator from "../translator/Translator";

const Footer = () => {
  const router = useRouter();
  return (
    <div className={styles.background}>
      <div className="container">
        <div className={styles.wrap}>
          <div className={styles.logo}>
            <Logo />
            <Button
              onClick={() =>
                router.push("https://payhub.com.ua/#/service/98840")
              }
            >
              <Translator>supportUs</Translator>
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
