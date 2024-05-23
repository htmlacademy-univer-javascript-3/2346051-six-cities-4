import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { postFavoriteAction } from '../../store/api-actions';
import { getFavoriteOffersId } from '../../store/favorite-process/selectors';
import { changeFavoritesId } from '../../store/favorite-process/favorite-process';
import { Offer } from '../../types/offer';
import { AppRoute, AuthorizationStatus } from '../../const';
import { redirectToRoute } from '../../store/action';
import { getAuthorizationStatus } from '../../store/user-process/selectors';

type ChangeFavoriteButtonProps = {
  offer: Offer;
};

function ChangeFavoriteButton({ offer }: ChangeFavoriteButtonProps): JSX.Element {
  const dispatch = useAppDispatch();
  const favoritesOffersId = useAppSelector(getFavoriteOffersId);
  const status = useAppSelector(getAuthorizationStatus);
  const [isFavorite, setIsFavorite] = useState(favoritesOffersId.includes(offer.id));
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!isSubmitting) {
      setIsFavorite(favoritesOffersId.includes(offer.id));
    }
  }, [favoritesOffersId, offer.id, isSubmitting, dispatch]);

  const handleFavorite = () => {
    if (status === AuthorizationStatus.NoAuth) {
      dispatch(redirectToRoute(AppRoute.Login));
    } else {
      setIsSubmitting(true);
      const updatedFavorites = isFavorite
        ? favoritesOffersId.filter((id) => id !== offer.id)
        : [...favoritesOffersId, offer.id];
      dispatch(changeFavoritesId(updatedFavorites));
      setIsFavorite(!isFavorite);
      dispatch(postFavoriteAction({ id: offer.id, status: isFavorite ? 0 : 1 }))
        .then(() => setIsSubmitting(false))
        .catch(() => {
          setIsSubmitting(false);
        });
    }
  };
  return (
    <button
      className={isFavorite ? 'place-card__bookmark-button place-card__bookmark-button--active button' : 'place-card__bookmark-button button'}
      type="button"
      onClick={handleFavorite}
      disabled={isSubmitting}
    >
      <svg className="place-card__bookmark-icon" width="18" height="19">
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}

export default ChangeFavoriteButton;
