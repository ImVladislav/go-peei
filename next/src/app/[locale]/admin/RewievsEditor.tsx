import Image from "next/image";
import { useState, useEffect } from "react";
import { getData, removeDataId, editDataId } from "../../../../libs/getData";
import { reviewsItem } from "@/app/types";
import Title from "../components/Title/Title";
import ButtonEdit from "../components/Button/ButtonEdit";
import ButtonAdd from "../components/Button/ButtonAdd";
import ButtonDelete from "../components/Button/ButtonDelete";
import s from "./admin.module.scss";

const RewiewsPage = () => {
  const [reviews, setReviews] = useState<reviewsItem[]>([]);

  const fetchData = async () => {
    const data: reviewsItem[] = await getData("reviews");
    setReviews(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDeleteReview = async (id: string) => {
    const confirmed = confirm("Are you sure?");
    if (confirmed) {
      await removeDataId("reviews", id);
      fetchData();
    }
  };

  const handleCheckboxChange = async (id: string, checked: boolean) => {
    const updatedReviews = reviews.map((review) =>
      review._id === id ? { ...review, verify: checked } : review
    );
    setReviews(updatedReviews);

    const updatedReview = updatedReviews.find((review) => review._id === id);
    if (updatedReview) {
      await editDataId("reviews", id, { verify: checked });
    }
  };

  return (
    <div className="container">
      <div style={{ marginBottom: "50px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Title>Відгуки</Title>
          <ButtonAdd path="contacts" />
        </div>
        <ul>
          {reviews?.map((review) => (
            <li className={s.item} key={review._id}>
              <div className={s.item__inner}>
                <div className={s.item__img}>
                  <Image
                    style={{
                      objectFit: "cover",
                    }}
                    src={review.imageSrc}
                    alt={review.name}
                    fill
                  />
                </div>
                <h3 className={s.item__name}>{review.name}</h3>
                <p className={s.item__desc}>{review.email}</p>
              </div>
              <p className={s.item__desc}>{review.message}</p>
              <div className={s.buttons__thumb}>
                <ButtonEdit path={`edit-review/${review._id}`} />
                <ButtonDelete
                  id={review._id}
                  handleClick={() => handleDeleteReview(review._id)}
                />
                <input
                  className={s.checkbox}
                  type="checkbox"
                  checked={review.verify || false}
                  onChange={(e) =>
                    handleCheckboxChange(review._id, e.target.checked)
                  }
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RewiewsPage;
