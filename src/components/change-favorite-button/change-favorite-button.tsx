import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { postFavoriteAction } from '../../store/api-actions';
import { getFavoriteOffersId, getFavoritesNumber } from '../../store/favorite-process/selectors';
import { changeFavoritesId, changeFavoritesNumber } from '../../store/favorite-process/favorite-process';
import { Offer } from '../../types/offer';

type ChangeFavoriteButtonProps = {
  offer: Offer;
};

function ChangeFavoriteButton({ offer }: ChangeFavoriteButtonProps): JSX.Element {
  const dispatch = useAppDispatch();
  const favoriteNumber = useAppSelector(getFavoritesNumber);
  const favoritesOffersId = useAppSelector(getFavoriteOffersId);
  const [isFavorite, setIsFavorite] = useState(favoritesOffersId.includes(offer.id));

  useEffect(() => {
    setIsFavorite(favoritesOffersId.includes(offer.id));
  }, [favoritesOffersId, offer.id]);

  useEffect(() => {
    const currentFavoriteNumber = favoritesOffersId.length;
    if (currentFavoriteNumber !== favoriteNumber) {
      dispatch(changeFavoritesNumber(currentFavoriteNumber));
    }
  }, [favoritesOffersId, favoriteNumber, dispatch]);

  const handleFavorite = () => {
    dispatch(changeFavoritesId(isFavorite ? favoritesOffersId.filter((id) => id !== offer.id) : favoritesOffersId.concat(offer.id)));
    setIsFavorite(!isFavorite);
    dispatch(postFavoriteAction({ id: offer.id, status: isFavorite ? 0 : 1 }));
  };

  return (
    <button
      className={isFavorite ? 'place-card__bookmark-button place-card__bookmark-button--active button' : 'place-card__bookmark-button button'}
      type="button"
      onClick={handleFavorite}
    >
      <svg className="place-card__bookmark-icon" width="18" height="19">
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}

export default ChangeFavoriteButton;
