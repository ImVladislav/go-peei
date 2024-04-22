import Navbar from "./Navbar";
import Link from "next/link";
import s from "./Header.module.scss";
import Image from "next/image";
import Logo from "../../../../../public/Logo.svg";
import phone_icon from "../../../../../public/socialSVG/phone_icon.svg";
import email_icon from "../../../../../public/socialSVG/email_icon.svg";
import LanguageChanger from "../../../../../components/LanguageChanger";
import SocialLinks from "./SocialLinks";
import {
  initialSocials,
  headerContacts,
  iconsData,
  headerIconsData,
} from "@/app/constants/index";
const Header = () => {
  return (
    <>
      <div className={s.header__contact}>
        <div className={s.header__contactToCenter}>
          <div className={s.header__contact_phoneEemail_block}>
            <SocialLinks
              socialName="on"
              initialSocials={headerContacts}
              iconsData={headerIconsData}
            />
          </div>

          <SocialLinks
            socialName="off"
            initialSocials={initialSocials}
            iconsData={iconsData}
          />
        </div>
      </div>
      <div className={s.header__container}>
        <div className={s.header}>
          <Link className={s.header__logoLink} href="/">
            <Image src={Logo} width={200} height={60} alt="Logo" />
          </Link>
          <Navbar />
          <div className={s.header__langChangContainer}>
            <LanguageChanger />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
