import {
  FETCH_CITY_WEATHER,
  FETCH_LOCATION_CORDINATES,
  RESET_CITY,
  RESET_LOCATION_CORDINATES,
  SET_CHECK_ACTION,
  SHOW_CITY_HISTORY,
} from ".";

export const fetchCityWeatherAction = (data) => ({
  type: FETCH_CITY_WEATHER,
  payload: data,
});

export const locationCordinatesAction = (data) => ({
  type: FETCH_LOCATION_CORDINATES,
  payload: data,
});

export const resetCordinatesAction = () => ({
  type: RESET_LOCATION_CORDINATES,
});
export const resetCityAction = () => ({
  type: RESET_CITY,
});

export const showCitySearchHistoryAction = (data) => ({
  type: SHOW_CITY_HISTORY,
  payload: data,
});

export const showCheckAction = (data) => ({
  type: SET_CHECK_ACTION,
  payload: data,
});
