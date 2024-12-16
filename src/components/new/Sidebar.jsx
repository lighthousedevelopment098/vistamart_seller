import { useState } from "react";
import { Link } from "react-router-dom";
import { IoHome, IoStatsChartOutline, IoStatsChartSharp } from "react-icons/io5";
import { IoCartSharp } from "react-icons/io5";
import { LiaSignalSolid } from "react-icons/lia";
import { MdForwardToInbox, MdHomeWork, MdOutlineDiamond, MdTrackChanges } from "react-icons/md";
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
    { name: 'Track Order', path: '/track-order', icon:  <MdTrackChanges/> },
     

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
    <aside className="bg-primary-500 pb-4 text-white top-16 bottom-0 px-1 flex flex-col gap-2 fixed left-0 max-h-screen overflow-y-auto">
    <div className="pt-7 pb-4 px-3 bg-primary-500 sticky top-0 z-50">
      <div className="border text-white border-white rounded-md focus:outline-none placeholder-gray-400 w-full px-2 flex items-center bg-primary-500 sticky top-0 z-50">
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
              className="w-full text-left px-5 mt-2 p-2 rounded hover:bg-primary-dark-500 text-white flex justify-between relative"
              style={{ color: "white" }}
              onClick={() => toggleSection(item.name)}
            >
              <div className="flex gap-2 justify-between  items-center text-ms">
                {item.icon} {item.name}
              </div>
              <span className="float-right hover:bg-primary-dark-500 text-sm">
                {openSections[item.name] ? <FaAngleUp /> : <FaAngleDown />}
              </span>
            </button>
            {openSections[item.name] && (
              <ul className="ml-4 mt-2  space-y-1">
                {item.subItems.map((subItem) => (
                  <li key={subItem.name}>
                    <Link
                      to={subItem.path}
                      className="block w-full text-left p-1 pl-4 rounded hover:bg-primary-dark-500 "
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
            className="w-full flex gap-2 items-center text-left p-2 rounded hover:bg-primary-dark-500 hover:text-white"
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