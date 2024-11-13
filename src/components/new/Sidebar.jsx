// // end
import { useState } from "react";
import {
  IoHome,
  IoStatsChartOutline,
  IoStatsChartSharp,
} from "react-icons/io5";
import { IoCartSharp } from "react-icons/io5";
import { LiaSignalSolid } from "react-icons/lia";
import { MdForwardToInbox, MdHomeWork, MdOutlineDiamond } from "react-icons/md";
import { FaAngleDown, FaAngleUp, FaSearch, FaWallet } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { AiFillDatabase } from "react-icons/ai";
import { FaPersonMilitaryToPerson } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { BsBank2 } from "react-icons/bs";

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
    setShowOrderList(false);
    setShowProductList(false);
    setShowInHouseProductList(false);
  };

  //now copy the togglefunciton

  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };
  return (
    // <aside className="bg-[#077422] text-white  min-h-screen p-4 flex flex-col fixed left-0  overflow-y-auto">

    <aside className="bg-primary pb-4 text-white top-16 bottom-0 px-1 flex flex-col gap-2 fixed left-0  max-h-screen overflow-y-auto">
      <div className="pt-7 pb-4 px-3 bg-primary sticky top-0 z-50">
        <div className=" border text-white border-white rounded-md focus:outline-none  placeholder-gray-400 w-full  px-2 flex items-center  bg-primary sticky top-0 z-50">
          <div>
            <FaSearch />
          </div>
          <input
            type="text"
            className="ml-2 p-2 outline-none placeholder:text-white bg-transparent"
            placeholder="Search menu..."
          />
        </div>
      </div>
      {/* Dashboard and POS buttons */}
      <Link
        to="/"
        className=" w-full flex gap-2  align-items-center text-left p-2 rounded hover:bg-[#52c970]  hover:text-white text-blue-700"
        style={{ color: "white" }}
      >
        <IoHome className="   " />
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
      <div className="mt-2">
        <small className="block text uppercase font-serif mx-5">
          Order Management
        </small>
        <button
          className="w-full text-left px-5 mt-2 p-2 rounded hover:bg-[#52c970] text-white hover:text-white flex justify-between relative "
          onClick={togglePageList}
          style={{ color: "white" }}
        >
          <div className="flex gap-2 justify-between align-items-center">
            <IoCartSharp /> Orders
          </div>
          <span className="float-right">
            {showPageList ? <FaAngleUp /> : <FaAngleDown />}
          </span>
        </button>
        {showPageList && (
          <ul className="ml-4 mt-2 space-y-1">
            {/* <li>
              <Link
                to="/allorders"
                className="block w-full text-left p-1 pl-4 rounded hover:bg-gray-500 text-blue-700"
                style={{ color: "white" }}
              >
                • ALL
              </Link>
            </li> */}
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
      <div className="mt-2">
        <button
          className="w-full text-left mt-2  p-2 rounded hover:bg-[#52c970] text-white hover:text-white flex justify-between relative "
          onClick={toggleRefoundList}
          style={{ color: "white" }}
        >
          <div className="flex gap-2 justify-between align-items-center">
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
        <small className="block mx-5 text uppercase">Product Management</small>
        <button
          className="block w-full text-left p-2 mt-2  rounded hover:bg-[#52c970] text-white hover:text-white flex justify-between text-white hover:text-[#7EC283]  relative"
          onClick={toggleInHouseProductList}
          style={{ color: "white" }}
        >
          {/* Categories */}
          {/* <span className="float-right"> */}
          {/* <i className={`tio-chevron-${showProductList ? 'up' : 'down'}`}></i> */}
          {/* <FiChevronDown /> */}
          {/* </span> */}

          <div className="flex gap-2 justify-between align-items-center">
            <MdOutlineDiamond /> Products
          </div>
          <span className="float-right">
            {showRefoundList ? <FaAngleUp /> : <FaAngleDown />}
          </span>
        </button>
        {showInHouseProductList && (
          <ul className="ml-4 mt-2 space-y-1">
            {/* <li>
              <Link
                to="/inhouseproductlist"
                className="block w-full text-left p-1 pl-4 rounded hover:bg-gray-500"
                style={{ color: "white" }}
              >
                • Product List
              </Link>
            </li> */}
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
                to="newproductrequest"
                className="block w-full text-left p-1 pl-4 rounded hover:bg-gray-500"
                style={{ color: "white" }}
              >
                • New Product Request
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
                to="deniedproduct"
                className="block w-full text-left p-1 pl-4 rounded hover:bg-gray-500"
                style={{ color: "white" }}
              >
                • Denied Product Request
              </Link>
            </li>
           
            {/* <li>
              <Link
                to="productgallery"
                className="block w-full text-left p-1 pl-4 rounded hover:bg-gray-500"
                style={{ color: "white" }}
              >
                • Product Gallery
              </Link>
            </li> */}
            {/* <li>
              <Link
                to="bulkimport"
                className="block w-full text-left p-1 pl-4 rounded hover:bg-gray-500"
                style={{ color: "white" }}
              >
                • Bulk Import
              </Link>
            </li> */}
          </ul>
        )}
        {/* <Link
          to="creview"
          className="block w-full flex  align-items-center text-left p-2  rounded hover:bg-[#52c970] text-white hover:text-white mb-3"
          style={{ color: "white" }}
        >
          <FaStar className="inline-block mr-2" /> Product Reveiw
        </Link> */}
      </div>
      {/* --------------------------------------------------------- */}
      {/* ///------------------Promotion Management---------------- */}

      <div className="mt-2">
        <small className="block text mx-5 uppercase">
          Promotation managenment
        </small>
        <Link
          to="coupon"
          className=" w-full flex gap-2  align-items-center text-left p-2 rounded hover:bg-[#52c970]  hover:text-white text-blue-700"
          style={{ color: "white" }}
        >
          <FaPersonMilitaryToPerson className="inline-block mr-2" /> Coupans
        </Link>
      </div>
      {/* Help and Support */}
      <div className="mt-2">
        <small className="block mx-5 text uppercase">HELP AND SUPPORT</small>
        <Link
          to="indexmessage"
          className=" w-full flex gap-2  align-items-center text-left p-2 rounded hover:bg-[#52c970]  hover:text-white text-blue-700"
          style={{ color: "white" }}
        >
          <MdForwardToInbox className="inline-block mr-2" /> Inbox
        </Link>
      </div>

      {/* ------------------Reports And Analysis------------------------ */}
      <div className="mt-2">
        <small className="block mx-5 text uppercase">REPORT & ANALYSIS</small>
        <Link
          to="/salesandtransactionreport"
          className=" w-full flex gap-2  align-items-center text-left p-2 rounded hover:bg-[#52c970]  hover:text-white text-blue-700"
          style={{ color: "white" }}
        >
          <LiaSignalSolid />
          Transatation Reports
          {/* <span className="float-right">
            <FiChevronDown />
          </span> */}
        </Link>
      </div>
      {/*  */}
      <Link
        to="/productreport"
        className=" w-full flex gap-2  align-items-center text-left p-2 rounded hover:bg-[#52c970]  hover:text-white text-blue-700"
        style={{ color: "white" }}
      >
        <IoStatsChartSharp className="inline-block mr-2" /> Product Report
      </Link>
      <Link
        to="/orderreports"
        className=" w-full flex gap-2  align-items-center text-left p-2 rounded hover:bg-[#52c970]  hover:text-white text-blue-700"
        style={{ color: "white" }}
      >
        <IoStatsChartOutline className="inline-block mr-2" /> Order Report
      </Link>


      <div className="mt-2">
        <small className="block text mx-5 uppercase">BUSINESS SECTION</small>
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
        className=" w-full flex gap-2  align-items-center text-left p-2 rounded hover:bg-[#52c970]  hover:text-white text-blue-700"
        style={{ color: "white" }}
      >
        <FaWallet className="inline-block mr-2" /> Widthdraw
      </Link>
      <Link
        to="/bankinformation"
        className=" w-full flex gap-2  align-items-center text-left p-2 rounded hover:bg-[#52c970]  hover:text-white text-blue-700"
        style={{ color: "white" }}
      >
        <BsBank2 className="inline-block mr-2" /> Bank Information
      </Link>

      {/*  */}
      <Link
        to="/shopsetting"
        className=" w-full flex gap-2  align-items-center text-left p-2 rounded hover:bg-[#52c970]  hover:text-white text-blue-700"
        style={{ color: "white" }}
      >
        <MdHomeWork className="inline-block mr-2" /> Shop Settings
      </Link>

      {/* *************** */}
    </aside>
  );
};

export default Sidebar;



////////
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { FaAngleDown, FaAngleUp } from "react-icons/fa";
// import { sidebarItems as allSidebarItems } from "./sideBarData.jsx"; // Ensure this path is correct
// import { BsDot } from "react-icons/bs";

// const Sidebar = ({ toggleSidebar }) => {
//   const [activeDropdown, setActiveDropdown] = useState(null);
//   const [searchTerm, setSearchTerm] = useState("");
//   const toggleDropdown = (index) => {
//     setActiveDropdown(activeDropdown === index ? null : index);
//   };

//   // Filtering sidebar items based on search term
//   const filteredSidebarItems = allSidebarItems.filter((item) => {
//     const searchQuery = searchTerm.toLowerCase();
//     return (
//       (item.title && item.title.toLowerCase().includes(searchQuery)) ||
//       (item.dropdownItems && item.dropdownItems.some((subItem) => subItem.title && subItem.title.toLowerCase().includes(searchQuery)))
//     );
//   });

//   return (
//     <aside className="bg-primary text-white w-64 min-h-screen top-0 p-4 flex flex-col fixed left-0 h-full overflow-y-scroll">
//       {/* Search Box */}
//       <div className="sticky top-0 bg-primary pt-6 pb-4 z-10">
//         <input
//           type="text"
//           className="ml-2 p-2 bg-primary border mt-12 text-white border-white rounded-md focus:outline-none w-full placeholder-white"
//           placeholder="Search menu..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//       </div>

//       {/* Sidebar Items */}
//       {filteredSidebarItems.map((item, index) => (
//         <div key={index} className="mt-2">
//           {item.hasDropdown ? (
//             <>
//               <h1 className="text-gray-300 mb-2 mt-3">{item.section}</h1>
//               <button
//                 className="w-full text-left p-2 rounded hover:bg-[#52c970] text-white flex justify-between"
//                 onClick={() => toggleDropdown(index)}
//               >
//                 <div className="flex items-center gap-2 m-0">
//                   {item.icon} {item.title}
//                 </div>
//                 <span>
//                   {activeDropdown === index ? <FaAngleUp /> : <FaAngleDown />}
//                 </span>
//               </button>
//               <ul
//                 className={`ml-2 transition-all duration-300 ease-in-out overflow-hidden ${
//                   activeDropdown === index
//                     ? "max-h-80 opacity-100"
//                     : "max-h-0 opacity-0"
//                 }`}
//               >
//                 {item.dropdownItems && item.dropdownItems.map((subItem, subIndex) => (
//                   <li key={subIndex}>
//                     <Link
//                       to={subItem.link}
//                       className="w-full m-0 flex items-center text-left p-1 pl-4 rounded hover:bg-[#4CAF50] text-white"
//                       onClick={toggleSidebar}
//                     >
//                       <span>
//                         <BsDot className="font-bold text-[1rem]" />
//                       </span>{" "}
//                       {subItem.title}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </>
//           ) : (
//             <>
//               <h1 className="text-gray-300">{item.section}</h1>
//               <Link
//                 to={item.link}
//                 className="flex items-center gap-2 w-full text-left p-2 rounded hover:bg-[#52c970] text-white"
//                 onClick={toggleSidebar}
//               >
//                 {item.icon} {item.title}
//               </Link>
//             </>
//           )}
//         </div>
//       ))}
//     </aside>
//   );
// };

// export default Sidebar;
