import React from "react";
import { Link } from "react-router-dom";

const ActionButton = ({ to, onClick, icon: Icon, className, label }) => {
  return to ? (
    <Link
      to={to}
      className={`btn border-primary-500 text-primary-500 flex justify-center items-center gap-2 hover:bg-primary-dark-500 hover:text-white ${className}`}
    >
      {Icon && <Icon className="" />} {/* If an icon is passed, render it */}
      {label}
    </Link>
  ) : (
    <button
      onClick={onClick}
      className={`btn border-red-500 text-red-500 hover:bg-red-500 hover:text-white ${className}`}
    >
      {Icon && <Icon className="" />}
      {/* If an icon is passed, render it */}
      {/* {label} */}
    </button>
  );
};

export default ActionButton;
