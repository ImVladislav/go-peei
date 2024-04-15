import Image from "next/image";
import Link from "next/link";

const ButtonAdd = ({ path }: { path: string }) => {
  return (
    <Link
      href={`/${path}`}
      style={{
        background: "transparent",
        border: "none",
      }}
    >
      <Image src="/main/svg/add.svg" alt="add" width={40} height={40} />
    </Link>
  );
};

export default ButtonAdd;
