
import React, { useState, useEffect } from "react";
import { FaGlobe, FaCommentDots, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { logout } from '../redux/auth/authSlice';

const Header = () => {
  const dispatch = useDispatch();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    dispatch(logout());
    toast.success("Logged out successfully!");
  };

  const handleOutsideClick = (e) => {
    if (!e.target.closest("#dropdown")) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <>
      <ToastContainer />
      <div>
        {/* Header Component */}
        <div className="header flex items-center justify-between py-2 px-6 shadow fixed top-0 left-0 right-0 bg-white z-50">
          {/* Left Section: Logo */}
          <div className=" ">
            <img
              src="/vistalogo.png"
              alt="Logo"
              className="md:h-12 h-8 w-full object-center"
            />
          </div>

          {/* Right Section: Menu and Icons */}
          <div className="right flex items-center space-x-4">
            {/* User Icon and Dropdown */}
            <div className="relative" id="dropdown">
              <div
                className="flex items-center cursor-pointer"
                onClick={toggleDropdown}
              >
                <img
                  src="man.jpg"
                  alt="User"
                  className="w-8 h-8 rounded-full"
                />
                <span className="ml-2">Seller</span>
              </div>

              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white border rounded-lg shadow-lg z-50">
                  <div className="flex gap-2 p-4">
                    <img
                      src="https://cdn.vectorstock.com/i/1000x1000/23/85/courier-checks-parcels-list-boxes-for-sending-vector-13222385.webp"
                      className="w-10 h-10"
                      alt="seller"
                    />
                    <div>
                      <h1 className="font-bold">Seller</h1>
                      <h2 className="text-sm text-wrap">
                        a...@seller@gmail.com
                      </h2>
                    </div>
                  </div>
                  <Link
                    to={"/profileinformation"}
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Setting
                  </Link>
                  <div className="border-t my-2"></div>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Spacer for Header */}
        <div className="h-16"></div>
      </div>
    </>
  );
};

export default Header;