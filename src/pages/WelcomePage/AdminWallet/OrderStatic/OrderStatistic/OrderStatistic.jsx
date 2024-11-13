// import React from "react";
// import { Line } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// );
// import { Doughnut } from "react-chartjs-2";
// import { ArcElement } from "chart.js";

// ChartJS.register(ArcElement);

// const OrderStatistic = () => {
//   const data = {
//     labels: [
//       "Jan",
//       "Feb",
//       "Mar",
//       "Apr",
//       "May",
//       "Jun",
//       "Jul",
//       "Aug",
//       "Sep",
//       "Oct",
//       "Nov",
//       "Dec",
//     ],
//     datasets: [
//       {
//         label: "Inhouse",
//         data: [420, 0],
//         fill: false,
//         backgroundColor: "rgba(75,192,192,0.2)",
//         borderColor: "#66B1FB",
//         borderWidth: 5,
//       },
//       {
//         label: "Vendor",
//         data: [80, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//         fill: false,
//         backgroundColor: "rgba(153,102,255,0.2)",
//         borderColor: "#95CE78",
//         //rgba(153,102,255,1)
//         borderWidth: 5,
//       },
//       // {
//       //   label: "Commission",
//       //   data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//       //   fill: false,
//       //   backgroundColor: "rgba(255, 193, 7, 0.2)",
//       //   borderColor: "rgba(255, 193, 7, 1)",
//       //   borderWidth: 2,
//       // },
//     ],
//   };

//   const options = {
//     scales: {
//       y: {
//         beginAtZero: true,
//         suggestedMin: 0,
//         suggestedMax: 500,
//         ticks: {
//           stepSize: 100,
//           callback: function (value) {
//             return `$${value}`;
//           },
//         },
//       },
//     },
//     plugins: {
//       tooltip: {
//         callbacks: {
//           label: function (context) {
//             let label = context.dataset.label || "";
//             if (label) {
//               label += ": ";
//             }
//             label += `$${context.raw}`;
//             return label;
//           },
//         },
//       },
//     },
//   };

//   return (
//     <>
//       <div className="bg-white border rounded-lg border-gray-200 mt-2 mx-5  px-5 py-10 gap-5">
//         <div className="w-full py-5 px-5 md:w-2/3 bg-white border rounded-lg border-gray-200">
//           <div className="flex justify-content-between align-items-center">
//             <div className="flex gap-1 align-items-center mb-2 ">
//               <img
//                 src="https://6valley.6amtech.com/public/assets/back-end/img/order-statistics.png"
//                 className="w-5 h-5"
//                 alt=""
//               />
//               <h2 className="text-xl font-semibold ">Order Statistics</h2>
//             </div>
//             <div className="flex align-items-center gap-2 px-3 py-2 border border-gray-200 rounded">
//               <button className="text-white bg-blue-500 px-2 py-1 rounded">
//                 This Year
//               </button>
//               <button>This Month</button>
//               <button>This Week</button>
//             </div>
//           </div>
//           <Line data={data} options={options} className="pt-5 font-semibold" />
//         </div>
//         <div className="w-full p-4 bg-white border rounded-lg border-gray-200 py-5 px-5 mt-4">
//           <div className="flex justify-content-between align-items-center">
//             <div className="flex gap-1 align-items-center mb-2 ">
//               <img
//                 src="https://6valley.6amtech.com/public/assets/back-end/img/order-statistics.png"
//                 className="w-5 h-5"
//                 alt=""
//               />
//               <h2 className="text-xl font-semibold ">Order Statistics</h2>
//             </div>
//             <div className="flex align-items-center gap-2 px-3 py-2 border border-gray-200 rounded">
//               <button className="text-white bg-blue-500 px-2 py-1 rounded">
//                 This Year
//               </button>
//               <button>This Month</button>
//               <button>This Week</button>
//             </div>
//           </div>
//           {/* <div>
//             <h2 className="text-xl font-semibold mb-4">Earning Statistics</h2>
//             <div className="flex justify-end mb-4">
//               <button className="px-4 py-2 text-white bg-blue-500 rounded mr-2">
//                 This Year
//               </button>
//               <button className="px-4 py-2 text-blue-500 bg-white border border-blue-500 rounded mr-2">
//                 This Month
//               </button>
//               <button className="px-4 py-2 text-blue-500 bg-white border border-blue-500 rounded">
//                 This Week
//               </button>
//             </div>
//           </div> */}
//           <Line data={data} options={options} />
//         </div>
//       </div>
//     </>
//   );
// };

// export default OrderStatistic;

//corecct not yearly

// import React from "react";
// import { Line } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";
// import UserOverviewChart from "../CircleChart";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// );

// const OrderStatistic = () => {
//   const data = {
//     labels: [
//       "Jan", "Feb", "Mar", "Apr", "May", "Jun",
//       "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
//     ],
//     datasets: [
//       {
//         label: "Inhouse",
//         data: [420, 300, 250, 400, 200, 250, 300, 500, 600, 450, 500, 420],
//         fill: false,
//         backgroundColor: "rgba(75,192,192,0.2)",
//         borderColor: "#66B1FB",
//         borderWidth: 5,
//       },
//       {
//         label: "Vendor",
//         data: [200, 180, 240, 230, 220, 190, 210, 250, 260, 270, 280, 300],
//         fill: false,
//         backgroundColor: "rgba(153,102,255,0.2)",
//         borderColor: "#95CE78",
//         borderWidth: 5,
//       },
//       {
//         label: "Customer",
//         data: [150, 140, 160, 150, 170, 180, 190, 200, 220, 230, 240, 250],
//         fill: false,
//         backgroundColor: "rgba(255, 193, 7, 0.2)",
//         borderColor: "rgba(255, 193, 7, 1)",
//         borderWidth: 5,
//       },
//     ],
//   };

//   const options = {
//     scales: {
//       y: {
//         beginAtZero: true,
//         suggestedMin: 0,
//         suggestedMax: 700,
//         ticks: {
//           stepSize: 100,
//           callback: function (value) {
//             return `$${value}`;
//           },
//         },
//       },
//     },
//     plugins: {
//       tooltip: {
//         callbacks: {
//           title: function (context) {
//             return `Month: ${context[0].label}`;
//           },
//           label: function (context) {
//             let label = context.dataset.label || "";
//             if (label) {
//               label += ": ";
//             }
//             label += `$${context.raw}`;
//             return label;
//           },
//           footer: function (context) {
//             let total = 0;
//             context.forEach(item => {
//               total += item.raw;
//             });
//             return `Total: $${total}`;
//           }
//         },
//         displayColors: true, // Display color boxes next to each dataset label
//       },
//       legend: {
//         display: true,
//         position: 'top',
//       },
//     },
//   };

//   return (
//     <div className="bg-white border rounded-lg border-gray-200 mt-2 mx-5 px-5 py-10 gap-5">
//       <div className="row">
//       <div className="w-60 py-5 px-5  bg-white border rounded-lg border-gray-200">
//         <div className="flex justify-between items-center">
//           <div className="flex gap-1 items-center mb-2">
//             <img
//               src="https://6valley.6amtech.com/public/assets/back-end/img/order-statistics.png"
//               className="w-5 h-5"
//               alt=""
//             />
//             <h2 className="text-xl font-semibold">Order Statistics</h2>
//           </div>
//           <div className="flex items-center gap-2 px-3 py-2 border border-gray-200 rounded">
//             <button className="text-white bg-blue-500 px-2 py-1 rounded">
//               This Year
//             </button>
//             <button>This Month</button>
//             <button>This Week</button>
//           </div>
//         </div>
//         <Line data={data} options={options} className="pt-5 font-semibold" />
//       </div>
//       <div className="w-3">
//      <UserOverviewChart />
//       </div>
//       </div>

//       <div className="w-full p-4  bg-white border rounded-lg border-gray-200 py-5 px-5 mt-4">
//         <div className="flex justify-between items-center">
//           <div className="flex gap-1 items-center mb-2">
//             <img
//               src="https://6valley.6amtech.com/public/assets/back-end/img/order-statistics.png"
//               className="w-5 h-5"
//               alt=""
//             />
//             <h2 className="text-xl font-semibold">Order Statistics</h2>
//           </div>
//           <div className="flex items-center gap-2 px-3 py-2 border border-gray-200 rounded">
//             <button className="text-white bg-blue-500 px-2 py-1 rounded">
//               This Year
//             </button>
//             <button>This Month</button>
//             <button>This Week</button>
//           </div>
//         </div>
//         <Line data={data} options={options} />
//       </div>
//     </div>
//   );
// };

//corect but yealr coller and circle height errro
// import React, { useState } from "react";
// import { Line } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";
// import UserOverviewChart from "../CircleChart";
// import './OrderStatistic.css'; // Assuming you have a CSS file for custom styles

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// );

// const OrderStatistic = () => {
//   const [period, setPeriod] = useState("year"); // Default period is 'year'

//   const dataMap = {
//     year: {
//       labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
//       datasets: [
//         {
//           label: "Inhouse",
//           data: [420, 300, 250, 400, 200, 250, 300, 500, 600, 450, 500, 420],
//           fill: false,
//           backgroundColor: "rgba(75,192,192,0.2)",
//           borderColor: "#66B1FB",
//           borderWidth: 5,
//         },
//         {
//           label: "Vendor",
//           data: [200, 180, 240, 230, 220, 190, 210, 250, 260, 270, 280, 300],
//           fill: false,
//           backgroundColor: "rgba(153,102,255,0.2)",
//           borderColor: "#95CE78",
//           borderWidth: 5,
//         },
//         {
//           label: "Customer",
//           data: [150, 140, 160, 150, 170, 180, 190, 200, 220, 230, 240, 250],
//           fill: false,
//           backgroundColor: "rgba(255, 193, 7, 0.2)",
//           borderColor: "rgba(255, 193, 7, 1)",
//           borderWidth: 5,
//         },
//       ],
//     },
//     month: {
//       labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
//       datasets: [
//         {
//           label: "Inhouse",
//           data: [100, 200, 300, 400],
//           fill: false,
//           backgroundColor: "rgba(75,192,192,0.2)",
//           borderColor: "#66B1FB",
//           borderWidth: 5,
//         },
//         {
//           label: "Vendor",
//           data: [150, 250, 200, 300],
//           fill: false,
//           backgroundColor: "rgba(153,102,255,0.2)",
//           borderColor: "#95CE78",
//           borderWidth: 5,
//         },
//         {
//           label: "Customer",
//           data: [80, 120, 160, 200],
//           fill: false,
//           backgroundColor: "rgba(255, 193, 7, 0.2)",
//           borderColor: "rgba(255, 193, 7, 1)",
//           borderWidth: 5,
//         },
//       ],
//     },
//     week: {
//       labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
//       datasets: [
//         {
//           label: "Inhouse",
//           data: [60, 70, 80, 90, 100, 110, 120],
//           fill: false,
//           backgroundColor: "rgba(75,192,192,0.2)",
//           borderColor: "#66B1FB",
//           borderWidth: 5,
//         },
//         {
//           label: "Vendor",
//           data: [30, 50, 40, 60, 70, 80, 90],
//           fill: false,
//           backgroundColor: "rgba(153,102,255,0.2)",
//           borderColor: "#95CE78",
//           borderWidth: 5,
//         },
//         {
//           label: "Customer",
//           data: [10, 20, 30, 40, 50, 60, 70],
//           fill: false,
//           backgroundColor: "rgba(255, 193, 7, 0.2)",
//           borderColor: "rgba(255, 193, 7, 1)",
//           borderWidth: 5,
//         },
//       ],
//     },
//   };

//   const options = {
//     scales: {
//       y: {
//         beginAtZero: true,
//         suggestedMin: 0,
//         suggestedMax: 700,
//         ticks: {
//           stepSize: 100,
//           callback: function (value) {
//             return `$${value}`;
//           },
//         },
//       },
//     },
//     plugins: {
//       tooltip: {
//         callbacks: {
//           title: function (context) {
//             return `Month: ${context[0].label}`;
//           },
//           label: function (context) {
//             let label = context.dataset.label || "";
//             if (label) {
//               label += ": ";
//             }
//             label += `$${context.raw}`;
//             return label;
//           },
//           footer: function (context) {
//             let total = 0;
//             context.forEach(item => {
//               total += item.raw;
//             });
//             return `Total: $${total}`;
//           }
//         },
//         displayColors: true,
//       },
//       legend: {
//         display: true,
//         position: 'top',
//       },
//     },
//   };

//   return (
//     <div className="order-statistic-container bg-white border rounded-lg border-gray-200 mt-2 mx-5 px-5 py-10 gap-5">
//       <div className="order-statistic-row">
//         <div className="order-statistic-chart bg-white border rounded-lg border-gray-200">
//           <div className="flex justify-between items-center">
//             <div className="flex gap-1 items-center mb-2">
//               <img
//                 src="https://6valley.6amtech.com/public/assets/back-end/img/order-statistics.png"
//                 className="w-5 h-5"
//                 alt="Order Statistics"
//               />
//               <h2 className="text-xl font-semibold">Order Statistics</h2>
//             </div>
//             <div className="flex items-center gap-2 px-3 py-2 border border-gray-200 rounded">
//               <button
//                 className={`text-white px-2 py-1 rounded ${period === 'year' ? 'bg-blue-500' : ''}`}
//                 onClick={() => setPeriod('year')}
//               >
//                 This Year
//               </button>
//               <button
//                 className={`text-white px-2 py-1 rounded ${period === 'month' ? 'bg-blue-500' : ''}`}
//                 onClick={() => setPeriod('month')}
//               >
//                 This Month
//               </button>
//               <button
//                 className={`text-white px-2 py-1 rounded ${period === 'week' ? 'bg-blue-500' : ''}`}
//                 onClick={() => setPeriod('week')}
//               >
//                 This Week
//               </button>
//             </div>
//           </div>
//           <Line data={dataMap[period]} options={options} className="pt-5 font-semibold" />
//         </div>
//         <div className="order-statistic-circle-chart">
//           <UserOverviewChart />
//         </div>
//       </div>
//       <div className="order-statistic-summary bg-white border rounded-lg border-gray-200 py-5 px-5 mt-4">
//         <div className="flex justify-between items-center">
//           <div className="flex gap-1 items-center mb-2">
//             <img
//               src="https://6valley.6amtech.com/public/assets/back-end/img/order-statistics.png"
//               className="w-5 h-5"
//               alt="Order Statistics"
//             />
//             <h2 className="text-xl font-semibold">Order Statistics</h2>
//           </div>
//           <div className="flex items-center gap-2 px-3 py-2 border border-gray-200 rounded">
//             <button
//               className={`text-white px-2 py-1 rounded ${period === 'year' ? 'bg-blue-500' : ''}`}
//               onClick={() => setPeriod('year')}
//             >
//               This Year
//             </button>
//             <button
//               className={`text-white px-2 py-1 rounded ${period === 'month' ? 'bg-blue-500' : ''}`}
//               onClick={() => setPeriod('month')}
//             >
//               This Month
//             </button>
//             <button
//               className={`text-white px-2 py-1 rounded ${period === 'week' ? 'bg-blue-500' : ''}`}
//               onClick={() => setPeriod('week')}
//             >
//               This Week
//             </button>
//           </div>
//         </div>
//         <Line data={dataMap[period]} options={options} />
//       </div>
//     </div>
//   );
// };

// export default OrderStatistic;

import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import UserOverviewChart from "../CircleChart";
import "./OrderStatistic.css"; // Assuming you have a CSS file for custom styles

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const OrderStatistic = () => {
  const [period, setPeriod] = useState("year"); // Default period is 'year'

  const dataMap = {
    year: {
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
          label: "Inhouse",
          data: [420, 300, 250, 400, 200, 250, 300, 500, 600, 450, 500, 420],
          fill: false,
          backgroundColor: "rgba(75,192,192,0.2)",
          borderColor: "#66B1FB",
          borderWidth: 5,
        },
        {
          label: "Vendor",
          data: [200, 180, 240, 230, 220, 190, 210, 250, 260, 270, 280, 300],
          fill: false,
          backgroundColor: "rgba(153,102,255,0.2)",
          borderColor: "#95CE78",
          borderWidth: 5,
        },
        {
          label: "Customer",
          data: [150, 140, 160, 150, 170, 180, 190, 200, 220, 230, 240, 250],
          fill: false,
          backgroundColor: "rgba(255, 193, 7, 0.2)",
          borderColor: "rgba(255, 193, 7, 1)",
          borderWidth: 5,
        },
      ],
    },
    month: {
      labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
      datasets: [
        {
          label: "Inhouse",
          data: [100, 200, 300, 400],
          fill: false,
          backgroundColor: "rgba(75,192,192,0.2)",
          borderColor: "#66B1FB",
          borderWidth: 5,
        },
        {
          label: "Vendor",
          data: [150, 250, 200, 300],
          fill: false,
          backgroundColor: "rgba(153,102,255,0.2)",
          borderColor: "#95CE78",
          borderWidth: 5,
        },
        {
          label: "Customer",
          data: [80, 120, 160, 200],
          fill: false,
          backgroundColor: "rgba(255, 193, 7, 0.2)",
          borderColor: "rgba(255, 193, 7, 1)",
          borderWidth: 5,
        },
      ],
    },
    week: {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      datasets: [
        {
          label: "Inhouse",
          data: [60, 70, 80, 90, 100, 110, 120],
          fill: false,
          backgroundColor: "rgba(75,192,192,0.2)",
          borderColor: "#66B1FB",
          borderWidth: 5,
        },
        {
          label: "Vendor",
          data: [30, 50, 40, 60, 70, 80, 90],
          fill: false,
          backgroundColor: "rgba(153,102,255,0.2)",
          borderColor: "#95CE78",
          borderWidth: 5,
        },
        {
          label: "Customer",
          data: [10, 20, 30, 40, 50, 60, 70],
          fill: false,
          backgroundColor: "rgba(255, 193, 7, 0.2)",
          borderColor: "rgba(255, 193, 7, 1)",
          borderWidth: 5,
        },
      ],
    },
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        suggestedMin: 0,
        suggestedMax: 700,
        ticks: {
          stepSize: 100,
          callback: function (value) {
            return `$${value}`;
          },
        },
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          title: function (context) {
            return `Month: ${context[0].label}`;
          },
          label: function (context) {
            let label = context.dataset.label || "";
            if (label) {
              label += ": ";
            }
            label += `$${context.raw}`;
            return label;
          },
          footer: function (context) {
            let total = 0;
            context.forEach((item) => {
              total += item.raw;
            });
            return `Total: $${total}`;
          },
        },
        displayColors: true,
      },
      legend: {
        display: true,
        position: "top",
      },
    },
  };

  return (
    <div>
      <div className="order-statistic-summary bg-white border rounded-lg border-gray-200 py-5 px-5 mt-4 ">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-0">
          <div className="flex gap-1 items-center mb-2 md:mb-0">
            <img
              src="https://6valley.6amtech.com/public/assets/back-end/img/order-statistics.png"
              className="w-5 h-5"
              alt="Order Statistics"
            />
            <h2 className="text-lg md:text-xl font-semibold">
              Earning Statistics
            </h2>
          </div>
          <div className="flex flex-wrap items-center gap-2 px-3 py-2 border border-gray-200 rounded">
            <button
              className={`text-black px-2 py-1 rounded ${
                period === "year" ? "text-blue-500 font-semibold" : ""
              }`}
              onClick={() => setPeriod("year")}
            >
              This Year
            </button>
            <button
              className={`text-black px-2 py-1 rounded ${
                period === "month" ? "text-blue-500 font-semibold" : ""
              }`}
              onClick={() => setPeriod("month")}
            >
              This Month
            </button>
            <button
              className={`text-black px-2 py-1 rounded ${
                period === "week" ? "text-blue-500 font-semibold" : ""
              }`}
              onClick={() => setPeriod("week")}
            >
              This Week
            </button>
          </div>
        </div>
        <Line data={dataMap[period]} options={options} />
      </div>
    </div>
  );
};

export default OrderStatistic;
