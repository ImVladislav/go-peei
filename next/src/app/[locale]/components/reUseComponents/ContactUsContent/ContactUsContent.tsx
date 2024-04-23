import Image from "next/image";
import Link from "next/link";

import Translator from "../../translator/Translator";
import Button from "../../Button/Button";
import { contactUsContentItem } from "@/app/types";

import styles from "./contactUsContent.module.scss";

const ContactUsContent = ({
  imgSrc,
  imgAlt,
  imgStyle,
  list,
}: contactUsContentItem) => {
  const iconClass = imgStyle ? `${styles.img} ${imgStyle}` : styles.img;

  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <Image
          className={iconClass}
          src={imgSrc}
          alt={imgAlt}
          width={36}
          height={52}
        />
        <ul className={styles.list}>
          {list?.map((item, index) => (
            <li key={index}>
              <p className={styles.description}>
                {item && (
                  <>
                    <Translator>{item.description}</Translator>{" "}
                    {item.href && (
                      <Link className={styles.link} href={item.href}>
                        {item.link && <Translator>{item.link}</Translator>}
                      </Link>
                    )}
                    {item.descAfter && (
                      <Translator>{item.descAfter}</Translator>
                    )}
                  </>
                )}
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
