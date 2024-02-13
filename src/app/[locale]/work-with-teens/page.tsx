import Image from "next/image";
import bg from "../../../public/background.png";
import teens from "../../../public/teens.jpg";

const WorkWithTeens = () => {
  return (
    <div style={{ backgroundImage: `url(${bg.src})`, backgroundSize: "cover" }}>
      <div className="container">
        <h3 className="about__text-block-title">
          Робота з дітьми та молоддю  
        </h3>
        <section
          style={{
            alignItems: "center",
            display: "flex",
            // flexDirection: "row-reverse",
          }}
        >
          <Image className="about__images" src={teens} alt={"about us image"} />
          <div
            style={{ backgroundColor: "#ffffff85", padding: "0px 20px" }}
            className="about__text-block"
          >
            {/* <h3 className="about__text-block-title">
              Наша Роль у Збереженні Навколишнього Середовища  
            </h3> */}
            <ul>
              <li className="about__text-block-item">
                <p style={{ fontWeight: "900" }} className="about__text">
                  Ми глибоко віримо, що найціннішим ресурсом нашої планети є
                  молодь, і саме вони мають потужність змінити екологічну
                  картину світу.
                </p>
              </li>
              <li className="about__text-block-item">
                <p style={{ fontWeight: "900" }} className="about__text">
                  Наша Зобов&lsquo;язаність
                </p>
              </li>
              <li className="about__text-block-item">
                <p style={{ fontWeight: "900" }} className="about__text">
                  Екологічна Освіта: Все починається з Знань
                </p>
              </li>
              <li className="about__text-block-item">
                <p style={{ fontWeight: "900" }} className="about__text">
                  Наші програми екологічної освіти для дітей та молоді не лише
                  передають базові знання про збереження природи, але й
                  спонукають до дії. Ми розвиваємо в молоді вміння розуміти
                  екосистеми, раціонально використовувати ресурси та створювати
                  інноваційні рішення для зменшення впливу на довкілля.
                </p>
              </li>
              <li className="about__text-block-item">
                <p style={{ fontWeight: "900" }} className="about__text">
                  Зелені Ініціативи Молоді
                </p>
              </li>{" "}
              <li className="about__text-block-item">
                <p style={{ fontWeight: "900" }} className="about__text">
                  Ми віримо в силу ідеї та прагнемо надати підтримку молоді в
                  реалізації їхніх зелених проектів. Через наші програми та
                  ресурси, ми допомагаємо молоді створювати та впроваджувати
                  інноваційні екологічні ідеї, що сприяють сталому розвитку.
                </p>
              </li>{" "}
              <li className="about__text-block-item">
                <p style={{ fontWeight: "900" }} className="about__text">
                  Запрошення до Змін
                </p>
              </li>{" "}
              <li className="about__text-block-item">
                <p style={{ fontWeight: "900" }} className="about__text">
                  Ми закликаємо дітей та молодь бути агентами змін. Наша
                  організація - це не лише платформа для отримання знань, але й
                  спільнота ентузіастів, які прагнуть перетворити свої ідеї в
                  реальність. Приєднуйтесь до нас, щоб разом ми могли втілити в
                  життя екологічні цінності та стати партнерами у створенні
                  зеленого та стійкого світу для нашого покоління та майбутніх.
                </p>
              </li>
              <li className="about__text-block-item">
                <p style={{ fontWeight: "900" }} className="about__text">
                  За Збереженням, За Майбутнє
                </p>
              </li>
              <li className="about__text-block-item">
                <p style={{ fontWeight: "900" }} className="about__text">
                  Ми віримо, що наша робота з дітьми та молоддю формує не лише
                  екологічно свідому генерацію, але й відкриває двері до
                  майбутнього, де кожен крок є екологічно відповідальним.
                  Давайте разом зберігати природу для тих, хто буде досліджувати
                  її завтра!
                </p>
              </li>
            </ul>
          </div>
        </section>
        <section
          style={{
            alignItems: "center",
            display: "flex",
            // flexDirection: "row-reverse",
          }}
        >
          {/* <Image className="about__images" src={teens} alt={"about us image"} /> */}
          <div
            style={{ backgroundColor: "#ffffff85", padding: "0px 20px" }}
            className="about__text-block"
          >
            <h3 className="about__text-block-title">
              Робота з молоддю. (або залучення нових членів ГО)  
            </h3>
            <ul>
              <li className="about__text-block-item">
                <p style={{ fontWeight: "900" }} className="about__text">
                  Привіт! Ти шукаєш можливість приєднатися до групи людей, які
                  дійсно прагнуть змінити світ на краще? Громадська Організація
                  &#34;Платформа еко-енергетичних ініціатив&#34; шукає саме
                  тебе! Ми об&lsquo;єднуємо експертів, фахівців та активістів,
                  які прагнуть зробити світ більш сталим та екологічно безпечним
                  місцем для життя.
                </p>
              </li>
              <li className="about__text-block-item">
                <p style={{ fontWeight: "900" }} className="about__text">
                  Наша мета - збереження довкілля, просування переробки
                  вторинної сировини та впровадження інновацій в сфері
                  відновлювальної енергетики. Ми віримо, що разом ми зможемо
                  зробити реальний внесок у майбутнє нашої планети.
                </p>
              </li>
              <li className="about__text-block-item">
                <p style={{ fontWeight: "900" }} className="about__text">
                  Приєднавшись до нашої організації, ти матимеш можливість брати
                  участь у заходах збереження природних ресурсів, зменшення
                  викидів та забруднення, охорони біорізноманіття та створення
                  сталого способу життя. Ти також зможеш долучитися до розробки
                  та впровадження програм переробки вторинної сировини, щоб
                  зменшити забруднення навколишнього середовища та сприяти більш
                  ефективному використанню ресурсів.
                </p>
              </li>
              <li className="about__text-block-item">
                <p style={{ fontWeight: "900" }} className="about__text">
                  Приєднуйся до нас сьогодні та стань частиною цієї надихаючої
                  спільноти! Разом ми зможемо зробити реальний вплив на майбутнє
                  нашої планети. Якщо у вас є будь-які питання або ви хочете
                  долучитися, будь ласка, зв&lsquo;яжіться з нами для отримання
                  додаткової інформації.
                </p>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default WorkWithTeens;
