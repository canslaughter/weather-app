import {
  createContext,
  useReducer,
  useCallback,
  useMemo,
  useContext,
} from 'react';

const initialState = {count: 0, cities: []};
const ADD_CITY = 'src/App/ADD_CITY';
const REMOVE_CITY = 'src/App/REMOVE_CITY';
const WEATHER_API_KEY = '4ae2636d8dfbdc3044bede63951a019b';

const AppStateContext = createContext({
  cities: initialState.cities,
  fetchCity () {},
  removeCity () {},
});

export const AppStateProvider = props => {

  const [{cities}, dispatch] = useReducer((state, action) => {
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

  const fetchCity = useCallback(searchStr => {
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
  }, [dispatch]);

  const removeCity = useCallback(id => {
    dispatch({type: REMOVE_CITY, payload: id});
  }, [dispatch]);

  const appstate = useMemo(() => {
    return {
      cities,
      fetchCity,
      removeCity,
    };
  }, [
    cities,
    fetchCity,
    removeCity,
  ]);

  return (
    <AppStateContext.Provider
      value={appstate}
      children={props.children}
    />
  );
}

export const useAppState = () => {
  const appstate = useContext(AppStateContext);
  return appstate;
};
