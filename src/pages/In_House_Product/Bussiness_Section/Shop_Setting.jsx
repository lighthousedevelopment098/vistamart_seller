import React, { useState } from "react";
import { fetchVendors, } from "../../../components/redux/vendorSlice";

const Shop_Setting = () => {
  const [isOpen, setIsOpen] = useState(false);
  fetchVendors
  const toggleHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full min-h-screen bg-[#F9F9FB] p-6 md:p-10">
      <div className="flex gap-2 items-center">
        <img
          src="/shop-info.png"
          className="h-7 w-7 "
          alt="Shop Icon"
        />
        <p className=" text-[#334257] text-xl md:text-2xl font-semibold">
          Shop Info
        </p>
      </div>
      <p className="mt-3 mx-3  ">
        <span className="border-b-2 pb-2  border-b-primary font-semibold text-primary">
          {" "}
          General
        </span>
      </p>
      {/* <div className="border-b-4 border-primary mt-2"></div> */}
      <div className="bg-white shadow-lg   mt-5 rounded-lg p-4 md:p-6">
        <div className="border border-primary rounded-lg w-full flex items-center justify-between px-4 py-2">
          <p className="text-primary">Temporary close</p>
          <button
            className={`w-10 h-5 md:w-12 md:h-6 rounded-full ${
              isOpen ? "bg-primary" : "bg-gray-300"
            }`}
            onClick={toggleHandler}
          >
            <span
              className={`block w-4 h-4 md:w-5 md:h-5 rounded-full ${
                isOpen ? "transform translate-x-7" : ""
              } bg-white shadow-md`}
            />
          </button>
        </div>
        <p className="mt-2">
          By turning on temporary close mode, your shop will be shown as
          temporarily off on the website and app for customers. They cannot
          purchase or place orders from your shop during this time.
        </p>
      </div>
      <div className="bg-white shadow-lg mt-5 rounded-lg p-4 md:p-6">
        <div className="flex md:flex-row gap-4 flex-col  md:items-center  justify-between">
          <p className="text-sm md:text-xl text-[#334257] font-semibold">
            My Shop Info
          </p>
          <div className="flex items-center gap-2">
            <button
              className="rounded-full p-2 bg-primary text-sm  border hover:bg-primary-dark"
              style={{ color: "white" }}
            >
              Go to Vacation Mode
            </button>
            {/* <button className="rounded-md  bg-primary text-white px-3 py-1 border-2  hover:bg-primary-dark">
              Edit
            </button> */}
          </div>
        </div>
        <div className="border-b-4 border-[#F9F9FB] w-full mt-2"></div>
        <div className="flex flex-col md:flex-row md:items-center gap-2 mt-4">
          <img
            src="https://6valley.6amtech.com/storage/app/public/shop/2022-04-21-6260f6e190f4c.png"
            className="rounded-full h-28 w-28 md:h-40 md:w-40 "
          />
          <div className="flex flex-col ml-2 md:ml-4">
            <div className="flex items-center gap-4 mt-2 md:mt-4">
              <p className="text-[1rem] font-semibold">Name:</p>
              <p className="text-[1rem] ">Mart Morning</p>
            </div>
            <div className="flex items-center gap-4 mt-2 md:mt-3">
              <p className="text-sm md:text-base font-semibold">Phone:</p>
              <p className="text-sm md:text-base ml-1 md:ml-2">****000</p>
            </div>
            <div className="flex items-center gap-4 mt-2 md:mt-3">
              <p className="text-sm md:text-base font-semibold">Address:</p>
              <p className="text-sm md:text-base ml-1 md:ml-2">
                House no 60, Street no 9...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop_Setting;
