import React from "react";
import { getDataId } from "../../../../../libs/getData";

interface docsType {
  src: string;
}

const Statut = async () => {
  const data: docsType = await getDataId("docs", "65f9b231b01f986ad1143c90");
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
