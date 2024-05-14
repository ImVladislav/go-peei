// "use client";

import Image from "next/image";

import { getData, removeDataId } from "../../../../libs/getData";

import { reviewsItem } from "@/app/types";

import Title from "../components/Title/Title";
import ButtonEdit from "../components/Button/ButtonEdit";
import ButtonAdd from "../components/Button/ButtonAdd";
// import ButtonDelete from "../components/Button/ButtonDelete";

import styles from "./reviews.module.scss";
import React from "react";

const RewiewsPage = async () => {
  const data: reviewsItem[] = await getData("reviews");
  // const [reviews, setReviews] = useState<reviewsItem[]>([]);

  // const fetchData = async () => {
  //   const data: reviewsItem[] = await getData("reviews");
  //   setReviews(data);
  // };

  // useEffect(() => {
  //   fetchData();
  // }, [reviews.length]);

  // const handleDeleteReview = (id: string) => {
  //   const confirmed = confirm("Are yoy sure?");
  //   if (confirmed) {
  //     removeDataId("reviews", id);
  //   }
  //   // fetchData();
  // };
  return (
    <div className="container">
      <div style={{ marginBottom: "50px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Title>reviews</Title>
          <ButtonAdd path="contacts" />
        </div>
        <ul>
          {data?.map((review) => (
            <li className={styles.item} key={review._id}>
              <div className={styles.item__inner}>
                <div className={styles.item__img}>
                  <Image
                    style={{
                      objectFit: "cover",
                    }}
                    src={review.imageSrc}
                    alt={review.name}
                    fill
                  />
                </div>
                <h3 className={styles.item__name}>{review.name}</h3>
                <p className={styles.item__desc}>{review.email}</p>
              </div>
              <p className={styles.item__desc}>{review.message}</p>
              <div
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  display: "flex",
                  gap: "20px",
                }}
              >
                <ButtonEdit path={`edit-review/${review._id}`} />
                {/* <ButtonDelete
                  id={review._id}
                  handleClick={() => handleDeleteReview}
                /> */}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RewiewsPage;
