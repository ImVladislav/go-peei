// "use client";
import Navbar from "./Navbar";
import Link from "next/link";
import s from "./Header.module.scss";

import Image from "next/image";
import Logo from "../../../../../public/Logo.svg";
import Facebook from "../../../../../public/socialSVG/Facebook Outline.svg";
import Instagram from "../../../../../public/socialSVG/Instagram Outline.svg";
import Linkedin from "../../../../../public/socialSVG/Linkedin Outline.svg";
import Whatsapp from "../../../../../public/socialSVG/Whatsapp Outline.svg";
import Youtube from "../../../../../public/socialSVG/Youtube Outline.svg";
import phone_icon from "../../../../../public/socialSVG/phone_icon.svg";
import email_icon from "../../../../../public/socialSVG/email_icon.svg";
import LanguageChanger from "../../../../../components/LanguageChanger";

const Header = ({ locale }) => {
  // const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");
  return (
    <>
      <div className={s.header__contact}>
        <div className={s.header__contactToCenter}>
          <div className={s.header__contact_phoneEemail_block}>
            <Link
              className={s.header__contactLink}
              href="mailto:copeeiua@gmail.com"
            >
              <Image
                className={s.header__contactIcon}
                src={email_icon}
                alt="phone_icon"
              />
              copeeiua@gmail.com
            </Link>

            <Link className={s.header__contactLink} href="tel:+380506558561">
              <Image src={phone_icon} width={24} height={24} alt="phone_icon" />
              +38 050 655 85 61
            </Link>
          </div>
          <div className={s.header__contact_phoneEemail_block}>
            <Link style={{ marginLeft: "auto", marginRight: "auto" }} href="/">
              Правила безпеки під час воєнного стану
            </Link>
          </div>
          <div className={s.header__social}>
            <Link className={s.header__svgLink} href="/">
              <Image src={Whatsapp} width={24} height={24} alt="Whatsapp" />
            </Link>
            <Link className={s.header__svgLink} href="/">
              <Image src={Facebook} width={24} height={24} alt="Facebook" />
            </Link>
            <Link className={s.header__svgLink} href="/">
              <Image src={Instagram} width={24} height={24} alt="Instagram" />
            </Link>

            <Link className={s.header__svgLink} href="/">
              <Image src={Youtube} width={24} height={24} alt="Youtube" />
            </Link>

            <Link className={s.header__svgLink} href="/">
              <Image src={Linkedin} width={24} height={24} alt="Linkedin" />
            </Link>
          </div>
        </div>
      </div>
      <div className={s.header__container}>
        <div className={s.header}>
          <Link className={s.header__logoLink} href="/">
            <Image src={Logo} width={200} height={60} alt="Logo" />
          </Link>
          <Navbar />
        </div>
      </div>
    </>
  );
};

export default Header;
