import { getCamperById, getReviewsByCamperId } from "@/lib/api";
import CamperDetails from "@/components/CamperDetailsPage/CamperDetails";
import ReviewsCars from "@/components/ReviewsCard/ReviewsCard";
import BookForm from "@/components/BookForm/BookForm";
import css from "./pageId.module.css";

export default async function CamperPage({
  params,
}: {
  params: Promise<{ camperId: string }>;
}) {
  const { camperId } = await params;

  const camper = await getCamperById(camperId);
  const reviews = await getReviewsByCamperId(camperId);

  return (
    <div className={css.page}>
      <CamperDetails camper={camper} />

      <div className={css.bottomSection}>
        <ReviewsCars reviews={reviews} />
        <BookForm camperId={camper.id} />
      </div>
    </div>
  );
}
