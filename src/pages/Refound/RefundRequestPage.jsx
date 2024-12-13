import React from 'react';
import RefundManagement from './RefundRequests.jsx'; // Adjust the import path as needed

const PendingRefunds = () => (
  <RefundManagement status="Pending" title="Pending Refunds" />
);

const ApprovedRefunds = () => (
  <RefundManagement status="Approved" title="Approved Refunds " />
);

const RefundedRefunds = () => (
  <RefundManagement status="Refunded" title="Refunded Refunds" />
);

const RejectedRefunds = () => (
  <RefundManagement status="Rejected" title="Rejected Refunds" />
);

export {
  PendingRefunds,
  ApprovedRefunds,
  RefundedRefunds,
  RejectedRefunds
};
