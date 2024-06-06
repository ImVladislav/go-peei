import { iconsData } from "@/app/constants";
import Image from "next/image";
import LinkComponent from "../../LinkComponent/LinkComponent";
import Translator from "../../translator/Translator";
import styles from "./teamItem.module.scss";

interface itemProps {
  item: {
    image: string;
    name: string;
    about: string;
    position: string;
    email?: string;
  };
}

const TeamItem = ({ item }: itemProps, key: string) => {
  return (
    <>
      <li className={styles.item}>
        <div className={styles.item__container}>
          <div className={styles.item__imgWrapper}>
            <Image
              src={item.image}
              alt={item.name}
              fill
              className={styles.item__img}
            />
          </div>
          <div className={styles.item__infoWrapper}>
            <h3 className={styles.item__title}>
              <Translator>{item.name}</Translator>
            </h3>
            <p className={styles.item__position}>
              <Translator>{item.position}</Translator>
            </p>
          </div>
        </div>
        <div style={{ marginBottom: "16px" }}>
          <LinkComponent
            iconsData={iconsData}
            iconName={item.email}
            href={`mailto:${item.email}`}
            name="Email"
            newStyles={styles.item__email}
          />
        </div>
        <p className={styles.item__about}>
          <Translator>{item.about}</Translator>
        </p>
      </li>
    </>
  );
};

export default TeamItem;
