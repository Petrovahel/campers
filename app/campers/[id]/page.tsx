import { getCamperById, getReviewsByCamperId } from "@/lib/api";
import CamperDetails from "@/components/CamperDetailsPage/CamperDetails";
import ReviewsCars from "@/components/ReviewsCard/ReviewsCard";
import BookForm from "@/components/BookForm/BookForm";

type Params = Promise<{ id: string }>;

export default async function CamperPage({ params }: { params: Params }) {
  const { id } = await params;

  const camper = await getCamperById(id);

  const reviews = await getReviewsByCamperId(id);
  return (
    <div>
      <CamperDetails camper={camper} />
      <ReviewsCars reviews={reviews} />
      <BookForm camperId={camper.id} />
    </div>
  );
}
