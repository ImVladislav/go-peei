import Link from "next/link";
import Image from "next/image";

import logoUa from "../../../../../public/logo/logoUA.svg";
import logo from "../../../../../public/logo/logoENG.svg";

import styles from "./logo.module.scss";

const Logo = ({
  locale,
  newStyleWrap,
}: {
  locale: string;
  newStyleWrap?: string;
}) => {
  return (
    <Link className={newStyleWrap ? newStyleWrap : styles.img_wrap} href="/">
      {locale === "en" ? (
        <Image
          className={styles.img}
          src={logo}
          alt="Logo"
          fill
          priority={true}
        />
      ) : (
        <Image
          className={styles.img}
          src={logoUa}
          alt="Logo"
          fill
          priority={true}
        />
      )}
    </Link>
  );
};

export default Logo;
