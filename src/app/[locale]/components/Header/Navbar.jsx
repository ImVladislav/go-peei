import initTranslations from "../../../../app/i18n";
import Link from "next/link";
import TranslationsProvider from "../../../../../components/TranslationsProvider";
import { navItems } from "./navItems";
import s from "./Header.module.scss";
const i18nNamespaces = ["navbar", "common"];

export default async function Navbar({ params: locale }) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);
  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <nav className={s.nav}>
        {navItems.map((item) => (
          <div key={item.title.label} className={s.nav__item}>
            <Link href={item.title.href}>
              <span
                className={s.link}
                style={{ fontSize: "20px", cursor: "pointer", color: "black" }}
              >
                {t(item.title.key)}
              </span>
            </Link>{" "}
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
                <li style={{ padding: "5px" }} key={link.label}>
                  <Link
                    style={{ fontSize: "18px" }}
                    href={link.href}
                    className={s.link}
                  >
                    {t(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <Link
          href="to_contact_page"
          className={s.link}
          style={{ fontSize: "20px", cursor: "pointer", color: "black" }}
        >
          {t("contacts")}
        </Link>
      </nav>
    </TranslationsProvider>
  );
}
