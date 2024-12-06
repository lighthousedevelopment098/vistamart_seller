import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchVendorBankById, updateVendorBank } from "../../../components/redux/vendorBankSlice";
import { getAuthData } from "../../../utils/authHelper";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import LoadingSpinner from "../../../components/LoodingSpinner/LoadingSpinner";

const UpdateBankForm = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = getAuthData();
  const userId = user?.id;

  // Fetch vendor bank from the state
  const { vendorBank, loading, error } = useSelector((state) => state.vendorBanks);

  const [formData, setFormData] = useState({
    holderName: "",
    bankName: "",
    branch: "",
    accountNumber: "",
    vendor: userId,
  });

  // Fetch bank info by ID on component mount
  useEffect(() => {
    dispatch(fetchVendorBankById(id));
  }, [dispatch, id]);

  // Populate form when the bank data is fetched
  useEffect(() => {
    if (vendorBank) {
      setFormData({
        holderName: vendorBank.holderName || "",
        bankName: vendorBank.bankName || "",
        branch: vendorBank.branch || "",
        accountNumber: vendorBank.accountNumber || "",
        vendor: userId,
      });
    }
  }, [vendorBank, userId]);

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission for updating the bank info
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Update bank data
    dispatch(updateVendorBank({ bankId: id, bankData: formData }))
      .unwrap()
      .then(() => {
        Swal.fire("Success!", "Vendor bank updated successfully.", "success");
        navigate("/bankinformation"); // Navigate to bankinfo page after success
      })
      .catch((err) => {
        Swal.fire("Error!", err || "There was an issue updating the vendor bank.", "error");
      });
  };

  return (
    <div className="md:mx-10 md:my-5">
      <div className="flex items-center gap-2 py-5 px-2">
        <img
          src="https://6valley.6amtech.com/public/assets/back-end/img/my-bank-info.png"
          className="h-7 w-7"
          alt="Bank Icon"
        />
        <p className="text-[#334257] text-xl font-semibold">Update Bank Info</p>
      </div>
      <div className="bg-white p-4 mt-2 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Update Bank Info</h2>
        {loading ? (
          <p><LoadingSpinner/></p>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <div>
                <label className="block font-medium">
                  Bank Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="bankName"
                  value={formData.bankName}
                  onChange={handleChange}
                  className="w-full mt-1 border rounded p-2 outline-none"
                  required
                />
              </div>
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

            <div className="flex justify-end space-x-4 mt-6">
              <button
                type="submit"
                className="bg-primary-500 text-white px-4 py-2 rounded hover:bg-primary-dark-500"
                style={{color:"white"}}
              >
                Update Bank
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default UpdateBankForm;
