
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async Thunks

// Fetch refunds for a specific vendor
export const fetchRefundsForVendor = createAsyncThunk(
  'refund/fetchRefundsForVendor',
  async (vendorId) => {
    const response = await axios.get(`https://lionfish-app-tdhk5.ondigitalocean.app/api/refunds/vendor/?vendorId=${vendorId}`);
    return response.data.docs;
  }
);

// Fetch refunds for a specific vendor by status
export const fetchRefundsForVendorByStatus = createAsyncThunk(
  'refund/fetchRefundsForVendorByStatus',
  async ({ status }) => {
    const response = await 
    axios.get
    (`https://lionfish-app-tdhk5.ondigitalocean.app/api/refunds/?status=${status}`);
    return response.data.docs;
  }
);

// Fetch refund by ID for a vendor
export const fetchRefundByIdForVendor = createAsyncThunk(
  'refund/fetchRefundByIdForVendor',
  async (refundId) => {
    const response = await axios.get(`https://lionfish-app-tdhk5.ondigitalocean.app/api/refunds/${refundId}`);
    return response.data.docs;
  }
);

// Update refund status for a vendor
export const updateRefundStatus = createAsyncThunk(
  'refund/updateRefundStatus',
  async ({ refundId, status, statusReason }) => {
    const response = await axios.put(
      `https://lionfish-app-tdhk5.ondigitalocean.app/api/refunds/${refundId}/status`,
      { status, statusReason }
    );
    return { refundId, status, statusReason };
  }
);


// Delete refund for a vendor
export const deleteRefund = createAsyncThunk(
  'refund/deleteRefund',
  async (refundId) => {
    await axios.delete(`https://lionfish-app-tdhk5.ondigitalocean.app/api/refunds/${refundId}`);
    return refundId;
  }
);

// Fetch refunds with filters and search
export const fetchRefundsWithFilters = createAsyncThunk(
  'refund/fetchRefundsWithFilters',
  async ({ vendorId, searchQuery, status, startDate, endDate }, { rejectWithValue }) => {
    try {
      const response = await axios.get('https://lionfish-app-tdhk5.ondigitalocean.app/api/refunds/', {
        params: { 
          vendorId, searchQuery, status, startDate, endDate 
        }
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  refunds: [],       // Array of refunds
  singleRefund: null, // Single refund data (for details view)
  loading: false,
  error: null,
};

const refundSlice = createSlice({
  name: 'refund',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch refunds for vendor
      .addCase(fetchRefundsForVendor.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchRefundsForVendor.fulfilled, (state, action) => {
        state.loading = false;
        state.refunds = action.payload;
      })
      .addCase(fetchRefundsForVendor.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Fetch refunds for vendor by status
      .addCase(fetchRefundsForVendorByStatus.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchRefundsForVendorByStatus.fulfilled, (state, action) => {
        state.loading = false;
        state.refunds = action.payload;
      })
      .addCase(fetchRefundsForVendorByStatus.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Fetch refund by ID for vendor
      .addCase(fetchRefundByIdForVendor.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchRefundByIdForVendor.fulfilled, (state, action) => {
        state.loading = false;
        state.singleRefund = action.payload; // Store single refund data here
      })
      .addCase(fetchRefundByIdForVendor.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Update refund status for vendor
      .addCase(updateRefundStatus.fulfilled, (state, action) => {
        const { refundId, status } = action.payload;
        state.refunds = state.refunds.map((refund) =>
          refund._id === refundId ? { ...refund, status } : refund
        );
        if (state.singleRefund && state.singleRefund._id === refundId) {
          state.singleRefund.status = status; // Update status if viewing single refund
        }
      })
      // Delete refund for vendor
      .addCase(deleteRefund.fulfilled, (state, action) => {
        const refundId = action.payload;
        state.refunds = state.refunds.filter((refund) => refund._id !== refundId);
        if (state.singleRefund && state.singleRefund._id === refundId) {
          state.singleRefund = null; // Clear single refund if deleted
        }
      })
      // Fetch refunds with filters and search
      .addCase(fetchRefundsWithFilters.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchRefundsWithFilters.fulfilled, (state, action) => {
        state.loading = false;
        state.refunds = action.payload;
      })
      .addCase(fetchRefundsWithFilters.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default refundSlice.reducer;
