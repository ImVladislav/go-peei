import Navbar from "./Navbar";
import Link from "next/link";

import Image from "next/image";
import Logo from "../../../../../public/Logo.svg";
import Facebook from "../../../../../public/socialSVG/Facebook Outline.svg";
import Instagram from "../../../../../public/socialSVG/Instagram Outline.svg";
import Linkedin from "../../../../../public/socialSVG/Linkedin Outline.svg";
import Whatsapp from "../../../../../public/socialSVG/Whatsapp Outline.svg";
// import Youtube from ".../.././../../public/socialSVG/Youtube Outline.svg";

import phone_icon from "../../../../../public/socialSVG/phone_icon.svg";
import email_icon from "../../../../../public/socialSVG/email_icon.svg";

const Header: React.FC = () => {
  return (
    <>
      <div className="header-contact">
        <div className="header-contact-to-center">
          <div className="header-contact-phone-and-email-block">
            <Link
              className="link"
              style={{
                display: "flex",
                alignItems: "center",
                fontSize: "20px",
              }}
              href="mailto:copeeiua@gmail.com"
            >
              <Image
                style={{ margin: "0px, 4px" }}
                src={email_icon}
                width={24}
                height={24}
                alt="phone_icon"
              />
              copeeiua@gmail.com
            </Link>

            <Link
              className="link"
              style={{
                display: "flex",
                alignItems: "center",
                marginLeft: "20px",
                fontSize: "20px",
              }}
              href="tel:+380506558561"
            >
              <Image src={phone_icon} width={24} height={24} alt="phone_icon" />
              +38 050 655 85 61
            </Link>
          </div>
          <div className="header__social">
            <Link className="header__svg-link " href="/">
              <Image src={Whatsapp} width={24} height={24} alt="Whatsapp" />
            </Link>
            <Link className="header__svg-link " href="/">
              <Image src={Facebook} width={24} height={24} alt="Facebook" />
            </Link>
            <Link className="header__svg-link " href="/">
              <Image src={Instagram} width={24} height={24} alt="Instagram" />
            </Link>

            {/* <Link className="header__svg-link " href="/">
              <Image src={Youtube} width={24} height={24} alt="Youtube" />
            </Link> */}

            <Link className="header__svg-link " href="/">
              <Image src={Linkedin} width={24} height={24} alt="Linkedin" />
            </Link>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="header">
          <Link href="/">
            <Image src={Logo} width={200} height={60} alt="Logo" />
          </Link>
          <Navbar />
        </div>
      </div>
    </>
  );
};

export default Header;
