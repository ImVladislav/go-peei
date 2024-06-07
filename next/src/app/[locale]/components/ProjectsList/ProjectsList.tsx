"use client";
import { useEffect, useState } from "react";

import { projectsItem } from "@/app/types";

import SingleProject from "../Main/Projects/SingleProject";
import Translator from "../translator/Translator";

import styles from "./projectsList.module.scss";

const ProjectsList = ({
  data,
  locale,
}: {
  data: projectsItem[];
  locale: string;
}) => {
  const [showMore, setShowMore] = useState<boolean>(false);
  const [visibleCount, setVisibleCount] = useState<number>(2);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1440) {
        setVisibleCount(6);
      } else if (window.innerWidth >= 768) {
        setVisibleCount(4);
      } else if (window.innerWidth >= 360) {
        setVisibleCount(2);
      }
    };

    handleResize(); // Встановити початкове значення
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleToggleShowMore = (): void => {
    setShowMore((prevShowMore) => !prevShowMore);
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.inner}>
        <ul className={styles.list}>
          {data?.slice(0, showMore ? data.length : visibleCount).map((item) => (
            <SingleProject key={item._id} project={item} locale={locale} />
          ))}
        </ul>
      </div>
      {data?.length > visibleCount && (
        <button
          className={styles.btn}
          type="button"
          onClick={handleToggleShowMore}
        >
          <Translator>
            {showMore ? "buttonHide" : "buttonAllProjects"}
          </Translator>
        </button>
      )}
    </div>
  );
};

export default ProjectsList;
