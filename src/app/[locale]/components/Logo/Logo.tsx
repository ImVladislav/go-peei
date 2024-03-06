import Link from "next/link";
import Image from "next/image";

import logo from "../../../../../public/Logo.svg";

interface LogoProps {
  width: number;
  height: number;
}

const Logo = ({ width, height }: LogoProps) => {
  return (
    <Link href="/">
      <Image
        style={{ width: "auto", height: "auto" }}
        src={logo}
        width={width}
        height={height}
        alt="Logo"
      />
    </Link>
  );
};

export default Logo;
