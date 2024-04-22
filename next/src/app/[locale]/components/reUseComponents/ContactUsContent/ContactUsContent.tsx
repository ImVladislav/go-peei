import Image from "next/image";

import Translator from "../../translator/Translator";
import Button from "../../Button/Button";
import { contactUsContentItem } from "@/app/types";

import styles from "./contactUsContent.module.scss";

const ContactUsContent = ({
  imgSrc,
  imgAlt,
  imgStyle,
  description,
}: contactUsContentItem) => {
  return (
    <div className={styles.container}>
      <div className={`${styles.inner} ${imgStyle}`}>
        <Image
          className={styles.img}
          src={imgSrc}
          alt={imgAlt}
          width={36}
          height={52}
        />
        <ul className={styles.list}>
          {description.map((item) => (
            <li>
              <p className={styles.description}>
                {item && <Translator>{item}</Translator>}
              </p>
            </li>
          ))}
        </ul>

        <Button newStyles={styles.btn} isLink href="/contacts">
          <Translator>contactUsBtn</Translator>
        </Button>
      </div>
    </div>
  );
};

export default ContactUsContent;
