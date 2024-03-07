import React from "react";
import Image from "next/image";
import Link from "next/link";

import { initialSocials } from "@/app/constants/index";

import styles from "./socials.module.scss";

const Socials = () => {
  return (
    <ul className={styles.wrap}>
      {initialSocials.map(({ href, name }) => (
        <li className={styles.item} key={name}>
          <Link className={styles.link} href={href}>
            <Image
              src={`/socials/${name}.svg`}
              width={24}
              height={24}
              alt={name}
            />
            {name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Socials;
