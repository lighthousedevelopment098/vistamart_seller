import React, { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import apiConfig from "../../../../../components/config/apiConfig";
import { getAuthData } from "../../../../../utils/authHelper";

const ApiUrl = apiConfig.transaction;
const { user, token } = getAuthData();

const ModelWithdrow = ({ onClose, withdrawableBalance }) => {
  const [cardType, setCardType] = useState("JazzCash");
  const [name, setName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [amount, setAmount] = useState("");
  const navigate = useNavigate();

  const MIN_WITHDRAWAL_AMOUNT = 500;

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!name || !accountNumber || !amount) {
      Swal.fire("Error", "All fields are required!", "error");
      return;
    }

    const amountNumber = parseFloat(amount);
    if (amountNumber < MIN_WITHDRAWAL_AMOUNT) {
      Swal.fire("Error", `Minimum withdrawal amount is PKR ${MIN_WITHDRAWAL_AMOUNT}.`, "error");
      return;
    }

    if (amountNumber > withdrawableBalance) {
      Swal.fire("Error", "Withdrawal amount exceeds withdrawable balance.", "error");
      return;
    }

    // Prepare data for API
    const requestData = {
      amount: amountNumber,
      accountName: name,
      accountNumber,
      accountProvider: cardType,
      requestedBy: user?._id, // User ID passed dynamically
    };

    try {
      const response = await fetch(`${ApiUrl}/withdraws`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(requestData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit withdrawal request");
      }

      Swal.fire({
        title: "Success",
        text: "Withdrawal request submitted successfully!",
        icon: "success",
        timer: 2000, // 2-second timer
        showConfirmButton: false,
      });

      setTimeout(() => {
        navigate("/withdraws"); // Navigate to /withdraw after 2 seconds
      }, 2000);

      onClose(); // Close the modal
    } catch (error) {
      Swal.fire("Error", error.message, "error");
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
  
    // Field-specific validation
    if (name === "name") {
      // Allow only alphabetic characters and spaces
      const alphabetRegex = /^[a-zA-Z\s]*$/;
      if (!alphabetRegex.test(value)) {
        Swal.fire("Error", "Account Name must contain only alphabetic characters.", "error");
        return;
      }
  
      // Limit length to 24 characters
      if (value.length > 20) {
        Swal.fire("Error", "Account Name is limited to 24 characters.", "error");
        return;
      }
    }
  
    if (name === "accountNumber") {
      // Allow alphanumeric characters (letters and numbers only)
      const alphanumericRegex = /^[a-zA-Z0-9]*$/;
      if (!alphanumericRegex.test(value)) {
        Swal.fire("Error", "Account Number must contain only letters and numbers.", "error");
        return;
      }
  
      // Limit length to 24 characters
      if (value.length > 24) {
        Swal.fire("Error", "Account Number is limited to 24 characters.", "error");
        return;
      }
    }
  
    // Update state for the corresponding input
    switch (name) {
      case "name":
        setName(value);
        break;
      case "accountNumber":
        setAccountNumber(value);
        break;
      case "amount":
        setAmount(value);
        break;
      default:
        break;
    }
  };
  
  
  

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Account Provider</label>
        <select
          value={cardType}
          onChange={(e) => setCardType(e.target.value)}
          className="mt-1 block w-full px-3 py-2 rounded-md bg-white border-gray-400 shadow-sm focus:border-gray-300 focus:ring focus:ring-gray-200 focus:ring-opacity-50"
        >
          <option value="JazzCash">JazzCash</option>
          <option value="Easypaisa">Easypaisa</option>
          <option value="Bank">Bank</option>
        </select>
      </div>
      <div className="mb-4">
  <label className="block text-sm font-medium text-gray-700">Account Name</label>
  <input
    type="text"
    name="name" // Correct name for validation
    value={name}
    onChange={handleInputChange} // Single function for input handling
    className="mt-1 block w-full px-3 py-2 rounded-md bg-white border-gray-400 shadow-sm focus:border-gray-300 focus:ring focus:ring-gray-200 focus:ring-opacity-50"
    placeholder="John Doe"
  />
</div>
<div className="mb-4">
  <label className="block text-sm font-medium text-gray-700">Account Number</label>
  <input
    type="text"
    name="accountNumber" // Correct name for validation
    value={accountNumber}
    onChange={handleInputChange} // Single function for input handling
    className="mt-1 block w-full px-3 py-2 rounded-md bg-white border-gray-400 shadow-sm focus:border-gray-300 focus:ring focus:ring-gray-200 focus:ring-opacity-50"
    placeholder="123456789012"
  />
</div>
<div className="mb-4">
  <label className="block text-sm font-medium text-gray-700">Amount</label>
  <input
    type="number"
    name="amount" // Correct name for validation
    value={amount}
    onChange={handleInputChange} // Single function for input handling
    className="mt-1 block w-full px-3 py-2 rounded-md bg-white border-gray-400 shadow-sm focus:border-gray-300 focus:ring focus:ring-gray-200 focus:ring-opacity-50"
    placeholder="Enter amount"
  />
</div>

      <div className="mt-3 flex gap-3 items-center">
        <button
          type="submit"
          className="w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-green-500 text-base font-medium text-white hover:bg-green-600 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-green-400"
        >
          Request
        </button>
        <button
          type="button"
          className="w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-gray-200"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </form>
  );
};

export default ModelWithdrow;