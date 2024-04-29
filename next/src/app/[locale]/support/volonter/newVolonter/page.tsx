import React from "react";
import s from "../volonter.module.scss";
const NewVolonter = () => {
  return (
    <div className={s.newVolonter__container}>
      <iframe
        style={{ width: "100hv", height: "100%" }}
        src="https://docs.google.com/forms/d/e/1FAIpQLSdigrAGxFskj0UR5UUDOIqburkAdzOUFaFZJLduahnh0zOQIA/viewform?embedded=true"
        width="900px"
        // height="10vh"
        frameBorder="0"
        // marginHeight="0"
        // marginwidth="0"
      >
        Загрузка…
      </iframe>
    </div>
  );
};

export default NewVolonter;
