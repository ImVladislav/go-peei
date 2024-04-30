import React from "react";
import { getDataId } from "../../../../../../libs/getData";

interface docsType {
  src: string;
}

const Contact = async () => {
  const data: docsType = await getDataId("docs", "662d0c803ad93e3fbac1fe60");
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

export default Contact;
