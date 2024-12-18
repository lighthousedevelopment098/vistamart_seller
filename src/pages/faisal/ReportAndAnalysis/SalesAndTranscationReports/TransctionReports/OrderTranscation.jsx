import React from "react";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);
import {
  FaSearch,
  FaDownload,
  FaChevronDown,
  FaEye,
  FaEdit,
  FaTrashAlt,
} from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
const OrderTranscation = () => {
  const graphdata = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Earnings",
        data: [0, 0, 0, 0, 55000, 0, 0, 0, 0, 0, 0, 0],
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "#A1CB46",
        borderWidth: 4,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  /////------------------------------
  //   ==========
  const data = [
    {
      sl: 1,
      orderid: "100187",
      duration: "Abc Abc",
      inHouse: "$-250.00",
      commission: "$0.00",
      shipping: "$0.00",
      incentive: "$0.00",
      discount: "$0.00",
      tax: "$0.00",
      refound: "$0.00",
      deliverd: "admin",
      total: "$0.00",
    },
    {
      sl: 2,
      orderid: "100187",
      duration: "Web seller",
      inHouse: "$10.00",
      commission: "$0.00",
      shipping: "$0.00",
      incentive: "$0.00",
      discount: "$0.00",
      tax: "$0.00",
      refound: "$0.00",
      deliverd: "admin",
      total: "$0.00",
    },
    {
      sl: 3,
      orderid: "100187",
      duration: "Digital Seller",
      inHouse: "$0.00",
      commission: "$0.00",
      shipping: "$0.00",
      incentive: "$0.00",
      discount: "$0.00",
      tax: "$0.00",
      refound: "$0.00",
      deliverd: "admin",
      total: "$0.00",
    },
    {
      sl: 4,
      orderid: "100187",
      duration: "App Seller",
      inHouse: "$0.00",
      commission: "$0.00",
      shipping: "$0.00",
      incentive: "$0.00",
      discount: "$0.00",
      tax: "$0.00",
      refound: "$0.00",
      deliverd: "admin",
      total: "$0.00",
    },
    {
      sl: 5,
      orderid: "100187",
      duration: "Marketing",
      inHouse: "$0.00",
      commission: "$0.00",
      shipping: "$0.00",
      incentive: "$0.00",
      discount: "$0.00",
      tax: "$0.00",
      refound: "$0.00",
      deliverd: "admin",
      total: "$0.00",
    },
    {
      sl: 6,
      orderid: "100187",
      duration: "Juneer",
      inHouse: "$0.00",
      deliverd: "admin",

      commission: "$0.00",
      shipping: "$0.00",
      incentive: "$0.00",
      discount: "$0.00",
      tax: "$0.00",
      refound: "$0.00",
      total: "$0.00",
    },
    {
      sl: 7,
      orderid: "100187",
      deliverd: "admin",
      duration: "Julyrer",
      inHouse: "$0.00",
      commission: "$0.00",
      shipping: "$0.00",
      incentive: "$0.00",
      discount: "$0.00",
      tax: "$0.00",
      refound: "$0.00",
      total: "$0.00",
    },
    {
      sl: 8,
      orderid: "100187",
      duration: "Aguere",
      inHouse: "$0.00",
      commission: "$0.00",
      shipping: "$0.00",
      incentive: "$0.00",
      discount: "$0.00",
      deliverd: "admin",
      tax: "$0.00",
      refound: "$0.00",
      total: "$0.00",
    },
    {
      sl: 9,
      orderid: "100187",
      duration: "Seprer seller",
      inHouse: "$0.00",
      commission: "$0.00",
      shipping: "$0.00",
      incentive: "$0.00",
      discount: "$0.00",
      tax: "$0.00",
      refound: "$0.00",
      deliverd: "admin",
      total: "$0.00",
    },
    {
      sl: 10,
      orderid: "100187",
      duration: "Octa",
      inHouse: "$0.00",
      commission: "$0.00",
      shipping: "$0.00",
      incentive: "$0.00",
      discount: "$0.00",
      tax: "$0.00",
      refound: "$0.00",
      deliverd: "admin",
      total: "$0.00",
    },
    {
      sl: 11,
      orderid: "100187",
      duration: "News",
      deliverd: "admin",
      inHouse: "$0.00",
      commission: "$0.00",
      shipping: "$0.00",
      incentive: "$0.00",
      discount: "$0.00",
      tax: "$0.00",
      refound: "$0.00",
      total: "$0.00",
    },
    {
      sl: 12,
      orderid: "100187",
      deliverd: "admin",
      duration: "Devevv",
      inHouse: "$0.00",
      commission: "$0.00",
      shipping: "$0.00",
      incentive: "$0.00",
      discount: "$0.00",
      tax: "$0.00",
      refound: "$0.00",
      total: "$0.00",
    },
  ];
  return (
    <div className="bg-gray-100  flex flex-col gap-4 px-5 py-5">
      <div className="rounded-md border bg-white border-gray-300 shadow-md hover:shadow-lg px-5 py-5 w-full md:w-auto">
        <h1 className="font-bold text-md">Filter Data</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mt-3">
          <select
            name=""
            id=""
            className="text-md bg-white px-2 rounded py-2 border border-green-300"
          >
            <option value="">All Status</option>
            <option value="">Hold</option>
            <option value="">Disburse</option>
          </select>
          <select
            name=""
            id=""
            className="text-md bg-white px-2 rounded py-2 border border-green-300"
          >
            <option value="">All Status</option>
            <option value="">Inhouse</option>
            <option value="">This Week</option>
            <option value="">This Day</option>
            <option value="">Custom Date</option>
          </select>
          <select
            name=""
            id=""
            className="text-md bg-white px-2 rounded py-2 border border-green-300"
          >
            <option value="">All Customer</option>
            <option value="">Jack Lop</option>
            <option value="">This Week</option>
            <option value="">This Day</option>
            <option value="">Custom Date</option>
          </select>
          <select
            name=""
            id=""
            className="text-md bg-white px-2 rounded py-2 border border-green-300"
          >
            <option value="">This Year</option>
            <option value="">This Month</option>
            <option value="">This Week</option>
            <option value="">This Day</option>
            <option value="">Custom Date</option>
          </select>
        </div>
        <div className="flex justify-end mt-3">
          <button className="px-6 py-2 rounded border border-green-200 bg-[#A1CB46] hover:bg-[#6a852f] text-white">
            Filter
          </button>
        </div>
      </div>
      <div className="  pt-5">
        <div className="grid grid-cols-1 md:grid-cols-10 gap-5">
          {/* ////////// */}

          <div className="col-span-3 flex flex-col gap-5">
            <div className="bg-white p-10  rounded-lg shadow-md">
              <div className="flex items-center gap-3">
                <img
                  src="https://6valley.6amtech.com/public/assets/back-end/img/cart.svg"
                  alt=""
                  className="h-10 w-10 "
                />
                <div>
                  <p className="text-xl font-bold">192</p>
                  <h2 className="font-semibold text-[.7rem] ">Total Order</h2>
                </div>
              </div>
              <div className="flex justify-between  mt-4">
                {/* <div className="text-red-500 text-[1rem] font-semibold">
                  $2,280.97 <br />{" "}
                  <span className="text-gray-400 text-[.8rem]">Commission</span>
                </div> */}
                <div className="text-blue-500 text-[1rem] text-center font-semibold">
                  97 <br />{" "}
                  <span className="text-gray-400 text-[.7rem]">
                    In House Orders
                  </span>
                </div>
                {/* <div className=" text-[1em] text-blue-500 font-semibold">
              $57,225.00 <br />{" "}
              <span className="text-gray-400 text-[.8rem] font-semibold">
                In House
              </span>
            </div> */}
                <div className="text-green-500 text-center text-[1rem] font-semibold">
                  111 <br />{" "}
                  <span className="text-gray-400 text-[.7rem]">
                    {" "}
                    Vendor Orders
                  </span>
                </div>
              </div>
            </div>
            {/* //////////////////// */}
            <div className="bg-white p-10  rounded-lg shadow-md ">
              <div className="flex items-center gap-5 pb-5">
                <img
                  src="https://6valley.6amtech.com/public/assets/back-end/img/products.svg"
                  alt=""
                  className="w-10 h-10"
                />
              </div>
              <div className=" flex justify-center items-center gap-3">
                <div className="text-blue-500 text-[1rem] text-center font-semibold">
                  97 <br />{" "}
                  <span className="text-gray-400 text-[.6rem]">
                    In House Orders
                  </span>
                </div>
                <div className="text-green-500 text-center text-[1rem] font-semibold">
                  111 <br />{" "}
                  <span className="text-gray-400 text-[.6rem]">
                    {" "}
                    Vendor Orders
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-white p-10  rounded-lg shadow-md ">
              <div className="flex items-center gap-5">
                <img
                  src="https://6valley.6amtech.com/public/assets/back-end/img/stores.svg"
                  alt=""
                  className="w-10 h-10"
                />
                <div>
                  <p className="text-xl  font-bold">10</p>
                  <h2 className="text-[.8rem] font-semibold">Total Vendor</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-4  md:col-span-4">
            {/* -------------------- */}
            <div className="bg-white p-6 rounded-lg shadow-md h-full  flex flex-col gap-5">
              <h2 className="text-xl font-semibold">Order Statistics</h2>
              <Line data={graphdata} options={options} className="" />
            </div>
          </div>
          <div className="col-span-3 md:col-span-3">
            {/* -------------------------------
             */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold">Payment Statistics</h2>
              <div className="flex justify-center mt-4">
                <div className="w-32 h-32 bg-blue-500 rounded-full relative">
                  <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold">
                    $221.7K+
                  </div>
                </div>
              </div>
              <ul className="mt-4 space-y-2">
                <li>Cash payments ($195,512.81)</li>
                <li>Digital payments ($19,786.00)</li>
                <li>Offline payments ($0.00)</li>
                <li>Wallet ($6,355.00)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>{" "}
      {/* //////////// */}
      {/* ///////////// */}
      <div className="card">
        <div className="px-3 py-4">
          <div className="flex flex-wrap justify-between gap-3 items-center">
            <h5 className="mb-0 text-capitalize font-bold flex gap-2 mr-auto">
              Total Transactions
              <span className="bg-gray-700 text-white rounded-full text-sm px-2">
                2
              </span>
            </h5>

            <div className="flex flex-wrap gap-3 w-full md:w-auto">
              <form
                action="https://6valley.6amtech.com/admin/customer/subscriber-list"
                method="GET"
                className="flex w-full md:w-80"
              >
                <div className="flex items-center border border-gray-300 rounded overflow-hidden w-full">
                  <div className="p-2 bg-gray-200">
                    <FaSearch />
                  </div>
                  <input
                    id="datatableSearch_"
                    type="search"
                    name="searchValue"
                    className="flex-grow border-none outline-none p-2"
                    placeholder="Search by email"
                    aria-label="Search orders"
                  />
                  <button
                    type="submit"
                    className="bg-[#A1CB46] hover:bg-[#94ba42] text-white px-4 py-2 rounded"
                  >
                    Search
                  </button>
                </div>
              </form>
              <button
                type="button"
                className="rounded w-full md:w-auto px-3 py-2 bg-[#A1CB46] text-white hover:bg-[#7e9f37] flex items-center justify-center gap-2"
              >
                <FaDownload className="text-md" /> Download PDF
              </button>
              <button
                type="button"
                className="rounded w-full md:w-auto px-3 py-2 bg-[#A1CB46] text-white hover:bg-[#7e9f37] flex items-center justify-center gap-2"
              >
                <FaDownload className="text-md" /> Export
              </button>
            </div>
          </div>
        </div>

        <div className="table-responsive">
          <table className="table overflow-y-auto table-hover table-borderless table-thead-bordered table-nowrap table-align-middle card-table text-left">
            <thead className="thead-light thead-50 text-capitalize ">
              <tr>
                <th>SL</th>
                <th>Order ID</th>
                <th>Shop Name</th>

                <th>Customer Name </th>

                <th className="">Total Product Amount</th>
                <th className="">Product Discount</th>
                <th className="">Coupan Discount</th>
                <th className="">Discount Amount</th>
                <th className="">VAT/TAX</th>
                <th className="">Shiping Charge</th>
                <th className="">Order Amount</th>
                <th className="">Delivered By</th>
                <th className="">Deliveryman Incentive</th>
                <th className="">Admin Discount</th>
                <th className="">Vendor Discount</th>
                <th className="">Admin Commission</th>
                <th className="">Admin Net Income</th>
                <th className="">Vendor Net Income</th>
                <th className="">Payment Method</th>
                <th className="">Payment Status</th>
                <th className="">Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={item.sl}>
                  <td>{index + 1}</td>
                  <td>{item.orderid}</td>
                  <td>
                    <div>{item.duration}</div>
                  </td>
                  <td className="">{item.inHouse}</td>
                  <td>
                    <div className="">
                      <span>{item.commission}</span>
                    </div>
                  </td>
                  <td>{item.shipping}</td>
                  <td className="">{item.incentive}</td>
                  <td className="">{item.discount}</td>
                  <td className="">{item.incentive}</td>
                  <td className="">{item.tax}</td>
                  <td className="">{item.total}</td>
                  <td className="">{item.tax}</td>

                  <td className="">{item.total}</td>
                  <td>{item.deliverd}</td>

                  <td className="">{item.tax}</td>
                  <td className="">{item.total}</td>
                  <td className="">{item.tax}</td>
                  <td className="">{item.total}</td>

                  <td className="">Cash On Delivery</td>
                  <td className="text-green-400  rounded  ">Dispurse</td>
                  <td className="   text-green-500 ">
                    <IoMdDownload />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="card-footer d-flex justify-content-center align-items-center">
          {/* <p className="m-0">
    Showing 1 to {couponData.length} of {couponData.length} entries
  </p> */}
        </div>
      </div>
    </div>
  );
};

export default OrderTranscation;
