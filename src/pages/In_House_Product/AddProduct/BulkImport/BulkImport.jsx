import React, { useState } from "react";
import "./BulkImport.css";
const BulkImport = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleReset = () => {
    setFile(null);
    document.getElementById("bulkImportForm").reset();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!file) {
      alert("Please upload a file before submitting.");
      return;
    }
    const formData = new FormData();
    formData.append("products_file", file);
    formData.append("_token", "ChWFIlGtnDfQo1PE6cDKl9lLWLOyMQwknpw3ZBtZ");

    fetch("https://6valley.6amtech.com/admin/products/bulk-import", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // Handle success
      })
      .catch((error) => {
        console.error(error);
        // Handle error
      });
  };

  return (
    <div className="content container-fluid snipcss-cx7xo">
      <div className="mb-4">
        <h2 className="h1 mb-1 text-capitalize d-flex gap-2">
          <img
            src="https://6valley.6amtech.com/public/assets/back-end/img/bulk-import.png"
            alt=""
          />{" "}
          Bulk Import
        </h2>
      </div>
      <div className="row text-start">
        <div className="col-12">
          <div className="card card-body">
            <h1 className="display-5">Instructions :</h1>
            <p>1. Download the format file and fill it with proper data.</p>
            <p>
              2. You can download the example file to understand how the data
              must be filled.
            </p>
            <p>
              3. Once you have downloaded and filled the format file, Upload it
              in the form below and submit.
            </p>
            <p>
              4. After uploading products you need to edit them and set product
              images and choices.
            </p>
            <p>
              5. You can get brand and category id from their list please input
              the right ids.
            </p>
            <p>
              6. You can upload your product images in product folder from
              gallery and copy image path.
            </p>
          </div>
        </div>
        <div className="col-md-12 mt-2">
          <form
            id="bulkImportForm"
            className="product-form"
            onSubmit={handleSubmit}
          >
            <input
              type="hidden"
              name="_token"
              value="ChWFIlGtnDfQo1PE6cDKl9lLWLOyMQwknpw3ZBtZ"
            />
            <div className="card rest-part">
              <div className="px-3 py-4 d-flex flex-wrap align-items-center gap-10 justify-content-center">
                <h4 className="mb-0">Do not have the template ?</h4>
                <a
                  href="https://6valley.6amtech.com/public/assets/product_bulk_format.xlsx"
                  download
                  className="btn-link  text-capitalize fz-16 font-weight-medium"
                >
                  Download here
                </a>
              </div>
              <div className="card-body">
                <div className="form-group">
                  <div className="row justify-content-center">
                    <div className="col-auto">
                      <div className="uploadDnD">
                        <div
                          className="form-group  inputDnD input_image input_image_edit"
                          data-title="Drag & drop file or browse file"
                        >
                          <input
                            type="file"
                            name="products_file"
                            accept=".xlsx, .xls"
                            className="form-control-file  text--primary font-weight-bold action-upload-section-dot-area"
                            onChange={handleFileChange}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-wrap gap-4 align-items-center justify-content-end">
                  <button
                    type="button"
                    className="btn btn-secondary px-4 action-onclick-reload-page"
                    onClick={handleReset}
                  >
                    Reset
                  </button>
                  <button
                    type="submit"
                    className="rounded-md px-4 btn   bg-primary-500 text-white hover:bg-primary-dark-500 border "
                    style={{color:"white"}}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BulkImport;

// import React from 'react';
// import {
//   FaSearch,
//   FaDownload,
//   FaChevronDown,
//   FaEye,
//   FaEdit,
//   FaTrashAlt
// } from 'react-icons/fa';
// import './CouponList.css'; // Import your custom CSS here

// const CouponList = () => {
//   return (
//     <div className="container mt-3">
//       <div className="row mt-20">
//         <div className="col-md-12">
//           <div className="d-flex justify-content-between align-items-center mb-3">
//             <h5 className="text-capitalize">Coupon Management</h5>
//             <button type="button" className="btn btn--primary">Add Coupon</button>
//           </div>
//           <div className="card">
//             <div className="px-3 py-4">
//               <div className="d-flex flex-wrap gap-3 align-items-center">
//                 <h5 className="mb-0 text-capitalize d-flex gap-2 mr-auto">
//                   Coupon List <span className="badge badge-soft-dark radius-50 fz-12 ml-1">4</span>
//                 </h5>
//                 <form action="https://6valley.6amtech.com/admin/coupon/add" method="GET">
//                   <div className="input-group input-group-merge input-group-custom">
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
//                     <button type="submit" className="btn btn--primary">Search</button>
//                   </div>
//                 </form>
//                 <div>
//                   <button type="button" className="btn btn-outline--primary text-nowrap btn-block" data-toggle="dropdown">
//                     <FaDownload /> Export <FaChevronDown />
//                   </button>
//                   <ul className="dropdown-menu dropdown-menu-right">
//                     <li>
//                       <a className="dropdown-item" href="https://6valley.6amtech.com/admin/coupon/export">
//                         <img width="14" src="https://6valley.6amtech.com/public/assets/back-end/img/excel.png" alt="" /> Excel
//                       </a>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//             <div className="table-responsive">
//               <table className="table table-hover table-borderless table-thead-bordered table-nowrap table-align-middle card-table text-left">
//                 <thead className="thead-light thead-50 text-capitalize">
//                   <tr>
//                     <th>SL</th>
//                     <th>Coupon</th>
//                     <th>Coupon Type</th>
//                     <th>Duration</th>
//                     <th>User Limit</th>
//                     <th className="text-center">Discount Bearer</th>
//                     <th>Status</th>
//                     <th className="text-center">Action</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   <tr>
//                     <td>1</td>
//                     <td>
//                       <div>Get 20% discount on </div>
//                       <strong>Code: rtzxx8n8lr</strong>
//                     </td>
//                     <td className="text-capitalize">Discount on Purchase</td>
//                     <td>
//                       <div className="d-flex flex-wrap gap-1">
//                         <span>10 Jan, 23 - </span>
//                         <span>10 Jun, 25</span>
//                       </div>
//                     </td>
//                     <td>
//                       <span>Limit: <strong>20,</strong></span>
//                       <span className="ml-1">Used: <strong>0</strong></span>
//                     </td>
//                     <td className="text-center">Admin</td>
//                     <td>
//                       <form action="https://6valley.6amtech.com/admin/coupon/status/1/0" method="GET" className="coupon_status_form">
//                         <label className="switcher">
//                           <input
//                             type="checkbox"
//                             className="switcher_input toggle-switch-message"
//                             id="coupon_status1"
//                             name="status"
//                             value="1"
//                             checked
//                             data-modal-id="toggle-status-modal"
//                             data-toggle-id="coupon_status1"
//                             data-on-image="coupon-status-on.png"
//                             data-off-image="coupon-status-off.png"
//                             data-on-title="Want to Turn ON Coupon Status?"
//                             data-off-title="Want to Turn OFF Coupon Status?"
//                             data-on-message="<p>If enabled, this coupon will be available on the website and customer app.</p>"
//                             data-off-message="<p>If disabled, this coupon will be hidden from the website and customer app.</p>"
//                           />
//                           <span className="switcher_control"></span>
//                         </label>
//                       </form>
//                     </td>
//                     <td>
//                       <div className="d-flex gap-10 justify-content-center">
//                         <button className="btn btn-outline--primary square-btn btn-sm mr-1 get-quick-view" data-id="1">
//                           <FaEye />
//                         </button>
//                         <a className="btn btn-outline--primary btn-sm edit" href="https://6valley.6amtech.com/admin/coupon/update/1" title="Edit">
//                           <FaEdit />
//                         </a>
//                         <form action="https://6valley.6amtech.com/admin/coupon/delete/1" method="POST">
//                           <input type="hidden" name="_token" value="MOADQqmoOqqfyTCN6Hgh99K4J7sfBGLWVV3QGiyg" />
//                           <button className="btn btn-outline-danger btn-sm delete" title="Delete" type="submit">
//                             <FaTrashAlt />
//                           </button>
//                         </form>
//                       </div>
//                     </td>
//                   </tr>
//                 </tbody>
//               </table>
//             </div>
//             <div className="card-footer d-flex justify-content-center align-items-center">
//               <p className="m-0">
//                 Showing 1 to 10 of 10 entries
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>

//     {/* Modal for Quick View */}
//     <div className="modal fade" id="quick-view" tabIndex="-1" role="dialog" aria-labelledby="quick-view-title" aria-hidden="true">
//       <div className="modal-dialog" role="document">
//         <div className="modal-content">
//           <div className="modal-header">
//             <h5 className="modal-title" id="quick-view-title">Coupon Details</h5>
//             <button type="button" className="close" data-dismiss="modal" aria-label="Close">
//               <span aria-hidden="true">&times;</span>
//             </button>
//           </div>
//           <div className="modal-body">
//             <p>Details about the coupon will be displayed here...</p>
//           </div>
//           <div className="modal-footer">
//             <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CouponList;
