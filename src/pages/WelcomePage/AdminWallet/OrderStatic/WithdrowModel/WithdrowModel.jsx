import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
const WithdrowModel = ({ show, onClose, title, children }) => {
  if (!show) return null;
  return (
    <>
      <div className="fixed z-10 inset-10 overflow-y-auto">
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div
            className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
            aria-hidden="true"
          ></div>
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
            <div className="flex justify-between items-start">
              <h3
                className="text-lg leading-6 font-bold text-gray-900"
                id="modal-title"
              >
                {title}
              </h3>
              <button
                type="button"
                className="text-gray-400 hover:text-gray-500"
                onClick={onClose}
              >
                <FaTimes className="h-3 w-3" />
              </button>
            </div>
            <div className="mt-2">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WithdrowModel;
