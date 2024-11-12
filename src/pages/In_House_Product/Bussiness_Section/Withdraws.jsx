// import React, { useState } from "react";
// import { FaArrowDownWideShort } from "react-icons/fa6";

// const Withdraws = () => {
//   const [showExportOptions, setShowExportOptions] = useState(false);

//   const toggleExportOptions = () => {
//     setShowExportOptions(!showExportOptions);
//   };

//   return (
//     <>
//       <div className="w-full h-full bg-[#F9F9FB]">
//         <div className="flex items-center">
//           <img
//             src="https://6valley.6amtech.com/public/assets/back-end/img/withdraw-icon.png"
//             className="h-7 w-7 mt-10 ml-10"
//           />
//           <p className="ml-3 mt-10 text-[#334257] text-xl font-semibold ">
//             Withdraw
//           </p>
//         </div>
//         <div className="bg-white border border-slate-400 shadow rounded-lg ml-12 mr-12 h-[50vh] mt-3 w-[75vw]">
//           <div className="flex items-center mt-3 ml-4">
//             <p className="text-[#334257] font-semibold">Withdraw Request Table</p>
//             <p className="bg-slate-300 text-black px-2 py-0 rounded-full ml-2">3</p>
//           </div>
//           <div className="ml-[60%] mt-3 flex items-end">
//             <select className="border border-slate-300  hover:bg-slate-300 px-4 py-2 bg-slate-50 rounded ml-32">
//               <option value="All">All</option>
//               <option value="Approved">Approved</option>
//               <option value="Denied">Denied</option>
//               <option value="Pending">Pending</option>
//             </select>

//             <div className="relative ml-6">
//               <button
//                 onClick={toggleExportOptions}
//                  className="flex items-center gap-2 border  bg-slate-50 hover:bg-slate-300  rounded px-4 py-2"

//               >
//                 <FaArrowDownWideShort />
//                 Export
//               </button>
//               {showExportOptions && (
//                 <div className="absolute right-0 mt-2 w-48 bg-white border border-slate-300 shadow-lg rounded">
//                   <div className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-100">
//                     <img
//                       src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFqy-evG5emBpFQ8T0gPJIN_U90oCsSKKlaw&s"
//                       alt="Excel Icon"
//                       className="h-5 w-5"
//                     />
//                     <span className="ml-2">Excel</span>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

//  export default Withdraws;

import React, { useState } from "react";
import { FaArrowDownWideShort } from "react-icons/fa6";
import { BiHide } from "react-icons/bi";

const Withdraws = () => {
  const [showExportOptions, setShowExportOptions] = useState(false);

  const toggleExportOptions = () => {
    setShowExportOptions(!showExportOptions);
  };

  const list = [
    // {
    //   id: 1,
    //   requestTime: "12 June 2022",
    //   price: "500",
    //   status: "Denied",
    //   action: "Close",
    // },
    // {
    //   id: 2,
    //   price: "600",
    //   requestTime: "12 June 2022",
    //   status: "Approved",
    //   action: "Close",
    // },
    // {
    //   id: 3,
    //   price: "500",
    //   requestTime: "12 June 2022",
    //   status: "Pending",
    //   action: "Close",
    // },
  ];

  return (
    <>
      <div className="w-full h-full p-2 ml-3 bg-[#F9F9FB] p-3">
        
        <div className="flex items-center">
          <img
            src="https://6valley.6amtech.com/public/assets/back-end/img/withdraw-icon.png"
            className="h-7 w-7 mt-10 "
          />
          <p className="ml-3 mt-10 text-[#334257] text-xl font-semibold">
            Withdraw
          </p>
        </div>
        <div className="bg-white border border-slate-400 shadow rounded-lg p-4 h-full mt-4 w-full">
        <div className=" flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mt-4 ml-4">
            <p className="text-[#334257] font-semibold">
              Withdraw Request Table
            </p>
            <p className="bg-slate-300 text-black px-2 py-0 rounded-full ml-2">
              3
            </p>
          </div>
          <div className="  flex flex-col md:flex-row gap-2 ">
            <select className="border border-slate-300 hover:bg-slate-300 px-4 py-2 bg-slate-50 rounded ">
              <option value="All">All</option>
              <option value="Approved">Approved</option>
              <option value="Denied">Denied</option>
              <option value="Pending">Pending</option>
            </select>
            <div className="relative ml-6">
              <button
                onClick={toggleExportOptions}
                className="flex items-center gap-2 border bg-slate-50 hover:bg-slate-300 rounded px-4 py-2"
              >
                <FaArrowDownWideShort />
                Export
              </button>
              {showExportOptions && (
                <div className="absolute right-0  w-48 bg-white border border-slate-300 shadow-lg rounded">
                  <div className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-100">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFqy-evG5emBpFQ8T0gPJIN_U90oCsSKKlaw&s"
                      alt="Excel Icon"
                      className="h-5 w-5"
                    />
                    <span className="ml-2">Excel</span>
                  </div>
                </div>
              )}
            </div>
            </div>
          </div>
          <div className="w-full mt-10">
            <div className="overflow-x-auto">
              <table className="w-full bg-white shadow-md border-collapse">
                <thead className="bg-blue-50 h-12 border-b border-blue-500 text-blue-900">
                  <tr>
                    <th className="px-4 py-2 text-center">SL</th>
                    <th className="px-4 py-2 text-center">Amount</th>
                    <th className="px-4 py-2 text-center">Request Time</th>
                    <th className="px-4 py-2 text-center">Status</th>
                    <th className="px-4 py-2 text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {list.map((item) => (
                    <tr key={item.id} className="hover:bg-gray-100">
                      <td className="px-3 py-4 text-center font-semibold">
                        {item.id}
                      </td>
                      <td className="px-4 py-2 text-center text-[.9rem] font-semibold">
                        {item.price}
                      </td>
                      <td className="px-4 py-2 text-center text-[.9rem] font-semibold">
                        {item.requestTime}
                      </td>
                      <td className="px-4 py-2 text-center">
                        <span
                          className={`px-2 py-1 rounded-full text-sm font-semibold ${
                            item.status === "Denied"
                              ? "bg-red-100 text-red-500"
                              : item.status === "Approved"
                              ? "bg-green-100 text-green-500"
                              : item.status === "Pending"
                              ? "bg-blue-100 text-blue-500"
                              : ""
                          }`}
                        >
                          {item.status}
                        </span>
                      </td>
                      <td className="px-4 py-2 text-center">
                        <button className="px-2 py-1 border border-blue-500 bg-blue-400 text-white rounded hover:bg-[#58C0EE] hover:text-white transition">
                          {item.action}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Withdraws;
