import Link from "next/link";
import Image from "next/image";

import logoUa from "../../../../../public/logo/logoUA.svg";
import logo from "../../../../../public/logo/logoENG.svg";

import styles from "./logo.module.scss";

const Logo = ({ locale }: { locale: string }) => {
  return (
    <Link className={styles.img_wrap} href="/">
      {locale === "en" ? (
        <Image className={styles.img} src={logo} alt="Logo" fill />
      ) : (
        <Image className={styles.img} src={logoUa} alt="Logo" fill />
      )}
    </Link>
  );
};

export default Logo;
