import React, { useState } from "react";
import { Link } from "react-router-dom";

const ModelWithdrow = ({ onClose }) => {
  const [cardType, setCardType] = useState("VISA Card");
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [amount, setAmount] = useState("");
  return (
    <form>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Card Type
        </label>
        <select
          value={cardType}
          onChange={(e) => setCardType(e.target.value)}
          className="mt-1 outline-none hover:border-primary-500 block w-full px-3 py-2 rounded-md bg-white border-gray-400 shadow-sm focus:border-gray-300 focus:ring focus:ring-gray-200 focus:ring-opacity-50"
        >
          <option>VISA Card</option>
          <option>MasterCard</option>
          <option>American Express</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 block outline-none hover:border-primary-500 w-full px-3 py-2 rounded-md bg-white border-gray-400 shadow-sm focus:border-gray-300 focus:ring focus:ring-gray-200 focus:ring-opacity-50"
          placeholder="John Doe"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Card Number
        </label>
        <input
          type="text"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          className="mt-1 block outline-none w-full px-3 py-2 rounded-md bg-white border-gray-400 shadow-sm focus:border-gray-300 focus:ring focus:ring-gray-200 focus:ring-opacity-50"
          placeholder="1234 5678 9876"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Amount
        </label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="mt-1 block w-full outline-none px-3 py-2 rounded-md bg-white border-gray-400 shadow-sm focus:border-gray-300 focus:ring focus:ring-gray-200 focus:ring-opacity-50"
        />
      </div>
      <div className="mt-3 sm:mt-4  flex gap-3 items-center sm:flex sm:flex-row-reverse">
        <Link to={"/dashboard"}>
          <button
            type="submit"
            className="mt-1 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-primary-500 text-base hover:bg-primary-dark-500 font-medium text-gray-700  focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-gray-200 sm:mt-0 sm:w-auto sm:text-sm"
            style={{color:"white"}}
          >
            Request
          </button>
        </Link>
        <button
          type="button"
          className="mt-1 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </form>
  );
};

export default ModelWithdrow;
