import { configureStore } from '@reduxjs/toolkit';
import citiesReducer from './slices/citiesSlice';
import itinerariesReducer from './slices/itinerariesSlice.js';
import authReducer from './slices/signInSlice.js';
import createUserSlice from './slices/createUserSlice.js';

const persistedAuthState = JSON.parse(localStorage.getItem('authState')) || { token: null, user: null };
 

export const store = configureStore({
  reducer: {
    auth: authReducer,
    cities: citiesReducer,
    itineraries: itinerariesReducer,
    createUser: createUserSlice
  },
  preloadedState: {
    auth: persistedAuthState,
  }
});
