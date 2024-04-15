import React from "react";
import { getDataId } from "../../../../../libs/getData";

interface docsType {
  src: string;
}

const Statut = async () => {
  const data: docsType = await getDataId("docs", "65fdb7f2831c00f0aebbb404");
  console.log(data.src);

  return (
    <div className="container">
      <iframe
        style={{ width: "100%", height: "100vh" }}
        src={data.src}
        frameBorder="0"
      ></iframe>
    </div>
  );
};

export default Statut;
