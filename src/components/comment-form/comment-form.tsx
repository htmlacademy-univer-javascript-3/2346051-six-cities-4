import { Fragment, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { postReviewAction } from '../../store/api-actions';
import { getChosenOffer, getIsCommentPosting, getIsCommentRejected } from '../../store/offer-data/selectors';

function CommentForm(): JSX.Element {
  const [formData, setFormData] = useState({
    rating: null,
    review: '',
  });
  const handleFieldChange = (evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = evt.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const id = useAppSelector(getChosenOffer)?.id;

  const MINIMUM_COMMENT_CHARACTERS = 50;
  const MAXIMUM_COMMENT_CHARACTERS = 300;
  const isCommentPosting = useAppSelector(getIsCommentPosting);

  const isSubmitInvalid = (
    formData.review.length < MINIMUM_COMMENT_CHARACTERS ||
    formData.review.length > MAXIMUM_COMMENT_CHARACTERS ||
    formData.rating === null ||
    isCommentPosting
  );

  const dispatch = useAppDispatch();
  const isCommentRejected = useAppSelector(getIsCommentRejected);

  const resetForm = () => {
    setFormData({
      rating: null,
      review: '',
    });
  };

  useEffect(() => {
    if (!isCommentRejected) {
      resetForm();
    }
  }, [isCommentRejected]);

  const submitHandle = () => {
    dispatch(postReviewAction({ id: id ? id : '', comment: formData.review, rating: Number(formData.rating) }));
  };

  const ratingTitles: { [key: number]: string } = {
    5: 'excellent',
    4: 'good',
    3: 'not bad',
    2: 'badly',
    1: 'terribly'
  };

  const getRatingTitle = (rating: number): string => ratingTitles[rating];

  return (
    <form className="reviews__form form" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {[5, 4, 3, 2, 1].map((rating) => (
          <Fragment key={rating}>
            <input className="form__rating-input visually-hidden" name="rating" value={rating} id={`${rating}-stars`} type="radio" checked={Number(formData.rating) === rating} onChange={handleFieldChange} />
            <label htmlFor={`${rating}-stars`} className="reviews__rating-label form__rating-label" title={getRatingTitle(rating)}>
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </Fragment>
        ))}
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review" value={formData.review} onChange={handleFieldChange} placeholder="Tell how was your stay, what you like and what can be improved"></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="button" onClick={submitHandle} disabled={isSubmitInvalid} >Submit</button>
      </div>
    </form>
  );
}
export default CommentForm;
