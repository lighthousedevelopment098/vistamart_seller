import React, { useState, useEffect } from "react";
import { FaArrowDownWideShort } from "react-icons/fa6";
import axios from "axios";
import apiConfig from "../../../components/config/apiConfig";
import { getAuthData } from "../../../utils/authHelper";

const Withdraws = () => {
  const [showExportOptions, setShowExportOptions] = useState(false);
  const [withdrawRequests, setWithdrawRequests] = useState([]);
  const [filterStatus, setFilterStatus] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

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

  const toggleExportOptions = () => setShowExportOptions(!showExportOptions);

  const filteredRequests =
    filterStatus === "All"
      ? withdrawRequests
      : withdrawRequests.filter((req) => req.status === filterStatus);

  return (
    <div className="w-full h-full p-4 bg-gray-100">
      {/* Title */}
      <div className="flex items-center">
        <img
          src="https://6valley.6amtech.com/public/assets/back-end/img/withdraw-icon.png"
          alt="Withdraw Icon"
          className="h-7 w-7 mt-2"
        />
        <p className="ml-3 mt-2 text-gray-800 text-xl font-semibold">Withdraw</p>
      </div>

      {/* Card */}
      <div className="bg-white border border-gray-200 shadow-md rounded-lg p-4 mt-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-4">
          {/* Table Title */}
          <div className="flex items-center gap-2">
            <p className="text-gray-800 font-semibold">Withdraw Request Table</p>
            <span className="bg-gray-300 text-black px-2 py-1 rounded-full">
              {filteredRequests.length}
            </span>
          </div>

          {/* Filters */}
          <div className="flex gap-2">
            <select
              className="border border-gray-300 px-4 py-2 bg-gray-50 rounded focus:outline-none"
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
            >
              <option value="All">All</option>
              <option value="Approved">Approved</option>
              <option value="Denied">Denied</option>
              <option value="Pending">Pending</option>
            </select>

            {/* Export Options */}
            <div className="relative">
              <button
                onClick={toggleExportOptions}
                className="flex items-center gap-2 border px-4 py-2 bg-gray-50 rounded hover:bg-gray-200"
              >
                <FaArrowDownWideShort />
                Export
              </button>
              {showExportOptions && (
                <div className="absolute right-0 mt-1 w-48 bg-white border border-gray-200 shadow-md rounded z-10">
                  <div className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
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

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead className="bg-gray-200 text-gray-700">
              <tr>
                <th className="px-4 py-2">SL</th>
                <th className="px-4 py-2">Amount</th>
                <th className="px-4 py-2">Request Time</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Transaction Receipt</th>
                <th className="px-4 py-2">Note</th>
              </tr>
            </thead>
            <tbody>
              {filteredRequests.map((item, index) => (
                <tr
                  key={item._id}
                  className="hover:bg-gray-100 border-b text-center"
                >
                  <td className="px-4 py-2">{index + 1}</td>
                  <td className="px-4 py-2">{item.amount}</td>
                  <td className="px-4 py-2">
                    {new Date(item.createdAt).toLocaleString()}
                  </td>
                  <td className="px-4 py-2">
                    <span
                      className={`px-2 py-1 rounded-full text-sm ${
                        item.status === "Denied"
                          ? "bg-red-100 text-red-600"
                          : item.status === "Approved"
                          ? "bg-green-100 text-green-600"
                          : "bg-blue-100 text-blue-600"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                  {/* Transaction Receipt Image */}
                  <td className="px-4 py-2">
                    <img
                      src={`${apiConfig.bucket}/${item.transactionReceiptImage}`}
                      alt="Transaction Receipt"
                      className="h-16 w-16 object-cover cursor-pointer mx-auto rounded"
                      onClick={() =>
                        setSelectedImage(
                          `${apiConfig.bucket}/${item.transactionReceiptImage}`
                        )
                      }
                    />
                  </td>
                  <td className="px-4 py-2">{item.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal for Image Popup */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative">
            <img
              src={selectedImage}
              alt="Full Transaction"
              className="max-w-full max-h-screen rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 text-white text-2xl font-bold"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Withdraws;
