import React, { useState, useEffect } from "react";
import { FaArrowDownWideShort } from "react-icons/fa6";
import axios from "axios";
import apiConfig from "../../../components/config/apiConfig";
import { getAuthData } from "../../../utils/authHelper";

const Withdraws = () => {
  const [showExportOptions, setShowExportOptions] = useState(false);
  const [withdrawRequests, setWithdrawRequests] = useState([]);
  const [filterStatus, setFilterStatus] = useState("All");

  const { token, user } = getAuthData();
  const id = user?._id;
  const ApiUrl = `${apiConfig.transaction}/withdraws?requestedBy=${id}`;

  useEffect(() => {
    const fetchWithdrawRequests = async () => {
      try {
        const response = await axios.get(ApiUrl, {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (response.data?.status === "success") {
          setWithdrawRequests(response.data.doc);
        }
      } catch (error) {
        console.error("Error fetching withdraw requests:", error);
      }
    };

    fetchWithdrawRequests();
  }, [ApiUrl, token]);

  const toggleExportOptions = () => {
    setShowExportOptions(!showExportOptions);
  };

  const filteredRequests =
    filterStatus === "All"
      ? withdrawRequests
      : withdrawRequests.filter((req) => req.status === filterStatus);

  return (
    <div className="w-full h-full ml-2 p-4 bg-[#F9F9FB]">
      <div className="flex items-center">
        <img
          src="https://6valley.6amtech.com/public/assets/back-end/img/withdraw-icon.png"
          alt="Withdraw Icon"
          className="h-7 w-7 mt-10"
        />
        <p className="ml-3 mt-10 text-[#334257] text-xl font-semibold">
          Withdraw
        </p>
      </div>
      <div className="bg-white border border-slate-400 shadow rounded-lg p-4 h-full mt-4 w-full">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mt-4 ml-4">
            <p className="text-[#334257] font-semibold">Withdraw Request Table</p>
            <p className="bg-slate-300 text-black px-2 py-0 rounded-full ml-2">
              {filteredRequests.length}
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-2">
            <select
              className="border border-slate-300 hover:bg-slate-300 px-4 py-2 bg-slate-50 rounded"
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
            >
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
                <div className="absolute right-0 w-48 bg-white border border-slate-300 shadow-lg rounded">
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
                  <th className="px-4 py-2 text-center">Note</th>
                </tr>
              </thead>
              <tbody>
                {filteredRequests.map((item, index) => (
                  <tr key={item._id} className="hover:bg-gray-100">
                    <td className="px-3 py-4 text-center font-semibold">
                      {index + 1}
                    </td>
                    <td className="px-4 py-2 text-center text-[.9rem] font-semibold">
                      {item.amount}
                    </td>
                    <td className="px-4 py-2 text-center text-[.9rem] font-semibold">
                      {new Date(item.createdAt).toLocaleString()}
                    </td>
                    <td className="px-4 py-2 text-center">
                      <span
                        className={`px-2 py-1 rounded-full text-sm font-semibold ${
                          item.status === "Denied"
                            ? "bg-red-100 text-red-500"
                            : item.status === "Approved"
                            ? "bg-green-100 text-green-500"
                            : "bg-blue-100 text-blue-500"
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>
                   
                    <td className="px-4 py-2 text-center text-[.9rem] font-semibold">
                      {item?.note}
                    </td>
                    {/* <td className="px-4 py-2 text-center">
                      <button className="px-2 py-1 border border-blue-500 bg-blue-400 text-white rounded hover:bg-[#58C0EE] hover:text-white transition">
                        Close
                      </button>
                    </td> */}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Withdraws;
