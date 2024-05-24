"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import ButtonDelete from "../components/Button/ButtonDelete";

interface NewsItem {
  _id: string;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  imageSrc: string;
  firstNew: boolean;
}

export default function UploadForm() {
  const [allNews, setAllNews] = useState<NewsItem[]>([]);
  const [image, setImage] = useState<File | null>(null);
  const [title, setTitle] = useState("");
  const [titleEn, setTitleEn] = useState("");
  const [description, setDescription] = useState("");
  const [descriptionEn, setDescriptionEn] = useState("");
  const [editId, setEditId] = useState<string | null>(null);

  const fetchNews = async () => {
    const response = await axios.get("/api/news");
    setAllNews(response.data);
  };

  const handleUpload = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !title ||
      !titleEn ||
      !description ||
      !descriptionEn ||
      (!image && !editId)
    ) {
      alert("Заповніть вси поля");
      return;
    }
    // провьерка на подпихню типу зображення
    const allowedTypes = ["image/png", "image/jpg", "image/jpeg"];
    if (image && !allowedTypes.includes(image.type)) {
      alert("Please upload an image in png, jpg, or jpeg format");
      return;
    }

    const newsData: any = {
      title,
      titleEn,
      description,
      descriptionEn,
    };

    if (image) {
      const reader = new FileReader();
      reader.onloadend = async () => {
        const base64Image = reader.result;
        if (base64Image) {
          newsData.image = {
            name: image.name,
            data: base64Image.toString().split(",")[1],
          };
        }

        if (editId) {
          // Edit existing news
          try {
            const response = await axios.patch(
              `/api/news?id=${editId}`,
              newsData,
              {
                headers: {
                  "Content-Type": "application/json",
                },
              }
            );
            console.log("News updated:", response.data);
          } catch (error) {
            console.error("Error updating news:", error);
          }
        } else {
          // Add new news
          try {
            const response = await axios.post("/api/news", newsData, {
              headers: {
                "Content-Type": "application/json",
              },
            });
            console.log("News uploaded:", response.data);
          } catch (error) {
            console.error("Error uploading news:", error);
          }
        }
        fetchNews();
        resetForm();
      };
      reader.readAsDataURL(image);
    } else {
      if (editId) {
        // Edit existing news without new image
        try {
          const response = await axios.patch(
            `/api/news/[id]?id=${editId}`,
            newsData,
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          console.log("News updated:", response.data);
        } catch (error) {
          console.error("Error updating news:", error);
        }
      }
      fetchNews();
      resetForm();
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`/api/news/[id]?id=${id}`);
      fetchNews();
    } catch (error) {
      console.error("Error deleting news:", error);
    }
  };

  const handleEdit = (news: NewsItem) => {
    setTitle(news.title);
    setTitleEn(news.titleEn);
    setDescription(news.description);
    setDescriptionEn(news.descriptionEn);
    setEditId(news._id);
  };

  const resetForm = () => {
    setTitle("");
    setTitleEn("");
    setDescription("");
    setDescriptionEn("");
    setImage(null);
    setEditId(null);
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <div>
      <form onSubmit={handleUpload}>
        <div>
          <input
            type="file"
            onChange={(e) =>
              setImage(e.target.files ? e.target.files[0] : null)
            }
            name="image"
            id="image"
          />
        </div>
        <div>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Заголовок"
            required
          />
        </div>
        <div>
          <input
            type="text"
            value={titleEn}
            onChange={(e) => setTitleEn(e.target.value)}
            placeholder="Заголовок (Англійською)"
            required
          />
        </div>
        <div>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Текст Новини"
            required
          />
        </div>
        <div>
          <textarea
            value={descriptionEn}
            onChange={(e) => setDescriptionEn(e.target.value)}
            placeholder="Текст Новини (Англійською)"
            required
          />
        </div>
        <div>
          <button type="submit">
            {editId ? "Оновити Новину" : "Завантажити Новину"}
          </button>
        </div>
      </form>
      <div>
        {allNews &&
          allNews.length > 0 &&
          allNews.map((news, i) => (
            <div key={news._id}>
              <img
                src={news.imageSrc}
                alt={`image${i}`}
                width={200}
                height={200}
              />
              <h3>{news.title}</h3>
              <p>{news.description}</p>
              <button onClick={() => handleEdit(news)}>Редагувати</button>
              <ButtonDelete id={news._id} handleClick={handleDelete} />
            </div>
          ))}
      </div>
    </div>
  );
}
