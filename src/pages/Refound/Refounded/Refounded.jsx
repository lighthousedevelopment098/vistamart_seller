// import React, { useState } from "react";
// import "../PendingRefundRequests/PendingRefundRequests.css";
// import { Link } from "react-router-dom";
// import { FaDownload, FaEye, FaSearch } from "react-icons/fa";
// const Refounded = () => {
//   const [searchValue, setSearchValue] = useState("");

//   // Sample data to mimic server response for demonstration.
//   const refundRequests = [
//     {
//       id: 1,
//       refundId: 10,
//       orderId: 100134,
//       productImg:
//         "https://6valley.6amtech.com/storage/app/public/product/thumbnail/2023-06-13-6488413bebea3.png",
//       productName: "Premium Business presentation file",
//       qty: 1,
//       customerName: "Devid Jack",
//       customerPhone: "8801623456678",
//       totalAmount: 6290,
//     },
//     {
//       id: 2,
//       refundId: 9,
//       orderId: 100136,
//       productImg:
//         "https://6valley.6amtech.com/storage/app/public/product/thumbnail/2023-06-13-64883c1e9f6eb.png",
//       productName: "Win - win Strategy (English) -eBook",
//       qty: 1,
//       customerName: "Devid Jack",
//       customerPhone: "8801623456678",
//       totalAmount: 441,
//     },
//     // More sample data...
//   ];

//   // Handle form submission
//   const handleSearchSubmit = (e) => {
//     e.preventDefault();
//     console.log("Search value:", searchValue);
//     // Add logic to handle search functionality.
//   };

//   return (
//     // <div className="content container-fluid">
//     //   <div className="mb-3">
//     //     <h2 className="h1 mb-0 text-capitalize d-flex align-items-center gap-2">
//     //       <img
//     //         src="https://6valley.6amtech.com/public/assets/back-end/img/refund-request.png"
//     //         alt="Pending refund Requests"
//     //       />
//     //       Refunded Refund Requests{" "}
//     //       <span className="badge badge-soft-dark radius-50">4</span>
//     //     </h2>
//     //   </div>

//     //   <div className="card">
//     //     <div className="p-3">
//     //       <div className="flex justify-between items-center ">
//     //         <form onSubmit={handleSearchSubmit}>
//     //           <div className="input-group input-group-merge input-group-custom">
//     //             <div className="input-group-prepend">
//     //               <div className="input-group-text">
//     //                 <i className="tio-search"></i>
//     //               </div>
//     //             </div>
//     //             <input
//     //               id="datatableSearch_"
//     //               type="search"
//     //               name="searchValue"
//     //               className="form-control "
//     //               placeholder="Search by order id or refund id"
//     //               aria-label="Search orders"
//     //               value={searchValue}
//     //               onChange={(e) => setSearchValue(e.target.value)}
//     //             />
//     //             <button
//     //               type="submit"
//     //               className="btn px-4 py-2 bg-[#A1CB46] text-white hover:bg-[#7e9f37]"
//     //             >
//     //               Search
//     //             </button>
//     //           </div>
//     //         </form>
//     //         <button
//     //           type="button"
//     //           className="btn px-4 py-2 bg-[#A1CB46] text-white hover:bg-[#7e9f37]"
//     //           data-toggle="dropdown"
//     //         >
//     //           <i className="tio-download-to"></i> Export{" "}
//     //           <i className="tio-chevron-down"></i>
//     //         </button>
//     //       </div>
//     //     </div>

//     //     <div className="table-responsive datatable-custom">
//     //       <table
//     //         className="table table-hover table-borderless table-thead-bordered table-nowrap table-align-middle card-table w-100"
//     //         style={{ textAlign: "left" }}
//     //       >
//     //         <thead className="thead-light thead-50 text-capitalize">
//     //           <tr>
//     //             <th>SL</th>
//     //             <th className="text-center">Refund ID</th>
//     //             <th>Order id</th>
//     //             <th>Product info</th>
//     //             <th>Customer info</th>
//     //             <th className="text-end">Total amount</th>
//     //             <th className="text-center">Action</th>
//     //           </tr>
//     //         </thead>
//     //         <tbody>
//     //           {refundRequests.map((request, index) => (
//     //             <tr key={request.id}>
//     //               <td>{index + 1}</td>
//     //               <td className="text-center">{request.refundId}</td>
//     //               <td>
//     //                 <a href="#" className="title-color hover-c1">
//     //                   {request.orderId}
//     //                 </a>
//     //               </td>
//     //               <td>
//     //                 <div className="d-flex flex-wrap gap-2">
//     //                   <a href="#">
//     //                     <img
//     //                       src={request.productImg}
//     //                       className="avatar border"
//     //                       alt={request.productName}
//     //                     />
//     //                   </a>
//     //                   <div className="d-flex flex-column gap-1">
//     //                     <a
//     //                       href="#"
//     //                       className="title-color font-weight-bold hover-c1"
//     //                     >
//     //                       {request.productName}
//     //                     </a>
//     //                     <span className="fz-12">QTY : {request.qty}</span>
//     //                   </div>
//     //                 </div>
//     //               </td>
//     //               <td>
//     //                 <div className="d-flex flex-column gap-1">
//     //                   <a
//     //                     href="#"
//     //                     className="title-color font-weight-bold hover-c1"
//     //                   >
//     //                     {request.customerName}
//     //                   </a>
//     //                   <a
//     //                     href={`tel:${request.customerPhone}`}
//     //                     className="title-color hover-c1 fz-12"
//     //                   >
//     //                     {request.customerPhone}
//     //                   </a>
//     //                 </div>
//     //               </td>
//     //               <td>
//     //                 <div className="d-flex flex-column gap-1 text-end">
//     //                   <div> ${request.totalAmount.toFixed(2)} </div>
//     //                 </div>
//     //               </td>
//     //               <td>
//     //                 <div className="d-flex justify-content-center">
//     //                   <Link
//     //                     to="/refounddetail"
//     //                     className="btn btn-outline--success btn-sm"
//     //                     title="View"
//     //                   >
//     //                     <FaEye />
//     //                   </Link>
//     //                 </div>
//     //               </td>
//     //             </tr>
//     //           ))}
//     //         </tbody>
//     //       </table>
//     //     </div>
//     //     <div className="table-responsive mt-4">
//     //       <div className="px-4 d-flex justify-content-lg-end"></div>
//     //     </div>
//     //   </div>
//     // </div>
//     <div className="content container mx-auto p-4">
//       <div className="mb-3">
//         <h2 className="text-2xl mb-0 flex items-center gap-2">
//           <img
//             src="https://6valley.6amtech.com/public/assets/back-end/img/refund-request.png"
//             alt="Refunded Refund Requests"
//           />
//           Refunded Refund Requests
//           <span className="badge badge-soft-dark rounded-full">4</span>
//         </h2>
//       </div>

//       <div className="card">
//         <div className="px-3 py-4 light-bg">
//           <div className="d-flex flex-wrap justify-between gap-3 align-items-center">
//             <form
//               action="https://6valley.6amtech.com/admin/coupon/add"
//               method="GET"
//             >
//               <div
//                 className="input-group input-group-merge input-group-custom"
//                 style={{ border: "1px solid green" }}
//               >
//                 <div className="input-group-prepend">
//                   <div className="input-group-text">
//                     <FaSearch />
//                   </div>
//                 </div>
//                 <input
//                   id="datatableSearch_"
//                   type="search"
//                   name="searchValue"
//                   className="form-control"
//                   placeholder="Search by Title or Code or Discount Type"
//                   required
//                 />
//                 <button
//                   type="submit"
//                   className="btn px-4 py-2 bg-[#A1CB46] text-white hover:bg-[#7e9f37]"
//                   style={{ display: "flex", background: "#A1CB46" }}
//                 >
//                   Search
//                 </button>
//               </div>
//             </form>
//             <div className="flex flex-wrap gap-3 w-full md:w-auto">
//               <button
//                 type="button"
//                 className="flex items-center px-4 py-2 bg-[#A1CB46] rounded text-white hover:bg-[#7e9f37] gap-2  justify-center"
//                 data-toggle="dropdown"
//               >
//                 <FaDownload /> Export
//               </button>
//               <select
//                 name=""
//                 id=""
//                 className=" md:w-40 lg:w-48 bg-white border-gray-500 border rounded px-3 py-2"
//               >
//                 <option value="">All</option>
//                 <option value="">Inhouse Request</option>
//                 <option value="">Vendor Request</option>
//               </select>
//             </div>
//           </div>
//         </div>

//         <div className="table-responsive">
//           <table className="table table-hover table-borderless table-thead-bordered table-nowrap table-align-middle card-table w-full">
//             <thead className="thead-light thead-50 text-capitalize">
//               <tr>
//                 <th>SL</th>
//                 <th className="text-center">Refund ID</th>
//                 <th>Order id</th>
//                 <th>Product info</th>
//                 <th>Customer info</th>
//                 <th className="text-end">Total amount</th>
//                 <th className="text-center">Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {refundRequests.map((request, index) => (
//                 <tr key={request.id}>
//                   <td>{index + 1}</td>
//                   <td className="text-center">{request.refundId}</td>
//                   <td>
//                     <a href="#" className="title-color hover:text-blue-600">
//                       {request.orderId}
//                     </a>
//                   </td>
//                   <td>
//                     <div className="flex flex-wrap gap-2">
//                       <a href="#">
//                         <img
//                           src={request.productImg}
//                           className="avatar border rounded"
//                           alt={request.productName}
//                         />
//                       </a>
//                       <div className="flex flex-col gap-1">
//                         <a
//                           href="#"
//                           className="title-color font-semibold hover:text-blue-600"
//                         >
//                           {request.productName}
//                         </a>
//                         <span className="text-sm">QTY : {request.qty}</span>
//                       </div>
//                     </div>
//                   </td>
//                   <td>
//                     <div className="flex flex-col gap-1">
//                       <a
//                         href="#"
//                         className="title-color font-semibold hover:text-blue-600"
//                       >
//                         {request.customerName}
//                       </a>
//                       <a
//                         href={`tel:${request.customerPhone}`}
//                         className="title-color hover:text-blue-600 text-sm"
//                       >
//                         {request.customerPhone}
//                       </a>
//                     </div>
//                   </td>
//                   <td>
//                     <div className="flex flex-col gap-1 text-end">
//                       <div> ${request.totalAmount.toFixed(2)} </div>
//                     </div>
//                   </td>
//                   <td>
//                     <div className="flex justify-center">
//                       <Link
//                         to="/refounddetail"
//                         className="btn btn-outline-success btn-sm"
//                         title="View"
//                       >
//                         <FaEye />
//                       </Link>
//                     </div>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//         <div className="table-responsive mt-4">
//           <div className="px-4 flex justify-end"></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Refounded;









import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRefundsForVendorByStatus, fetchRefundsWithFilters } from '../../../components/redux/refundSlice'; // Ensure this path is correct
import { FaDownload, FaEye, FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../PendingRefundRequests/PendingRefundRequests.css';

const Refounded = () => {
  const [searchValue, setSearchValue] = useState('');
  const dispatch = useDispatch();
  const { refunds, loading, error } = useSelector((state) => state.refund); // Adjusted to `state.refund` based on your slice name
  const { user } = useSelector((state) => state.auth);
  const vendorId = user?._id;
  const refundStatus = 'Refunded';

  useEffect(() => {
    dispatch(fetchRefundsForVendorByStatus({ vendorId, status: refundStatus }));
  }, [dispatch, vendorId, refundStatus]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchRefundsWithFilters({ 
      vendorId, 
      searchQuery: searchValue, 
      status: refundStatus 
    }));
  };

  return (
    <div className="content container-fluid">
      <div className="mb-3 p-7">
        <h2 className="h1 mb-0 text-capitalize d-flex align-items-center gap-2">
          <img
            src="https://6valley.6amtech.com/public/assets/back-end/img/refund-request.png"
            alt="Pending Refund Requests"
          />
          Refunded Refund Requests
          <span className="badge badge-soft-dark radius-50">{refunds.length}</span>
        </h2>
      </div>

      <div className="card p-7">
        <div className="px-3 py-4 light-bg">
          <div className="d-flex flex-wrap justify-between gap-3 align-items-center">
            <form onSubmit={handleSearchSubmit} className="w-full md:w-auto">
              <div className="input-group input-group-merge input-group-custom border border-green-500">
                <div className="input-group-prepend">
                  <div className="input-group-text">
                    <FaSearch />
                  </div>
                </div>
                <input
                  type="search"
                  name="searchValue"
                  className="form-control"
                  placeholder="Search by Title or Code or Discount Type"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  required
                />
                <button
                  type="submit"
                  className="btn px-4 py-2 bg-[#A1CB46] text-white hover:bg-[#7e9f37]"
                >
                  Search
                </button>
              </div>
            </form>
            <div className="flex flex-wrap gap-3 w-full md:w-auto">
              <button
                type="button"
                className="flex items-center px-4 py-2 bg-[#A1CB46] rounded text-white hover:bg-[#7e9f37] gap-2 justify-center"
                data-toggle="dropdown"
              >
                <FaDownload /> Export
              </button>
              <select
                name="refundFilter"
                id="refundFilter"
                className="md:w-40 lg:w-48 bg-white border-gray-500 border rounded px-3 py-2"
              >
                <option value="">All</option>
                <option value="inhouse">Inhouse Request</option>
                <option value="vendor">Vendor Request</option>
              </select>
            </div>
          </div>
        </div>

        {loading ? (
          <div className="loader-container">
            <div className="loader">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        ) : error ? (
          <div>Error: {error}</div>
        ) : (
          <div className="table-responsive datatable-custom">
            <table
              className="table table-hover table-borderless table-thead-bordered table-nowrap table-align-middle card-table w-100"
              style={{ textAlign: 'left' }}
            >
              <thead className="thead-light thead-50 text-capitalize">
                <tr>
                  <th>SL</th>
                  <th className="text-center">Refund ID</th>
                  <th>Order ID</th>
                  <th>Product Info</th>
                  <th>Customer Info</th>
                  <th className="text-end">Total Amount</th>
                  <th className="text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {refunds.map((request, index) => (
                  <tr key={request._id}>
                    <td>{index + 1}</td>
                    <td className="text-center">{request._id}</td>
                    <td>
                      <a href="#" className="title-color hover-c1">
                        {request.order._id}
                      </a>
                    </td>
                    <td>
                      <div className="d-flex flex-wrap gap-2">
                        <a href="#">
                          <img
                            src={`http://localhost:3000/${request.order.products[0].thumbnail}`}
                            className="avatar border"
                            alt={request.order.products[0].name}
                          />
                        </a>
                        <div className="d-flex flex-column gap-1">
                          <a
                            href="#"
                            className="title-color font-weight-bold hover-c1"
                          >
                            {request.order.products[0].name}
                          </a>
                          <span className="fz-12">QTY: {request.order.products[0].quantity}</span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex flex-column gap-1">
                        <a
                          href="#"
                          className="title-color font-weight-bold hover-c1"
                        >
                          {request.order.customer.firstName} {request.order.customer.lastName}
                        </a>
                        <a
                          href={`tel:${request.order.customer.phoneNumber}`}
                          className="title-color hover-c1 fz-12"
                        >
                          {request.order.customer.phoneNumber}
                        </a>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex flex-column gap-1 text-end">
                        <div> PKR {request.order.totalAmount.toFixed(2)} </div>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex justify-content-center">
                        <Link
                          to={`/refunddetail/${request._id}`}
                          className="btn btn-outline--success btn-sm"
                          title="View"
                        >
                          <FaEye />
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Refounded;
