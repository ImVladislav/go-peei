import React from "react";

import { navItems } from "./navItems";
import s from "./Header.module.scss";
import LanguageChanger from "../../../../../components/LanguageChanger";
import { useTranslation } from "react-i18next";
import Modal from "../Modal/Modal";
import { useState } from "react";
import menuBtnSvg from "../../../../../public/MobileMenuButton.svg";
import Image from "next/image";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import logoutSVG from "../../../../../public/logout.svg";
import SocialLinks from "./SocialLinks";

import {
  initialSocials,
  headerContacts,
  iconsData,
  headerIconsData,
} from "@/app/constants/index";

import ModalContent from "../supportUSbtnModal/ModalContent";
import { usePathname } from "next/navigation";

const NavModal = () => {
  const { t } = useTranslation();
  const { data: session } = useSession();
  const [modalVisible, setModalVisible] = useState(false);
  // console.log(session);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dropdownStates, setDropdownStates] = useState(
    navItems.map(() => false)
  );

  const pathname = usePathname();

  const handleToggleDropdown = (index) => {
    setDropdownStates((prevState) => {
      const updatedDropdownStates = prevState.map((state, i) =>
        i === index ? !state : false
      );
      return updatedDropdownStates;
    });
  };

  const handleClick = (e, key) => {
    if (key === "financially") {
      e.preventDefault();
      setIsModalOpen(false);
      setModalVisible(true);
    }
    setIsModalOpen(false);
  };

  const handleConfirm = () => {
    setModalVisible(false);
  };

  return (
    <>
      <button className={s.menuBtn} onClick={() => setIsModalOpen(true)}>
        <Image width={40} src={menuBtnSvg} alt="menu" />
      </button>
      <Modal show={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className={s.navMobile__wraper}>
          {navItems.map((item, index) => (
            <div
              key={item.title.label}
              className={s.nav__itemContainer}
              onClick={() => handleToggleDropdown(index)}
            >
              <div className={s.nav__item}>
                <p className={s.text}>{t(item.title.key)}</p>
                {/* <svg
                  id={`svg-${item.title.label}`}
                  width="25px"
                  height="25px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={
                    dropdownStates[index] ? s.svgIcon__rotateOnClick : s.svgIcon
                  }
                >
                  <path
                    d="M6 9L12 15L18 9"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg> */}
                <div style={{ width: "24px", height: "24px" }}>
                  <svg
                    width="11"
                    height="6"
                    viewBox="0 0 11 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={
                      dropdownStates[index]
                        ? s.svgIcon__rotateOnClick
                        : s.svgIcon
                    }
                  >
                    <path d="M5.5 5.5L0.5 0.5H10.5L5.5 5.5Z" fill="#1C1B1F" />
                  </svg>
                </div>
              </div>
              <ul
                className={`${s.dropdownMobile} ${
                  dropdownStates[index] ? s.dropdownActive : ""
                }`}
              >
                {item.links.map((link) => (
                  <li
                    // className={s.dropdownMobile__item}
                    className={`${s.dropdownMobile__item}  ${
                      (pathname === `/uk${link.href}` ||
                        pathname === link.href) &&
                      s.dropdown__active
                    }`}
                    key={link.label}
                  >
                    <Link
                      onClick={(e) => handleClick(e, link.key)}
                      href={link.href}
                      className={s.dropdownLink}
                      // className={`${s.link} ${s.dropdownLink}`}
                    >
                      {t(link.key)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className={s.linkMobile}>
            <Link
              onClick={() => setIsModalOpen(false)}
              href="/news"
              // className={s.text}
              className={`${s.text}  ${
                (pathname === `/uk/news` || pathname === `/news`) &&
                s.dropdown__active
              }`}
            >
              {t("news")}
            </Link>
          </div>
          <div className={s.linkMobile}>
            <Link
              onClick={() => setIsModalOpen(false)}
              href="/contacts"
              // className={s.text}
              className={`${s.text}  ${
                (pathname === `/uk/contacts` || pathname === `/contacts`) &&
                s.dropdown__active
              }`}
            >
              {t("contacts")}
            </Link>
          </div>
          <div className={s.linkMobile}>
            {!session ? (
              <></>
            ) : (
              <>
                {/* {session.user?.email} */}
                <button
                  className={s.nav__logoutMobile}
                  onClick={() => {
                    signOut();
                  }}
                >
                  <Image src={logoutSVG} width={30} height={20} alt="Logout" />
                </button>
              </>
            )}
            <LanguageChanger />
          </div>
          {/* <div className={s.socialLinks__container}> */}
          <SocialLinks
            customClassNameUl={s.socialLinks__containerMobile}
            socialName="off"
            initialSocials={initialSocials}
            iconsData={iconsData}
          />
          {/* </div> */}
          <SocialLinks
            customClassNameUl={s.contact__containerMobile}
            customClassNameLi={s.contact__ListMobile}
            socialName="on"
            initialSocials={headerContacts}
            iconsData={headerIconsData}
          />
        </div>
      </Modal>
      {modalVisible && (
        <Modal
          show={modalVisible}
          onClose={() => setModalVisible(false)}
          children={<ModalContent onConfirm={handleConfirm} />}
          modalPosition={s.modal}
        />
      )}
    </>
  );
};

export default NavModal;
