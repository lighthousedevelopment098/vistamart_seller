// Helper function to make API calls with authorization

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import apiConfig from '../config/apiConfig';
import axiosInstance from '../../utils/axiosConfig';
import { ErrorMessage } from '../../utils/ErrorMessage';
import { getAuthData } from '../../utils/authHelper';

// Use the admin endpoint for vendors
const API_URL = `${apiConfig.seller}/vendors`;

export const createVendor = createAsyncThunk(
  'vendors/createVendor',
  async (vendorData, { rejectWithValue }) => {
    const { token } = getAuthData(); 
    try {
      const response = await axiosInstance.post(`${API_URL}/signup`, vendorData, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`, 
        },
      });
      return response.data.doc;
    } catch (error) {
      const errorMessage = ErrorMessage(error);  
      return rejectWithValue(errorMessage);
    }
  }
);

export const registerVendor = createAsyncThunk(
  'vendors/registerVendor',
  async (vendorData, { rejectWithValue }) => {
    const { token } = getAuthData(); // Get the token from auth data
    try {
      const formData = new FormData();
      for (const key in vendorData) {
        formData.append(key, vendorData[key]);
      }

      const response = await axiosInstance.post(`${API_URL}/signup`, formData, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`, // Pass the token
        },
      });
      return response.data;
    } catch (error) {
      const errorMessage = ErrorMessage(error);  // Use the error handler
      return rejectWithValue(errorMessage);
    }
  }
);

// Thunk for fetching vendors
export const fetchVendors = createAsyncThunk(
  'vendors/fetchVendors',
  async (_, { rejectWithValue }) => {
    const { token } = getAuthData(); // Get the token from auth data
    try {
      const vendorsResponse = await axiosInstance.get(API_URL, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const vendorsData = vendorsResponse.data.doc;

      return vendorsData;
    } catch (error) {
      const errorMessage = ErrorMessage(error);  // Use the error handler
      return rejectWithValue(errorMessage);
    }
  }
);

// Thunk for fetching vendor details by ID
export const fetchVendorById = createAsyncThunk(
  'vendors/fetchVendorById',
  async (vendorId, { rejectWithValue }) => {
    const { token } = getAuthData(); // Get the token from auth data
    try {
      console.log("venodr id ", vendorId)
      const response = await axiosInstance.get(`${API_URL}/${vendorId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data.doc;
    } catch (error) {
      const errorMessage = ErrorMessage(error);  // Use the error handler
      return rejectWithValue(errorMessage);
    }
  }
);

// Thunk for updating vendor status
export const updateVendorStatus = createAsyncThunk(
  'vendors/updateVendorStatus',
  async ({ vendorId, status }, { rejectWithValue }) => {
    const { token } = getAuthData(); // Get the token from auth data
    try {
      const response = await axiosInstance.put(
        `${API_URL}/status/${vendorId}`,
        { status },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      return response.data.doc;
    } catch (error) {
      const errorMessage = ErrorMessage(error);  // Use the error handler
      return rejectWithValue(errorMessage);
    }
  }
);

// Thunk for deleting a vendor
export const deleteVendor = createAsyncThunk(
  'vendors/deleteVendor',
  async ({ vendorId }, { rejectWithValue }) => {
    const { token } = getAuthData(); // Get the token from auth data
    try {
      const response = await axiosInstance.delete(`${API_URL}/${vendorId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (response.status === 200) {
        return vendorId;
      }
    } catch (error) {
      const errorMessage = ErrorMessage(error);  
      return rejectWithValue(errorMessage);
    }
  }
);

const vendorSlice = createSlice({
  name: 'vendors',
  initialState: {
    vendors: [], // Ensure this matches what you're trying to access
    vendorDetails: null, // To store details of a specific vendor
    loading: false,
    error: null,
  },
  reducers: {
    resetError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createVendor.pending, (state) => {
        state.loading = true;
      })
      .addCase(createVendor.fulfilled, (state, action) => {
        state.loading = false;
        state.vendors.push(action.payload);
      })
      .addCase(createVendor.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(registerVendor.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerVendor.fulfilled, (state, action) => {
        state.loading = false;
        state.vendors.push(action.payload);
      })
      .addCase(registerVendor.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchVendors.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchVendors.fulfilled, (state, action) => {
        state.loading = false;
        state.vendors = action.payload;
      })
      .addCase(fetchVendors.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchVendorById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchVendorById.fulfilled, (state, action) => {
        state.loading = false;
        state.vendorDetails = action.payload;
      })
      .addCase(fetchVendorById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateVendorStatus.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateVendorStatus.fulfilled, (state, action) => {
        state.loading = false;
        const updatedVendor = action.payload;
        state.vendors = state.vendors.map(vendor =>
          vendor._id === updatedVendor._id ? updatedVendor : vendor
        );
      })
      .addCase(updateVendorStatus.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteVendor.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteVendor.fulfilled, (state, action) => {
        state.loading = false;
        const deletedVendorId = action.payload;
        state.vendors = state.vendors.filter(vendor => vendor._id !== deletedVendorId);
      })
      .addCase(deleteVendor.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { resetError } = vendorSlice.actions;
export default vendorSlice.reducer;
