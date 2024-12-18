import React from "react";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import { FaDownload, FaSearch } from "react-icons/fa";
Chart.register(...registerables);

const OrderReports = () => {
  const graphdata = {
    labels: [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
    ],
    datasets: [
      {
        label: "Monthly Earnings",
        data: [0, 0, 0, 0, 55000, 0, 0, 0, 0, 0, 0, 0],
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "#009444",
        borderWidth: 3,
        pointBackgroundColor: "#009444",
        pointBorderColor: "#fff",
        pointRadius: 5,
        pointHoverRadius: 7,
        tension: 0.4, // Smooth curve
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#666",
          font: {
            size: 12,
            family: "Arial, sans-serif",
          },
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          color: "rgba(200, 200, 200, 0.2)",
        },
        ticks: {
          callback: function (value) {
            return `PKR ${value}`;
          },
          color: "#666",
          font: {
            size: 12,
            family: "Arial, sans-serif",
          },
          stepSize: 10000,
        },
      },
    },
    plugins: {
      tooltip: {
        enabled: true,
        backgroundColor: "rgba(0, 148, 68, 0.9)",
        titleFont: {
          size: 14,
        },
        bodyFont: {
          size: 12,
        },
        borderWidth: 1,
        borderColor: "#fff",
        callbacks: {
          label: function (context) {
            let label = context.dataset.label || "";
            if (label) {
              label += ": ";
            }
            label += `PKR ${context.raw}`;
            return label;
          },
        },
      },
      legend: {
        display: true,
        position: "top",
        labels: {
          boxWidth: 20,
          padding: 10,
          font: {
            size: 14,
            family: "Arial, sans-serif",
            weight: "bold",
          },
          color: "#333",
        },
      },
    },
  };

  /////------------------------------
  //   ==========
  const data = [
    // {
    //   sl: 1,
    //   duration: "Seller Zone",
    //   inHouse: "250.00",
    //   commission: "0.00",
    //   shipping: "0.00",
    //   incentive: "0.00",
    //   discount: "0.00",
    //   tax: "0.00",
    //   refound: "0.00",
    //   total: "0.00",
    // },
    // {
    //   sl: 2,
    //   duration: "Web seller",
    //   inHouse: "10.00",
    //   commission: "0.00",
    //   shipping: "0.00",
    //   incentive: "0.00",
    //   discount: "0.00",
    //   tax: "0.00",
    //   refound: "0.00",
    //   total: "0.00",
    // },
    // {
    //   sl: 3,
    //   duration: "Digital Seller",
    //   inHouse: "0.00",
    //   commission: "0.00",
    //   shipping: "0.00",
    //   incentive: "0.00",
    //   discount: "0.00",
    //   tax: "0.00",
    //   refound: "0.00",
    //   total: "0.00",
    // },
    // {
    //   sl: 4,
    //   duration: "App Seller",
    //   inHouse: "0.00",
    //   commission: "0.00",
    //   shipping: "0.00",
    //   incentive: "0.00",
    //   discount: "0.00",
    //   tax: "0.00",
    //   refound: "0.00",
    //   total: "0.00",
    // },
    // {
    //   sl: 5,
    //   duration: "Marketing",
    //   inHouse: "0.00",
    //   commission: "0.00",
    //   shipping: "0.00",
    //   incentive: "0.00",
    //   discount: "0.00",
    //   tax: "0.00",
    //   refound: "0.00",
    //   total: "0.00",
    // },
    // {
    //   sl: 6,
    //   duration: "Juneer",
    //   inHouse: "0.00",
    //   commission: "0.00",
    //   shipping: "0.00",
    //   incentive: "0.00",
    //   discount: "0.00",
    //   tax: "0.00",
    //   refound: "0.00",
    //   total: "0.00",
    // },
    // {
    //   sl: 7,
    //   duration: "Julyrer",
    //   inHouse: "0.00",
    //   commission: "0.00",
    //   shipping: "0.00",
    //   incentive: "0.00",
    //   discount: "0.00",
    //   tax: "0.00",
    //   refound: "0.00",
    //   total: "0.00",
    // },
    
  ];
  return (
    <div className="bg-gray-100  flex flex-col gap-4  mx-3 md:mx-5">
      <div className="flex items-center gap-4 mt-3">
        <img
          src="https://6valley.6amtech.com/public/assets/back-end/img/order_report.png"
          className="w-7 h-7"
          alt=""
        />
        <h1 className="font-bold text-xl">Order Report</h1>
      </div>
      <div className="rounded-md border bg-white border-gray-300 shadow-md hover:shadow-md px-5 py-5">
        <h1 className="font-bold text-md">Filter Data</h1>
        <br />
        <div className="flex items-center gap-4 md:gap-8 flex-col md:flex-row ">
          <select
            name=""
            id=""
            className="text-md  bg-white px-2 rounded py-2 w-40 md:w-52 border border-primary-500 outline-none "
          >
            <option value="">All</option>
            <option value="">This Month</option>
            <option value="">This Week</option>
            <option value="">This Day</option>
            <option value="">Custom Date</option>
          </select>
          <select
            name=""
            id=""
            className="text-md  bg-white px-2 rounded py-2 w-40 md:w-52 border border-primary-500 outline-none"
          >
            <option value="">This Year</option>
            <option value="">This Month</option>
            <option value="">This Week</option>
            <option value="">This Day</option>
            <option value="">Custom Date</option>
          </select>
          <button
            className="px-6 w-40 md:w-52 py-2 rounded border border-green-200 bg-primary-500 hover:bg-primary-dark-500 text-white"
            style={{ color: "white" }}
          >
            Filter
          </button>
        </div>
      </div>
      <div className="  pt-5">
        <div className="grid grid-cols-1 md:grid-cols-10 gap-5">
          {/* ////////// */}

          <div className="col-span-3 flex flex-col gap-5">
            {/* <div className="bg-white p-10  rounded-lg shadow-md ">
              <div className="flex items-center gap-5">
                <img
                  src="https://6valley.6amtech.com/public/assets/back-end/img/stores.svg"
                  alt=""
                  className="w-10 h-10"
                />
                <div>
                  <p className="text-xl  font-bold">0</p>
                  <h2 className="text-[.8rem] font-semibold">Total Vendor</h2>
                </div>
              </div>
            </div> */}
            <div className="bg-white p-10  rounded-lg shadow-md">
              <div className="flex items-center gap-3">
                <img
                  src="https://6valley.6amtech.com/public/assets/back-end/img/cart.svg"
                  alt=""
                  className="h-10 w-10 "
                />
                <div>
                  <p className="text-xl font-bold">0</p>
                  <h2 className="font-semibold text-[.7rem] ">Total Orders</h2>
                </div>
              </div>
              <div className="flex justify-center gap-2 mt-4 flex-col lg:flex-row">
                <div className="text-red-500 text-[1rem] font-semibold">
                  0 <br />{" "}
                  <span className="text-gray-400 text-[.8rem]">Cancel</span>
                </div>
                <div className="text-blue-500 text-[1rem] font-semibold">
                  0 <br />{" "}
                  <span className="text-gray-400 text-[.8rem]">Ongoing</span>
                </div>
                {/* <div className=" text-[1em] text-blue-500 font-semibold">
              $57,225.00 <br />{" "}
              <span className="text-gray-400 text-[.8rem] font-semibold">
                In House
              </span>
            </div> */}
                <div className="text-primary-500 text-[1rem] font-semibold">
                  0
                  <br />{" "}
                  <span className="text-gray-400 text-[.8rem]"> Complated</span>
                </div>
              </div>
            </div>
            {/* //////////////////// */}
            <div className="bg-white p-10  rounded-lg shadow-md ">
              <div className="flex items-center gap-4 flex-col lg:flex-row ">
                <img
                  src="https://6valley.6amtech.com/public/assets/back-end/img/products.svg"
                  alt=""
                  className="w-10 h-10"
                />
                <div>
                  <p className="text-xl  font-bold">0.00PKR</p>
                  <h2 className="text-[.8rem] font-semibold">
                    Total Order Amount
                  </h2>{" "}
                  <br />
                </div>
              </div>
              <br />
              <div className="flex gap-3 flex-col lg:flex-row">
                <div className="text-red-500 text-[1rem] font-semibold">
                  0
                  <br />{" "}
                  <span className="text-gray-400 text-[.8rem]">
                    {" "}
                    Due Amount
                  </span>
                </div>
                <div className="text-primary-500 text-[1rem] font-semibold">
                  0
                  <br />{" "}
                  <span className="text-gray-400 text-[.7rem]">
                    {" "}
                    Already Settled
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-4 md:col-span-4">
      <div className="bg-white p-6 rounded-lg shadow-lg h-full flex flex-col gap-5">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-800">Earning Statistics</h2>
        </div>
        <div className="relative h-80 md:h-96">
          <Line data={graphdata} options={options} />
        </div>
      </div>
    </div>
          <div className="col-span-3 md:col-span-3">
            {/* -------------------------------
             */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold">Payment Statistics</h2>
              <div className="flex justify-center mt-4">
                <div className="w-32 h-32 bg-primary-500 rounded-full relative">
                  <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold">
                    0.00
                  </div>
                </div>
              </div>
              <ul className="mt-4 space-y-2">
                <li>Cash payments (0.00)</li>
                <li>Digital payments (0.00)</li>
                <li>Offline payments (0.00)</li>
                <li>Wallet (0.00)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>{" "}
      {/* //////////// */}
      {/* ///////////// */}
      <div className="card ">
        <div className="px-3 py-4">
          <div className="flex justify-between gap-3 align-items-center flex-col lg:flex-row">
            <h5 className="mb-0 text-capitalize d-flex gap-2 mr-auto font-bold">
              Total Vendor{" "}
              <span className="badge badge-soft-dark radius-50 fz-12 ml-1">
                2
              </span>
            </h5>

            <div className="flex  gap-3 flex-col lg:flex-row">
              <form
                action="https://6valley.6amtech.com/admin/customer/subscriber-list"
                method="GET"
                className="w-[100%] "
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
                    className="form-control outline-none hover:border-primary-500"
                    placeholder="Search by email"
                    aria-label="Search orders"
                    value=""
                  />
                  <button
                    type="submit"
                    className="btn bg-primary-500 hover:bg-primary-dark-500"
                    style={{color:"white"}}
                  >
                    Search
                  </button>
                </div>
              </form>
              <button
                type="button"
                className="rounded w-20 px-3 py-2 bg-primary-500 text-white hover:bg-primary-dark-500 text-nowrap btn-block flex gap-2 "
                style={{
                  display: "flex",
                  color: "white",
                  alignItems: "center",
                  gap: "4",
                }}
                //   data-toggle="dropdown"
              >
                <FaDownload /> Export
              </button>
            </div>
          </div>
        </div>
        <div className="table-responsive">
          <table className="table  table-hover table-borderless table-thead-bordered table-nowrap table-align-middle card-table text-left">
            <thead className="thead-light thead-50 text-capitalize ">
              <tr>
                <th>SL</th>
                <th>Order ID</th>
                <th>Total Amount</th>

                <th>Product Discount </th>

                <th className="">Coupon Discount</th>
                <th className="">Shipping Charge</th>
                <th className="">VAT/TAX</th>
                <th className="">Commission</th>
                <th className="">Deliveryman Incentive</th>

                <th className="">Status</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={item.sl}>
                  <td>{index + 1}</td>
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
                  {/* <td className="">{item.total}</td> */}
                  <button
                    className="text-orange-500 border px-1 border-orange-500 rounded-md bg-orange-200"
                    style={{ color: "orange" }}
                  >
                    Pending
                  </button>
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

export default OrderReports;
