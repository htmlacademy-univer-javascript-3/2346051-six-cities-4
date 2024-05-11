import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeCity } from '../../store/action';
import { cities } from '../../const';


function CityList(): JSX.Element {
  const chosenCity = useAppSelector((state) => state.city);
  const dispatch = useAppDispatch();
  const handleCityChange = (city: string) => {
    dispatch(changeCity(city));
  };


  return(
    <ul className="locations__list tabs__list">
      {Object.keys(cities).map((city) => (
        <li className="locations__item" key={city}>
          <a className={`locations__item-link tabs__item ${(city === chosenCity) ? 'tabs__item--active' : ''}`} onClick={() => {
            handleCityChange(city);
          }}
          >
            <span>{city}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default CityList;
