import Image from "next/image";

const Projects = () => {
  return (
    <section className="project ">
      <div className="container">
        <h2 className="project__title">ДОПОМОЖІТЬ ЗІБРАТЬ КОШТИ</h2>
        <div className="line " />
        <ul className="project__list">
          <li className="project__item">
            <h3 className="project__item-title">Проект 1</h3>
            <Image
              className="project__item-image"
              src="/no-image.jpg"
              alt="no image"
              width={300}
              height={300}
            />
            <p className="project__item-text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
              veniam explicabo rem quae incidunt repellat doloremque? Aliquam,
              explicabo impedit, tempora, nam saepe consequuntur laborum id
              nihil officiis voluptas placeat quia.
            </p>
            <a className="project__item-link" href="#">
              Підтримати
            </a>
          </li>
          <li className="project__item">
            <h3 className="project__item-title">Проект 2</h3>
            <Image
              className="project__item-image"
              src="/no-image.jpg"
              alt="no image"
              width={300}
              height={300}
            />
            <p className="project__item-text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
              veniam explicabo rem quae incidunt repellat doloremque? Aliquam,
              explicabo impedit, tempora, nam saepe consequuntur laborum id
              nihil officiis voluptas placeat quia.
            </p>
            <a className="project__item-link" href="#">
              Підтримати
            </a>
          </li>
          <li className="project__item">
            <h3 className="project__item-title">Проект 3</h3>
            <Image
              className="project__item-image"
              src="/no-image.jpg"
              alt="no image"
              width={300}
              height={300}
            />
            <p className="project__item-text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
              veniam explicabo rem quae incidunt repellat doloremque? Aliquam,
              explicabo impedit, tempora, nam saepe consequuntur laborum id
              nihil officiis voluptas placeat quia.
            </p>
            <a className="project__item-link" href="#">
              Підтримати
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Projects;
