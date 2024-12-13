import React from "react";
import { AiOutlineSearch, AiOutlineDownload, AiOutlinePlus, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Link } from "react-router-dom";

const VendorList = () => {
  // Replace with your own array data for vendors
  const vendors = [
    {
      id: 1,
      shopName: "Digital House",
      vendorName: "Digital Seller",
      email: "seller@seller.com",
      phone: "00111111111",
      status: "Active",
      totalProducts: 5,
      totalOrders: 5,
    },
    {
      id: 2,
      shopName: "Super Store Online",
      vendorName: "test seller 5",
      email: "test.seller5@gmail.com",
      phone: "011111000001",
      status: "Active",
      totalProducts: 4,
      totalOrders: 0,
    },
    {
      id: 3,
      shopName: "Royal Crown",
      vendorName: "test seller 2",
      email: "test.seller2@gmail.com",
      phone: "018855667755",
      status: "Active",
      totalProducts: 5,
      totalOrders: 0,
    },
  ];

  return (
    <div className="content container-fluid snipcss-GafwP">
      <div className="mb-4">
        <h2 className="h1 mb-0 text-capitalize d-flex align-items-center gap-2">
          <img
            src="https://6valley.6amtech.com/public/assets/back-end/img/add-new-seller.png"
            alt=""
          />
          Vendor List{" "}
          <span className="badge badge-soft-dark radius-50 fz-12">10</span>
        </h2>
      </div>
      <div className="row mt-4">
        <div className="col-md-12">
          <div className="card">
            <div className="px-3 py-4">
              <div className="d-flex justify-content-between gap-10 flex-wrap align-items-center">
                <div>
                  <form action="https://6valley.6amtech.com/admin/vendors/list" method="GET">
                    <div className="input-group input-group-merge input-group-custom width-500px">
                      <div className="input-group-prepend">
                        <div className="input-group-text">
                          <AiOutlineSearch />
                        </div>
                      </div>
                      <input
                        id="datatableSearch_"
                        type="search"
                        name="searchValue"
                        className="form-control"
                        placeholder="Search by shop name or vendor name or phone or email"
                        aria-label="Search orders"
                        value=""
                      />
                      <button type="submit" className="btn btn--primary">
                        Search
                      </button>
                    </div>
                  </form>
                </div>
                <div className="d-flex justify-content-end gap-2">
                  <div className="dropdown text-nowrap">
                    <button type="button" className="btn btn-outline--success gap-2  remove" data-toggle="dropdown">
                      <AiOutlineDownload /> Export <AiOutlinePlus />
                    </button>
                    <ul className="dropdown-menu dropdown-menu-right">
                      <li>
                        <a className="dropdown-item d-flex align-items-center gap-2 remove" href="#">
                          <img width="14" src="https://6valley.6amtech.com/public/assets/back-end/img/excel.png" alt="" /> Excel
                        </a>
                      </li>
                    </ul>
                  </div>
                  <a href="" type="button" className="btn btn--primary text-nowrap remove gap-2">
                    <AiOutlinePlus /> Add New Vendor
                  </a>
                </div>
              </div>
            </div>
            <div className="table-responsive">
              <table className="table table-hover table-borderless table-thead-bordered table-nowrap table-align-middle card-table w-100 style-yrBQR" id="style-yrBQR">
                <thead className="thead-light thead-50 text-capitalize">
                  <tr>
                    <th>SL</th>
                    <th>Shop name</th>
                    <th>Vendor name</th>
                    <th>Contact info</th>
                    <th>Status</th>
                    <th className="text-center">Total products</th>
                    <th className="text-center">Total orders</th>
                    <th className="text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {vendors.map((vendor, index) => (
                    <tr key={vendor.id}>
                      <td>{index + 1}</td>
                      <td>
                        <div className="d-flex align-items-center gap-10 w-max-content">
                          <img width="50" className="avatar rounded-circle" src={`https://6valley.6amtech.com/storage/app/public/shop/${vendor.id}.png`} alt="" />
                          <div>
                            <a className="title-color" href={`https://6valley.6amtech.com/admin/vendors/view/${vendor.id}`}>{vendor.shopName}</a>
                            <br />
                            <span className="text-danger"></span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <a title="View" className="title-color" href={`https://6valley.6amtech.com/admin/vendors/view/${vendor.id}`}>{vendor.vendorName}</a>
                      </td>
                      <td>
                        <div className="mb-1">
                          <strong><a className="title-color hover-c1" href={`mailto:${vendor.email}`}>{vendor.email}</a></strong>
                        </div>
                        <a className="title-color hover-c1" href={`tel:${vendor.phone}`}>{vendor.phone}</a>
                      </td>
                      <td>
                        <label className="badge badge-success">Active</label>
                      </td>
                      <td className="text-center">
                        <a href={`https://6valley.6amtech.com/admin/vendors/product-list/${vendor.id}`} className="btn text--primary bg-soft--primary font-weight-bold px-3 py-1 mb-0 fz-12"> {vendor.totalProducts} </a>
                      </td>
                      <td className="text-center">
                        <a href={`https://6valley.6amtech.com/admin/vendors/order-list/${vendor.id}`} className="btn text-info bg-soft-info font-weight-bold px-3 py-1 fz-12 mb-0"> {vendor.totalOrders} </a>
                      </td>
                      <td>
                        <div className="d-flex justify-content-center gap-2">
                          <Link to='/venderdetail' title="View" className="btn btn-outline-info btn-sm square-btn" >
                            <AiOutlineEyeInvisible />
                          </Link>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="table-responsive mt-4">
              <div className="px-4 d-flex justify-content-center justify-content-md-end">
                {/* Additional content here if needed */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorList;
