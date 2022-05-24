import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { Weather } from '../types';

type CurrentWeather = {
  weathers: Weather[];
};

const initialState: CurrentWeather = {
  weathers: [],
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
    
    removeWeatherCard(state, action: PayloadAction<{id: number}>){
      state.weathers = [...state.weathers.filter(el => el.id !== action.payload.id)]
      localStorage.setItem('weathers', JSON.stringify(state.weathers))
    },
    setWeathersFromLS(state, action: PayloadAction<{ weathers: Weather[] }>){
      state.weathers = action.payload.weathers
    }
  },
});

export const { addWeatherCard, removeWeatherCard, setWeathersFromLS } = currentWeatherSlice.actions;
export default currentWeatherSlice.reducer;