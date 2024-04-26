"use client";
import Navbar from "./Navbar";
import Link from "next/link";
import s from "./Header.module.scss";
import Image from "next/image";
import LanguageChanger from "../../../../../components/LanguageChanger";
import SocialLinks from "./SocialLinks";
import {
  initialSocials,
  headerContacts,
  iconsData,
  headerIconsData,
} from "@/app/constants/index";
import { useTranslation } from "react-i18next";
import logoUA from "../../../../../public/logo/logoUA.svg";
import logoENG from "../../../../../public/logo/logoENG.svg";
export default function Header({ locale }) {
  const { t } = useTranslation();
  console.log("locale", locale);
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
            <Image
              src={locale === "uk" ? logoUA : logoENG}
              width={200}
              height={60}
              alt="Logo"
            />
          </Link>
          <Navbar />
          <div className={s.header__langChangContainer}>
            <LanguageChanger />
          </div>
        </div>
      </div>
    </>
  );
}
