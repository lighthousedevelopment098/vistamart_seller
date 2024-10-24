import React from 'react';
import OrderManagement from './OrderManagement.jsx';
import { useSelector } from 'react-redux';

const PendingOrders = () => {
  const { user } = useSelector(state => state.auth);
  const vendorId = user?._id || ''; // Use user ID as vendor ID
  console.log("vendor id ============", vendorId)

  return <OrderManagement status="pending" title="Pending" vendorId={vendorId} />;
};

const ConfirmedOrders = () => {
  const { user } = useSelector(state => state.auth);
  const vendorId = user?._id || '';

  return <OrderManagement status="confirmed" title="Confirmed" vendorId={vendorId} />;
};

const DeliveredOrders = () => {
  const { user } = useSelector(state => state.auth);
  const vendorId = user?._id || '';

  return <OrderManagement status="delivered" title="Delivered" vendorId={vendorId} />;
};

const PackagingOrders = () => {
  const { user } = useSelector(state => state.auth);
  const vendorId = user?._id || '';

  return <OrderManagement status="packaging" title="Packaging" vendorId={vendorId} />;
};

const OutForDeliveryOrders = () => {
  const { user } = useSelector(state => state.auth);
  const vendorId = user?._id || '';

  return <OrderManagement status="out_for_delivery" title="Out for Delivery" vendorId={vendorId} />;
};

const FailedToDeliverOrders = () => {
  const { user } = useSelector(state => state.auth);
  const vendorId = user?._id || '';

  return <OrderManagement status="failed_to_deliver" title="Failed to Deliver" vendorId={vendorId} />;
};

const ReturnedOrders = () => {
  const { user } = useSelector(state => state.auth);
  const vendorId = user?._id || '';

  return <OrderManagement status="returned" title="Returned" vendorId={vendorId} />;
};

const CanceledOrders = () => {
  const { user } = useSelector(state => state.auth);
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
