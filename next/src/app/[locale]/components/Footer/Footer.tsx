"use client";

import { useRouter } from "next/navigation";

import Translator from "../translator/Translator";

import Logo from "../Logo/Logo";
import Button from "../Button/Button";
import NavFooter from "./Nav/NavFooter";
import Copyright from "./Copyright/Copyright";

import styles from "./footer.module.scss";
import Socials from "./Socials/Socials";
import SupportUSBtnModal from "../supportUSbtnModal/supportUSbtnModal";

const Footer = ({ locale }: { locale: string }) => {
  const router = useRouter();
  return (
    <div className={styles.section}>
      <div className="container">
        <div className={styles.wrap}>
          <div className={styles.logo}>
            <Logo locale={locale} />
            {/* <Button
              newStyles={styles.btn}
              onClick={() =>
                router.push("https://payhub.com.ua/#/service/98840")
              }
            >
              <Translator>supportUs</Translator>
            </Button> */}
            <SupportUSBtnModal
              stylesBtnWrap={styles.btnWrap}
              stylesBtn={styles.btn}
            />
          </div>
          <NavFooter />
        </div>

        <Socials />
        <Copyright />
      </div>
    </div>
  );
};

export default Footer;
