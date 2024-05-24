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

  const fetchNews = async () => {
    const response = await axios.get("/api/news");
    setAllNews(response.data);
  };

  const handleUpload = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!title || !titleEn || !description || !descriptionEn || !image) {
      alert("Заповніть вси поля");
      return;
    }
    // провьерка на подпихню типу зображення
    const allowedTypes = ["image/png", "image/jpg", "image/jpeg"];
    if (!allowedTypes.includes(image.type)) {
      alert("Please upload an image in png, jpg, or jpeg format");
      return;
    }
    const reader = new FileReader();
    reader.onloadend = async () => {
      const base64Image = reader.result;

      if (base64Image) {
        const newsData = {
          title,
          titleEn,
          description,
          descriptionEn,
          image: {
            name: image.name,
            data: base64Image.toString().split(",")[1],
          },
        };

        try {
          const response = await axios.post("/api/news", newsData, {
            headers: {
              "Content-Type": "application/json",
            },
          });
          console.log("News uploaded:", response.data);
          fetchNews();
        } catch (error) {
          console.error("Error uploading news:", error);
        }
      }
    };

    reader.readAsDataURL(image);
  };

  const handleDelete = async (id: string) => {
    try {
      // await removeDataId(id, "news");

      // console.log("News deleted:", id);

      await axios.delete(`/api/news?id=${id}`);
      fetchNews();
    } catch (error) {
      console.error("Error deleting news:", error);
    }
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
          <button type="submit">Завантажити Новину</button>
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
              <ButtonDelete id={news._id} handleClick={handleDelete} />
            </div>
          ))}
      </div>
    </div>
  );
}
