"use client";
import { useEffect, useState } from "react";

interface docsType {
  src: string;
}
const Extract = () => {
  const [data, setData] = useState<docsType | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/docs/65fd54a7831c00f0aebbb403");
      const result = await response.json();
      setData(result);
    };

    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <iframe
        style={{ width: "100%", height: "100vh" }}
        src={data.src}
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Extract;

// import React from "react";
// import { getDataId } from "../../../../../libs/getData";

// interface docsType {
//   src: string;
// }

// const Extract = async () => {
//   const data: docsType = await getDataId("docs", "65fd54a7831c00f0aebbb403");
//   console.log(data.src);

//   return (
//     <div className="container">
//       <iframe
//         style={{ width: "100%", height: "100vh" }}
//         src={data.src}
//         frameBorder="0"
//         full-frame=""
//         allowFullScreen
//       ></iframe>
//     </div>
//   );
// };

// export default Extract;
