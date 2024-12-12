// import React, { useState, useEffect } from "react";
// import { FaEye, FaSearch, FaDownload, FaEdit, FaTrashAlt } from "react-icons/fa";
// import { Link, useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchOrdersForVendor, updateOrderStatus, deleteOrder } 
// from '../../components/redux/orderSlice';
// import { toast } from 'react-toastify';
// import Swal from 'sweetalert2';

// const OrderList = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { orders = [], loading, error } = useSelector((state) => state.vendorOrder || {});
//   const { user } = useSelector((state) => state.auth);
//   const vendorId = user?._id;
//  console.log("vendor iddddddddddd", vendorId)
//   const [searchQuery, setSearchQuery] = useState("");
//   const [filter, setFilter] = useState("");

//   useEffect(() => {
//     if (vendorId) {
//       dispatch(fetchOrdersForVendor(vendorId));

//     }
//   }, [dispatch, vendorId]);
//   useEffect(() => {

//       console.log("order---------", orders)
//   }, [dispatch, orders]);

//   const filteredOrders = orders.filter(order => {
//     const statusMatch = filter === "all" || order.orderStatus === filter;
//     const queryMatch = order._id.toLowerCase().includes(searchQuery.toLowerCase()) ||
//                        `${order.customer?.firstName || ''} ${order.customer?.lastName || ''}`.toLowerCase().includes(searchQuery.toLowerCase());
//     return statusMatch && queryMatch;
//   });

//   const handleUpdateStatus = (orderId, status) => {
//     dispatch(updateOrderStatus({ orderId, status }));
//     toast.success("Order status updated successfully!");
//   };

//   const handleDeleteOrder = (orderId) => {
//     Swal.fire({
//       title: 'Are you sure?',
//       text: "You won't be able to revert this!",
//       icon: 'warning',
//       showCancelButton: true,
//       confirmButtonColor: '#3085d6',
//       cancelButtonColor: '#d33',
//       confirmButtonText: 'Yes, delete it!'
//     }).then((result) => {
//       if (result.isConfirmed) {
//         dispatch(deleteOrder(orderId));
//         toast.success("Order deleted successfully!");
//       }
//     });
//   };

//   return (
//     <div className="content container-fluid">
//       <div>
//         <div className="d-flex flex-wrap gap-2 align-items-center mb-3">
//           <h2 className="h1 mb-0 flex">
//             <img
//               src="https://6valley.6amtech.com/public/assets/back-end/img/all-orders.png"
//               className="mb-1 mr-1"
//               alt="Orders"
//             />
//             <span className="page-header-title"> All Orders </span>
//           </h2>
//           <span className="badge badge-soft-dark radius-50 fz-14">
//             {/* {filteredOrders.length} */}
//           </span>
//         </div>
//         <div className="card mt-3">
//           <div className="card-body">
//             {/* Order list header */}
//             <div className="px-3 py-4 light-bg">
//               <div className="">
//                 <div className="d-flex flex-wrap gap-3 align-items-center">
//                   <h5 className="mb-0 text-capitalize font-bold d-flex gap-2 mr-auto">
//                     Order List{" "}
//                     <span className="badge badge-soft-dark radius-50 fz-12 ml-1">
//                       {filteredOrders.length}
//                     </span>
//                   </h5>
//                   <form
//                     action="https://6valley.6amtech.com/admin/coupon/add"
//                     method="GET"
//                   >
//                     <div
//                       className="input-group input-group-merge input-group-custom"
//                       style={{ border: "1px solid green" }}
//                     >
//                       <div className="input-group-prepend">
//                         <div className="input-group-text">
//                           <FaSearch />
//                         </div>
//                       </div>
//                       <input
//                         id="datatableSearch_"
//                         type="search"
//                         name="searchValue"
//                         className="form-control"
//                         placeholder="Search by Title or Code or Discount Type"
//                         required
//                         onChange={(e) => setSearchQuery(e.target.value)} // Added event handler for search
//                       />
//                       <button
//                         type="submit"
//                         className="btn px-4 py-2 bg-[#A1CB46] text-white hover:bg-[#7e9f37]"
//                         style={{ display: "flex", background: "green" }}
//                       >
//                         Search
//                       </button>
//                     </div>
//                   </form>
//                   <div>
//                     <button
//                       type="button"
//                       className="btn px-4 py-2 justify-center align-items-center bg-[#A1CB46] text-white hover:bg-[#7e9f37] text-nowrap btn-block flex gap-2 "
//                       style={{ display: "flex", background: "green" }}
//                       data-toggle="dropdown"
//                     >
//                       <FaDownload /> Export
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Order list */}
//             <div className="table-responsive">
//               <table className="table table-hover mb-0">
//                 <thead className="table-light">
//                   <tr>
//                     <th scope="col">Order ID</th>
//                     <th scope="col">Date</th>
//                     <th scope="col">Customer Name</th>
//                     <th scope="col">Store</th>
//                     <th scope="col">Amount</th>
//                     <th scope="col">Status</th>
//                     <th scope="col">Action</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {console.log("filteredOrders", filteredOrders)}
//                   {orders.map((order) => (
//                     <tr key={order._id}> {/* Changed to use _id */}
//                       <td>{order._id}</td>
//                       <td>{new Date(order.createdAt).toLocaleDateString()}</td> {/* Format date */}
//                       <td>{order.customer ? `${order.customer.firstName} ${order.customer.lastName}` : 'Unknown Customer'}</td> {/* Conditionally render customer name */}
//                       <td>{order.vendor ? order.vendor.shopName : 'Unknown Store'}</td> {/* Conditionally render vendor name */}
//                       <td>{order.totalAmount}</td> {/* Render total amount */}
//                       <td>
//                         <select
//                           className={`badge badge-${
//                             order.orderStatus === "pending"
//                               ? "warning"
//                               : order.orderStatus === "confirmed"
//                               ? ""
//                               : "info"
//                           } radius-50`}
//                           value={order.orderStatus}
//                           onChange={(e) => handleUpdateStatus(order._id, e.target.value)}
//                         >
//                           <option value="pending">Pending</option>
//                           <option value="confirmed">Confirmed</option>
//                           <option value="delivered">Delivered</option>
//                           <option value="canceled">Cancelled</option>
//                           <option value="packaging">Packaging</option>
//                           <option value="out_for_delivery">Out_for_delivery</option>
//                           <option value="failed_to_deliver">Failed_to_deliver</option>
//                           <option value="returned">Returned</option>

                     
//                         </select>
//                       </td>
//                       <td>
//                         <Link
//                           to={`/orderdetail/${order._id}`} // Updated link to include order ID
//                           className="btn bg-green-300 text-white btn-sm"
//                         >
//                           <FaEye size={18} />
//                         </Link>
//                         {/* <button
//                           className="btn bg-blue-300 text-white btn-sm ml-2"
//                           onClick={() => navigate(`/orderedit/${order._id}`)}
//                         >
//                           <FaEdit size={18} />
//                         </button> */}
//                         {/* <button
//                           className="btn bg-red-300 text-white btn-sm ml-2"
//                           onClick={() => handleDeleteOrder(order._id)}
//                         >
//                           <FaTrashAlt size={18} />
//                         </button> */}
//                       </td>
//                     </tr>
//                   ))}
//                   {/* Display a message if no orders match the filter */}
//                   {filteredOrders.length === 0 && (
//                     <tr>
//                       <td colSpan="7" className="text-center py-4">
//                         No orders found.
//                       </td>
//                     </tr>
//                   )}
//                 </tbody>
//               </table>
//             </div>

//             {/* Pagination */}
//             <div className="d-flex justify-content-end align-items-center mb-3">
//               <nav className="d-flex gap-2" aria-label="Page navigation">
//                 <ul className="pagination mb-0">
//                   <li className="page-item disabled">
//                     <button className="page-link" aria-label="Previous">
//                       <span aria-hidden="true">&laquo;</span>
//                     </button>
//                   </li>
//                   <li className="page-item active">
//                     <button className="page-link">1</button>
//                   </li>
//                   <li className="page-item">
//                     <button className="page-link">2</button>
//                   </li>
//                   <li className="page-item">
//                     <button className="page-link">3</button>
//                   </li>
//                   <li className="page-item">
//                     <button className="page-link">4</button>
//                   </li>
//                   <li className="page-item">
//                     <button className="page-link">5</button>
//                   </li>
//                   <li className="page-item">
//                     <button className="page-link" aria-label="Next">
//                       <span aria-hidden="true">&raquo;</span>
//                     </button>
//                   </li>
//                 </ul>
//               </nav>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OrderList;



import React, { useState, useEffect } from "react";
import { FaEye, FaDownload, FaEdit, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrder, updateOrderStatus, deleteOrder } from '../../components/redux/orderSlice';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import { getAuthData } from "../../utils/authHelper";

const OrderList = () => {
  const {token, user} = getAuthData();
  const userId = user?._id
  const dispatch = useDispatch();
  const { orders = [], loading, error } = useSelector((state) => state.vendorOrder || {});

  // Fetch all orders without search or filter parameters
  useEffect(() => {
    dispatch(fetchOrder({
      vendor: userId
    }));
  }, [dispatch]);

  
  useEffect(() => {
    console.log("orders==============", orders)
  }, []);

  const handleUpdateStatus = (orderId, status) => {
    dispatch(updateOrderStatus({ orderId, status }));
    toast.success("Order status updated successfully!");
  };

  const handleDeleteOrder = (orderId) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteOrder(orderId));
        toast.success("Order deleted successfully!");
      }
    });
  };

  return (
    <div className="content container-fluid">
      <div>
        <div className="d-flex flex-wrap gap-2 align-items-center mb-3">
          <h2 className="h1 mb-0 flex">
            <img
              src="https://6valley.6amtech.com/public/assets/back-end/img/all-orders.png"
              className="mb-1 mr-1"
              alt="Orders"
            />
            <span className="page-header-title">All Orders</span>
          </h2>
          <span className="badge badge-soft-dark radius-50 fz-14">
            {orders.length}
          </span>
        </div>
        <div className="card mt-3">
          <div className="card-body">
            <div className="px-3 py-4 light-bg">
              <div className="d-flex flex-wrap gap-3 align-items-center">
                <h5 className="mb-0 text-capitalize font-bold d-flex gap-2 mr-auto">
                  Order List
                  <span className="badge badge-soft-dark radius-50 fz-12 ml-1">
                    {orders.length}
                  </span>
                </h5>
                <div>
                  <button
                    type="button"
                    className="btn px-4 py-2 justify-center align-items-center bg-[#A1CB46] text-white hover:bg-[#7e9f37] text-nowrap btn-block flex gap-2"
                    style={{ display: "flex", background: "green" }}
                    data-toggle="dropdown"
                  >
                    <FaDownload /> Export
                  </button>
                </div>
              </div>
            </div>

            <div className="table-responsive">
              <table className="table table-hover mb-0">
                <thead className="table-light">
                  <tr>
                    <th scope="col">Order ID</th>
                    <th scope="col">Date</th>
                    <th scope="col">Customer Name</th>
                    <th scope="col">Store</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => (
                    <tr key={order._id}>
                      {console.log("orders=========sssssssss",order)}
                      <td>{order._id}</td>
                      <td>{new Date(order.createdAt).toLocaleDateString()}</td>
                      <td>{order.customer ? `${order.customer.firstName} ${order.customer.lastName}` : 'Unknown Customer'}</td>
                      <td>{order.vendor ? order.vendor.shopName : 'Unknown Store'}</td>
                      <td>{order.totalAmount}</td>
                      {/* <td>
                        <select
                          className={`badge badge-${
                            order.orderStatus === "pending"
                              ? "warning"
                              : order.orderStatus === "confirmed"
                              ? "success"
                              : "info"
                          } radius-50`}
                          value={order.orderStatus}
                          onChange={(e) => handleUpdateStatus(order._id, e.target.value)}
                        >
                          <option value="pending">Pending</option>
                          <option value="confirmed">Confirmed</option>
                          <option value="delivered">Delivered</option>
                          <option value="canceled">Cancelled</option>
                          <option value="packaging">Packaging</option>
                          <option value="out_for_delivery">Out_for_delivery</option>
                          <option value="failed_to_deliver">Failed_to_deliver</option>
                          <option value="returned">Returned</option>
                        </select>
                      </td> */}
                      <td>
                        {order?.status}
                      </td>
                      <td>
                        <Link
                          to={`/orderdetail/${order._id}`}
                          className="btn bg-green-300 text-white btn-sm"
                        >
                          <FaEye size={18} />
                        </Link>
                        {/* <button
                          className="btn bg-blue-300 text-white btn-sm ml-2"
                          onClick={() => navigate(`/orderedit/${order._id}`)}
                        >
                          <FaEdit size={18} />
                        </button> */}
                        {/* <button
                          className="btn bg-red-300 text-white btn-sm ml-2"
                          onClick={() => handleDeleteOrder(order._id)}
                        >
                          <FaTrashAlt size={18} />
                        </button>  */}
                      </td>
                    </tr>
                  ))}
                  {orders.length === 0 && (
                    <tr>
                      <td colSpan="7" className="text-center py-4">
                        No orders found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            <div className="d-flex justify-content-end align-items-center mb-3">
              <nav className="d-flex gap-2" aria-label="Page navigation">
                <ul className="pagination mb-0">
                  <li className="page-item disabled">
                    <button className="page-link" aria-label="Previous">
                      <span aria-hidden="true">&laquo;</span>
                    </button>
                  </li>
                  <li className="page-item active">
                    <button className="page-link">1</button>
                  </li>
                  <li className="page-item">
                    <button className="page-link">2</button>
                  </li>
                  <li className="page-item">
                    <button className="page-link">3</button>
                  </li>
                  <li className="page-item">
                    <button className="page-link">4</button>
                  </li>
                  <li className="page-item">
                    <button className="page-link" aria-label="Next">
                      <span aria-hidden="true">&raquo;</span>
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderList;
