// Import the required icons from react-icons
import {
    IoHome,
    IoCartSharp,
    IoPersonOutline,
    IoSettingsOutline,
  } from "react-icons/io5";
  import { AiFillDatabase, AiFillPicture } from "react-icons/ai";
  import { FaStar } from "react-icons/fa";
  import { MdOutlineDiamond } from "react-icons/md";
  import { CiInboxOut } from "react-icons/ci";
  
  // Icon Mapping
  export const iconMap = {
    IoHome: <IoHome />,
    IoCartSharp: <IoCartSharp />,
    AiFillDatabase: <AiFillDatabase />,
    FaStar: <FaStar />,
    MdOutlineDiamond: <MdOutlineDiamond />,
    CiInboxOut: <CiInboxOut />,
    // Add other icons here as necessary
  };
  
  // Sidebar Items data structure
  export const sidebarItems = [
    {
      section: "Dashboard",
      items: [
        {
          title: "Dashboard",
          link: "/dashboard",
          icon: "IoHome", // Icon name as a string
          class: "text-white hover:bg-[#52c970] hover:text-white mb-3",
        },
      ],
    },
    {
      section: "Order Management",
      items: [
        {
          title: "Orders",
          icon: "IoCartSharp", // Icon name as a string
          hasDropdown: true,
          dropdownItems: [
            { title: "ALL", link: "/allorders", class: "text-blue-700" },
            { title: "Pending", link: "/pendingorder", class: "text-blue-700" },
            { title: "Confirmed", link: "/confirmedorder", class: "text-blue-700" },
            { title: "Packaging", link: "/packagingorder", class: "text-blue-700" },
            { title: "Out for delivery", link: "/outfordelivery", class: "text-blue-700" },
            { title: "Delivered", link: "/deliveredorder", class: "text-blue-700" },
            { title: "Returned", link: "/returnedorder", class: "text-blue-700" },
            { title: "Failed to Deliver", link: "/failorder", class: "text-blue-700" },
            { title: "Canceled", link: "/cancelledorder", class: "text-blue-700" },
          ],
        },
      ],
    },
    {
      section: "Refund Requests",
      items: [
        {
          title: "Refund Requests",
          icon: "AiFillDatabase", // Icon name as a string
          hasDropdown: true,
          dropdownItems: [
            { title: "Pending", link: "/pendingrefundrequests", class: "text-blue-700" },
            { title: "Approved", link: "/approverefundrequests", class: "text-blue-700" },
            { title: "Refunded", link: "/refunded", class: "text-blue-700" },
            { title: "Rejected", link: "/rejected", class: "text-blue-700" },
          ],
        },
      ],
    },
    {
      section: "Product Management",
      items: [
        {
          title: "Products",
          icon: "MdOutlineDiamond", // Icon name as a string
          hasDropdown: true,
          dropdownItems: [
            { title: "Product List", link: "/inhouseproductlist", class: "text-white" },
            { title: "Approved Product List", link: "/approvedproductlist", class: "text-white" },
            { title: "New Product Request", link: "/newproductrequest", class: "text-white" },
            { title: "Denied Product Request", link: "/deniedproduct", class: "text-white" },
            { title: "Add New Product", link: "/inhouseaddproduct", class: "text-white" },
            { title: "Product Gallery", link: "/productgallery", class: "text-white" },
            { title: "Bulk Import", link: "/bulkimport", class: "text-white" },
          ],
        },
        {
          title: "Product Review",
          link: "/creview",
          icon: "FaStar", // Icon name as a string
          class: "text-white hover:bg-[#52c970] hover:text-white mb-3",
        },
      ],
    },
    {
      section: "Promotion Management",
      items: [
        {
          title: "Coupons",
          link: "/coupon",
          icon: "CiInboxOut", // Icon name as a string
          class: "text-white hover:bg-[#52c970] hover:text-white mb-3",
        },
      ],
    },
  ];
  