import Image from "next/image";

import { reviewsItem } from "@/app/types";

import styles from "./reviews.module.scss";

interface ReviewProps {
  review: reviewsItem;
}

const Review = ({ review }: ReviewProps) => {
  return (
    <div className={styles.item}>
      <div className={styles.item__inner}>
        <div className={styles.item__img}>
          <Image
            style={{
              objectFit: "cover",
              objectPosition: "center",
              height: "72px",
            }}
            src={review.imageSrc}
            alt={review.name}
            width={72}
            height={72}
          />
        </div>
        <h3 className={styles.item__name}>{review.name}</h3>
      </div>
      <p className={styles.item__desc}>{review.description}</p>
    </div>
  );
};

export default Review;
