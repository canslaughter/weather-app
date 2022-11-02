import {useReducer} from 'react';
import Cards from './components/Cards';
import Home from './components/Home';

const WEATHER_API_KEY = '4ae2636d8dfbdc3044bede63951a019b';

const ADD_CITY = 'src/App/ADD_CITY';
const REMOVE_CITY = 'src/App/REMOVE_CITY';

const initialState = {count: 0, cities: []};

const App = () => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case ADD_CITY: {
        const count = state.count + 1;
        const city = {
          ...action.payload,
          id: count,
        };
        const cities = [city, ...state.cities];
        const newState = {count, cities};
        return newState;
      }
      case REMOVE_CITY: {
        const cities = state.cities.filter(c => c.id !== action.payload);
        const newState = {...state, cities};
        return newState;
      }
      default:
      return state;
    }
  }, initialState);

  const fetchCity = searchStr => {
    const DOMAIN = 'https://api.openweathermap.org';
    const PATH = '/data/2.5/weather';
    const percentEncSearchStr = encodeURIComponent(searchStr);
    const QUERY = `?q=${percentEncSearchStr}&appid=${WEATHER_API_KEY}&units=metric`;
    fetch(DOMAIN + PATH + QUERY)
    .then(r => r.json())
    .then(res => {
      if (res.main) {
        const newCity = {
          min: Math.round(res.main.temp_min * 10) / 10,
          max: Math.round(res.main.temp_max * 10) / 10,
          img: {
            src: res.weather[0].icon,
            description: res.weather[0].description,
          },
          name: res.name,
        };
        dispatch({type: ADD_CITY, payload: newCity});
      } else {
        alert("Ciudad no encontrada");
      }
    });
  };

  return (
    <Home onAddCity={fetchCity}>
       <Cards
         cities={state.cities}
         removeCity={id => void dispatch({type: REMOVE_CITY, payload: id})}
       />
    </Home>
  );
}

export default App;
