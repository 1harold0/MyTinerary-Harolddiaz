import { configureStore } from '@reduxjs/toolkit';
import citiesReducer from './slices/citiesSlice';
import itinerariesReducer from './slices/itinerariesSlice.js';

export const store = configureStore({
  reducer: {
    cities: citiesReducer,
    itineraries: itinerariesReducer
  }
});