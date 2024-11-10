import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Swal from 'sweetalert2';
import apiConfig from '../config/apiConfig';
import { getAuthData } from '../../utils/authHelper';
import axiosInstance from '../../utils/axiosConfig';
import { ErrorMessage } from '../../utils/ErrorMessage';

// Use the vendor bank endpoint
const API_URL = `${apiConfig.seller}/vendorBank`;
const { token } = getAuthData(); 

// Thunk for fetching all vendor banks
export const fetchVendorBanks = createAsyncThunk(
  'vendorBanks/fetchVendorBanks',
  async ({ vendor }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(API_URL, {
        headers: { Authorization: `Bearer ${token}` },
        params: { vendor }, // Pass vendor ID as a search param
      });
      return response.data.doc;
    } catch (error) {
      const errorMessage = ErrorMessage(error);
      return rejectWithValue(errorMessage);
    }
  }
);

// Thunk for fetching a specific vendor bank by its ID
export const fetchVendorBankById = createAsyncThunk(
  'vendorBanks/fetchVendorBankById',
  async (bankId, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`${API_URL}/${bankId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data.doc;
    } catch (error) {
      const errorMessage = ErrorMessage(error);
      return rejectWithValue(errorMessage);
    }
  }
);

// Thunk for creating a vendor bank entry
export const createVendorBank = createAsyncThunk(
  'vendorBanks/createVendorBank',
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(API_URL, formData, {
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

// Thunk for updating vendor bank details
export const updateVendorBank = createAsyncThunk(
  'vendorBanks/updateVendorBank',
  async ({ bankId, bankData }, { rejectWithValue }) => {
    try {
        console.log("bankData ", bankData)
        console.log("bankId ", bankId)
      const response = await axiosInstance.put(
        `${API_URL}/${bankId}`,
        bankData,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      return response.data.doc;
    } catch (error) {
      const errorMessage = ErrorMessage(error);
      return rejectWithValue(errorMessage);
    }
  }
);

// Thunk for deleting a vendor bank entry
export const deleteVendorBank = createAsyncThunk(
  'vendorBanks/deleteVendorBank',
  async (bankId, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.delete(`${API_URL}/${bankId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (response.status === 200) {
        return bankId;
      }
    } catch (error) {
      const errorMessage = ErrorMessage(error);
      return rejectWithValue(errorMessage);
    }
  }
);

const vendorBankSlice = createSlice({
  name: 'vendorBanks',
  initialState: {
    vendorBanks: [], // To store the list of vendor banks
    vendorBank: null, // To store the single bank fetched by ID
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
      // Fetch all vendor banks
      .addCase(fetchVendorBanks.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchVendorBanks.fulfilled, (state, action) => {
        state.loading = false;
        state.vendorBanks = action.payload;
      })
      .addCase(fetchVendorBanks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Fetch vendor bank by ID
      .addCase(fetchVendorBankById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchVendorBankById.fulfilled, (state, action) => {
        state.loading = false;
        state.vendorBank = action.payload;
      })
      .addCase(fetchVendorBankById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Create vendor bank
      .addCase(createVendorBank.pending, (state) => {
        state.loading = true;
      })
      .addCase(createVendorBank.fulfilled, (state, action) => {
        state.loading = false;
        state.vendorBanks.push(action.payload);
        Swal.fire('Success!', 'Vendor bank added successfully.', 'success');
      })
      .addCase(createVendorBank.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        Swal.fire('Error!', 'There was an issue adding the vendor bank.', 'error');
      })

      // Update vendor bank
      .addCase(updateVendorBank.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateVendorBank.fulfilled, (state, action) => {
        state.loading = false;
        const updatedBank = action.payload;
        state.vendorBanks = state.vendorBanks.map(bank =>
          bank.id === updatedBank.id ? updatedBank : bank
        );
        Swal.fire('Success!', 'Vendor bank updated successfully.', 'success');
      })
      .addCase(updateVendorBank.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Delete vendor bank
      .addCase(deleteVendorBank.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteVendorBank.fulfilled, (state, action) => {
        state.loading = false;
        const deletedBankId = action.payload;
        state.vendorBanks = state.vendorBanks.filter(bank => bank.id !== deletedBankId);
        Swal.fire('Success!', 'Vendor bank deleted successfully.', 'success');
      })
      .addCase(deleteVendorBank.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { resetError } = vendorBankSlice.actions;
export default vendorBankSlice.reducer;
