import React from "react";
import {
  FaSearch,
  FaDownload,
  FaChevronDown,
  FaEye,
  FaEdit,
  FaTrashAlt,
  FaRecycle,
} from "react-icons/fa";

const SendNotifaction = () => {
  const couponData = [
    {
      id: 1,
      title: "Coupan ",

      type: "	From 2024, Use Code pcuw655ytg to get...	",
      img: "https://6valley.6amtech.com/storage/app/public/notification/2022-04-20-625f9cc7e2f84.png",
      userLimit: 1,
      discountBearer: "Admin",
      status: 1, // Example status, adjust as per your needs
    },
    {
      id: 2,
      title: "Coupan ",

      type: "From 2024, Use Code pcuw655ytg to get...",
      img: "https://6valley.6amtech.com/storage/app/public/notification/2022-04-20-625f9cc7e2f84.png",
      userLimit: 2,
      discountBearer: "Admin",
      status: 1, // Example status, adjust as per your needs
    },

    // Add more coupon objects as needed
  ];

  return (
    <div className="bg-[#F9F9FB]  px-5 py-5 w-[100%]">
      <div className="font-bold text-[1.3rem] flex gap-2 items-center">
        <img
          src="https://6valley.6amtech.com/public/assets/back-end/img/push_notification.png"
          alt=""
          className="w-7 h-7"
        />
        <h1>Send Notification</h1>
      </div>
      <div className="h-[80vh] w-full bg-white grid grid-cols-2 rounded-lg mt-3 px-10 py-8">
        <div className=" ">
          {/* <div className=" flex gap-8 border-b-2 border-gray-300 pb-5 items-center ">
            <h1 className="text-blue-500 text-[1rem] font-semibold">
              English(EN)
            </h1>
            <h1 className="text-[1rem] font-semibold">Arabic(SA)</h1>
            <h1 className="text-[1rem] font-semibold">Bangla(BD)</h1>
            <h1 className="text-[1rem] font-semibold">Hindi(IN)</h1>
          </div> */}
          <form action="/" className="flex flex-col gap-5">
            <div className="flex flex-col gap-3 pt-5">
              <label htmlFor="category-name">Title</label>
              <input
                type="text"
                id="category-name"
                placeholder="Notifaction*"
                className="px-5 py-2 border border-gray-200 rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="flex flex-col gap-3 ">
              <label htmlFor="category-name"> Descripation</label>
              <textarea
                name=""
                rows={5}
                id=""
                className="border border-gray-300"
              ></textarea>
              {/* <input
                type="text"
                id="category-name"
                placeholder="Notifaction*"
                className="px-5 py-2 border border-gray-200 rounded-md focus:outline-none focus:border-blue-500"
              /> */}
            </div>
          </form>
        </div>
        <div className="flex flex-col gap-5 ">
          <div className="flex justify-center items-center px-8 py-5 ">
            <img
              src="https://6valley.6amtech.com/public/assets/back-end/img/image-place-holder.png"
              alt=""
              className="h-48 w-48 border rounded-sm border-gray-900"
            />
          </div>

          <div className="  ms-4 flex flex-column">
            <label htmlFor="category-name text-md">Image (Ratio1:1)</label>
            <div>
              <input
                type="file"
                id="image-upload"
                className="px-5 py-2 border   outline-none border-e border-blue-300"
              />
              <button className=" px-2 py-3  border   outline-none border-e border-blue-300 hover:bg-blue-200">
                Browser
              </button>
            </div>
          </div>
          <div className="flex justify-end items-end gap-3">
            <button className="bg-[#EDEDED] rounded-md px-4 py-1 border border-gray-300">
              Rest{" "}
            </button>
            <button className="rounded-md px-4 bg-blue-500 text-white py-1 border border-gray-300">
              Submit
            </button>
          </div>
        </div>
      </div>
      <div className="container mt-3">
        <div className="row mt-5">
          <div className="col-md-12">
            {/* <div className="d-flex justify-content-between align-items-center mb-3">
              <h5 className="text-capitalize">Coupon Management</h5>
              <button type="button" className="btn btn--primary">
                Add Coupon
              </button>
            </div> */}
            <div className="card mb-5">
              <div className="px-3 py-4">
                <div className="d-flex flex-wrap gap-3 align-items-center">
                  <h5 className="mb-0 text-capitalize text-md font-semibold d-flex gap-2 mr-auto">
                    Push Notification Table
                    <span className="badge badge-soft-dark radius-50 fz-12 ml-1">
                      {couponData.length}
                    </span>
                  </h5>
                  <form
                    action="https://6valley.6amtech.com/admin/coupon/add"
                    method="GET"
                  >
                    <div className="input-group input-group-merge input-group-custom">
                      <div className="input-group-prepend">
                        <div className="input-group-text">
                          <FaSearch />
                        </div>
                      </div>
                      <input
                        id="datatableSearch_"
                        type="search"
                        name="searchValue"
                        className="form-control"
                        placeholder="Search by Title or Code or Discount Type"
                        required
                      />
                      <button type="submit" className="btn btn--primary">
                        Search
                      </button>
                    </div>
                  </form>
                  <div>
                    {/* <button
                      type="button"
                      className="btn btn-outline--primary text-nowrap btn-block flex gap-2 bg-green-400"
                      data-toggle="dropdown"
                    >
                      <FaDownload /> Export <FaChevronDown />
                    </button> */}
                    <ul className="dropdown-menu dropdown-menu-right">
                      <li>
                        <a
                          className="dropdown-item"
                          href="https://6valley.6amtech.com/admin/coupon/export"
                        >
                          <img
                            width="14"
                            src="https://6valley.6amtech.com/public/assets/back-end/img/excel.png"
                            alt=""
                          />{" "}
                          Excel
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="table-responsive">
                <table className="table table-hover table-borderless table-thead-bordered table-nowrap table-align-middle card-table text-left">
                  <thead className="thead-light thead-50 text-capitalize">
                    <tr>
                      <th>SL</th>
                      <th>Ttile</th>
                      <th>Description</th>
                      <th>image</th>
                      <th>Notifaction Count</th>

                      <th>Status</th>
                      <th className="text-center">Resend</th>
                      <th className="text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {couponData.map((coupon, index) => (
                      <tr key={coupon.id} className="hover:bg-gray-100 mb-5">
                        <td>{index + 1}</td>
                        <td>
                          <div>{coupon.title}</div>
                          <strong> {coupon.code}</strong>
                        </td>
                        <td className="text-capitalize">{coupon.type}</td>
                        <td>
                          <div className="d-flex flex-wrap gap-1">
                            <img
                              src={coupon.img}
                              alt=""
                              className="w-12 h-12"
                            />
                          </div>
                        </td>
                        <td>
                          <strong>1</strong>
                        </td>

                        {/* <td className="text-center">{coupon.discountBearer}</td> */}
                        <td>
                          <form
                            action={`https://6valley.6amtech.com/admin/coupon/status/${coupon.id}/${coupon.status}`}
                            method="GET"
                            className="coupon_status_form"
                          >
                            <label className="switcher">
                              <input
                                type="checkbox"
                                className="switcher_input toggle-switch-message"
                                id={`coupon_status${coupon.id}`}
                                name="status"
                                value={coupon.status}
                                checked={coupon.status === 1}
                                data-modal-id="toggle-status-modal"
                                data-toggle-id={`coupon_status${coupon.id}`}
                                data-on-image="coupon-status-on.png"
                                data-off-image="coupon-status-off.png"
                                data-on-title="Want to Turn ON Coupon Status?"
                                data-off-title="Want to Turn OFF Coupon Status?"
                                data-on-message="<p>If enabled, this coupon will be available on the website and customer app.</p>"
                                data-off-message="<p>If disabled, this coupon will be hidden from the website and customer app.</p>"
                              />
                              <span className="switcher_control"></span>
                            </label>
                          </form>
                        </td>
                        <td>
                          <FaRecycle />
                        </td>
                        <td>
                          <div className="d-flex gap-2 justify-content-center">
                            {/* <button
                              className="btn btn-outline--primary square-btn btn-sm mr-1 get-quick-view"
                              data-id={coupon.id}
                            ></button> */}
                            <a
                              className=" btn btn-outline-danger btn-sm delete p-2 border-blue-400 text-blue-400"
                              href={`https://6valley.6amtech.com/admin/coupon/update/${coupon.id}`}
                              title="Edit"
                            >
                              <FaEdit />
                            </a>
                            <form
                              action={`https://6valley.6amtech.com/admin/coupon/delete/${coupon.id}`}
                              method="POST"
                            >
                              <input
                                type="hidden"
                                name="_token"
                                value="MOADQqmoOqqfyTCN6Hgh99K4J7sfBGLWVV3QGiyg"
                              />
                              <button
                                className="btn btn-outline-danger btn-sm delete p-2 border-red-400 text-red-400"
                                title="Delete"
                                type="submit"
                              >
                                <FaTrashAlt />
                              </button>
                            </form>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SendNotifaction;
