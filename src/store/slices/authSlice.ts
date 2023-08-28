import { createSlice } from '@reduxjs/toolkit';
import { login } from '../thunks/auth/authThunks';

interface AuthState {

  loginResponse: any; // Update this type based on the actual response structure
  error: string | null;
}

const initialState: AuthState = {
 
  loginResponse: null,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.loginResponse = action.payload; // Set the user data in the state
    },
    clearUser: (state) => {
      state.loginResponse = null; // Clear user data when needed
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      // Update state with login response data
      state.loginResponse = action.payload;
      state.error = null; // Clear any previous errors
    });
    builder.addCase(login.rejected, (state, action) => {
      // Update state with error
      state.error = action.error.message || 'An error occurred.';
    });
  },
});

export const { setUser, clearUser } = authSlice.actions;

export default authSlice.reducer;
