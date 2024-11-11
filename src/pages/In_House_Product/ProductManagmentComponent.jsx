import React from 'react';
import InHouseProductList from './ProductManagmentPage.jsx';
import { useSelector } from 'react-redux';
import { getAuthData } from '../../utils/authHelper.js';

const InHouseProductPage = () => {
  // const { user } = useSelector(state => state.auth);
  const { user } = getAuthData();
  
  console.log("user id in house prou ============", user)
  
  const userId = user?._id || ''; // Fallback to an empty string if userId is undefined
  return (
    <InHouseProductList
      initialTitle="Vendor All Products"
      initialFilters={{
        brand: '',
        category: '',
        searchValue: '',
        userId: userId,
        userType: '', // No filter for userType
        status: '', // No filter for status
        vendorNew4Days: false
      }}
    />
  );
};

const VendorPendingProductPage = () => {
  const { user } = getAuthData();
  const userId = user?._id || '';
  console.log("user id ", userId)
  return (
    <InHouseProductList
      initialTitle="Vendor Pending Products"
      initialFilters={{
        brand: '',
        category: '',
        searchValue: '',
        userId: userId,
        userType: 'vendor', // Filter for vendor
        status: 'pending', // Filter for pending status
        vendorNew4Days: false
      }}
    />
  );
};

const VendorNewRequestProductPage = () => {
  const { user } = getAuthData();
  
  // console.log("user id in house prou ============", user)
  
  const userId = user?._id || '';
  return (
    <InHouseProductList
      initialTitle="Vendor New Requests"
      initialFilters={{
        brand: '',
        category: '',
        searchValue: '',
        userId: userId,
        userType: 'vendor', // Filter for vendor
        status: 'pending', // No filter for status
        // vendorNew4Days: true // Filter for new vendor requests
      }}
    />
  );
};

const VendorApprovedProductPage = () => {
  const { user } = getAuthData();
  const userId = user?._id || '';
  // console.log("user id ====", userId)
  return (
    <InHouseProductList
      initialTitle="Vendor Approved Products"
      initialFilters={{
        brand: '',
        category: '',
        searchValue: '',
        userId: userId,
        userType: 'vendor', // Filter for vendor
        status: 'approved', // Filter for approved status
        vendorNew4Days: false
      }}
    />
  );
};

const VendorDeniedProductPage = () => {
  const { user } = getAuthData();
  const userId = user?._id || '';
  return (
    <InHouseProductList
      initialTitle="Vendor Denied Products"
      initialFilters={{
        brand: '',
        category: '',
        searchValue: '',
        userId: userId,
        userType: 'vendor', // Filter for vendor
        status: 'denied', // Filter for denied status
        vendorNew4Days: false
      }}
    />
  );
};

export {
  InHouseProductPage,
  VendorPendingProductPage,
  VendorNewRequestProductPage,
  VendorApprovedProductPage,
  VendorDeniedProductPage
};
