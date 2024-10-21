// // src/redux/authSlice.js
// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// // Retrieve token and user data from localStorage
// const token = localStorage.getItem('token');
// const userData = localStorage.getItem('user');

// const initialState = {
//   isLoggedIn: !!token, // Check if the user is logged in based on token existence
//   user: userData ? JSON.parse(userData) : null, // Parse the user data if it exists
//   error: null,
//   token: token || null, // Store token in state
// };

// // Async thunk for handling login
// export const login = createAsyncThunk(
//   'auth/login',
//   async ({ email, password }, thunkAPI) => {
//     try {
//       // Sending the login request to the API
//       const response = await axios.post('https://www.api.vistamart.biz/api/v1/seller/vendors/login/', { email, password });

//       // Extract the accessToken and user from the response
//       const { accessToken, user } = response.data;

//       // Store token and user in localStorage
//       localStorage.setItem('token', accessToken);
//       localStorage.setItem('user', JSON.stringify(user));
//       // Return the token and user for further use in Redux state
//       return { token: accessToken, user };
//     } catch (error) {
//       console.error("Login error:", error); // Log the error for debugging
//       return thunkAPI.rejectWithValue('An error occurred during login.');
//     }
//   }
// );

// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {
//     // Handle logout by clearing localStorage and resetting state
//     logout: (state) => {
//       localStorage.removeItem('token');
//       localStorage.removeItem('user');
//       state.isLoggedIn = false;
//       state.user = null;
//       state.token = null;
//       state.error = null;
//     },
//     // Manually set the authentication token
//     setAuthToken: (state, action) => {
//       state.token = action.payload;
//       localStorage.setItem('token', action.payload);
//     },
//   },
//   extraReducers: (builder) => {
//     // Handle the fulfilled case when login succeeds
//     builder
//       .addCase(login.fulfilled, (state, action) => {
//         state.isLoggedIn = true;
//         state.user = action.payload.user;
//         state.token = action.payload.token;
//         state.error = null;
//       })
//       // Handle the rejected case when login fails
//       .addCase(login.rejected, (state, action) => {
//         state.error = action.payload;
//       });
//   },
// });

// // Export the logout and setAuthToken actions
// export const { logout, setAuthToken } = authSlice.actions;

// // Export the authSlice reducer as the default export
// export default authSlice.reducer;





import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../../utils/axiosConfig'; 
import apiConfig from '../../config/apiConfig';
import { saveAuthData, getAuthData, clearAuthData } from '../../../utils/authHelper';
// Initial state
const initialState = {
  isLoggedIn: false,
  user: null,
  error: null,
  token: null,
  loading: false, // Add loading state
};

// Async thunk for login
export const login = createAsyncThunk(
  'auth/login',
  async ({ email, password, role }, thunkAPI) => {
    try {
      // Get API endpoint based on role from apiConfig
      const apiEndpoint = apiConfig[role] || apiConfig.seller;

      // Use axiosInstance for login request
      const response = await axiosInstance.post(`${apiEndpoint}/vendors/login/`, { email, password });
      const { accessToken, user } = response.data;

      // Save token and user data using the helper
      saveAuthData(role, accessToken, user);
      
      return { token: accessToken, user, role }; // Return role for further usage
    } catch (error) {

      console.error('Login error:', error.response?.data || error.message);
      return thunkAPI.rejectWithValue(error.response?.data?.message || 'An error occurred during login.');
    }
  }
);

// Auth slice
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state, action) => {
      // Clear localStorage and reset state based on role using the helper
      clearAuthData(action.payload);
      state.isLoggedIn = false;
      state.user = null;
      state.token = null;
      state.error = null;
      state.loading = false; // Reset loading on logout
    },
    setAuthToken: (state, action) => {
      // Set token in state and localStorage
      state.token = action.payload;
      localStorage.setItem('token', action.payload);
    },
    checkAuth: (state, action) => {
      const { token, user } = getAuthData(action.payload);
      
      if (token) {
        state.isLoggedIn = true;
        state.user = user;
        state.token = token;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true; // Set loading to true when login starts
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.error = null;
        state.loading = false; // Reset loading to false when login succeeds
      })
      .addCase(login.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false; // Reset loading to false when login fails
      });
  },
});

// Selectors
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectUser = (state) => state.auth.user;
export const selectToken = (state) => state.auth.token;
export const selectAuthError = (state) => state.auth.error;
export const selectAuthLoading = (state) => state.auth.loading; // New loading state selector

// Export actions and reducer
export const { logout, setAuthToken, checkAuth } = authSlice.actions;
export default authSlice.reducer;
