import React, { useEffect, useState } from "react";
import { FaStore } from "react-icons/fa";
import apiConfig from "../../../../components/config/apiConfig";
import { getAuthData } from "../../../../utils/authHelper";
import axiosInstance from "../../../../utils/axiosConfig";

const ApiUrl = apiConfig.transaction;

const Adminwallet = () => {
  const { token, user } = getAuthData();
  const id = user?._id;

  const [walletData, setWalletData] = useState(null);

  // Fetching Admin wallet data
  const fetchAdminWallet = async () => {
    try {
      const response = await axiosInstance.get(`${ApiUrl}/seller-wallets/vendor/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setWalletData(response.data.doc[0]); // Assuming only one document is returned
    } catch (error) {
      console.error(ErrorMessage(error));
    }
  };
  useEffect(() => {
    fetchAdminWallet();
  }, []);

  if (!walletData) {
    return <p>Loading wallet data...</p>; // Show a loading state
  }

  return (
    <div className="bg-white border rounded-lg border-gray-200 mt-2 mx-5 grid grid-cols-3 px-5 py-10 gap-5">
      <div className="flex flex-col items-center justify-center bg-white rounded-lg shadow-md row-span-2">
        <FaStore />
        <h1 className="text-xl text-gray-400">
          PKR {walletData.withdrawableBalance.toLocaleString()}
        </h1>
        <p className="text-sm">In-House Earning</p>
      </div>
      <div className="flex justify-between items-center bg-white rounded-lg shadow-md p-2">
        <div>
          <h1>PKR {walletData.totalCommissionGiven.toLocaleString()}</h1>
          <p>Commission Earned</p>
        </div>
        <FaStore />
      </div>
      <div className="flex justify-between items-center bg-white rounded-lg shadow-md p-2">
        <div>
          <h1>PKR {walletData.totalDeliveryChargeEarned.toLocaleString()}</h1>
          <p>Delivery Charges Earned</p>
        </div>
        <FaStore />
      </div>
      <div className="flex justify-between items-center bg-white rounded-lg shadow-md p-2">
        <div>
          <h1>PKR {walletData.alreadyWithdrawn.toLocaleString()}</h1>
          <p>Already Withdrawn</p>
        </div>
        <FaStore />
      </div>
      <div className="flex justify-between items-center bg-white rounded-lg shadow-md p-2">
        <div>
          <h1>PKR {walletData.pendingWithdraw.toLocaleString()}</h1>
          <p>Pending Withdrawals</p>
        </div>
        <FaStore />
      </div>
    </div>
  );
};

export default Adminwallet;
