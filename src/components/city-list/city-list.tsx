import { City } from '../../types/city';
import { useAppDispatch } from '../../hooks';
import { changeCity } from '../../store/action';
import { CITIES } from '../../mocks/cities';

type CityListProps = {
  chosenCity: City;
}

function CityList({chosenCity}: CityListProps): JSX.Element {
  const dispatch = useAppDispatch();
  const handleCityChange = (city: City) => {
    dispatch(changeCity(city));
  };
  return(
    <ul className="locations__list tabs__list">
      {CITIES.map((city) => (
        <li className="locations__item" key={city.title}>
          <a className={`locations__item-link tabs__item ${(city === chosenCity) ? 'tabs__item--active' : ''}`} onClick={() => {
            handleCityChange(city);
          }}
          >
            <span>{city.title}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default CityList;
