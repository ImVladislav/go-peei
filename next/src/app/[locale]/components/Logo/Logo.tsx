import Link from "next/link";
import Image from "next/image";

import logo from "../../../../../public/LogoUA.svg";

import styles from "./logo.module.scss";

const Logo = () => {
  return (
    <Link className={styles.img_wrap} href="/">
      <Image className={styles.img} src={logo} alt="Logo" fill />
    </Link>
  );
};

export default Logo;
