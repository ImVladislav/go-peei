import Image from "next/image";

import React from "react";
import Translator from "./components/translator/Translator";
import Button from "./components/Button/Button";

import styles from "./notFound.module.scss";
export default function NotFound() {
  return (
    <div className="container">
      <div className={styles.section}>
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            src="/NotFound.svg"
            alt="NotFound"
            fill
          />
        </div>
        <p className={styles.desc}>
          <Translator>notFound</Translator>
        </p>

        <Button newStyles={styles.btn} href="/" isLink>
          На головну
        </Button>
      </div>
    </div>
  );
}
