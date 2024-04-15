import Image from "next/image";
import React from "react";

const ButtonDelete = ({
  id,
  handleClick,
}: {
  id: string;
  handleClick: (id: string) => void;
}) => {
  return (
    <button
      onClick={() => handleClick(id)}
      style={{ backgroundColor: "transparent", border: "none" }}
    >
      <Image src="/main/svg/delete.svg" alt="delete" width={30} height={30} />
    </button>
  );
};

export default ButtonDelete;
