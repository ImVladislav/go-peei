import React from "react";
import background from "../../../public/background.png";
import { Open_Sans } from "next/font/google";
const Main = () => {
  const containerStyle = {
    backgroundImage: `url(${background.src})`,
    backgroundSize: "auto",
    backgroundPosition: "center",
    padding: "20px",
    // backgroundColor: "rgba(219, 217, 55, 0.7)",
    // filter: "blur(5px)", // Додано блюр до фону
    // boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)", // Додано тінь тільки на фон
  };

  return (
    <div className="container" style={containerStyle}>
      <div className="main_title">
        <h1>ЕКОЛОГІЧНА БЕЗПЕКА ЕНЕРГЕТИЧНА НЕЗАЛЕЖНІСТЬ</h1>
      </div>

      <p>
        Громадська Організація &ldquo;Платформа єко-енергетичних
        ініціатив&rdquo; - ще неприбуткова громадська, організація, яка
        об&apos;єднує експертів та активістів навколо просування ідеї збереження
        довкілля, переробки, вторсировини, впровадження інновацій в
        відновлювальній енергетиці за міжнародними стандартами сталого розвитку
        у талузі енергетики.
      </p>
    </div>
  );
};

export default Main;
