// // import { useTranslation, Trans } from "next-i18next";
// import { useTranslations } from "next-intl";
// import Link from "next/link";

// // import { useTranslation } from "next-i18next";
// // const lngs = {
// //   en: { nativeName: "English" },
// //   de: { nativeName: "Deutsch" },
// // };

// const SafetyRules = () => {
//   const t = useTranslations("Common");
//   // const { t, i18n } = useTranslation();
//   // Використовуйте useTranslation з великої літери
//   // const handleLanguageChange = (lng) => {
//   //   // Додайте функцію handleLanguageChange
//   //   // i18n.changeLanguage(lng);
//   // };

//   return (
//     <div>
//       <Link href="/" locale="en">
//         In english
//       </Link>{" "}
//       |{" "}
//       <Link href="/" locale="fi">
//         In Finnish
//       </Link>
//       <div>
//         <p>{t("aboutUs")}</p>
//         <p>{t("officialDocuments")}</p>
//       </div>
//     </div>
//   );
// };

// export default SafetyRules;

"use client";

import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { ChangeEvent, useTransition } from "react";

export default function LocalSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    startTransition(() => {
      router.replace(`/${nextLocale}`);
    });
  };
  return (
    <label className="border-2 rounded">
      <p className="sr-only">change language</p>
      <select
        defaultValue={localActive}
        className="bg-transparent py-2"
        onChange={onSelectChange}
        disabled={isPending}
      >
        <option value="en">English</option>
        <option value="id">Indonesian</option>
      </select>
    </label>
  );
}
