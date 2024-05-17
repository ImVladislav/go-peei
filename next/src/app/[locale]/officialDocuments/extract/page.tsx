import React from "react";
import { getDataId } from "../../../../../libs/getData";

interface docsType {
  src: string;
}

const Extract = async () => {
  const data: docsType = await getDataId("docs", "65fd54a7831c00f0aebbb403");
  console.log(data.src);

  return (
    <div className="container">
      <iframe
        style={{ width: "100%", height: "100vh" }}
        src={data.src}
        frameBorder="0"
        full-frame=""
        allowFullScreen
      ></iframe>

      {/* <embed
        type="application/x-google-chrome-pdf"
        src="chrome-extension://mhjfbmdgcfjbbpaeojofohoefgiehjai/fab508df-a4ba-420c-9f81-7727d0840c8e"
        original-url="https://www.uny.org.ua/wp-content/uploads/2023/03/statut-go-ty-potriben-ukrayini.pdf"
        background-color="4283586137"
        javascript="allow"
        full-frame=""
      ></embed> */}
    </div>
  );
};

export default Extract;
