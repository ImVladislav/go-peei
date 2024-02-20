import Image from "next/image";
import { projectItem } from "@/app/types";
import Link from "next/link";

interface ProjectProps {
  project: projectItem;
}

const Project: React.FC<ProjectProps> = ({ project }) => {
  return (
    <li className="projects__item item-project">
      <h3 className="item-project__title">{project.title}</h3>
      <div className="item-project__wrap--image">
        <Image
          className="item-project__image"
          src={project.imageSrc}
          alt={project.title}
          width={300}
          height={300}
        />
      </div>
      <p className="item-project__desc">{project.description}</p>
      <div className="item-project__wrap--links">
        <Link href="/" className="item-project__link">
          <svg
            width="56"
            height="56"
            viewBox="0 0 56 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.42896 28.929C1.42896 13.7411 13.7411 1.42896 28.9289 1.42896H54.5711V27.0711C54.5711 42.2589 42.2589 54.5711 27.0711 54.5711H1.42896V28.929Z"
              stroke="#0D490D"
            />
            <path
              d="M36.0711 20.929C36.0711 20.3767 35.6234 19.929 35.0711 19.929L26.0711 19.929C25.5188 19.929 25.0711 20.3767 25.0711 20.929C25.0711 21.4813 25.5188 21.929 26.0711 21.929H34.0711V29.929C34.0711 30.4813 34.5188 30.929 35.0711 30.929C35.6234 30.929 36.0711 30.4813 36.0711 29.929V20.929ZM21.6361 35.7782L35.7782 21.6361L34.364 20.2219L20.2218 34.364L21.6361 35.7782Z"
              fill="#0D490D"
            />
          </svg>
        </Link>
        <button className="item-project__btn button">Підтримати нас</button>
      </div>
    </li>
  );
};

export default Project;
