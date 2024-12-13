///last 

import React, { useState, useEffect } from "react";
import { FaEye, FaDownload, FaTrashAlt, FaSearch, FaFirstOrder } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrdersWithFilters, updateOrderStatus, deleteOrder } from '../../components/redux/orderSlice';
import { fetchCategories, fetchSubCategories, fetchSubSubCategories, fetchBrands } from '../../components/redux/categorybrandSlice';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import { PiStackSimpleBold } from "react-icons/pi";

const PendingOrder = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { orders = [], loading, error } = useSelector((state) => state.vendorOrder || {});
  const { categories, subCategories, subSubCategories, brands } = useSelector((state) => state.category);
  const { user } = useSelector((state) => state.auth);
  const vendorId = user?._id;

  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("pending");
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
                          ? 'border-yellow-500' : ''}`}
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
                        <Link to={`/order-details/${order._id}`} className="btn btn-primary border-green-500 text-green-500 btn-sm">
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

export default PendingOrder;







