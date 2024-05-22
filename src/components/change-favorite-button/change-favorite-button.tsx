import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { fetchFavoriteAction, postFavoriteAction } from "../../store/api-actions";
import { getFavoritesNumber } from "../../store/favorite-process/selectors";
import { changeFavoritesNumber } from "../../store/favorite-process/favorite-process";
import { Offer } from "../../types/offer";

type ChangeFavoriteButtonProps = {
  offer: Offer;
};

function ChangeFavoriteButton({ offer }: ChangeFavoriteButtonProps): JSX.Element {
  const dispatch = useAppDispatch();

  const [isFavorite, setIsFavorite] = useState(offer.isFavorite);
  const favoriteNumber = useAppSelector(getFavoritesNumber)

  const handleFavorite = () => {
    dispatch(postFavoriteAction({ id: offer.id, status: isFavorite ? 0 : 1 })),
    dispatch(fetchFavoriteAction()),
    setIsFavorite(!isFavorite)
    isFavorite ? favoriteNumber > 0 && dispatch(changeFavoritesNumber(favoriteNumber - 1)) : dispatch(changeFavoritesNumber(favoriteNumber + 1))
  }

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