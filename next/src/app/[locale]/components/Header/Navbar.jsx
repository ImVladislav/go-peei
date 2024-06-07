"use client";

import Link from "next/link";
import { navItems } from "./navItems";
import s from "./Header.module.scss";
import { useTranslation } from "react-i18next";
import NavModal from "./NavModal";
export default function Navbar() {
  const { t } = useTranslation();

  return (
    <>
      <nav className={s.nav}>
        {navItems.map((item) => (
          <div key={item.title.label} className={s.nav__itemContainer}>
            <p>
              <span className={`${s.text} ${s.nav__item}`}>
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
            <ul className={s.dropdown}>
              {item.links.map((link) => (
                <li className={s.dropdown__item} key={link.label}>
                  <Link
                    href={link.href}
                    className={`${s.link}  ${s.dropdownLink}`}
                  >
                    {t(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div style={{ marginRight: "20px" }}>
          <Link href="/news" className={s.text}>
            {t("news")}
          </Link>
        </div>
        <Link href="/contacts" className={s.text}>
          {t("contacts")}
        </Link>
      </nav>
      {/* ===============================mobile============================== */}
      <nav className={s.navMobile}>
        <NavModal />
      </nav>
    </>
  );
}
