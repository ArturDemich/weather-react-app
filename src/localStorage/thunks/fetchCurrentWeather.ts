import { WeatherService } from '../../services/WeatherService';
import { addWeatherCard, setHourlyWeather } from '../slices/currentWeatherSlice';
import { AppDispatch } from '../store';

export const fetchCurrentWeather =
  (payload: string) => async (dispatch: AppDispatch) => {
    try {     
      const res = await WeatherService.getCurrentWeather(payload);
      if (res.status === 200) {
        dispatch(addWeatherCard(res));
      } else {
        console.log('Something went wrong!')
      }
    } catch (error) {
      console.log(error);
    }
  }

  export const fetchHourlyWeather =
  (lon: number, lat: number) => async (dispatch: AppDispatch) => {
    try {     
      const res = await WeatherService.getHourlyWeather(lat, lon);
      if (res.status === 200) {
        dispatch(setHourlyWeather(res));
      } else {
        console.log('Something went wrong!')
      }
    } catch (error) {
      console.log(error);
    }
  }

