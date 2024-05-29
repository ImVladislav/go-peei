"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import ButtonDelete from "../components/Button/ButtonDelete";
import s from "./admin.module.scss";
import Button from "../components/Button/Button";

interface ProjectItem {
  _id: string;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  images: { name: string; data: string }[];
  total: number;
  fundsRaised: number;
}

export default function ProjectForm() {
  const [allProjects, setAllProjects] = useState<ProjectItem[]>([]);
  const [images, setImages] = useState<File[]>([]);
  const [title, setTitle] = useState("");
  const [titleEn, setTitleEn] = useState("");
  const [description, setDescription] = useState("");
  const [descriptionEn, setDescriptionEn] = useState("");
  const [total, setTotal] = useState(0);
  const [fundsRaised, setFundsRaised] = useState(0);
  const [editId, setEditId] = useState<string | null>(null);

  const fetchProjects = async () => {
    const response = await axios.get("/api/projects");
    setAllProjects(response.data);
  };

  const handleUpload = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !title ||
      !titleEn ||
      !description ||
      !descriptionEn ||
      (!images.length && !editId)
    ) {
      alert("Заповніть всі поля");
      return;
    }

    const allowedTypes = ["image/png", "image/jpg", "image/jpeg"];
    for (const image of images) {
      if (!allowedTypes.includes(image.type)) {
        alert("Please upload images in png, jpg, or jpeg format");
        return;
      }
    }

    const projectData: any = {
      title,
      titleEn,
      description,
      descriptionEn,
      total,
      fundsRaised,
      images: [],
    };

    const promises = images.map((image) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          const base64Image = reader.result;
          if (base64Image) {
            resolve({
              name: image.name,
              data: base64Image.toString().split(",")[1],
            });
          } else {
            reject(new Error("Failed to read image"));
          }
        };
        reader.readAsDataURL(image);
      });
    });

    Promise.all(promises)
      .then(async (images) => {
        projectData.images = images;
        projectData.imageSrc = images[0].data; // Зберігання основного зображення

        if (editId) {
          try {
            const response = await axios.put(
              `/api/projects/[id]/${editId}`,
              projectData,
              {
                headers: {
                  "Content-Type": "application/json",
                },
              }
            );
            console.log("Project updated:", response.data);
          } catch (error) {
            console.error("Error updating project:", error);
          }
        } else {
          try {
            const response = await axios.post("/api/projects", projectData, {
              headers: {
                "Content-Type": "application/json",
              },
            });
            console.log("Project uploaded:", response.data);
          } catch (error) {
            console.error("Error uploading project:", error);
          }
        }
        fetchProjects();
        resetForm();
      })
      .catch((error) => console.error("Error processing images:", error));
  };

  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`/api/projects/[id]/${id}`);
      fetchProjects();
    } catch (error) {
      console.error("Error deleting project:", error);
    }
  };

  const handleEdit = (project: ProjectItem) => {
    setTitle(project.title);
    setTitleEn(project.titleEn);
    setDescription(project.description);
    setDescriptionEn(project.descriptionEn);
    setTotal(project.total);
    setFundsRaised(project.fundsRaised);
    setEditId(project._id);
  };

  const resetForm = () => {
    setTitle("");
    setTitleEn("");
    setDescription("");
    setDescriptionEn("");
    setImages([]);
    setTotal(0);
    setFundsRaised(0);
    setEditId(null);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div>
      <form onSubmit={handleUpload}>
        <div>
          <input
            type="file"
            multiple
            onChange={(e) =>
              setImages(e.target.files ? Array.from(e.target.files) : [])
            }
            name="images"
            id="images"
          />
        </div>
        <div>
          <input
            className={s.uploadForm__input}
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Заголовок"
            required
          />
        </div>
        <div>
          <input
            className={s.uploadForm__input}
            type="text"
            value={titleEn}
            onChange={(e) => setTitleEn(e.target.value)}
            placeholder="Заголовок (Англійською)"
            required
          />
        </div>
        <div>
          <textarea
            className={s.uploadForm__textarea}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Опис"
            required
          />
        </div>
        <div>
          <textarea
            className={s.uploadForm__textarea}
            value={descriptionEn}
            onChange={(e) => setDescriptionEn(e.target.value)}
            placeholder="Опис (Англійською)"
            required
          />
        </div>
        <div>
          <input
            className={s.uploadForm__input}
            type="number"
            value={total}
            onChange={(e) => setTotal(Number(e.target.value))}
            placeholder="Загальна сума"
            required
          />
        </div>
        <div>
          <input
            className={s.uploadForm__input}
            type="number"
            value={fundsRaised}
            onChange={(e) => setFundsRaised(Number(e.target.value))}
            placeholder="Зібрано коштів"
            required
          />
        </div>
        <div>
          <Button typeBtn="submit">
            {editId ? "Оновити проект" : "Додати проект"}
          </Button>
        </div>
      </form>
      <div>
        <h2>Список проектів</h2>
        <ul>
          {allProjects.map((project) => (
            <li key={project._id}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <Button onClick={() => handleEdit(project)}>Редагувати</Button>
              <ButtonDelete id={project._id} handleClick={handleDelete} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
