import React from "react";
import Title from "../components/Title/Title";
import Link from "next/link";
import s from "./officialDocuments.module.scss";
import style from "../../styles/utils/Container.module.scss";

const OfficialDocuments = () => {
  return (
    <div className={style.container}>
      <section className={s.officialDocuments__section}>
        {/* <div className={s.officialDocuments__titleThumb}> */}
        <Title width={340}>Офіційні документи</Title>
        {/* </div> */}
        <ul>
          <li className={s.officialDocuments__li_item_link}>
            <Link className={s.officialDocuments__link} href="">
              Виписка
            </Link>
          </li>
          <li className={s.officialDocuments__li_item_link}>
            <Link className={s.officialDocuments__link} href="">
              Статут
            </Link>
          </li>
          <li className={s.officialDocuments__li_item_link}>
            <Link className={s.officialDocuments__link} href="">
              Положення ГО ПЕЕІ про залучення волонтерів 2023
            </Link>
          </li>
          <li className={s.officialDocuments__li_item_link}>
            <Link
              className={s.officialDocuments__link}
              href="/officialDocuments/offert_contract"
            >
              Договір оферти
            </Link>
          </li>
        </ul>
      </section>
      <section className={s.officialDocuments__section}>
        {/* <div className={s.officialDocuments__titleThumb}> */}
        <Title width={740}>Закони України пов’язані з волонтерством</Title>
        {/* </div> */}
        <ul>
          <li className={s.officialDocuments__li_item_link}>
            <Link className={s.officialDocuments__link} href="">
              Закон України “Про волонтерську діяльність”
            </Link>
          </li>
          <li className={s.officialDocuments__li_item_link}>
            <Link className={s.officialDocuments__link} href="">
              Закон України “Про благодійну діяльність та благодійні
              організації”
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default OfficialDocuments;

// import React from "react";

// const Statut = () => {
//   return (
//     <div>
//       <iframe
//         style={{ width: "90%", height: "100vh" }}
//         src="https://document.online/instruction.pdf"
//         frameBorder="0"
//       ></iframe>
//     </div>
//   );
// };

// export default Statut;
