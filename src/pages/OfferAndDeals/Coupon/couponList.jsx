import React, { lazy } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";

import { FaEdit, FaTrash } from "react-icons/fa";
import { deleteCoupon, fetchCoupons, updateCouponStatus } from "../../../components/redux/couponSlice";
import LoadingSpinner from "../../../components/LoodingSpinner/LoadingSpinner";
import Switcher from "../../../components/FormInput/Switcher";
import ActionButton from "../../../components/ActionButton/Action";

// Lazy load TableList component
const LazyTableList = lazy(() =>
  import("../../../components/FormInput/TableList")
);

const CouponList = () => {
  const dispatch = useDispatch();
  const { coupons, loading } = useSelector((state) => state.coupons);

  // Fetch coupons on component mount
  React.useEffect(() => {
    dispatch(fetchCoupons());
  }, [dispatch]);

  // Handle status update for coupons
  const handleUpdateStatus = (id, currentStatus) => {
    const newStatus = currentStatus ? "active" : "inactive";

    ConfirmationModal({
      title: "Are you sure?",
      text: `Do you want to ${newStatus} this coupon?`,
    }).then((willUpdate) => {
      if (willUpdate) {
        dispatch(updateCouponStatus({ couponId: id, status: newStatus }))
          .then(() => {
            toast.success(`Coupon status updated to ${newStatus}!`);
            dispatch(fetchCoupons());
          })
          .catch(() => toast.error("Failed to update coupon status."));
      } else {
        toast.info("Status update canceled.");
      }
    });
  };

  // Handle coupon deletion
  const handleDeleteCoupon = (id) => {
    ConfirmationModal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this coupon!",
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(deleteCoupon(id))
          .then(() =>
            {
                toast.success(
                  `Coupon deleted successfully! ${
                    coupons.length - 1 === 0? "No more coupons left." : ""
                  }`
                );
                dispatch(fetchCoupons());
              } 
            )
          .catch(() => toast.error("Failed to delete the coupon."));
      } else {
        toast.info("Coupon deletion canceled.");
      }
    });
  };

  // Define table columns
  const columns = [
    {
      key: "_id",
      label: "SL",
      render: (coupon, index, currentPage, itemsPerPage) =>
        index + 1 + (currentPage - 1) * itemsPerPage,
    },
    { key: "title", label: "Title" },
    { key: "code", label: "Code" },
    { key: "type", label: "Type" },
    { key: "discountAmount", label: "Discount Amount" },
    {
      key: "startDate",
      label: "Start Date",
      render: (coupon) => new Date(coupon.startDate).toLocaleDateString(),
    },
    {
      key: "expiredDate",
      label: "Expiration Date",
      render: (coupon) => new Date(coupon.expiredDate).toLocaleDateString(),
    },
    {
      key: "status",
      label: "Status",
      render: (coupon) => (
        <Switcher
        //   checked={coupon.status}
          checked={coupon.status === "active"} // Reflect "active" status in the switcher
          onChange={() => handleUpdateStatus(coupon._id, coupon.status !== "active")} // Toggle status
          />
    
      ),
    },
    {
      key: "action",
      label: "Action",
      render: (coupon) => (
        <div className="flex justify-center gap-2">
          {/* <ActionButton to={`/editcouponform/${coupon._id}`} icon={FaEdit} /> */}
          <ActionButton
            onClick={() => handleDeleteCoupon(coupon._id)}
            icon={FaTrash}
          />
        </div>
      ),
    },
  ];

  return (
    <div className="">
      <div className="">
        <React.Suspense
          fallback={
            <div className="text-center">
              <LoadingSpinner />
            </div>
          }
        >
          {/* <LazyTableList
            tableTitle="Coupon List"
            listData={coupons} // Pass the fetched coupons
            columns={columns}
          /> */}
          <LazyTableList
  tableTitle="Coupon List"
  listData={coupons} // Pass the fetched coupons
  columns={columns}
  keyExtractor={(coupon, index) => coupon._id + index} // Ensures unique keys
/>
        </React.Suspense>
      </div>
      <ToastContainer />
    </div>
  );
};

export default CouponList;
