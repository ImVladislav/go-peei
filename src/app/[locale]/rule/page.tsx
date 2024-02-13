import glad from "../../../public/Volonters/gladyshko.png";
import bezkor from "../../../public/Volonters/bezkorowainuy.png";
import gordilona from "../../../public/Volonters/gordienkoIlona.jpg";
import {
  AboutPersonImage,
  AboutPersonDescripton,
} from "../components/About/AboutPerson";
import bg from "../../../public/background.png";

const Founders = () => {
  return (
    <div style={{ backgroundImage: `url(${bg.src})`, backgroundSize: "cover" }}>
      <div className="container">
        <h1 className="about__title">Правління</h1>
        <div className="about__page">
          <div className="about__person-block">
            <AboutPersonImage src={bezkor} />
            <div>
              <AboutPersonDescripton
                name="Безкоровайний Євгеній Олександрович"
                position="Заступник голови огранізації"
                email="mtr1289@gmail.com
                
                  "
              />
            </div>
          </div>
          <div className="about__person-block">
            <AboutPersonImage src={glad} />
            <AboutPersonDescripton
              name="Гладишко Сергій Олексійович"
              position="Засновник організації, Голова організації"
              email="copeeiua@gmail.com"
            />
          </div>
          <div className="about__person-block">
            <AboutPersonImage src={gordilona} />
            <div>
              <AboutPersonDescripton
                name="Гордієнко Ілона Миколаївна"
                position="Член правління"
                email="demetra18@ukr.net"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Founders;
