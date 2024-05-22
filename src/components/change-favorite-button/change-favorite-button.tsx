import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { postFavoriteAction } from "../../store/api-actions";
import { getFavoritesNumber } from "../../store/favorite-process/selectors";
import { changeFavoritesNumber } from "../../store/favorite-process/favorite-process";
import { Offer } from "../../types/offer";
import { getOffers } from "../../store/offers-data/selectors";

type ChangeFavoriteButtonProps = {
  offer: Offer;
};

function ChangeFavoriteButton({ offer }: ChangeFavoriteButtonProps): JSX.Element {
  const dispatch = useAppDispatch();
  const offers = useAppSelector(getOffers);
  const favoriteNumber = useAppSelector(getFavoritesNumber);
  const [isFavorite, setIsFavorite] = useState(offer.isFavorite);

  useEffect(() => {
    const currentFavoriteNumber = offers.filter((o) => o.isFavorite).length;
    if (currentFavoriteNumber !== favoriteNumber) {
      dispatch(changeFavoritesNumber(currentFavoriteNumber));
    }
  }, [offers, favoriteNumber, dispatch]);

  const handleFavorite = () => {
    setIsFavorite(!isFavorite);
    const newFavoriteNumber = isFavorite ? favoriteNumber - 1 : favoriteNumber + 1;
    dispatch(changeFavoritesNumber(newFavoriteNumber));
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
