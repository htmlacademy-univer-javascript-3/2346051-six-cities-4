import { Review } from '../../types/review';
import ReviewItem from '../reviews-item/reviews-item';
import CommentForm from '../../components/comment-form/comment-form';
import { AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks';

type ReviewsListProps = {
  reviews: Review[];
};

function ReviewsList({ reviews }: ReviewsListProps): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviews.map((review) => (
          <ReviewItem key={review.id} review={review} />
        ))}
      </ul>
      {authorizationStatus === AuthorizationStatus.Auth && <CommentForm />}
    </section>
  );
}

export default ReviewsList;
