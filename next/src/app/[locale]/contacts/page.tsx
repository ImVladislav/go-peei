import { headerContacts, headerIconsData } from "@/app/constants";

import styles from "./contact.module.scss";
import Title from "../components/Title/Title";
import Translator from "../components/translator/Translator";
import LinkComponent from "../components/LinkComponent/LinkComponent";
import FormComponent from "./FormComponent";

const ContactPage = () => {
  return (
    <div className={styles.section}>
      <div className="container">
        <div className={styles.wrap}>
          <div className={styles.contactsContainer}>
            <Title>
              <Translator>contactUs</Translator>
              <span className={styles.accentTitle}>
                <Translator>contactUsSecond</Translator>
              </span>
            </Title>
            <ul className={styles.list}>
              {headerContacts.map((item) => (
                <li className={styles.item}>
                  <LinkComponent
                    iconsData={headerIconsData}
                    isVisible
                    href={item.href}
                    name={item.name}
                    newStyles={styles.link}
                  />
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.formContainer}>
            <Title>
              <Translator>writeToUs</Translator>
              <span className={styles.accentTitle}>
                <Translator>writeToUsSecond</Translator>
              </span>
            </Title>
            {/* form */}
            <FormComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
