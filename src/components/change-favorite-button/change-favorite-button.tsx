import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { postFavoriteAction } from '../../store/api-actions';
import { getFavoriteOffersId } from '../../store/favorite-process/selectors';
import { changeFavoritesId } from '../../store/favorite-process/favorite-process';
import { AppRoute, AuthorizationStatus } from '../../const';
import { redirectToRoute } from '../../store/action';
import { getAuthorizationStatus } from '../../store/user-process/selectors';

type ChangeFavoriteButtonProps = {
  offerId: string;
  typeButton: string;
  width: string;
  height: string;
};

function ChangeFavoriteButton({ offerId, typeButton, width, height }: ChangeFavoriteButtonProps): JSX.Element {
  const dispatch = useAppDispatch();
  const favoritesOffersId = useAppSelector(getFavoriteOffersId);
  const status = useAppSelector(getAuthorizationStatus);
  const [isFavorite, setIsFavorite] = useState(favoritesOffersId.includes(offerId));
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!isSubmitting) {
      setIsFavorite(favoritesOffersId.includes(offerId));
    }
  }, [favoritesOffersId, offerId, isSubmitting, dispatch]);

  const handleFavorite = () => {
    if (status === AuthorizationStatus.NoAuth) {
      dispatch(redirectToRoute(AppRoute.Login));
    } else {
      setIsSubmitting(true);
      const updatedFavorites = isFavorite ? favoritesOffersId.filter((id) => id !== offerId) : [...favoritesOffersId, offerId];
      dispatch(changeFavoritesId(updatedFavorites));
      setIsFavorite(!isFavorite);
      dispatch(postFavoriteAction({ id: offerId, status: isFavorite ? 0 : 1 }))
        .then(() => setIsSubmitting(false))
        .catch(() => {
          setIsSubmitting(false);
        });
    }
  };
  return (
    <button
      className={isFavorite ? `${typeButton}__bookmark-button ${typeButton}__bookmark-button--active button` : `${typeButton}__bookmark-button button`}
      type="button"
      onClick={handleFavorite}
      disabled={isSubmitting}
    >
      <svg className={`${typeButton}__bookmark-icon`} width={width} height={height}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}

export default ChangeFavoriteButton;
