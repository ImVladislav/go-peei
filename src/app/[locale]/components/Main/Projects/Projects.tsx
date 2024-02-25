"use client";
import React, { useState } from "react";

import { initialProjects } from "@/app/constants/index";

import { projectItem } from "@/app/types";

import Project from "./Project";

// import "swiper/css";
// import "swiper/css/navigation";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";

const Projects: React.FC = () => {
  const [projects, setProjects] = useState(initialProjects);
  const admin = false;

  const handleAddProject = () => {
    const newProject: projectItem = {
      id: `${projects.length + 1}`,
      title: `Новий проект ${projects.length + 1}`,
      imageSrc: "/no-image.jpg",
      description: "Опис нового проекту...",
    };

    setProjects([...projects, newProject]);
  };

  return (
    <section className="projects">
      <div className="container">
        <h2 className="projects__title title">ДОПОМОЖІТЬ ЗІБРАТЬ КОШТИ</h2>

        <div style={{ textAlign: "center" }}>
          {/* <Swiper
            style={{
              "--swiper-navigation-color": "#0d490d",
            }}
            spaceBetween={16}
            slidesPerView={3}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id}>
                <Project project={project} />
              </SwiperSlide>
            ))}
          </Swiper> */}

          <ul className="projects__list">
            {projects.map((project) => (
              <Project key={project.id} project={project} />
            ))}
          </ul>
          <button
            className="projects__add-button button-second"
            onClick={handleAddProject}
          >
            Усі проєкти
          </button>
        </div>
        {admin && (
          <button
            className="project__add-button button-second"
            onClick={handleAddProject}
          >
            Додати проект
          </button>
        )}
      </div>
    </section>
  );
};

export default Projects;
