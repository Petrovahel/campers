import { Review } from "@/types/review";

type Props = {
  reviews?: Review[];
};

export default function CamperReviews({ reviews = [] }: Props) {

  return (
    <div>
      <h3>Reviews</h3>

      {reviews.length === 0 && <p>No reviews yet</p>}

      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <strong>{review.reviewer_name}</strong>
            <p>⭐ {review.reviewer_rating}</p>
            <p>{review.comment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}