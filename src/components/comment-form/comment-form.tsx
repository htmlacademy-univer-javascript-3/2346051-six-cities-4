import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { postReviewAction } from '../../store/api-actions';

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

  const id = useAppSelector((state) => state.chosenOffer?.id);

  const MINIMUM_COMMENT_CHARACTERS = 50;
  const MAXIMUM_COMMENT_CHARACTERS = 300;

  const isSubmitInvalid = (formData.review.length < MINIMUM_COMMENT_CHARACTERS) || (formData.review.length > MAXIMUM_COMMENT_CHARACTERS) || (formData.rating === null);

  const dispatch = useAppDispatch();

  const submitHandle = () => {
    dispatch(postReviewAction({ id: id ? id : '', comment: formData.review, rating: Number(formData.rating) }));
    setFormData((prevState) => ({
      ...prevState,
      rating: null,
      review: ''
    }));
  };

  return (
    <form className="reviews__form form" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        <input className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars" type="radio" onChange={handleFieldChange} />
        <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio" onChange={handleFieldChange} />
        <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio" onChange={handleFieldChange} />
        <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio" onChange={handleFieldChange} />
        <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio" onChange={handleFieldChange} />
        <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
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
