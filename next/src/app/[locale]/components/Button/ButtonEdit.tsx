import Image from "next/image";
import Link from "next/link";

const ButtonEdit = ({ path }: { path: string }) => {
  return (
    <Link
      href={`/${path}`}
      style={{ backgroundColor: "transparent", border: "none" }}
    >
      <Image src="/main/svg/edit.svg" alt="edit" width={30} height={30} />
    </Link>
  );
};

export default ButtonEdit;
