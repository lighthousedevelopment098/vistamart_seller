import React, { useState, useEffect } from "react";
import { FaEye, FaSearch, FaTrashAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrder } from '../../components/redux/orderSlice';
import { fetchCategories, fetchBrands } from '../../components/redux/categorybrandSlice';

const OrderManagement = ({ status, title, vendorId }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { orders = [], loading, error } = useSelector((state) => state.vendorOrder || {});
  const { categories = [], brands = [] } = useSelector((state) => state.category);

  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState('');
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

  console.log("category============", category)
  console.log("brand============", brand)
  // useEffect(() => {
  //   if (vendorId && status) {
  //     dispatch(fetchOrder({
  //       searchQuery,
  //       categoryId: category,
  //       brandId: brand,
  //       startDate: fromDate,
  //       endDate: toDate,
  //       dateType,
  //       vendorId,
  //       orderStatus: status // Fetch orders based on the provided status
  //     }))
  //     .catch(err => console.error('Fetch orders failed', err));
  //   }
  // }, [dispatch, searchQuery, category, brand, fromDate, toDate, dateType, vendorId, status]);

// Helper function to get the class based on status
const getStatusClass = (status) => {
  switch (status.toLowerCase()) {
    case "pending":
      return "text-yellow-500";
    case "confirmed":
      return "text-blue-500";
    case "delivered":
      return "text-green-500";
    case "packaging":
      return "text-purple-500";
    case "out-for-delivery":
      return "text-orange-500";
    case "cancelled":
      return "text-red-500 ";
    default:
      return "text-gray-500"; // Default color for unknown status
  }
};
console.log("categoryid------------", category)
console.log("brandid------------", brand)
  useEffect(() => {
    if (vendorId && status) {
      dispatch(fetchOrder({
        searchQuery,
        categoryId: category || undefined, // Only include if category is selected
        brandId: brand || undefined,       // Only include if brand is selected
        startDate: fromDate || undefined,
        endDate: toDate || undefined,
        dateType: dateType || undefined,
        vendorId,
        orderStatus: status
      }))
      .catch(err => console.error('Fetch orders failed', err));
    }
  }, [dispatch, searchQuery, category, brand, fromDate, toDate, dateType, vendorId, status]);
  
  const handleResetFilters = () => {
    setSearchQuery("");
    setCategory("");
    setBrand("");
    setFromDate("");
    setToDate("");
    setDateType("");
    setCurrentPage(1);
  };
  return (
    <div className="content container-fluid py-10">
      <div className="d-flex flex-wrap gap-2 align-items-center mb-3">
        <h2 className="h1 mb-0 flex">
          <img
            src="https://6valley.6amtech.com/public/assets/back-end/img/all-orders.png"
            className="mb-1 mr-1"
            alt=""
          />
          <span className="page-header-title">{title}</span> Orders
        </h2>
        {console.log("order pending ===========", orders)}
        <span className="badge badge-soft-dark radius-50 fz-14">
          {orders.length}
        </span>
      </div>
      <div className="card">
        <div className="card-body">
          <form id="form-data" method="GET">
            <div className="row gx-2">
              <div className="col-12 mb-3">
                <h4 className="mb-3 text-capitalize">Filter order</h4>
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
                  <label className="title-color" htmlFor="category">Category</label>
                  <select
                    name="category"
                    id="category"
                    className="form-control"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <option value="">All Categories</option>
                    {categories.map(cat => (
                      <option key={cat._id} value={cat._id}>{cat.name}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4 col-xl-3">
                <div className="form-group">
                  <label className="title-color" htmlFor="brand">Brand</label>
                  <select
                    name="brand"
                    id="brand"
                    className="form-control"
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                  >
                    <option value="">All Brands</option>
                    {brands.map(br => (
                      <option key={br._id} value={br._id}>{br.name}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="col-12">
                <button
                  type="button"
                  className="btn bg-green-400 text-white mt-3"
                  onClick={handleResetFilters}
                >
                  Reset Filters
                </button>
              </div>
            </div>
          </form>
          <div className="card mt-3">
            <div className="card-header border-0">
              <div className="row justify-content-between align-items-center flex-grow-1">
                <div className="col-lg-3 mb-3 mb-lg-0">
                  <h5 className="form-label mb-0">
                    {title} Order Table
                    <span className="badge badge-soft-dark radius-50 fz-12 ml-1">
                      {orders.length}
                    </span>
                  </h5>
                </div>
                <div className="col-lg-6 d-flex justify-content-end">
                  <form className="mr-2">
                    <div className="input-group input-group-merge input-group-flush">
                      <input
                        className="form-control"
                        aria-label="Search by ID or name"
                        type="text"
                        name="searchQuery"
                        id="searchQuery"
                        placeholder="By Order ID, Customer"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                      <div className="input-group-append">
                        <div className="input-group-text">
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
                      <FaEye /> All Orders
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
                    <th>Order Date</th>
                    <th>Product Name</th>
                    <th>C_Info</th>
                    <th>Amount</th>
                    <th>Status</th>
                    <th className="text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {loading ? (
                    <tr>
                      <td colSpan="8" className="text-center">Loading...</td>
                    </tr>
                  ) : error ? (
                    <tr>
                      <td colSpan="8" className="text-center text-danger">{error}</td>
                    </tr>
                  ) : (
                    orders.map((order, index) => (
                      <tr key={order._id}>
                        <td>{index + 1}</td>
                          <td className="text-center">R{order._id.substring(0, 6)}</td>
                        <td>{new Date(order.createdAt).toLocaleDateString()}</td>
                        <td>{order.products.map(product => product.name).join(', ')}</td>
                        <td>{`${order.customer?.firstName || ''} ${order.customer?.lastName || ''}`}</td>
                        <td>{order.totalAmount}</td>
                        <td className={`text-center ${getStatusClass(order.orderStatus)} p-2 rounded`}>
                  {order.orderStatus}
                        </td>

                        <td className="text-center">
                        <Link 
                           to={`/orderdetail/${order._id}`} // Updated link to include order ID
                           className="btn  border-green-500 text-green-500 btn-sm hover:text-white hover:bg-green-400">
                           <FaEye />
                         </Link>
                      
                          {/* <button
                           onClick={() => handleDeleteOrder(order._id)}
                           className="btn  border-red-500 text-red-500 btn-sm hover:bg-red-500 hover:text-white red-color">
                        
                           <FaTrashAlt />
                         </button> */}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderManagement;
