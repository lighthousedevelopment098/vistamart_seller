import React, { useState, useEffect } from "react";
import axios from "axios";
import { getAuthData } from "../../../utils/authHelper";
import apiConfig from "../../../components/config/apiConfig";
import ActionButton from "../../../components/ActionButton/Action";
import { FaEdit } from "react-icons/fa";

const Shop_Setting = () => {
  const [isOpen, setIsOpen] = useState(false); // For temporary close toggle
  const [shopData, setShopData] = useState(null); // For storing fetched shop data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  const toggleHandler = () => {
    setIsOpen(!isOpen);
  };

    const {user} = getAuthData();
  // if (loading) return <p>Loading shop information...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="w-full min-h-screen bg-[#F9F9FB] p-6 md:p-10">
      <div className="flex gap-2 items-center">
        <img src="/shop-info.png" className="h-7 w-7" alt="Shop Icon" />
        <p className="text-[#334257] text-xl md:text-2xl font-semibold">Shop Info</p>
      </div>

      <p className="mt-3 mx-3">
        <span className="border-b-2 pb-2 border-b-primary font-semibold text-primary">General</span>
      </p>

      {/* <div className="bg-white shadow-lg mt-5 rounded-lg p-4 md:p-6">
        <div className="border border-primary rounded-lg w-full flex items-center justify-between px-4 py-2">
          <p className="text-primary">Temporary close</p>
          <button
            className={w-10 h-5 md:w-12 md:h-6 rounded-full ${isOpen ? "bg-primary" : "bg-gray-300"}}
            onClick={toggleHandler}
          >
            <span className={block w-4 h-4 md:w-5 md:h-5 rounded-full ${isOpen ? "transform translate-x-7" : ""} bg-white shadow-md} />
          </button>
        </div>
        <p className="mt-2">
          By turning on temporary close mode, your shop will be shown as temporarily off on the website and app for customers. They cannot purchase or place orders from your shop during this time.
        </p>
      </div> */}

      <div className="bg-white shadow-lg mt-5 rounded-lg p-4 md:p-6">
        <div className="flex md:flex-row gap-4 flex-col md:items-center justify-between">
          <p className="text-sm md:text-xl text-[#334257] font-semibold">My Shop Info</p>
          {/* <button className="rounded-full p-2 bg-primary text-sm border hover:bg-primary-dark text-white">
            Go to Vacation Mode
          </button> */}
            {/* <ActionButton
            to={`/shopedit/${user?._id}`} // Dynamic link
            icon={FaEdit} // Pass dynamic icon
          /> */}
        </div>

        <div className="border-b-4 border-[#F9F9FB] w-full mt-2"></div>

        {/* Display Shop Information */}
        <div className="flex  flex-col md:flex-row md:items-center gap-2 mt-4">
          <img
            src={`${apiConfig.bucket}/${user?.logo || "default-shop-image.png"}`} // Fallback image if not available
            className="rounded-full h-28 w-28 md:h-40 md:w-40 border "
            alt="Shop"
          />
          <div className="flex flex-col ml-2 md:ml-4">
            <div className="flex items-center gap-4 mt-2 md:mt-4">
              <p className="text-[1rem] font-semibold">Name:</p>
              <p className="text-[1rem]">{user?.shopName || "N/A"}</p>
            </div>
            {/* <div className="flex items-center gap-4 mt-2 md:mt-3">
              <p className="text-sm md:text-base font-semibold">:</p>
              <p className="text-sm md:text-base ml-1 md:ml-2">{shopData?.phone || "N/A"}</p>
            </div> */}
            <div className="flex items-center gap-4 mt-2 md:mt-3">
              <p className="text-sm md:text-base font-semibold">Email:</p>
              <p className="text-sm md:text-base ml-1 md:ml-2">{user?.email || "N/A"}</p>
            </div>
            <div className="flex items-center gap-4 mt-2 md:mt-3">
              <p className="text-sm md:text-base font-semibold">Address:</p>
              <p className="text-sm md:text-base ml-1 md:ml-2">{user?.address || "N/A"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop_Setting;