const API_KEY ='f6a4d558de9047bc8d89907960834b60';

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather() {
  return{
    type: FETCH_WEATHER
  };
}
