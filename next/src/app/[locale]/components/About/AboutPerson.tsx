/* eslint-disable @next/next/no-img-element */
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Link from "next/link";

interface AboutPersonProps {
  src: string | any;
}

interface AboutDescriptoinProps {
  email: string | StaticImport | any;
  name: string;
  position: string;
}

const AboutPersonImage = ({ src }: AboutPersonProps) => {
  const imageStyle = {
    width: "350px",
    height: "350px",
    display: "flex",
    justifyContent: "center",
  };
  return (
    <Image
      src={src}
      alt="photo"
      // width={0}
      // height={0}
      style={imageStyle}
      // className="aboutPerson__photo"
    ></Image>
  );
};

const AboutPersonDescripton = ({
  name,
  email,
  position,
}: AboutDescriptoinProps) => {
  return (
    <div className="aboutPerson__descriptiom-block">
      <p>{name}</p>
      <p>{position}</p>
      <Link href={typeof email === "string" ? `mailto:${email}` : ""}>
        {email}
      </Link>
    </div>
  );
};

export { AboutPersonImage, AboutPersonDescripton };
