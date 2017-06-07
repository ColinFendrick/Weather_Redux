import axios from 'axios';

const API_KEY ='f6a4d558de9047bc8d89907960834b60';
const ROOT_URL = `api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url)

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
