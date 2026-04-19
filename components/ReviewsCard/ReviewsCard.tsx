import { Review } from "@/types/review";
import css from "./ReviewsCard.module.css";
import { FaStar, FaRegStar } from "react-icons/fa";

type Props = {
  reviews?: Review[];
};

const renderStars = (rating: number) => {
  const fullStars = Math.round(rating);

  return Array.from({ length: 5 }, (_, i) =>
    i < fullStars ? <FaStar key={i} /> : <FaRegStar key={i} />
  );
};

export default function CamperReviews({ reviews = [] }: Props) {
  return (
    <div className={css.reviewsBlock}>
      <h3 className={css.reviewsTitle}>Reviews</h3>

      {reviews.length === 0 && <p>No reviews yet</p>}

      <ul className={css.reviewsList}>
        {reviews.map((review) => (
          <li className={css.reviewsItem} key={review.id}>
            <div className={css.reviewHead}>
              <div className={css.avatar}>
                {review.reviewer_name.charAt(0).toUpperCase()}
              </div>
              <p className={css.reviewerName}>{review.reviewer_name}</p>
            </div>

            <div className={css.stars}>
              {renderStars(review.reviewer_rating)}
            </div>
            <p className={css.reviewComment}>{review.comment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
