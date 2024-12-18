import React from 'react';
import OrderManagement from './OrderManagement.jsx';
import { useSelector } from 'react-redux';
import { getAuthData } from '../../utils/authHelper.js';

const PendingOrders = () => {
  const { user } = getAuthData();
  const vendorId = user?._id || '';
  // console.log("vendor id ============", vendorId)

  return <OrderManagement status="pending" title="Pending" vendorId={vendorId} />;
};

const ConfirmedOrders = () => {
  const { user } = getAuthData();
  const vendorId = user?._id || '';

  return <OrderManagement status="confirmed" title="Confirmed" vendorId={vendorId} />;
};

const DeliveredOrders = () => {
  const { user } = getAuthData();
  const vendorId = user?._id || '';

  return <OrderManagement status="delivered" title="Delivered" vendorId={vendorId} />;
};

const PackagingOrders = () => {
  const { user } = getAuthData();
  const vendorId = user?._id || '';

  return <OrderManagement status="packaging" title="Packaging" vendorId={vendorId} />;
};

const OutForDeliveryOrders = () => {
  const { user } = getAuthData();
  const vendorId = user?._id || '';
  return <OrderManagement status="out_for_delivery" title="Out for Delivery" vendorId={vendorId} />;
};

const FailedToDeliverOrders = () => {
  const { user } = getAuthData();
  const vendorId = user?._id || '';

  return <OrderManagement status="failed_to_deliver" title="Failed to Deliver" vendorId={vendorId} />;
};

const ReturnedOrders = () => {
  const { user } = getAuthData();
  const vendorId = user?._id || '';
  return <OrderManagement status="returned" title="Returned" vendorId={vendorId} />;
};

const CanceledOrders = () => {
  const { user } = getAuthData();
  const vendorId = user?._id || '';
  return <OrderManagement status="canceled" title="Canceled" vendorId={vendorId} />;
};

export {
  PendingOrders,
  ConfirmedOrders,
  DeliveredOrders,
  PackagingOrders,
  OutForDeliveryOrders,
  FailedToDeliverOrders,
  ReturnedOrders,
  CanceledOrders
};
