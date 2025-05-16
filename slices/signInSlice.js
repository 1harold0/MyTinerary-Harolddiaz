import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const signInUser = createAsyncThunk(
  'auth/signIn',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await fetch('http://localhost:8080/api/auth/signIn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();

      if (!response.ok) {
        return rejectWithValue(data);
      }

      return data;
    } catch (error) {
      return rejectWithValue({
        success: false,
        message: error.message || 'Error de conexión',
      });
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token: null,
    status: 'idle',
    error: null,
  },
  reducers: {
    setCredentials: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem('authState');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signInUser.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(signInUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload.user;
        state.token = action.payload.token;

        //  Guarda  el usuario
        localStorage.setItem(
          'authState',
          JSON.stringify({
            token: action.payload.token,
            user: action.payload.user, 
          })
        );
      })
      .addCase(signInUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload?.message || 'Error desconocido';
      });
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
