import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchItinerariesByCity = createAsyncThunk('itineraries/fetchByCity', async (cityId) => {
  const response = await fetch(`http://localhost:8080/api/itineraryRouter/byCity/${cityId}`);
  if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
  const data = await response.json();
  return Array.isArray(data) ? data : data.itineraries || data.data || [];
});

const itinerariesSlice = createSlice({
  name: 'itineraries',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchItinerariesByCity.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchItinerariesByCity.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchItinerariesByCity.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export default itinerariesSlice.reducer;
