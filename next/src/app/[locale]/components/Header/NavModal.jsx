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
const NavModal = () => {
  const { t } = useTranslation();
  const { data: session } = useSession();
  console.log(session);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dropdownStates, setDropdownStates] = useState(
    navItems.map(() => false)
  );
  const handleToggleDropdown = (index) => {
    setDropdownStates((prevState) => {
      const updatedDropdownStates = prevState.map((state, i) =>
        i === index ? !state : false
      );
      return updatedDropdownStates;
    });
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
                <p>
                  <span
                    className={s.link}
                    style={{
                      fontSize: "20px",
                      cursor: "pointer",
                      color: "black",
                    }}
                  >
                    {t(item.title.key)}
                  </span>
                </p>
                <svg
                  id={`svg-${item.title.label}`}
                  width="25px"
                  height="25px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={s.svgIcon}
                >
                  <path
                    d="M6 9L12 15L18 9"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <ul
                className={`${s.dropdownMobile} ${
                  dropdownStates[index] ? s.dropdownActive : ""
                }`}
              >
                {item.links.map((link) => (
                  <li className={s.dropdownMobile__item} key={link.label}>
                    <Link
                      onClick={() => setIsModalOpen(false)}
                      style={{ fontSize: "18px" }}
                      href={link.href}
                      className={`${s.link} ${s.dropdownLink}`}
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
              className={s.contactLink}
            >
              {t("news")}
            </Link>
          </div>
          <div className={s.linkMobile}>
            <Link
              onClick={() => setIsModalOpen(false)}
              href="/contacts"
              className={s.contactLink}
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
        </div>
      </Modal>
    </>
  );
};

export default NavModal;
