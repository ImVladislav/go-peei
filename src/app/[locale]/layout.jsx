// import { Metadata } from "next";
import { Exo_2 } from "next/font/google";
import { dir } from "i18next";
import i18nConfig from "@/i18nConfig";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import "@/app/styles/index.scss";
import ExampleClientComponent from "../../../components/ExampleClientComponent";
import TranslationsProvider from "../../../components/TranslationsProvider";
import initTranslations from "../i18n";
const exo = Exo_2({ subsets: ["latin"] });

export const metadata = {
  title: "ГО",
  description: "Generated by create next app",
};

export function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({ children, params: { locale } }) {
  const i18nNamespaces = ["home", "common", "navbar"];

  const { resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <html lang={locale} dir={dir(locale)}>
        <body className={exo.className} suppressHydrationWarning={true}>
          <div className="wrapper">
            <Header locale={locale} />
            <main>{children}</main>
            <Footer />
          </div>
          <div id="modal-root"></div>
        </body>
      </html>
    </TranslationsProvider>
  );
}
