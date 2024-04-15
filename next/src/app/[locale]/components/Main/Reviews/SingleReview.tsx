import Image from "next/image";

import { reviewsItem } from "@/app/types";

import styles from "./reviews.module.scss";

interface ReviewProps {
  review: reviewsItem;
}

const SingleReview = ({ review }: ReviewProps) => {
  return (
    <div className={styles.item}>
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
      </div>
      <p className={styles.item__desc}>
        {review.message.slice(0, 180)}
        ...
      </p>
    </div>
  );
};

export default SingleReview;
