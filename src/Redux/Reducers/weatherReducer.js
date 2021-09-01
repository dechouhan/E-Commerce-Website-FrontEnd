import {
  FETCH_CITY_WEATHER,
  FETCH_LOCATION_CORDINATES,
  RESET_CITY,
  RESET_LOCATION_CORDINATES,
  SET_CHECK_ACTION,
  SHOW_CITY_HISTORY,
} from "../Actions";

const initialState = {
  cityWeather: [{ name: null }],
  locationCordinates: null,
  showCityHistory: [],
  checkStatus: false,
};

const Weather = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CITY_WEATHER:
      return {
        ...state,
        cityWeather: action.payload,
      };
    case FETCH_LOCATION_CORDINATES:
      return {
        ...state,
        locationCordinates: action.payload,
      };
    case SHOW_CITY_HISTORY:
      return {
        ...state,
        showCityHistory: action.payload,
      };
    case RESET_LOCATION_CORDINATES:
      return {
        ...state,
        locationCordinates: null,
      };
    case RESET_CITY:
      return {
        ...state,
        cityWeather: [{ name: null }],
      };
    case SET_CHECK_ACTION:
      return {
        ...state,
        checkStatus: action.payload,
      };
    default:
      return state;
  }
};
export default Weather;
