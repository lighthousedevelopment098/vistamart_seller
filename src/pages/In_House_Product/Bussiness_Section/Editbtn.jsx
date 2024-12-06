import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createVendorBank,fetchVendorBanks } from "../../../components/redux/vendorBankSlice";
import { getAuthData } from "../../../utils/authHelper";

const AddBankForm = () => {
  const dispatch = useDispatch();
  const { user } = getAuthData(); 
   const userId = user?._id;  // Get the user ID from the user slice of the Redux store
  // console.log("User ID:", userId);  // Get the user ID from the user slice of the Redux store
  const [formData, setFormData] = useState({
    holderName: "",
    bankName: "",
    branch: "",
    accountNumber: "",
    vendor: userId, // Set vendor ID in the form data
  });

  // Handle form input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {

    e.preventDefault(); // Prevent default form submission
     console.log("Form Data:", formData); // Log the form data for debugging purposes
    dispatch(createVendorBank(formData)); // Dispatch the createVendorBank action with form data
    dispatch(fetchVendorBanks({ vendor: userId }));

  };

  return (
    <div className="md:mx-10 md:my-5">
      <div className="flex items-center gap-2 py-5 px-2">
        <img
          src="https://6valley.6amtech.com/public/assets/back-end/img/my-bank-info.png"
          className="h-7 w-7"
          alt="Bank Icon"
        />
        <p className="text-[#334257] text-xl font-semibold">Add Bank Info</p>
      </div>
      <div className="bg-white p-4 mt-2 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Add Bank Info</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {/* Bank Name Field */}
            <div>
              <label className="block font-medium">
                Bank Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="bankName"
                value={formData.bankName}
                onChange={handleChange}
                className="w-full mt-1 border rounded p-2 outline-none "
                required
              />
            </div>
            {/* Branch Name Field */}
            <div>
              <label className="block font-medium">
                Branch Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="branch"
                value={formData.branch}
                onChange={handleChange}
                className="w-full mt-1 border rounded p-2 outline-none"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-4">
            {/* Holder Name Field */}
            <div>
              <label className="block font-medium">
                Holder Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="holderName"
                value={formData.holderName}
                onChange={handleChange}
                className="w-full mt-1 border rounded p-2 outline-none"
                required
              />
            </div>
            {/* Account Number Field */}
            <div>
              <label className="block font-medium">
                Account No <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="accountNumber"
                value={formData.accountNumber}
                onChange={handleChange}
                className="w-full mt-1 border rounded p-2 outline-none"
                required
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end space-x-4 mt-6">
            {/* <button
              type="button"
              className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
              onClick={() => alert("Cancel clicked")}
            >
              Cancel
            </button> */}
            <button
              type="submit"
              className="bg-primary-500 text-white px-4 py-2 rounded hover:bg-primary-dark-500"
              style={{color:"white"}}
            >
              Add Bank
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBankForm;
