import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { filters } from '../../utils';
import { changeSortOptions } from '../../store/action';

function CardsSortingOptions(): JSX.Element {
  const chosenSortType = useAppSelector((state) => state.sortType);
  const dispatch = useAppDispatch();
  const [isSortOpened, setIsSortOpened] = React.useState(false);
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={() => setIsSortOpened(!isSortOpened)}>
        {chosenSortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${(isSortOpened) ? 'places__options--opened' : ''}`}>
        <li className={`places__option ${(chosenSortType === filters.POPULAR) ? 'places__option--active' : ''}`} tabIndex={0} onClick={() => dispatch(changeSortOptions(filters.POPULAR))}>Popular</li>
        <li className={`places__option ${(chosenSortType === filters.LOW_TO_HIGH) ? 'places__option--active' : ''}`} tabIndex={0} onClick={() => dispatch(changeSortOptions(filters.LOW_TO_HIGH))}>Price: low to high</li>
        <li className={`places__option ${(chosenSortType === filters.HIGH_TO_LOW) ? 'places__option--active' : ''}`} tabIndex={0} onClick={() => dispatch(changeSortOptions(filters.HIGH_TO_LOW))}>Price: high to low</li>
        <li className={`places__option ${(chosenSortType === filters.TOP_RATED) ? 'places__option--active' : ''}`} tabIndex={0} onClick={() => dispatch(changeSortOptions(filters.TOP_RATED))}>Top rated first</li>
      </ul>
    </form>
  );
}
export default CardsSortingOptions;
