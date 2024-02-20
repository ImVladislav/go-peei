import Image from "next/image";
import { reviewItem } from "@/app/types";
import Link from "next/link";

interface ReviewProps {
  review: reviewItem;
}

const Review: React.FC<ReviewProps> = ({ review }) => {
  return (
    <div className="review-item">
      <h3 className="review-item__title">{review.name}</h3>
      <p className="review-item__text">{review.description}</p>
      <Image
        className="review-item__image"
        src={review.imageSrc}
        alt={review.name}
        width={300}
        height={300}
      />
    </div>
  );
};

export default Review;
