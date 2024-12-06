// // // end
// import { useState } from "react";
// import {
//   IoHome,
//   IoStatsChartOutline,
//   IoStatsChartSharp,
// } from "react-icons/io5";
// import { IoCartSharp } from "react-icons/io5";
// import { LiaSignalSolid } from "react-icons/lia";
// import { MdForwardToInbox, MdHomeWork, MdOutlineDiamond } from "react-icons/md";
// import { FaAngleDown, FaAngleUp, FaSearch, FaWallet } from "react-icons/fa";
// import { FaStar } from "react-icons/fa";
// import { AiFillDatabase } from "react-icons/ai";
// import { FaPersonMilitaryToPerson } from "react-icons/fa6";
// import { Link } from "react-router-dom";
// import { BsBank2 } from "react-icons/bs";

// // --------------------------------------------

// const Sidebar = ({ menuItems }) => {
//   const [showOrderList, setShowOrderList] = useState(false);
//   const [showProductList, setShowProductList] = useState(false);
//   const [showInHouseProductList, setShowInHouseProductList] = useState(false);
//   const [showVenderProductList, setShowVenderProductList] = useState(false);
//   const [showRefoundList, setShowRefoundList] = useState(false);
//   const [showBrandList, setShowBrandList] = useState(false);
//   const [showOfferList, setShowOfferList] = useState(false);
//   const [showCustomerList, setShowCustomerList] = useState(false);
//   const [showHealthList, setShowHealthList] = useState(false);
//   const [showEmployeeList, setShowEmployeethList] = useState(false);
//   const [showSystemList, setShowSystemList] = useState(false);
//   const [showPageList, setShowPageList] = useState(false);
//   const [showBusinessList, setShowBusinessList] = useState(false);
//   const [showNotiList, setShowNotiList] = useState(false);
//   const [searchQuery, setSearchQuery] = useState('');

//   // for bussness set showing dropdown
//   const filteredItems = menuItems.filter(item =>
//     item.toLowerCase().includes(searchQuery.toLowerCase())
//   );
//   const [showBussnessList, SetShowBussnessList] = useState(false); // write this for each drop down list like for setting order category extra
//   // now copy the the above state

//   const toggleOrderList = () => {
//     setShowOrderList(!showOrderList);
//     setShowProductList(false); // Close Product list when Orders list is toggled
//     setShowInHouseProductList(false); // Close In House Product List when Orders list is toggled
//     setShowRefoundList(false); // Close Refound List when Orders list is toggled
//   };

//   const toggleProductList = () => {
//     setShowProductList(!showProductList);
//     setShowOrderList(false); // Close Orders list when Product list is toggled
//     setShowInHouseProductList(false); // Close In House Product List when Product list is toggled
//     setShowRefoundList(false); // Close Refound List when Product list is toggled
//   };

//   const toggleInHouseProductList = () => {
//     setShowInHouseProductList(!showInHouseProductList);
//     setShowOrderList(false); // Close Orders list when In House Product list is toggled
//     setShowProductList(false); // Close Product list when In House Product list is toggled
//     setShowRefoundList(false); // Close Refound List when In House Product list is toggled
//   };

//   const toggleVenderProductList = () => {
//     setShowVenderProductList(!showVenderProductList);
//     setShowInHouseProductList(false);
//     setShowOrderList(false); // Close Orders list when In House Product list is toggled
//     setShowProductList(false); // Close Product list when In House Product list is toggled
//     setShowRefoundList(false); // Close Refound List when In House Product list is toggled
//   };

//   const toggleRefoundList = () => {
//     setShowRefoundList(!showRefoundList);
//     setShowOrderList(false); // Close Orders list when Refound list is toggled
//     setShowProductList(false); // Close Product list when Refound list is toggled
//     setShowInHouseProductList(false); // Close In House Product List when Refound list is toggled
//   };
//   const toggleBrandList = () => {
//     setShowBrandList(!showBrandList);
//     setShowRefoundList(false);
//     setShowOrderList(false); // Close Orders list when Refound list is toggled
//     setShowProductList(false); // Close Product list when Refound list is toggled
//     setShowInHouseProductList(false); // Close In House Product List when Refound list is toggled
//   };

//   const toggleOfferList = () => {
//     setShowOfferList(!showOfferList);
//     setShowBrandList(false);
//     setShowRefoundList(false);
//     setShowOrderList(false); // Close Orders list when Refound list is toggled
//     setShowProductList(false); // Close Product list when Refound list is toggled
//     setShowInHouseProductList(false); // Close In House Product List when Refound list is toggled
//   };
//   const toggleCustomerList = () => {
//     setShowCustomerList(!showCustomerList);
//     setShowOfferList(false);
//     setShowBrandList(false);
//     setShowRefoundList(false);
//     setShowOrderList(false); // Close Orders list when Refound list is toggled
//     setShowProductList(false); // Close Product list when Refound list is toggled
//     setShowInHouseProductList(false); // Close In House Product List when Refound list is toggled
//   };

//   const toggleHealthList = () => {
//     setShowHealthList(!showHealthList);
//     setShowCustomerList(false);
//     setShowOfferList(false);
//     setShowBrandList(false);
//     setShowRefoundList(false);
//     setShowOrderList(false); // Close Orders list when Refound list is toggled
//     setShowProductList(false); // Close Product list when Refound list is toggled
//     setShowInHouseProductList(false); // Close In House Product List when Refound list is toggled
//   };
//   const toggleEmployeeList = () => {
//     setShowEmployeethList(!showEmployeeList);
//     setShowHealthList(false);
//     setShowCustomerList(false);
//     setShowOfferList(false);
//     setShowBrandList(false);
//     setShowRefoundList(false);
//     setShowOrderList(false); // Close Orders list when Refound list is toggled
//     setShowProductList(false); // Close Product list when Refound list is toggled
//     setShowInHouseProductList(false); // Close In House Product List when Refound list is toggled
//   };

//   const toggleSystemList = () => {
//     setShowSystemList(!showSystemList);
//     // setShowEmployeeList(false);
//     setShowHealthList(false);
//     setShowCustomerList(false);
//     setShowOfferList(false);
//     setShowBrandList(false);
//     setShowRefoundList(false);
//     setShowOrderList(false); // Close Orders list when Refound list is toggled
//     setShowProductList(false); // Close Product list when Refound list is toggled
//     setShowInHouseProductList(false); // Close In House Product List when Refound list is toggled
//   };

//   const toggleBusinessList = () => {
//     setShowBusinessList(!showBusinessList);
//     setShowPageList(false);
//     setShowSystemList(false);
//     // setShowEmployeeList(false);
//     setShowHealthList(false);
//     setShowCustomerList(false);
//     setShowOfferList(false);
//     setShowBrandList(false);
//     setShowRefoundList(false);
//     setShowOrderList(false); // Close Orders list when Refound list is toggled
//     setShowProductList(false); // Close Product list when Refound list is toggled
//     setShowInHouseProductList(false); // Close In House Product List when Refound list is toggled
//   };
//   const togglePageList = () => {
//     setShowPageList(!showPageList);
//     setShowSystemList(false);
//     // setShowEmployeeList(false);
//     setShowHealthList(false);
//     setShowCustomerList(false);
//     setShowOfferList(false);
//     setShowBrandList(false);
//     setShowRefoundList(false);
//     setShowOrderList(false); // Close Orders list when Refound list is toggled
//     setShowProductList(false); // Close Product list when Refound list is toggled
//     setShowInHouseProductList(false); // Close In House Product List when Refound list is toggled
//   };

//   const toggleNotiList = () => {
//     setShowNotiList(!showNotiList);

//     setShowSystemList(false);
//     setShowEmployeeList(false);
//     setShowHealthList(false);
//     setShowCustomerList(false);
//     setShowOfferList(false);
//     setShowBrandList(false);
//     setShowRefoundList(false);
//     setShowOrderList(false);
//     setShowProductList(false);
//     setShowInHouseProductList(false);
//   };

//   //now copy the togglefunciton

//   const [isSidebarVisible, setIsSidebarVisible] = useState(false);

//   const toggleSidebar = () => {
//     setIsSidebarVisible(!isSidebarVisible);
//   };
//   return (
//     // <aside className="bg-[#077422] text-white  min-h-screen p-4 flex flex-col fixed left-0  overflow-y-auto">

//     <aside className="bg-primary pb-4 text-white top-16 bottom-0 px-1 flex flex-col gap-2 fixed left-0  max-h-screen overflow-y-auto">
//       <div className="pt-7 pb-4 px-3 bg-primary sticky top-0 z-50">
//       <div className="border text-white border-white rounded-md focus:outline-none placeholder-gray-400 w-full px-2 flex items-center bg-primary sticky top-0 z-50">
//       <div>
//         <FaSearch />
//       </div>
//       <input
//         type="text"
//         className="ml-2 p-2 outline-none placeholder:text-white bg-transparent"
//         placeholder="Search menu..."
//         value={searchQuery}
//         onChange={(e) => setSearchQuery(e.target.value)}
//       />
//         </div>
//       </div>
//       {/* Dashboard  */}
//       <Link
//         to="/"
//         className=" w-full flex gap-2  align-items-center text-left p-2 rounded hover:bg-[#52c970]  hover:text-white text-blue-700"
//         style={{ color: "white" }}
//       >
//         <IoHome className="   " />
//         <span className="">Dashboard</span>
//       </Link>
//       {/* //POS------------------------- */}

//       {/* order management */}
//       <div className="mt-2">
//         <small className="block text uppercase font-serif mx-5">
//           Order Management
//         </small>
//         <button
//           className="w-full text-left px-5 mt-2 p-2 rounded hover:bg-[#52c970] text-white hover:text-white flex justify-between relative "
//           onClick={togglePageList}
//           style={{ color: "white" }}
//         >
//           <div className="flex gap-2 justify-between align-items-center">
//             <IoCartSharp /> Orders
//           </div>
//           <span className="float-right">
//             {showPageList ? <FaAngleUp /> : <FaAngleDown />}
//           </span>
//         </button>
//         {showPageList && (
//           <ul className="ml-4 mt-2 space-y-1">
//             {/* <li>
//               <Link
//                 to="/allorders"
//                 className="block w-full text-left p-1 pl-4 rounded hover:bg-gray-500 text-blue-700"
//                 style={{ color: "white" }}
//               >
//                 • ALL
//               </Link>
//             </li> */}
//             <li>
//               <Link
//                 to="/pendingorder"
//                 className="block w-full text-left p-1 pl-4 rounded hover:bg-gray-500 text-blue-700"
//                 style={{ color: "white" }}
//               >
//                 • Pending
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/confirmedorder"
//                 className="block w-full text-left p-1 pl-4 rounded hover:bg-gray-500 text-blue-700"
//                 style={{ color: "white" }}
//               >
//                 • Confirmed
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/packagingorder"
//                 className="block w-full text-left p-1 pl-4 rounded hover:bg-gray-500 text-blue-700"
//                 style={{ color: "white" }}
//               >
//                 • Packaging
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/outfordelivery"
//                 className="block w-full text-left p-1 pl-4 rounded hover:bg-gray-500 text-blue-700"
//                 style={{ color: "white" }}
//               >
//                 • Out for delivery
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/deliveredorder"
//                 className="block w-full text-left p-1 pl-4 rounded hover:bg-gray-500 text-blue-700"
//                 style={{ color: "white" }}
//               >
//                 • Delivered
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/returnedorder"
//                 className="block w-full text-left p-1 pl-4 rounded hover:bg-gray-500 text-blue-700"
//                 style={{ color: "white" }}
//               >
//                 • Returned
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/failorder"
//                 className="block w-full text-left p-1 pl-4 rounded hover:bg-gray-500 text-blue-700"
//                 style={{ color: "white" }}
//               >
//                 • Failed to Deliver
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/cancelledorder"
//                 className="block w-full text-left p-1 pl-4 rounded hover:bg-gray-500 text-blue-700"
//                 style={{ color: "white" }}
//               >
//                 • Canceled
//               </Link>
//             </li>
//           </ul>
//         )}
//       </div>
//       {/* Refund request */}
//       <div className="mt-2">
//         <button
//           className="w-full text-left mt-2  p-2 rounded hover:bg-[#52c970] text-white hover:text-white flex justify-between relative "
//           onClick={toggleRefoundList}
//           style={{ color: "white" }}
//         >
//           <div className="flex gap-2 justify-between align-items-center">
//             <AiFillDatabase /> Refund Requests
//           </div>
//           <span className="float-right">
//             {showRefoundList ? <FaAngleUp /> : <FaAngleDown />}
//           </span>
//         </button>
//         {showRefoundList && (
//           <ul className="ml-4 mt-2 space-y-1">
//             <li>
//               <Link
//                 to="/pendingrefundrequests"
//                 className="block w-full text-left  gap-2 p-1 pl-4 rounded hover:bg-gray-500 text-blue-700"
//                 style={{ color: "white" }}
//               >
//                 <span className="text-green-700">•</span> Pending
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/approverefundrequests"
//                 className="block w-full text-left p-1 pl-4 rounded hover:bg-gray-500 text-blue-700"
//                 style={{ color: "white" }}
//               >
//                 • Approved
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/refunded"
//                 className="block w-full text-left p-1 pl-4 rounded hover:bg-gray-500 text-blue-700"
//                 style={{ color: "white" }}
//               >
//                 • Refunded
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/rejected"
//                 className="block w-full text-left p-1 pl-4 rounded hover:bg-gray-500 text-blue-700"
//                 style={{ color: "white" }}
//               >
//                 • Rejected
//               </Link>
//             </li>
//           </ul>
//         )}
//       </div>

//       {/* /////Product Management-------------------------- */}
//       {/*  products */}
//       <div className="mt-2">
//         <small className="block mx-5 text uppercase">Product Management</small>
//         <button
//           className="block w-full text-left p-2 mt-2  rounded hover:bg-[#52c970] text-white hover:text-white flex justify-between text-white hover:text-[#7EC283]  relative"
//           onClick={toggleInHouseProductList}
//           style={{ color: "white" }}
//         >
//           {/* Categories */}
//           {/* <span className="float-right"> */}
//           {/* <i className={`tio-chevron-${showProductList ? 'up' : 'down'}`}></i> */}
//           {/* <FiChevronDown /> */}
//           {/* </span> */}

//           <div className="flex gap-2 justify-between align-items-center">
//             <MdOutlineDiamond /> Products
//           </div>
//           <span className="float-right">
//             {showRefoundList ? <FaAngleUp /> : <FaAngleDown />}
//           </span>
//         </button>
//         {showInHouseProductList && (
//           <ul className="ml-4 mt-2 space-y-1">
//             {/* <li>
//               <Link
//                 to="/inhouseproductlist"
//                 className="block w-full text-left p-1 pl-4 rounded hover:bg-gray-500"
//                 style={{ color: "white" }}
//               >
//                 • Product List
//               </Link>
//             </li> */}
//             <li>
//               <Link
//                 to="inhouseaddproduct"
//                 className="block w-full text-left p-1 pl-4 rounded hover:bg-gray-500"
//                 style={{ color: "white" }}
//               >
//                 • Add New Product
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="newproductrequest"
//                 className="block w-full text-left p-1 pl-4 rounded hover:bg-gray-500"
//                 style={{ color: "white" }}
//               >
//                 • New Product Request
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/approvedproductlist"
//                 className="block  w-full text-left p-1 pl-4 rounded hover:bg-gray-500"
//                 style={{ color: "white" }}
//               >
//                 • Approved Product List
//               </Link>
//             </li>

//             <li>
//               <Link
//                 to="deniedproduct"
//                 className="block w-full text-left p-1 pl-4 rounded hover:bg-gray-500"
//                 style={{ color: "white" }}
//               >
//                 • Denied Product Request
//               </Link>
//             </li>

//             {/* <li>
//               <Link
//                 to="productgallery"
//                 className="block w-full text-left p-1 pl-4 rounded hover:bg-gray-500"
//                 style={{ color: "white" }}
//               >
//                 • Product Gallery
//               </Link>
//             </li> */}
//             {/* <li>
//               <Link
//                 to="bulkimport"
//                 className="block w-full text-left p-1 pl-4 rounded hover:bg-gray-500"
//                 style={{ color: "white" }}
//               >
//                 • Bulk Import
//               </Link>
//             </li> */}
//           </ul>
//         )}
//         {/* <Link
//           to="creview"
//           className="block w-full flex  align-items-center text-left p-2  rounded hover:bg-[#52c970] text-white hover:text-white mb-3"
//           style={{ color: "white" }}
//         >
//           <FaStar className="inline-block mr-2" /> Product Reveiw
//         </Link> */}
//       </div>
//       {/* --------------------------------------------------------- */}

//       <div className="mt-2">
//         <small className="block text mx-5 uppercase">BUSINESS SECTION</small>
//         {/* <Link
//           to="/salesandtransactionreport"
//           className="block w-full flex align-items-center text-left p-2 rounded hover:bg-[#52c970] text-white hover:text-white mb-3 text-blue-700"
//           style={{ color: "white" }}
//         >
//           <MdOutlineFolderZip />
//           Withdraws
//           <span className="float-right">
//           <FiChevronDown />
//           </span>
//         </Link> */}
//       </div>
//       {/*  */}

//       <Link
//         to="/bankinformation"
//         className=" w-full flex gap-2  align-items-center text-left p-2 rounded hover:bg-[#52c970]  hover:text-white text-blue-700"
//         style={{ color: "white" }}
//       >
//         <BsBank2 className="inline-block mr-2" /> Bank Information
//       </Link>

//       {/*  */}
//       <Link
//         to="/shopsetting"
//         className=" w-full flex gap-2  align-items-center text-left p-2 rounded hover:bg-[#52c970]  hover:text-white text-blue-700"
//         style={{ color: "white" }}
//       >
//         <MdHomeWork className="inline-block mr-2" /> Shop Settings
//       </Link>
//       <Link
//         to="/withdraws"
//         className=" w-full flex gap-2  align-items-center text-left p-2 rounded hover:bg-[#52c970]  hover:text-white text-blue-700"
//         style={{ color: "white" }}
//       >
//         <FaWallet className="inline-block mr-2" /> Withdraw
//       </Link>
//       {/* ///------------------Promotion Management---------------- */}

//       {/* <div className="mt-2">
//         <small className="block text mx-5 uppercase">
//           Promotation managenment
//         </small>
//         <Link
//           to="coupon"
//           className=" w-full flex gap-2  align-items-center text-left p-2 rounded hover:bg-[#52c970]  hover:text-white text-blue-700"
//           style={{ color: "white" }}
//         >
//           <FaPersonMilitaryToPerson className="inline-block mr-2" /> Coupans
//         </Link>
//       </div> */}
//       {/* Help and Support */}
//       <div className="mt-2">
//         <small className="block mx-5 text uppercase">HELP AND SUPPORT</small>
//         <Link
//           to="indexmessage"
//           className=" w-full flex gap-2  align-items-center text-left p-2 rounded hover:bg-[#52c970]  hover:text-white text-blue-700"
//           style={{ color: "white" }}
//         >
//           <MdForwardToInbox className="inline-block mr-2" /> Inbox
//         </Link>
//       </div>

//       {/* ------------------Reports And Analysis------------------------ */}
//       <div className="mt-2">
//         <small className="block mx-5 text uppercase">REPORT & ANALYSIS</small>
//         <Link
//           to="/salesandtransactionreport"
//           className=" w-full flex gap-2  align-items-center text-left p-2 rounded hover:bg-[#52c970]  hover:text-white text-blue-700"
//           style={{ color: "white" }}
//         >
//           <LiaSignalSolid />
//           Transaction Reports
//           {/* <span className="float-right">
//             <FiChevronDown />
//           </span> */}
//         </Link>
//       </div>
//       {/*  */}
//       <Link
//         to="/productreport"
//         className=" w-full flex gap-2  align-items-center text-left p-2 rounded hover:bg-[#52c970]  hover:text-white text-blue-700"
//         style={{ color: "white" }}
//       >
//         <IoStatsChartSharp className="inline-block mr-2" /> Product Report
//       </Link>
//       <Link
//         to="/orderreports"
//         className=" w-full flex gap-2  align-items-center text-left p-2 rounded hover:bg-[#52c970]  hover:text-white text-blue-700"
//         style={{ color: "white" }}
//       >
//         <IoStatsChartOutline className="inline-block mr-2" /> Order Report
//       </Link>

//       {/* *************** */}
//     </aside>
//   );
// };

// export default Sidebar;


import { useState } from "react";
import { Link } from "react-router-dom";
import { IoHome, IoStatsChartOutline, IoStatsChartSharp } from "react-icons/io5";
import { IoCartSharp } from "react-icons/io5";
import { LiaSignalSolid } from "react-icons/lia";
import { MdForwardToInbox, MdHomeWork, MdOutlineDiamond } from "react-icons/md";
import { FaAngleDown, FaAngleUp, FaSearch, FaWallet } from "react-icons/fa";
import { AiFillDatabase } from "react-icons/ai";

import { BsBank2 } from "react-icons/bs";



const Sidebar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [openSections, setOpenSections] = useState({}); // Track which sections are open

  const menuItems = [
    { name: 'Dashboard', path: '/', icon: <IoHome /> },
    {name:"Order Management", heading:true},
    {
      name: 'Orders',
      icon: <IoCartSharp />,
      subItems: [
        { name: 'Pending', path: '/pendingorder' },
        { name: 'Confirmed', path: '/confirmedorder' },
        { name: 'Packaging', path: '/packagingorder' },
        { name: 'Out for delivery', path: '/outfordelivery' },
        { name: 'Delivered', path: '/deliveredorder' },
        { name: 'Returned', path: '/returnedorder' },
        { name: 'Failed to Deliver', path: '/failorder' },
        { name: 'Canceled', path: '/cancelledorder' },
      ],
    },
    // {
    //   name: 'Refund Requests',
    //   icon: <AiFillDatabase />,
    //   subItems: [
    //     { name: 'Pending', path: '/pendingrefundrequests' },
    //     { name: 'Approved', path: '/approverefundrequests' },
    //     { name: 'Refunded', path: '/refunded' },
    //     { name: 'Rejected', path: '/rejected' },
    //   ],
    // },
    {name:"Product Management",heading:true},
    {
      name: 'Products',
      icon: <MdOutlineDiamond />,
      subItems: [
        { name: 'Add New Product', path: '/inhouseaddproduct' },
        { name: 'New Product Request', path: '/newproductrequest' },
        { name: 'Approved Product List', path: '/approvedproductlist' },
        { name: 'Denied Product Request', path: '/deniedproduct' },
      ],
    },
    {name:"BUSINESS SECTION",heading:true},
    { name: 'Bank Information', path: '/bankinformation', icon: <BsBank2 /> },
    { name: 'Shop Settings', path: '/shopsetting', icon: <MdHomeWork /> },
    { name: 'Withdraw', path: '/withdraws', icon: <FaWallet /> },
    {
      name: 'Help and Support', heading:true,},
      { name: 'Inbox', path: '/indexmessage', icon: <MdForwardToInbox />, },
     
    {
      name: 'Reports & Analysis', heading:true},
      
        { name: 'Transaction Reports', path: '/salesandtransactionreport', icon: <LiaSignalSolid />,},
        { name: 'Product Report', path: '/productreport',icon: <IoStatsChartSharp /> },
        { name: 'Order Report', path: '/orderreports' ,icon: <IoStatsChartOutline />},
    
  ];

  const toggleSection = (name) => {
    setOpenSections(prev => ({ ...prev, [name]: !prev[name] }));
  };

  const filteredItems = menuItems.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
 

  return (
    <aside className="bg-primary pb-4 text-white top-16 bottom-0 px-1 flex flex-col gap-2 fixed left-0 max-h-screen overflow-y-auto">
    <div className="pt-7 pb-4 px-3 bg-primary sticky top-0 z-50">
      <div className="border text-white border-white rounded-md focus:outline-none placeholder-gray-400 w-full px-2 flex items-center bg-primary sticky top-0 z-50">
        <div>
          <FaSearch />
        </div>
        <input
          type="text"
          className="ml-2 p-2 outline-none placeholder:text-white bg-transparent"
          placeholder="Search menu..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
    </div>
  
    {filteredItems.map((item) => (
      <div key={item.name}>
        {item.heading ? (
          <div className="text-xs font-serif text-gray-300  mt-2 px-3 uppercase">
            {item.name}
          </div>
        ) : item.subItems ? (
          <>
            <button
              className="w-full text-left px-5 mt-2 p-2 rounded hover:bg-[#52c970] text-white flex justify-between relative"
              style={{ color: "white" }}
              onClick={() => toggleSection(item.name)}
            >
              <div className="flex gap-2 justify-between  items-center text-ms">
                {item.icon} {item.name}
              </div>
              <span className="float-right hover:bg-[#52c970] text-sm">
                {openSections[item.name] ? <FaAngleUp /> : <FaAngleDown />}
              </span>
            </button>
            {openSections[item.name] && (
              <ul className="ml-4 mt-2  space-y-1">
                {item.subItems.map((subItem) => (
                  <li key={subItem.name}>
                    <Link
                      to={subItem.path}
                      className="block w-full text-left p-1 pl-4 rounded hover:bg-green-400 "
                      style={{ color: "white" }}
                    >
                      • {subItem.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </>
        ) : (
          <Link
            to={item.path}
            className="w-full flex gap-2 items-center text-left p-2 rounded hover:bg-[#52c970] hover:text-white"
            style={{ color: "white" }}
          >
            {item.icon}
            <span>{item.name}</span>
          </Link>
        )}
      </div>
    ))}
  </aside>
  
  );
};

export default Sidebar;