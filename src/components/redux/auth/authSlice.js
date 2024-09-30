
// // src/redux/authSlice.js
// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// const token = localStorage.getItem('token');
// const userData = localStorage.getItem('user');

// const initialState = {
//   isLoggedIn: !!token,
//   user: userData ? JSON.parse(userData) : null,
//   error: null,
//   token: token || null, // Add token to state
// };

// export const login = createAsyncThunk(
//   'auth/login',
//   async ({ email, password }, thunkAPI) => {
//     try {
//       const response = await axios.post('https://lionfish-app-tdhk5.ondigitalocean.app/api/vendors/login/', { email, password });
//       const { token, result: user } = response.data.doc;

//       localStorage.setItem('token', token);
//       localStorage.setItem('user', JSON.stringify(user));

//       return { token, user };
//     } catch (error) {
//       return thunkAPI.rejectWithValue('An error occurred during login.');
//     }
//   }
// );

// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {
//     logout: (state) => {
//       localStorage.removeItem('token');
//       localStorage.removeItem('user');
//       state.isLoggedIn = false;
//       state.user = null;
//       state.token = null; // Clear token from state
//       state.error = null;
//     },
//     setAuthToken: (state, action) => {
//       state.token = action.payload;
//       localStorage.setItem('token', action.payload);
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(login.fulfilled, (state, action) => {
//         state.isLoggedIn = true;
//         state.user = action.payload.user;
//         state.token = action.payload.token;
//         state.error = null;
//       })
//       .addCase(login.rejected, (state, action) => {
//         state.error = action.payload;
//       });
//   },
// });

// export const { logout, setAuthToken } = authSlice.actions;
// export default authSlice.reducer;


// src/redux/authSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Retrieve token and user data from localStorage
const token = localStorage.getItem('token');
const userData = localStorage.getItem('user');

const initialState = {
  isLoggedIn: !!token, // Check if the user is logged in based on token existence
  user: userData ? JSON.parse(userData) : null, // Parse the user data if it exists
  error: null,
  token: token || null, // Store token in state
};

// Async thunk for handling login
export const login = createAsyncThunk(
  'auth/login',
  async ({ email, password }, thunkAPI) => {
    try {
      // Sending the login request to the API
      const response = await axios.post('https://lionfish-app-tdhk5.ondigitalocean.app/api/vendors/login/', { email, password });

      // Extract the accessToken and user from the response
      const { accessToken, user } = response.data;

      // Store token and user in localStorage
      localStorage.setItem('token', accessToken);
      localStorage.setItem('user', JSON.stringify(user));

      // Return the token and user for further use in Redux state
      return { token: accessToken, user };
    } catch (error) {
      console.error("Login error:", error); // Log the error for debugging
      return thunkAPI.rejectWithValue('An error occurred during login.');
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // Handle logout by clearing localStorage and resetting state
    logout: (state) => {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      state.isLoggedIn = false;
      state.user = null;
      state.token = null;
      state.error = null;
    },
    // Manually set the authentication token
    setAuthToken: (state, action) => {
      state.token = action.payload;
      localStorage.setItem('token', action.payload);
    },
  },
  extraReducers: (builder) => {
    // Handle the fulfilled case when login succeeds
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.error = null;
      })
      // Handle the rejected case when login fails
      .addCase(login.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

// Export the logout and setAuthToken actions
export const { logout, setAuthToken } = authSlice.actions;

// Export the authSlice reducer as the default export
export default authSlice.reducer;
