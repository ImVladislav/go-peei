import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { getDataId, editDataId } from "../../../../../libs/getData";
import { reviewsItem } from "@/app/types";
import Title from "../../components/Title/Title";

const EditReviewPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [review, setReview] = useState<reviewsItem | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    imageSrc: "",
  });

  useEffect(() => {
    if (id) {
      (async () => {
        const data = await getDataId("reviews", id as string);
        setReview(data);
        setFormData({
          name: data.name,
          email: data.email,
          message: data.message,
          imageSrc: data.imageSrc,
        });
      })();
    }
  }, [id]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await editDataId("reviews", id as string, formData);
    router.push("/admin/reviews");
  };

  return (
    <div className="container">
      <Title>Редагувати Відгук</Title>
      {review && (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            required
          />
          <input
            type="text"
            name="imageSrc"
            value={formData.imageSrc}
            onChange={handleChange}
            placeholder="Image URL"
            required
          />
          <button type="submit">Зберегти</button>
        </form>
      )}
    </div>
  );
};

export default EditReviewPage;
