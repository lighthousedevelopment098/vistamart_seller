
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
// import "./OrderStatistic.css"; // Assuming you have a CSS file for custom styles

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
//       labels: [
//         "Jan",
//         "Feb",
//         "Mar",
//         "Apr",
//         "May",
//         "Jun",
//         "Jul",
//         "Aug",
//         "Sep",
//         "Oct",
//         "Nov",
//         "Dec",
//       ],
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
//     // ... month and week data
//   };

//   const options = {
//     responsive: true,
//     maintainAspectRatio: false, // Ensures the chart can adjust its height and width
//     scales: {
//       y: {
//         beginAtZero: true,
//         suggestedMin: 0,
//         suggestedMax: 700,
//         ticks: {
//           stepSize: 100,
//           callback: function (value) {
//             return `PKR  ${value}`;
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
//             label += `PKR ${context.raw}`;
//             return label;
//           },
//           footer: function (context) {
//             let total = 0;
//             context.forEach((item) => {
//               total += item.raw;
//             });
//             return `Total: PKR ${total}`;
//           },
//         },
//         displayColors: true,
//       },
//       legend: {
//         display: true,
//         position: "top",
//       },
//     },
//   };

//   return (
//     <div>
//       <div className="order-statistic-summary bg-white border rounded-lg border-gray-200 py-5 px-5 mt-4">
//         <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-0">
//           <div className="flex gap-1 items-center mb-2 md:mb-0">
//             <img
//               src="https://6valley.6amtech.com/public/assets/back-end/img/order-statistics.png"
//               className="w-5 h-5"
//               alt="Order Statistics"
//             />
//             <h2 className="text-lg md:text-xl font-semibold">
//               Earning Statistics
//             </h2>
//           </div>
//           <div className="flex flex-wrap items-center gap-2 px-3 py-2 border border-gray-200 rounded">
//             <button
//               className={`text-black px-2 py-1 rounded ${
//                 period === "year" ? "text-blue-500 font-semibold" : ""
//               }`}
//               onClick={() => setPeriod("year")}
//             >
//               This Year
//             </button>
//             <button
//               className={`text-black px-2 py-1 rounded ${
//                 period === "month" ? "text-blue-500 font-semibold" : ""
//               }`}
//               onClick={() => setPeriod("month")}
//             >
//               This Month
//             </button>
//             <button
//               className={`text-black px-2 py-1 rounded ${
//                 period === "week" ? "text-blue-500 font-semibold" : ""
//               }`}
//               onClick={() => setPeriod("week")}
//             >
//               This Week
//             </button>
//           </div>
//         </div>
//         {/* Scrollable container for the graph */}
//         <div className="relative w-full overflow-x-auto">
//           <div className="min-w-[700px] h-64 sm:h-72 md:h-96 lg:h-[400px]">
//             <Line data={dataMap[period]} options={options} />
//           </div>
//         </div>
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
  const [period, setPeriod] = useState("year");

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
          fill: true,
          backgroundColor: "rgba(102, 177, 251, 0.1)",
          borderColor: "#009444",
          borderWidth: 3,
          tension: 0.3,
        },
        {
          label: "Vendor",
          data: [200, 180, 240, 230, 220, 190, 210, 250, 260, 270, 280, 300],
          fill: true,
          backgroundColor: "rgba(149, 206, 120, 0.1)",
          borderColor: "#66B1FB",
          borderWidth: 3,
          tension: 0.3,
        },
        {
          label: "Customer",
          data: [150, 140, 160, 150, 170, 180, 190, 200, 220, 230, 240, 250],
          fill: true,
          backgroundColor: "rgba(255, 193, 7, 0.1)",
          borderColor: "rgba(255, 193, 7, 1)",
          borderWidth: 3,
          tension: 0.3,
        },
      ],
    },
    month: {
      labels: Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`),
      datasets: [
        {
          label: "Inhouse",
          data: Array.from({ length: 30 }, () => Math.floor(Math.random() * 500)),
          fill: true,
          backgroundColor: "rgba(102, 177, 251, 0.1)",
          borderColor: "#009444",
          borderWidth: 3,
          tension: 0.3,
        },
        {
          label: "Vendor",
          data: [200, 180, 240, 230, 220, 190, 210, 250, 260, 270, 280, 300],
          fill: true,
          backgroundColor: "rgba(149, 206, 120, 0.1)",
          borderColor: "#66B1FB",
          borderWidth: 3,
          tension: 0.3,
        },
        {
          label: "Customer",
          data: [150, 140, 160, 150, 170, 180, 190, 200, 220, 230, 240, 250],
          fill: true,
          backgroundColor: "rgba(255, 193, 7, 0.1)",
          borderColor: "rgba(255, 193, 7, 1)",
          borderWidth: 3,
          tension: 0.3,
        },
        // Add similar datasets for "Vendor" and "Customer"
      ],
    },
    week: {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      datasets: [
        {
          label: "Inhouse",
          data: Array.from({ length: 7 }, () => Math.floor(Math.random() * 500)),
          fill: true,
          backgroundColor: "rgba(102, 177, 251, 0.1)",
          borderColor: "#009444",
          borderWidth: 3,
          tension: 0.3,
        },
        {
          label: "Vendor",
          data: [200, 180, 240, 230, 220, 190, 210, 250, 260, 270, 280, 300],
          fill: true,
          backgroundColor: "rgba(149, 206, 120, 0.1)",
          borderColor: "#66B1FB",
          borderWidth: 3,
          tension: 0.3,
        },
        {
          label: "Customer",
          data: [150, 140, 160, 150, 170, 180, 190, 200, 220, 230, 240, 250],
          fill: true,
          backgroundColor: "rgba(255, 193, 7, 0.1)",
          borderColor: "rgba(255, 193, 7, 1)",
          borderWidth: 3,
          tension: 0.3,
        },
        // Add similar datasets for "Vendor" and "Customer"
      ],
    },
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: (value) => `PKR ${value}`,
        },
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: (context) => `PKR ${context.raw}`,
        },
      },
      legend: {
        display: true,
        position: "top",
      },
    },
  };

  return (
    <div>
      <div className="order-statistic-summary bg-white shadow-lg rounded-lg py-5 px-5 mt-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-0">
          <div className="flex gap-1 items-center mb-2 md:mb-0">
            <img
              src="https://6valley.6amtech.com/public/assets/back-end/img/order-statistics.png"
              className="w-5 h-5"
              alt="Order Statistics"
            />
            <h2 className="text-lg md:text-xl font-semibold text-gray-800">
              Earning Statistics
            </h2>
          </div>
          <div className="flex flex-wrap items-center gap-2 px-3 py-2 border border-gray-200 rounded">
            <button
              type="button"
              className={`px-4 py-2 rounded transition-colors ${
                period === "year"
                  ? "bg-blue-100 text-blue-500 font-semibold"
                  : "bg-gray-100 text-gray-600"
              }`}
              onClick={() => setPeriod("year")}
            >
              This Year
            </button>
            <button
              type="button"
              className={`px-4 py-2 rounded transition-colors ${
                period === "month"
                  ? "bg-blue-100 text-blue-500 font-semibold"
                  : "bg-gray-100 text-gray-600"
              }`}
              onClick={() => setPeriod("month")}
            >
              This Month
            </button>
            <button
              type="button"
              className={`px-4 py-2 rounded transition-colors ${
                period === "week"
                  ? "bg-blue-100 text-blue-500 font-semibold"
                  : "bg-gray-100 text-gray-600"
              }`}
              onClick={() => setPeriod("week")}
            >
              This Week
            </button>
          </div>
        </div>
        <div className="relative w-full overflow-x-auto">
          <div className="min-w-[700px] h-64 sm:h-72 md:h-96 lg:h-[400px]">
            <Line data={dataMap[period]} options={options} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderStatistic;
