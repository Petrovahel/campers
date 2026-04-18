import { Review } from "@/types/review";
import css from "./ReviewsCard.module.css";

type Props = {
  reviews?: Review[];
};

export default function CamperReviews({ reviews = [] }: Props) {
  return (
    <div className={css.reviewsBlock}>
      <h3 className={css.reviewsTitle}>Reviews</h3>

      {reviews.length === 0 && <p>No reviews yet</p>}

      <ul className={css.reviewsList}>
        {reviews.map((review) => (
          <li className={css.reviewsItem} key={review.id}>
            <p className={css.reviewerName}>{review.reviewer_name}</p>
            <p> {review.reviewer_rating}</p>
            <p className={css.reviewComment}>{review.comment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
