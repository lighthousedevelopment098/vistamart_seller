// import { configureStore } from '@reduxjs/toolkit';
// import authReducer from './auth/authSlice';
// import productReducer from './product/productSlice'; // Import your product reducer
// import orderReducer from './orderSlice'; // Import your product reducer
// import categoryReducer from './categorybrandSlice'; // Import your product reducer
// import refundReducer from './refundSlice'; // Import your product reducer

// const store = configureStore({
//   reducer: {
//     auth: authReducer,
//     product: productReducer,
//     vendorOrder: orderReducer,
//     category: categoryReducer,
//     refund: refundReducer,
//   },
// });

// export default store;



import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
import productReducer from './product/productSlice';
import orderReducer from './orderSlice';
import categoryReducer from './categorybrandSlice';
import refundReducer from './refundSlice';
import vendorReducer from './vendorSlice'; // Import your vendor reducer
import brandReducer from './brandSlice'; // Import your vendor reducer
import couponReducer from './couponSlice'; // Import your vendor reducer
import vendorBankReducer from './vendorBankSlice'; // Import your vendor reducer

const store = configureStore({
  reducer: {
    auth: authReducer,
    product: productReducer,
    vendorOrder: orderReducer,
    category: categoryReducer,
    refund: refundReducer,
    vendor: vendorReducer, // Add your vendor reducer here
    brand: brandReducer, // Add your brand reducer here
    coupons: couponReducer, 
    vendorBanks: vendorBankReducer,

  },
});

export default store;
