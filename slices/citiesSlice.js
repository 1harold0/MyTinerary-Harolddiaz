import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCities = createAsyncThunk('cities/fetchCities', async () => {
  const response = await fetch('http://localhost:8080/api/citysRouter/allCitys');
  if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
  const data = await response.json();
  return Array.isArray(data) ? data : data.cities || data.results || data.data || [];
});

const citiesSlice = createSlice({
  name: 'cities',
  initialState: {
    all: [],
    filtered: [],
    loading: false,
    error: null,
  },
  reducers: {
    filterCities: (state, action) => {
      const search = action.payload.toLowerCase();
      state.filtered = state.all.filter(city =>
        [city.name, city.country, city.Continente].some(field =>
          field?.toLowerCase().includes(search)
        )
      );
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCities.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCities.fulfilled, (state, action) => {
        state.loading = false;
        state.all = action.payload;
        state.filtered = action.payload;
      })
      .addCase(fetchCities.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export const { filterCities } = citiesSlice.actions;
export default citiesSlice.reducer;
