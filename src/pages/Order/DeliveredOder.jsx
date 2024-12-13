// import React, { useState } from "react";
// import { BiSearch, BiDownload } from "react-icons/bi"; // Import necessary icons from React Icons
// import { Link } from "react-router-dom";
// import { FaEye, FaSearch } from "react-icons/fa";
// import { FaDownload } from "react-icons/fa6";
// const DeliveredOder = () => {
//   // Dummy data array (replace with your actual data)
//   const [filter, setFilter] = useState("all");
//   const [sellerId, setSellerId] = useState("0");
//   const [customerId, setCustomerId] = useState("all");
//   const [dateType, setDateType] = useState("");
//   const [fromDate, setFromDate] = useState("");
//   const [toDate, setToDate] = useState("");
//   const [searchQuery, setSearchQuery] = useState("");

//   // Arrays for dropdown options
//   const orderTypes = [
//     { value: "all", label: "All" },
//     { value: "admin", label: "In House Order" },
//     { value: "seller", label: "Vendor Order" },
//     { value: "POS", label: "POS Order" },
//   ];

//   const stores = [
//     { value: "all", label: "All shop" },
//     { value: "0", label: "Inhouse" },
//     { value: "1", label: "Deluxe Online" },
//     { value: "2", label: "Mart Morning" },
//     { value: "3", label: "Wellness Fair" },
//     { value: "4", label: "Bicycle Shop" },
//     { value: "5", label: "KR Fashion" },
//     { value: "6", label: "Country Fair" },
//     { value: "7", label: "Tech Shop" },
//     { value: "8", label: "Royal Crown" },
//     { value: "9", label: "Super Store Online" },
//     { value: "10", label: "Digital House" },
//   ];

//   const customers = [{ value: "all", label: "All customer" }];

//   // Sample data for order content
//   const orderData = [
//     {
//       id: "ORD1234",
//       date: "2024-06-30",
//       customerName: "John Doe",
//       store: "Deluxe Online",
//       amount: "$150.00",
//       status: "Delivered",
//     },
//     {
//       id: "ORD1235",
//       date: "2024-06-29",
//       customerName: "Jane Smith",
//       store: "Mart Morning",
//       amount: "$200.00",
//       status: "Delivered",
//     },
//     {
//       id: "ORD1236",
//       date: "2024-06-28",
//       customerName: "Samuel Green",
//       store: "Wellness Fair",
//       amount: "$120.00",
//       status: "Delivered",
//     },
//     // Add more orders as needed
//   ];

//   // Filtering and searching logic
//   const filteredOrders = orderData.filter((order) => {
//     // Filter by store
//     const matchStore =
//       sellerId === "0" ||
//       sellerId === "all" ||
//       order.store === stores.find((store) => store.value === sellerId)?.label;

//     // Filter by order type
//     const matchType =
//       filter === "all" ||
//       filter === orderTypes.find((type) => type.value === filter)?.value;

//     // Filter by search query
//     const matchSearch =
//       searchQuery === "" ||
//       order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       order.customerName.toLowerCase().includes(searchQuery.toLowerCase());

//     // Additional date filtering logic can be added here

//     return matchStore && matchType && matchSearch;
//   });

//   return (
//     <div className="content container-fluid snipcss-5KHEg">
//       <div>
//         <div className="d-flex flex-wrap gap-2 align-items-center mb-3">
//           <h2 className="h1 mb-0 flex">
//             <img
//               src="https://6valley.6amtech.com/public/assets/back-end/img/all-orders.png"
//               className="mb-1 mr-1"
//               alt=""
//             />
//             <span className="page-header-title"> Delivered </span> Orders
//           </h2>
//           <span className="badge badge-soft-dark radius-50 fz-14">
//             {filteredOrders.length}
//           </span>
//         </div>
//         <div className="card">
//           <div className="card-body">
//             <form id="form-data" method="GET">
//               <div className="row gx-2">
//                 <div className="col-12">
//                   <h4 className="mb-3 text-capitalize">Filter order</h4>
//                 </div>
//                 <div className="col-sm-6 col-lg-4 col-xl-3">
//                   <div className="form-group">
//                     <label
//                       className="title-color text-capitalize"
//                       htmlFor="filter"
//                     >
//                       Order type
//                     </label>
//                     <select
//                       name="filter"
//                       id="filter"
//                       className="form-control"
//                       value={filter}
//                       onChange={(e) => setFilter(e.target.value)}
//                     >
//                       {orderTypes.map((type) => (
//                         <option key={type.value} value={type.value}>
//                           {type.label}
//                         </option>
//                       ))}
//                     </select>
//                   </div>
//                 </div>
//                 <div className="col-sm-6 col-lg-4 col-xl-3" id="seller_id_area">
//                   <div className="form-group">
//                     <label className="title-color" htmlFor="store">
//                       Store
//                     </label>
//                     <select
//                       name="seller_id"
//                       id="seller_id"
//                       className="form-control"
//                       value={sellerId}
//                       onChange={(e) => setSellerId(e.target.value)}
//                     >
//                       {stores.map((store) => (
//                         <option key={store.value} value={store.value}>
//                           {store.label}
//                         </option>
//                       ))}
//                     </select>
//                   </div>
//                 </div>
//                 <div className="col-sm-6 col-lg-4 col-xl-3">
//                   <div className="form-group">
//                     <label className="title-color" htmlFor="customer">
//                       Customer
//                     </label>
//                     <select
//                       id="customer_id_value"
//                       className="form-control form-ellipsis"
//                       value={customerId}
//                       onChange={(e) => setCustomerId(e.target.value)}
//                     >
//                       {customers.map((customer) => (
//                         <option key={customer.value} value={customer.value}>
//                           {customer.label}
//                         </option>
//                       ))}
//                     </select>
//                   </div>
//                 </div>
//                 <div className="col-sm-6 col-lg-4 col-xl-3">
//                   <div className="form-group">
//                     <label className="title-color" htmlFor="date_type">
//                       Date type
//                     </label>
//                     <select
//                       className="form-control"
//                       name="date_type"
//                       id="date_type"
//                       value={dateType}
//                       onChange={(e) => setDateType(e.target.value)}
//                     >
//                       <option value="" disabled>
//                         Select Date Type
//                       </option>
//                       <option value="this_year">This Year</option>
//                       <option value="this_month">This Month</option>
//                       <option value="this_week">This Week</option>
//                       <option value="custom_date">Custom Date</option>
//                     </select>
//                   </div>
//                 </div>
//                 <div className="col-sm-6 col-lg-4 col-xl-3">
//                   <div className="form-group">
//                     <label className="title-color" htmlFor="from_date">
//                       Start date
//                     </label>
//                     <input
//                       type="date"
//                       name="from"
//                       value={fromDate}
//                       onChange={(e) => setFromDate(e.target.value)}
//                       id="from_date"
//                       className="form-control"
//                     />
//                   </div>
//                 </div>
//                 <div className="col-sm-6 col-lg-4 col-xl-3">
//                   <div className="form-group">
//                     <label className="title-color" htmlFor="to_date">
//                       End date
//                     </label>
//                     <input
//                       type="date"
//                       value={toDate}
//                       onChange={(e) => setToDate(e.target.value)}
//                       name="to"
//                       id="to_date"
//                       className="form-control"
//                     />
//                   </div>
//                 </div>
//                 <div className="col-12">
//                   <div className="d-flex gap-3 justify-content-end">
//                     <button
//                       type="button"
//                       className="btn btn-secondary px-5"
//                       onClick={() => {
//                         // Reset filters
//                         setFilter("all");
//                         setSellerId("0");
//                         setCustomerId("all");
//                         setDateType("");
//                         setFromDate("");
//                         setToDate("");
//                         setSearchQuery("");
//                       }}
//                     >
//                       Reset
//                     </button>
//                     <button
//                       type="submit"
//                       className="btn bg-green-300 text-white px-5"
//                     >
//                       Filter
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//         <div className="card mt-3">
//           <div className="card-body">
//             {/* Order list header */}
//             <div className="px-3 py-4 light-bg">
//               <div className="d-flex flex-wrap gap-3 align-items-center">
//                 <h5 className="mb-0 text-capitalize font-bold d-flex gap-2 mr-auto">
//                   Order List{" "}
//                   <span className="badge badge-soft-dark radius-50 fz-12 ml-1">
//                     4
//                   </span>
//                 </h5>
//                 <form
//                   action="https://6valley.6amtech.com/admin/coupon/add"
//                   method="GET"
//                 >
//                   <div
//                     className="input-group input-group-merge input-group-custom"
//                     style={{ border: "1px solid green" }}
//                   >
//                     <div className="input-group-prepend">
//                       <div className="input-group-text">
//                         <FaSearch />
//                       </div>
//                     </div>
//                     <input
//                       id="datatableSearch_"
//                       type="search"
//                       name="searchValue"
//                       className="form-control"
//                       placeholder="Search by Title or Code or Discount Type"
//                       required
//                     />
//                     <button
//                       type="submit"
//                       className="btn px-4 py-2 bg-[#A1CB46] text-white hover:bg-[#7e9f37]"
//                       style={{ display: "flex", background: "green" }}
//                     >
//                       Search
//                     </button>
//                   </div>
//                 </form>
//                 <div>
//                   <button
//                     type="button"
//                     className="btn px-4 py-2 justify-center align-items-center bg-[#A1CB46] text-white hover:bg-[#7e9f37] text-nowrap btn-block flex gap-2 "
//                     style={{ display: "flex", background: "green" }}
//                     data-toggle="dropdown"
//                   >
//                     <FaDownload /> Export
//                   </button>
//                 </div>
//               </div>
//             </div>
//             {/* Order list table */}
//             <div className="table-responsive">
//               <table className="table mb-0">
//                 <thead className="table-light">
//                   <tr>
//                     <th>Order ID</th>
//                     <th>Date</th>
//                     <th>Customer Name</th>
//                     <th>Store</th>
//                     <th>Amount</th>
//                     <th>Status</th>
//                     <th>Action</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {filteredOrders.map((order) => (
//                     <tr key={order.id}>
//                       <td>{order.id}</td>
//                       <td>{order.date}</td>
//                       <td>{order.customerName}</td>
//                       <td>{order.store}</td>
//                       <td>{order.amount}</td>
//                       <td>
//                         <span
//                           className={`badge badge-${
//                             order.status === "Pending"
//                               ? "warning"
//                               : order.status === "Complete"
//                               ? "success"
//                               : "info"
//                           } radius-50`}
//                         >
//                           {order.status}
//                         </span>
//                       </td>
//                       <td>
//                         <Link
//                           to={`/orderdetail`}
//                           className="btn bg-green-300 text-white btn-sm"
//                         >
//                           <FaEye size={18} />
//                         </Link>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DeliveredOder;





import React, { useState, useEffect } from "react";
import { FaEye, FaDownload, FaTrashAlt, FaSearch, FaFirstOrder } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrdersWithFilters, updateOrderStatus, deleteOrder } from '../../components/redux/orderSlice';
import { fetchCategories, fetchSubCategories, fetchSubSubCategories, fetchBrands } from '../../components/redux/categorybrandSlice';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import { PiStackSimpleBold } from "react-icons/pi";

const DeliveredOder = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { orders = [], loading, error } = useSelector((state) => state.vendorOrder || {});
  const { categories, subCategories, subSubCategories, brands } = useSelector((state) => state.category);
  const { user } = useSelector((state) => state.auth);
  const vendorId = user?._id;
 
         
         
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("delivered");
  const [category, setCategory] = useState('');
  const [subCategory, setSubCategory] = useState('');
  const [brand, setBrand] = useState('');
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [dateType, setDateType] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchBrands());
  }, [dispatch]);

  useEffect(() => {
    if (category) {
      dispatch(fetchSubCategories(category));
    }
  }, [category, dispatch]);

  useEffect(() => {
    if (subCategory) {
      dispatch(fetchSubSubCategories(subCategory));
    }
  }, [subCategory, dispatch]);

  const handleFilterSubmit = (e) => {
    e.preventDefault();
    dispatch(
      fetchOrdersWithFilters({
        vendorId,
        searchQuery,
        filter,
        category,
        subCategory,
        brand,
        startDate: fromDate,
        endDate: toDate,
        dataType: dateType,
      })
    ).catch(err => console.error('Fetch orders failed', err));
  };

  useEffect(() => {
    if (vendorId) {
      dispatch(fetchOrdersWithFilters({ vendorId }))
        .catch(err => console.error('Initial fetch orders failed', err));
    }
  }, [dispatch, vendorId]);

  const filteredOrders = orders.filter(order => {
    const statusMatch = filter === "all" || order.orderStatus === filter;
    const queryMatch = order._id.toLowerCase().includes(searchQuery.toLowerCase()) ||
                       `${order.customer?.firstName || ''} ${order.customer?.lastName || ''}`.toLowerCase().includes(searchQuery.toLowerCase());
    return statusMatch && queryMatch;
  });

  const paginatedOrders = filteredOrders.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handleUpdateStatus = (orderId, status) => {
    dispatch(updateOrderStatus({ orderId, status }))
      .then(() => toast.success("Order status updated successfully!"))
      .catch(err => toast.error(`Failed to update status: ${err.message}`));
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
        dispatch(deleteOrder(orderId))
          .then(() => toast.success("Order deleted successfully!"))
          .catch(err => toast.error(`Failed to delete order: ${err.message}`));
      }
    });
  };

  const totalPages = Math.ceil(filteredOrders.length / itemsPerPage);

  return (
    <div className="content container-fluid  py-10">
      <div className="d-flex flex-wrap gap-2 align-items-center mb-3">
        <h2 className="h1 mb-0 flex">
          <img
            src="https://6valley.6amtech.com/public/assets/back-end/img/all-orders.png"
            className="mb-1 mr-1"
            alt=""
          />
          <span className="page-header-title">Pending</span> Orders
        </h2>
        <span className="badge badge-soft-dark radius-50 fz-14">
          {orders.length}
        </span>
      </div>
      <div className="card">
        <div className="card-body">
          <form id="form-data" method="GET" onSubmit={handleFilterSubmit}>
            <div className="row gx-2">
              <div className="col-12 mb-3">
                <h4 className="mb-3 text-capitalize">Filter order</h4>
              </div>
              <div className="col-sm-6 col-lg-4 col-xl-3">
                <div className="form-group">
                  <label className="title-color text-capitalize" htmlFor="filter">Status</label>
                  <select
                    name="filter"
                    id="filter"
                    className="form-control"
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                  >
                    <option value="all">All</option>
                    <option value="pending">Pending</option>
                    <option value="confirmed">Confirmed</option>
                  </select>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4 col-xl-3">
                <div className="form-group">
                  <label className="title-color" htmlFor="category">Category</label>
                  <select
                    name="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="form-control"
                    required
                  >
                    <option value="">Select Category</option>
                    {categories.map(category => (
                      <option key={category._id} value={category.slug}>{category.name}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4 col-xl-3">
                <div className="form-group">
                  <label className="title-color" htmlFor="subCategory">Sub-category</label>
                  <select
                    name="subCategorySlug"
                    value={subCategory}
                    onChange={(e) => setSubCategory(e.target.value)}
                    className="form-control"
                  >
                    <option value="">Select Sub-Category</option>
                    {subCategories.map(subCategory => (
                      <option key={subCategory._id} value={subCategory.slug}>{subCategory.name}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4 col-xl-3">
                <div className="form-group">
                  <label className="title-color" htmlFor="brand">Brand</label>
                  <select
                    name="brand"
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                    className="form-control"
                    required
                  >
                    <option value="">Select Brand</option>
                    {brands.map(brand => (
                      <option key={brand._id} value={brand._id}>{brand.name}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4 col-xl-3">
                <div className="form-group">
                  <label className="title-color" htmlFor="from_date">Start date</label>
                  <input
                    type="date"
                    name="from_date"
                    value={fromDate}
                    onChange={(e) => setFromDate(e.target.value)}
                    id="from_date"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-sm-6 col-lg-4 col-xl-3">
                <div className="form-group">
                  <label className="title-color" htmlFor="to_date">End date</label>
                  <input
                    type="date"
                    value={toDate}
                    onChange={(e) => setToDate(e.target.value)}
                    name="to_date"
                    id="to_date"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-sm-6 col-lg-4 col-xl-3">
                <div className="form-group">
                  <label className="title-color" htmlFor="date_type">Date Type</label>
                  <select
                    name="date_type"
                    id="date_type"
                    className="form-control"
                    value={dateType}
                    onChange={(e) => setDateType(e.target.value)}
                  >
                    <option value="">Select Date Type</option>
                    <option value="createdAt">Created At</option>
                    <option value="updatedAt">Updated At</option>
                  </select>
                </div>
              </div>
              <div className="col-12">
                  <div className="form-group mb-0 d-flex justify-content-end">
                    <button
                      type="submit"
                      id="search"
                      className="btn bg-green-300 text-white min-w-120"
                    >
                      Filter
                    </button>
                  </div>
                </div>
            </div>
          </form>       
        </div>
      </div>
           <div className="card mt-3">
           <div className="card-header border-0">
            <div className="row justify-content-between align-items-center flex-grow-1">
              <div className="col-lg-3 mb-3 mb-lg-0">
                <h5 className="form-label mb-0">
                  Pending Order Table
                  <span className="badge badge-soft-dark radius-50 fz-12 ml-1">
                    {orders.length}
                  </span>
                </h5>
              </div>
              <div className="col-lg-6 d-flex justify-content-end">
                <form className="mr-2">
                  <div className="input-group input-group-merge input-group-flush">
                    <input
                      type="search"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="form-control"
                      placeholder="Search by ID or name"
                      aria-label="Search by ID or name"
                    />
                    <div className="input-group-append">
                      <div className="input-group-text">
                        {/* <i className="tio-search"></i> */}
                        <FaSearch />
                      </div>
                    </div>
                  </div>
                </form>
                <div>
                  <button
                    type="button"
                    className="btn btn-outline-primary flex justify-center align-items-center gap-2 bg-green-400 text-white"
                    onClick={() => navigate('/orders')}
                  >
                   <FaFirstOrder/>   All Orders
                  </button>
                </div>
              </div>
            </div>
          </div>
      <div className="table-responsive mt-4">

     
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>SL</th>
                  <th className="text-center">Order ID</th>
                  <th> Order Date</th>
                  <th> Product Naem</th>
                  <th>Customer info</th>
                   <th>Order Amount</th>
                  <th>Status</th>
                  <th className="text-center">Actions</th>

                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan="5" className="text-center">Loading...</td>
                  </tr>
                ) : error ? (
                  <tr>
                    <td colSpan="5" className="text-center text-danger">{error}</td>
                  </tr>
                ) : paginatedOrders.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="text-center">No orders found</td>
                  </tr>
                ) : (
                  paginatedOrders.map( (order, ) => (
                    <tr key={order._id}>
                      <td>1</td>
                      <td className="text-center">{order._id}</td>
                        <td>{new Date(order.createdAt).toLocaleDateString()}</td>
                      <td>{order.products.map(product => product.name).join(', ')}</td>
                      <td>
                        {order.customer?.firstName} {order.customer?.lastName}
                      </td>
                      <td>
                        ${order.totalAmount}
                      </td>
                      <td>
                      <span className={`badge 
                          ${order.orderStatus === 'pending' 
                          ? 'border-yellow-500' : 'badge-success'}`}
                          style={{  
                            "padding": "0.3rem 0.7rem",
    "border": "1px solid rgb(221 196 23)",
    "color": "rgb(219 187 29)", borderRadius:'10px'}}
                          >
                          {order.orderStatus}
                        </span>
                      </td>
                     
                      <td className="text-center">
                      
                      <button
                          onClick={() => handleUpdateStatus(order._id, order.orderStatus === 'pending' ? 'confirmed' : 'pending')}
                          className="btn btn-success btn-sm mx-2"
                        >
                          <PiStackSimpleBold />
                        </button>
                        <Link to={`/order-details/${order._id}`} className="btn btn-primary btn-sm border-green-500 text-green-500">
                          <FaEye />
                        </Link>
                      
                        <button
                          onClick={() => handleDeleteOrder(order._id)}
                          className="btn btn-danger btn-sm"
                        >
                          <FaTrashAlt />
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
          </div>
          <div className="d-flex justify-content-between align-items-center mt-3">
            <div>
              <span>Page {currentPage} of {totalPages}</span>
            </div>
            <div>
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                className="btn btn-secondary btn-sm"
                disabled={currentPage === 1}
              >
                Previous
              </button>
              <button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                className="btn btn-secondary btn-sm mx-2"
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
          </div>
    </div>
  );
};

export default DeliveredOder;