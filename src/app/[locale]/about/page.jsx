import Link from "next/link";
import styles from "../page.module.css";
import initTranslations from "../../i18n";
import TranslationsProvider from "../../../../components/TranslationsProvider";

import Image from "next/image";
import about1 from "../../../../public/about/aboutus1image.png";
import about2 from "../../../../public/about/aboutus2image.jpg";
import about3 from "../../../../public/about/aboutus3image.png";
import about4 from "../../../../public/about/aboutus4image.jpg";
import about5 from "../../../../public/about/aboutus5image.jpg";
import bg from "../../../../public/background.png";

const i18nNamespaces = ["about-us", "common"];

export default async function About({ params: { locale } }) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <div
        style={{ backgroundImage: `url(${bg.src})`, backgroundSize: "cover" }}
      >
        <div className="container">
          <h1
            style={{
              margin: "20px 0px",
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            Про нас
          </h1>
          <section
            style={{
              display: "flex",
              flexDirection: "row-reverse",
              alignItems: "center",
            }}
          >
            <Image
              className="about__images"
              style={{ width: "350px" }}
              src={about1}
              alt={"about us image"}
            />

            <div>
              <p className="about__text">
                Наша громадська організація вітає вас у нашій спільноті, де ми
                об&lsquo;єднуємо зусилля активістів для сприяння сталому та
                екологічно безпечному майбутньому. За допомогою інноваційних
                технологій та співпраці з експертами у сфері відновлення
                ресурсів, ми долучаємо свої зусилля до зменшення негативного
                впливу відходів на наше середовище. Наша організація активно
                працює над вдосконаленням технологій переробки вторинної
                сировини, залучаючи до цієї справи фахівців і бізнесменів,
                молодь і громадськість, проводить інтерактивні роз’яснювальні
                заняття серед підлітків, розробляє та впроваджує програми
                переробки вторинної сировини, щоб зменшити забруднення
                зовнішнього середовища та сприяти ефективному використанню
                ресурсів. Відходи стають вихідним матеріалом для нових, сталих
                виробів, допомагаючи зберегти наше довкілля.
              </p>

              <div className="about__text-block">
                <h3 className="about__text-block-title">Наші цінності</h3>
                <ul>
                  <li className="about__text-block-item">
                    <p>
                      Відкритість: Чесність і прозорість роблять нашу
                      організацію більшою та ефективнішою.
                    </p>
                  </li>
                  <li className="about__text-block-item">
                    <p>
                      Співпраця: У нас вірять в силу колективної дії – разом ми
                      змінюємо світ.
                    </p>
                  </li>
                  <li className="about__text-block-item">
                    <p>
                      Довіра: Взаємна підтримка та віра в смілі дії є основою
                      нашого спільного шляху.
                    </p>
                  </li>
                  <li className="about__text-block-item">
                    <p>
                      Терміновість: У світі швидких змін ми працюємо чуйно та
                      ефективно.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <h3 className="about__text-block-title"> Наші принципи </h3>
          <section
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "row-reverse",
            }}
          >
            <Image
              className="about__images"
              src={about2}
              alt={"about us image"}
            />
            <div className="about__text-block">
              {/* <h3 className="about__text-block-title"> Наші принципи </h3> */}
              <ul>
                <li className="about__text-block-item">
                  <p className="about__text">
                    Професіоналізм - Постійне вдосконалення професійних навичок
                    та знань у відповідності до сучасних стандартів
                  </p>
                </li>
                <li className="about__text-block-item">
                  <p className="about__text">
                    Новаторство - Активне впровадження інноваційних ідей та
                    технологій у роботу.
                  </p>
                </li>
                <li className="about__text-block-item">
                  <p className="about__text">
                    Об’єктивність - Забезпечення нейтрального та об’єктивного
                    підходу в усіх справах та прийнятті рішень.
                  </p>
                </li>
                <li className="about__text-block-item">
                  <p className="about__text">
                    Відповідальність - Турбота про наслідки власних дій на рівні
                    громадської та екологічної відповідальності.
                  </p>
                </li>
                <li className="about__text-block-item">
                  <p className="about__text">
                    Екосвідомість - Викладаємо принципи поваги до природи та
                    прагнемо сформувати екологічну свідомість, організовуючи
                    заходи та проекти.
                  </p>
                </li>
                <li className="about__text-block-item">
                  <p className="about__text">
                    Незалежність - Забезпечення незалежності в прийнятті рішень
                    від зовнішніх впливів чи інтересів.
                  </p>
                </li>
                <li className="about__text-block-item">
                  <p className="about__text">
                    Прозорість - Забезпечення відкритості та доступності
                    інформації для всіх зацікавлених сторін.
                  </p>
                </li>
                <li className="about__text-block-item">
                  <p className="about__text">
                    Спрямованість на результат - Активне вдосконалення та
                    коригування стратегій для досягнення максимального впливу.
                  </p>
                </li>
                <li className="about__text-block-item">
                  <p className="about__text">
                    Сталий розвиток - Зобов’язання до постійного розвитку та
                    адаптації до нових викликів.
                  </p>
                </li>
              </ul>
            </div>
          </section>
          <section style={{ alignItems: "center", display: "flex" }}>
            <Image
              className="about__images"
              src={about3}
              alt={"about us image"}
            />
            <div className="about__text-block">
              {/* <h3 className="about__text-block-title"> Наші принципи </h3> */}
              <ul>
                <li className="about__text-block-item">
                  <p className="about__text">
                    Наша місія – це завдання створення простору інноваційної
                    активності в сфері екології та енергетики з метою формування
                    країни свідомих громадян. Ми розглядаємо себе як
                    каталізатора позитивних змін, що об&lsquo;єднує усіх
                    зацікавлених сторін для реалізації проектів розвитку
                    територіальних громад та секторів національної економіки, а
                    також підтримки інноваційних ідей у сфері екології та
                    енергетики
                  </p>
                </li>
                <li className="about__text-block-item">
                  <p className="about__text">
                    Ми прагнемо до високого стандарту якості в реалізації наших
                    проектів, спрямованих на забезпечення сталого розвитку та
                    збалансованого використання природних ресурсів. Наша
                    діяльність орієнтована на створення інноваційних рішень, які
                    не лише сприяють ефективному використанню енергії, але й
                    зменшують негативний вплив нанавколишнє середовище. Ми
                    віримо, що об&lsquo;єднання сил індивідів, компаній, та
                    організацій з різних галузей може
                  </p>
                </li>
                <li className="about__text-block-item">
                  <p className="about__text">
                    Ми віримо, що об&lsquo;єднання сил індивідів, компаній, та
                    організацій з різних галузей може призвести до створення
                    інтегрованих та революційних рішень для проблем екології та
                    енергетики. Зацікавлені сторони мають унікальну можливість
                    співпраці та обміну ідеями, спрямованими на покращення стану
                    нашого оточення.
                  </p>
                </li>
                <li className="about__text-block-item">
                  <p className="about__text">
                    Наша місія є невід&lsquo;ємною частиною формування свідомого
                    громадянського суспільства, де кожен може внести свій внесок
                    у створення сталого та здорового майбутнього. Запрошуємо
                    всіх, хто поділяє нашу віру у можливості позитивних змін,
                    приєднатися до нашої спільноти та внести свою частинку у
                    велику мозаїку екологічного та енергетичного розвитку
                  </p>
                </li>
              </ul>
            </div>
          </section>
          <h3 className="about__text-block-title">
            Наша Роль у Збереженні Навколишнього Середовища  
          </h3>
          <section
            style={{
              alignItems: "center",
              display: "flex",
              flexDirection: "row-reverse",
            }}
          >
            <Image
              className="about__images"
              src={about4}
              alt={"about us image"}
            />
            <div className="about__text-block">
              {/* <h3 className="about__text-block-title">
              Наша Роль у Збереженні Навколишнього Середовища  
            </h3> */}
              <ul>
                <li className="about__text-block-item">
                  <p className="about__text">
                    Наша організація приділяє особливу увагу питанням охорони
                    довкілля, розуміючи важливість нашого внеску в збереження
                    навколишнього середовища. Ми розглядаємо проблему екології
                    як необхідний аспект нашої діяльності та визнаємо, що маємо
                    безпосередню відповідальність за стан навколишнього
                    середовища.
                  </p>
                </li>
                <li className="about__text-block-item">
                  <p className="about__text">
                    У наших ініціативах головними компонентами є використання
                    інноваційних технологій та досягнення енергоефективності. Ми
                    систематично впроваджуємо нові технології, спрямовані на
                    зменшення викидів, оптимізацію енергоспоживання та
                    підвищення ефективності використання відновлювальних джерел
                    енергії
                  </p>
                </li>
              </ul>
            </div>
          </section>
          <h3 className="about__text-block-title">
            {/* Наша Роль у Збереженні Навколишнього Середовища   */}
          </h3>
          <section style={{ alignItems: "center", display: "flex" }}>
            <Image
              className="about__images"
              src={about5}
              alt={"about us image"}
              style={{ width: "550px" }}
            />
            <div className="about__text-block">
              {/* <h3 className="about__text-block-title">
              Наша Роль у Збереженні Навколишнього Середовища  
            </h3> */}
              <ul>
                <li className="about__text-block-item">
                  <p className="about__text">
                    Окрім цього, ми активно займаємося переробкою пластикових
                    відходів, щоб зменшити негативний вплив цього матеріалу на
                    довкілля. Наша організація використовує передові технології
                    та процеси для перетворення пластикових відходів у
                    вторсировину, сприяючи тим самим у зменшенні кількості
                    сміття та уникненні його негативного впливу на природу.
                  </p>
                </li>
                <li className="about__text-block-item">
                  <p className="about__text">
                    Ми також враховуємо європейські та міжнародні стандарти щодо
                    охорони довкілля, намагаючись не лише відповідати цим
                    стандартам, але й перевершувати їх, створюючи сталий та
                    збалансований підхід до розв&lsquo;язання екологічних
                    проблем. Ми прагнемо до відновлення та підтримки екосистем,
                    а також ведемо активну роботу зі зменшення відходів та
                    заохочуємо використання вторсировини як ключового елементу в
                    цьому процесі. 
                  </p>
                </li>
              </ul>
            </div>
          </section>
          <h3 className="about__text-block-title">Наші Цілі  </h3>
          <section style={{ alignItems: "center", display: "flex" }}>
            {/* <Image
            className="about__images"
            src={about5}
            alt={"about us image"}
            style={{ width: "550px" }}
          /> */}
            <div className="about__text-block">
              <ol>
                <li className="about__text-block-item">
                  <p className="about__text">
                    *Інновації в технологіях: Сприяти розробці та впровадженню
                    передових, енергозберігаючих та екологічно безпечних
                    технологій у всіх сферах економіки
                  </p>
                </li>
                <li className="about__text-block-item">
                  <p className="about__text">
                    Стандарти в енергетиці та екології: Брати активну участь у
                    розробці та впровадженні європейських та міжнародних
                    стандартів у сфері екології та енергетики.
                  </p>
                </li>
                <li className="about__text-block-item">
                  <p className="about__text">
                    Поліпшення екологічної ситуації: Активно взаємодіяти з
                    урядовими та громадськими організаціями для покращення
                    екологічної ситуації в Україні.
                  </p>
                </li>
                <li className="about__text-block-item">
                  <p className="about__text">
                    Підтримка громад: Захищати екологічні, соціальні та
                    економічні інтереси громад та членів організації
                  </p>
                </li>
                <li className="about__text-block-item">
                  <p className="about__text">
                    Допомога постраждалим: Надавати допомогу регіонам, що
                    постраждали від екологічних, енергетичних катастроф та
                    конфліктів.
                  </p>
                </li>
                <li className="about__text-block-item">
                  <p className="about__text">
                    Підтримка інновацій: Сприяти створенню та впровадженню
                    інноваційних проєктів в сфері екології та енергетики.
                  </p>
                </li>
                <li className="about__text-block-item">
                  <p className="about__text">
                    Збереження біорізноманіття: Активно взаємодіяти з
                    організаціями та науковими установами для збереження та
                    відновлення біорізноманіття
                  </p>
                </li>
                <li className="about__text-block-item">
                  <p className="about__text">
                    Освіта та обізнаність: Розповсюджувати інформацію та навчати
                    громадян про екологічно відповідальний спосіб життя.
                  </p>
                </li>
                <li className="about__text-block-item">
                  <p className="about__text">
                    Інфраструктурна розвиток: Сприяти створенню стійкої
                    інфраструктури та інклюзивній і сталій індустріалізації.
                  </p>
                </li>
                <li className="about__text-block-item">
                  <p className="about__text">
                    Глобальне партнерство: Зміцнювати засоби реалізації та
                    активізацію глобального партнерства для сталого розвитку.
                  </p>
                </li>
                <li className="about__text-block-item">
                  <p className="about__text">
                    Боротьба із змінами клімату: Організувати та підтримувати
                    заходи для боротьби зі змінами клімату та їх наслідками.
                  </p>
                </li>
                <li className="about__text-block-item">
                  <p className="about__text">
                    Сприяння стартапам: Заохочувати та підтримувати стартапи,
                    спрямовані на розв&rsquo;язання екологічних завдань.
                  </p>
                </li>
              </ol>
            </div>
          </section>
        </div>
      </div>
    </TranslationsProvider>
  );
}
