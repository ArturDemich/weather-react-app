import { AxiosResponse } from 'axios';
import api from '../axios';
import { HourlyWeather, Weather } from '../localStorage/types';

export class WeatherService {
  static getCurrentWeather(city: string): Promise<AxiosResponse<Weather>> {
    return api.get<Weather>(`/weather?q=${city}`)
  }
  static getHourlyWeather(lon: number, lat: number): Promise<AxiosResponse<HourlyWeather>> {
    return api.get<HourlyWeather>(`onecall?lat=${lat}&lon=${lon}&exclude=dayly,minutely`)
  }
}