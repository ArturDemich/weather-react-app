import { WeatherService } from '../../services/WeatherService';
import { addWeatherCard } from '../slices/currentWeatherSlice';
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
  };