import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { HourlyWeather, Weather } from '../types';

type CurrentWeather = {
  weathers: Weather[];
  hourlyWeather: HourlyWeather;
};

const initialState: CurrentWeather = {
  weathers: [],
  hourlyWeather: {
    hourly: [{ dt: 0, temp: 0}]
  },
 };

export const currentWeatherSlice = createSlice({
  name: 'current_weather',
  initialState,
  reducers: {
    
    addWeatherCard(
      state,
      action: PayloadAction<AxiosResponse<Weather>>) {
      const weathers: Weather[] = state.weathers
      
      const existingCardIndex:number = weathers.findIndex((value) =>{
        return value.id === action.payload.data.id
      })
      if(existingCardIndex > -1) {
        weathers[existingCardIndex] = action.payload.data
        state.weathers = weathers
      } else {
        state.weathers = [...state.weathers, action.payload.data];
      }
      localStorage.setItem('weathers', JSON.stringify(state.weathers))
    },
    setHourlyWeather(state,
      action: PayloadAction<AxiosResponse<HourlyWeather>>) {
        state.hourlyWeather.hourly = action.payload.data.hourly
      },
    removeWeatherCard(state, action: PayloadAction<{id: number}>){
      state.weathers = [...state.weathers.filter(el => el.id !== action.payload.id)]
      localStorage.setItem('weathers', JSON.stringify(state.weathers))
    },
    setWeathersFromLS(state, action: PayloadAction<{ weathers: Weather[] }>){
      state.weathers = action.payload.weathers
    }
  },
});

export const { addWeatherCard, removeWeatherCard, setWeathersFromLS, setHourlyWeather } = currentWeatherSlice.actions;
export default currentWeatherSlice.reducer;