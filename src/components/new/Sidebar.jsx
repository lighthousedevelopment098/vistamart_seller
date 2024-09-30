// // end
import React, { useState } from "react";
import { IoHome, IoPersonOutline } from "react-icons/io5";
import { IoCartSharp } from "react-icons/io5";
import {
  MdGroups2,
  MdNotificationsActive,
  MdOutlineDiamond,
  MdOutlineFolderZip,
  MdShoppingBag,
} from "react-icons/md";
import { HiOutlineReceiptRefund } from "react-icons/hi";
import { FaAngleDown, FaAngleUp, FaKey, FaRegStar } from "react-icons/fa";
import { TbCategory2 } from "react-icons/tb";
import { FiChevronDown } from "react-icons/fi"; // Importing icons
import { FaStar } from "react-icons/fa";
import { AiFillDatabase, AiFillPicture, AiOutlineHdd } from "react-icons/ai";
import { FaWarehouse } from "react-icons/fa";
import { AiOutlineSpotify } from "react-icons/ai";
import { GrGallery } from "react-icons/gr";
import {
  BsCardImage,
  BsFillPersonFill,
  BsReverseLayoutSidebarInsetReverse,
} from "react-icons/bs";
import { AiOutlineUsergroupDelete } from "react-icons/ai";
import { IoNotificationsSharp } from "react-icons/io5";
import { PiNotification } from "react-icons/pi";
import { TfiAnnouncement } from "react-icons/tfi";
import { CiInboxOut } from "react-icons/ci";
import { FaMessage } from "react-icons/fa6";
import { FaHeadset } from "react-icons/fa";
import { FcSalesPerformance } from "react-icons/fc";
import { GoReport } from "react-icons/go";
import {
  IoIosNotifications,
  IoMdPerson,
  IoMdStarOutline,
} from "react-icons/io";
import { VscGraphLine } from "react-icons/vsc";
import { Link } from "react-router-dom";

// --------------------------------------------

const Sidebar = ({ setComponent }) => {
  const [showOrderList, setShowOrderList] = useState(false);
  const [showProductList, setShowProductList] = useState(false);
  const [showInHouseProductList, setShowInHouseProductList] = useState(false);
  const [showVenderProductList, setShowVenderProductList] = useState(false);
  const [showRefoundList, setShowRefoundList] = useState(false);
  const [showBrandList, setShowBrandList] = useState(false);
  const [showOfferList, setShowOfferList] = useState(false);
  const [showCustomerList, setShowCustomerList] = useState(false);
  const [showHealthList, setShowHealthList] = useState(false);
  const [showEmployeeList, setShowEmployeethList] = useState(false);
  const [showSystemList, setShowSystemList] = useState(false);
  const [showPageList, setShowPageList] = useState(false);
  const [showBusinessList, setShowBusinessList] = useState(false);
  const [showNotiList, setShowNotiList] = useState(false);

  // for bussness set showing dropdown

  const [showBussnessList, SetShowBussnessList] = useState(false); // write this for each drop down list like for setting order category extra
  // now copy the the above state

  const toggleOrderList = () => {
    setShowOrderList(!showOrderList);
    setShowProductList(false); // Close Product list when Orders list is toggled
    setShowInHouseProductList(false); // Close In House Product List when Orders list is toggled
    setShowRefoundList(false); // Close Refound List when Orders list is toggled
  };

  const toggleProductList = () => {
    setShowProductList(!showProductList);
    setShowOrderList(false); // Close Orders list when Product list is toggled
    setShowInHouseProductList(false); // Close In House Product List when Product list is toggled
    setShowRefoundList(false); // Close Refound List when Product list is toggled
  };

  const toggleInHouseProductList = () => {
    setShowInHouseProductList(!showInHouseProductList);
    setShowOrderList(false); // Close Orders list when In House Product list is toggled
    setShowProductList(false); // Close Product list when In House Product list is toggled
    setShowRefoundList(false); // Close Refound List when In House Product list is toggled
  };

  const toggleVenderProductList = () => {
    setShowVenderProductList(!showVenderProductList);
    setShowInHouseProductList(false);
    setShowOrderList(false); // Close Orders list when In House Product list is toggled
    setShowProductList(false); // Close Product list when In House Product list is toggled
    setShowRefoundList(false); // Close Refound List when In House Product list is toggled
  };

  const toggleRefoundList = () => {
    setShowRefoundList(!showRefoundList);
    setShowOrderList(false); // Close Orders list when Refound list is toggled
    setShowProductList(false); // Close Product list when Refound list is toggled
    setShowInHouseProductList(false); // Close In House Product List when Refound list is toggled
  };
  const toggleBrandList = () => {
    setShowBrandList(!showBrandList);
    setShowRefoundList(false);
    setShowOrderList(false); // Close Orders list when Refound list is toggled
    setShowProductList(false); // Close Product list when Refound list is toggled
    setShowInHouseProductList(false); // Close In House Product List when Refound list is toggled
  };

  const toggleOfferList = () => {
    setShowOfferList(!showOfferList);
    setShowBrandList(false);
    setShowRefoundList(false);
    setShowOrderList(false); // Close Orders list when Refound list is toggled
    setShowProductList(false); // Close Product list when Refound list is toggled
    setShowInHouseProductList(false); // Close In House Product List when Refound list is toggled
  };
  const toggleCustomerList = () => {
    setShowCustomerList(!showCustomerList);
    setShowOfferList(false);
    setShowBrandList(false);
    setShowRefoundList(false);
    setShowOrderList(false); // Close Orders list when Refound list is toggled
    setShowProductList(false); // Close Product list when Refound list is toggled
    setShowInHouseProductList(false); // Close In House Product List when Refound list is toggled
  };

  const toggleHealthList = () => {
    setShowHealthList(!showHealthList);
    setShowCustomerList(false);
    setShowOfferList(false);
    setShowBrandList(false);
    setShowRefoundList(false);
    setShowOrderList(false); // Close Orders list when Refound list is toggled
    setShowProductList(false); // Close Product list when Refound list is toggled
    setShowInHouseProductList(false); // Close In House Product List when Refound list is toggled
  };
  const toggleEmployeeList = () => {
    setShowEmployeethList(!showEmployeeList);
    setShowHealthList(false);
    setShowCustomerList(false);
    setShowOfferList(false);
    setShowBrandList(false);
    setShowRefoundList(false);
    setShowOrderList(false); // Close Orders list when Refound list is toggled
    setShowProductList(false); // Close Product list when Refound list is toggled
    setShowInHouseProductList(false); // Close In House Product List when Refound list is toggled
  };

  const toggleSystemList = () => {
    setShowSystemList(!showSystemList);
    // setShowEmployeeList(false);
    setShowHealthList(false);
    setShowCustomerList(false);
    setShowOfferList(false);
    setShowBrandList(false);
    setShowRefoundList(false);
    setShowOrderList(false); // Close Orders list when Refound list is toggled
    setShowProductList(false); // Close Product list when Refound list is toggled
    setShowInHouseProductList(false); // Close In House Product List when Refound list is toggled
  };

  const toggleBusinessList = () => {
    setShowBusinessList(!showBusinessList);
    setShowPageList(false);
    setShowSystemList(false);
    // setShowEmployeeList(false);
    setShowHealthList(false);
    setShowCustomerList(false);
    setShowOfferList(false);
    setShowBrandList(false);
    setShowRefoundList(false);
    setShowOrderList(false); // Close Orders list when Refound list is toggled
    setShowProductList(false); // Close Product list when Refound list is toggled
    setShowInHouseProductList(false); // Close In House Product List when Refound list is toggled
  };
  const togglePageList = () => {
    setShowPageList(!showPageList);
    setShowSystemList(false);
    // setShowEmployeeList(false);
    setShowHealthList(false);
    setShowCustomerList(false);
    setShowOfferList(false);
    setShowBrandList(false);
    setShowRefoundList(false);
    setShowOrderList(false); // Close Orders list when Refound list is toggled
    setShowProductList(false); // Close Product list when Refound list is toggled
    setShowInHouseProductList(false); // Close In House Product List when Refound list is toggled
  };

  const toggleNotiList = () => {
    setShowNotiList(!showNotiList);

    setShowSystemList(false);
    setShowEmployeeList(false);
    setShowHealthList(false);
    setShowCustomerList(false);
    setShowOfferList(false);
    setShowBrandList(false);
    setShowRefoundList(false);
    setShowOrderList(false); // Close Orders list when Refound list is toggled
    setShowProductList(false); // Close Product list when Refound list is toggled
    setShowInHouseProductList(false); // Close In House Product List when Refound list is toggled
  };

  //now copy the togglefunciton

  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };
  return (
    // <aside className="bg-[#077422] text-white  min-h-screen p-4 flex flex-col fixed left-0  overflow-y-auto">

    <aside className="bg-[#077422] text-white w-64 min-h-screen p-4 flex flex-col fixed left-0  h-full overflow-y-scroll">
      <div className="pb-3 pt-4">
        <div className="flex items-center">
          {/* <button type="button" className="btn">
             <i className="tio-search"></i>
          </button> */}

          <input
            type="text"
            className="ml-2 p-2 bg-[#1f8248] rounded-md focus:outline-none w-full"
            placeholder="Search menu..."
          />
        </div>
      </div>
      {/* Dashboard and POS buttons */}
      <Link
        to="/"
        className=" flex   w-full   align-items-center text-left p-2 rounded hover:bg-[#52c970] text-white hover:text-white mb-3 "
        style={{ color: "white" }}
      >
        <IoHome className=" mr-2  " />
        <span className="">Dashboard</span>
      </Link>
      {/* //POS------------------------- */}
      {/* <Link
        to="/pos"
        className="block w-full text-left p-2 rounded hover:bg-[#52c970] text-white hover:text-white mb-3 "
        style={{ color: "white" }}
      >
        <MdShoppingBag className="inline-block mr-2" /> POS
      </Link> */}
      {/* order management */}
      <div className="mt-4">
        <small className="block text-gray-400 uppercase font-serif">
          Order Management
        </small>
        <button
          className="w-full text-left p-2 rounded hover:bg-[#52c970] text-white hover:text-white flex justify-between relative "
          onClick={togglePageList}
          style={{ color: "white" }}
        >
          <div className="flex gap-1 justify-between align-items-center">
            <IoCartSharp /> Orders
          </div>
          <span className="float-right">
            {showPageList ? <FaAngleUp /> : <FaAngleDown />}
          </span>
        </button>
        {showPageList && (
          <ul className="ml-4 mt-2 space-y-1">
            <li>
              <Link
                to="/allorders"
                className="block w-full text-left  gap-2 p-1 pl-4 rounded hover:bg-gray-500 text-blue-700"
                style={{ color: "white" }}
              >
                <span className="text-green-700">•</span> ALL
              </Link>
            </li>
            <li>
              <Link
                to="/pendingorder"
                className="block w-full text-left p-1 pl-4 rounded hover:bg-gray-500 text-blue-700"
                style={{ color: "white" }}
              >
                • Pending
              </Link>
            </li>
            <li>
              <Link
                to="/confirmedorder"
                className="block w-full text-left p-1 pl-4 rounded hover:bg-gray-500 text-blue-700"
                style={{ color: "white" }}
              >
                • Confirmed
              </Link>
            </li>
            <li>
              <Link
                to="/packagingorder"
                className="block w-full text-left p-1 pl-4 rounded hover:bg-gray-500 text-blue-700"
                style={{ color: "white" }}
              >
                • Packaging
              </Link>
            </li>
            <li>
              <Link
                to="/outfordelivery"
                className="block w-full text-left p-1 pl-4 rounded hover:bg-gray-500 text-blue-700"
                style={{ color: "white" }}
              >
                • Out for delivery
              </Link>
            </li>
            <li>
              <Link
                to="/deliveredorder"
                className="block w-full text-left p-1 pl-4 rounded hover:bg-gray-500 text-blue-700"
                style={{ color: "white" }}
              >
                • Delivered
              </Link>
            </li>
            <li>
              <Link
                to="/returnedorder"
                className="block w-full text-left p-1 pl-4 rounded hover:bg-gray-500 text-blue-700"
                style={{ color: "white" }}
              >
                • Returned
              </Link>
            </li>
            <li>
              <Link
                to="/failorder"
                className="block w-full text-left p-1 pl-4 rounded hover:bg-gray-500 text-blue-700"
                style={{ color: "white" }}
              >
                • Failed to Deliver
              </Link>
            </li>
            <li>
              <Link
                to="/cancelledorder"
                className="block w-full text-left p-1 pl-4 rounded hover:bg-gray-500 text-blue-700"
                style={{ color: "white" }}
              >
                • Canceled
              </Link>
            </li>
          </ul>
        )}
      </div>
      {/* Refund request */}
      <div className="mt-4">
        <button
          className="w-full text-left p-2 rounded hover:bg-[#52c970] text-white hover:text-white flex justify-between relative "
          onClick={toggleRefoundList}
          style={{ color: "white" }}
        >
          <div className="flex gap-1 justify-between align-items-center">
            <AiFillDatabase /> Refund Requests
          </div>
          <span className="float-right">
            {showRefoundList ? <FaAngleUp /> : <FaAngleDown />}
          </span>
        </button>
        {showRefoundList && (
          <ul className="ml-4 mt-2 space-y-1">
            <li>
              <Link
                to="/pendingrefundrequests"
                className="block w-full text-left  gap-2 p-1 pl-4 rounded hover:bg-gray-500 text-blue-700"
                style={{ color: "white" }}
              >
                <span className="text-green-700">•</span> Pending
              </Link>
            </li>
            <li>
              <Link
                to="/approverefundrequests"
                className="block w-full text-left p-1 pl-4 rounded hover:bg-gray-500 text-blue-700"
                style={{ color: "white" }}
              >
                • Approved
              </Link>
            </li>
            <li>
              <Link
                to="/refunded"
                className="block w-full text-left p-1 pl-4 rounded hover:bg-gray-500 text-blue-700"
                style={{ color: "white" }}
              >
                • Refunded
              </Link>
            </li>
            <li>
              <Link
                to="/rejected"
                className="block w-full text-left p-1 pl-4 rounded hover:bg-gray-500 text-blue-700"
                style={{ color: "white" }}
              >
                • Rejected
              </Link>
            </li>
          </ul>
        )}
      </div>

      {/* /////Product Management-------------------------- */}
      {/*  products */}
      <div className="mt-2">
        <small className="block text-gray-400 uppercase">
          Product Management
        </small>
        <button
          className="block w-full text-left p-2  rounded hover:bg-[#52c970] text-white hover:text-white flex justify-between text-white hover:text-[#7EC283]  relative"
          onClick={toggleInHouseProductList}
          style={{ color: "white" }}
        >
          {/* Categories */}
          {/* <span className="float-right"> */}
          {/* <i className={`tio-chevron-${showProductList ? 'up' : 'down'}`}></i> */}
          {/* <FiChevronDown /> */}
          {/* </span> */}

          <div className="flex gap-1 justify-between align-items-center">
            <MdOutlineDiamond /> Products
          </div>
          <span className="float-right">
            {showRefoundList ? <FaAngleUp /> : <FaAngleDown />}
          </span>
        </button>
        {showInHouseProductList && (
          <ul className="ml-4 mt-2 space-y-1">
            <li>
              <Link
                to="/inhouseproductlist"
                className="block w-full text-left p-1 pl-4 rounded hover:bg-gray-500"
                style={{ color: "white" }}
              >
                • Product List
              </Link>
            </li>
            <li>
              <Link
                to="/approvedproductlist"
                className="block  w-full text-left p-1 pl-4 rounded hover:bg-gray-500"
                style={{ color: "white" }}
              >
                • Approved Product List
              </Link>
            </li>

            <li>
              <Link
                to="newproductrequest"
                className="block w-full text-left p-1 pl-4 rounded hover:bg-gray-500"
                style={{ color: "white" }}
              >
                • New Product Request
              </Link>
            </li>
            <li>
              <Link
                to="deniedproduct"
                className="block w-full text-left p-1 pl-4 rounded hover:bg-gray-500"
                style={{ color: "white" }}
              >
                • Denied Product Request
              </Link>
            </li>
            <li>
              <Link
                to="inhouseaddproduct"
                className="block w-full text-left p-1 pl-4 rounded hover:bg-gray-500"
                style={{ color: "white" }}
              >
                • Add New Product
              </Link>
            </li>
            <li>
              <Link
                to="productgallery"
                className="block w-full text-left p-1 pl-4 rounded hover:bg-gray-500"
                style={{ color: "white" }}
              >
                • Product Gallery
              </Link>
            </li>
            <li>
              <Link
                to="bulkimport"
                className="block w-full text-left p-1 pl-4 rounded hover:bg-gray-500"
                style={{ color: "white" }}
              >
                • Bulk Import
              </Link>
            </li>
          </ul>
        )}
        <Link
          to="creview"
          className="block w-full flex  align-items-center text-left p-2  rounded hover:bg-[#52c970] text-white hover:text-white mb-3"
          style={{ color: "white" }}
        >
          <FaRegStar className="inline-block mr-2" /> Product Reveiw
        </Link>
      </div>
      {/* --------------------------------------------------------- */}
      {/* ///------------------Promotion Management---------------- */}

      <div className="mt-4">
        <small className="block text-gray-400 uppercase">
          Promotation managenment
        </small>
        <Link
          to="coupon"
          className="block w-full flex  align-items-center text-left p-2  rounded hover:bg-[#52c970] text-white hover:text-white mb-3"
          style={{ color: "white" }}
        >
          <CiInboxOut className="inline-block mr-2" /> Coupans
        </Link>
      </div>
      {/* Help and Support */}
      <div className="mt-4">
        <small className="block text-gray-400 uppercase">
          HELP AND SUPPORT
        </small>
        <Link
          to="indexmessage"
          className="block w-full flex  align-items-center text-left p-2  rounded hover:bg-[#52c970] text-white hover:text-white mb-3"
          style={{ color: "white" }}
        >
          <CiInboxOut className="inline-block mr-2" /> Inbox
        </Link>

        {/* <Link
          to="/messagesupport"
          className="block w-full flex  align-items-center text-left p-2  rounded hover:bg-[#52c970] text-white hover:text-white mb-3"
          style={{ color: "white" }}
        >
          <FaMessage className="inline-block mr-2" /> Messages
        </Link> */}

        {/* <Link
          to="ticketsupport"
          className="block w-full flex  align-items-center text-left p-2  rounded hover:bg-[#52c970] text-white hover:text-white mb-3"
          style={{ color: "white" }}
        >
          <FaHeadset className="inline-block mr-2" /> Support ticket
        </Link> */}
      </div>

      {/* ------------------Reports And Analysis------------------------ */}
      <div className="mt-4">
        <small className="block text-gray-400 uppercase">
          REPORT & ANALYSIS
        </small>
        <Link
          to="/salesandtransactionreport"
          className="block w-full flex align-items-center text-left p-2 rounded hover:bg-[#52c970] text-white hover:text-white mb-3 text-blue-700"
          style={{ color: "white" }}
        >
          <MdOutlineFolderZip />
          Transatation Reports
          <span className="float-right">
            <FiChevronDown />
          </span>
        </Link>
      </div>
      {/*  */}
      <Link
        to="/productreport"
        className="block w-full flex align-items-center text-left p-2 rounded hover:bg-[#52c970] text-white hover:text-white mb-3 text-blue-700"
        style={{ color: "white" }}
      >
        <IoHome className="inline-block mr-2" /> Product Report
      </Link>
      {/*  */}
      <Link
        to="/orderreports"
        className="block w-full flex align-items-center text-left p-2 rounded hover:bg-[#52c970] text-white hover:text-white mb-3 text-blue-700"
        style={{ color: "white" }}
      >
        <IoHome className="inline-block mr-2" /> Order Report
      </Link>

      {/* **********Bussniess Section************ */}

      <div className="mt-4">
        <small className="block text-gray-400 uppercase">
          BUSINESS SECTION
        </small>
        {/* <Link
          to="/salesandtransactionreport"
          className="block w-full flex align-items-center text-left p-2 rounded hover:bg-[#52c970] text-white hover:text-white mb-3 text-blue-700"
          style={{ color: "white" }}
        >
          <MdOutlineFolderZip />
          Withdraws
          <span className="float-right">
            <FiChevronDown />
          </span>
        </Link> */}
      </div>
      {/*  */}
      <Link
        to="/withdraws"
        className="block w-full flex align-items-center text-left p-2 rounded hover:bg-[#52c970] text-white hover:text-white mb-3 text-blue-700"
        style={{ color: "white" }}
      >
        <IoHome className="inline-block mr-2" /> Widthdraw
      </Link>
      <Link
        to="/bankinformation"
        className="block w-full flex align-items-center text-left p-2 rounded hover:bg-[#52c970] text-white hover:text-white mb-3 text-blue-700"
        style={{ color: "white" }}
      >
        <IoHome className="inline-block mr-2" /> Bank Information
      </Link>

      {/*  */}
      <Link
        to="/shopsetting"
        className="block w-full flex align-items-center text-left p-2 rounded hover:bg-[#52c970] text-white hover:text-white mb-3 text-blue-700"
        style={{ color: "white" }}
      >
        <IoHome className="inline-block mr-2" /> Shop Settings
      </Link>

      {/* *************** */}
    </aside>
  );
};

export default Sidebar;
