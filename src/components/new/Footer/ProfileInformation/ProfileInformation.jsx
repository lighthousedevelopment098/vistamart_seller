// import React, { useEffect, useState, useRef } from "react";
// import { HiEyeDropper } from "react-icons/hi2";
// import { IoIosLock } from "react-icons/io";
// import { IoHomeSharp, IoPerson } from "react-icons/io5";
// import { MdSettingsApplications } from "react-icons/md";
// import { Link } from "react-router-dom";
// // import { EyeIcon, EyeSlashIcon } from '@heroicons/react/outline';
// import { FaEye , FaRegEyeSlash} from "react-icons/fa";
// import { getAuthData } from "../../../../utils/authHelper";
// import apiConfig from "../../../config/apiConfig";
 
// const ProfileInformation = () => {
//   const [showPassword, setShowPassword] = useState()
//   const [showConfirmPassword , setShowConfirmPassword ] = useState()
//    // const [profileData, setProfileData] = useState({
//   //   fullName: "",
//   //   phoneNumber: "",
//   //   email: "",
//   //   bannerImage: "",
//   //   vendorImage: "", // New state for vendor image
//   // });

//   // Create a ref for the password section
//   const passwordSectionRef = useRef(null);
//    const {user} = getAuthData();
//   // useEffect(() => {
//   //   if (user) {
//   //     setProfileData({
//   //       fullName: `${user.firstName} ${user.lastName}`,
//   //       phoneNumber: user.phoneNumber,
//   //       email: user.email,
//   //     });
//   //   }
//   // }, []);

//   const handleScrollToPassword = () => {
//     if (passwordSectionRef.current) {
//       passwordSectionRef.current.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <>
//       <div className="flex flex-col md:flex-row justify-between items-center mx-4 md:mx-16 my-10">
//         <div className="flex items-center gap-3 mb-4 md:mb-0">
//           <IoPerson className="text-2xl font-semibold" />
//           <h1 className="font-bold text-xl">Profile Information</h1>
//         </div>
//         <div className="px-3 py-2 rounded bg-primary hover:bg-primary-dark text-white">
//           <Link to={"/"} className="flex gap-2 md:gap-4 items-center">
//             <IoHomeSharp className="font-semibold text-white hover:text-green-500" />
//             <h1 className="text-white font-semibold">Dashboard</h1>
//           </Link>
//         </div>
//       </div>

//       <div className="flex flex-col md:flex-row mx-4 md:mx-16 gap-1">
//         <div className="w-full lg:h-[40vh] md:w-1/4 bg-white shadow-md p-4 rounded mb-4 md:mb-0">
//           <div className="mb-4">
//             <div className="flex items-center mb-2 gap-3">
//               <MdSettingsApplications className="text-2xl font-semibold" />
//               <span className="font-semibold text-blue-500">
//                 <a href="/">Basic Information</a>
//               </span>
//             </div>
//           </div>
//           <div className="mb-4">
//             <div className="flex items-center mb-2 gap-3">
//               <IoIosLock className="text-2xl font-semibold" />
//               <span 
//                 className="font-semibold text-gray-500 cursor-pointer"
//                 onClick={handleScrollToPassword}
//               >
//                 Password
//               </span>
//             </div>
//           </div>
//         </div>

//         <div className="w-full md:w-3/4 rounded">
//           <div className="relative bg-white px-5 py-3 border border-gray-300 shadow rounded">
//             {/* Banner image container */}
//             <div className="relative">
//               <img
//                 src={`${apiConfig.bucket}/${user?.banner}`}
//                 className="w-full h-44 rounded object-cover"
//                 alt="Banner"
//               />
//               {/* Avatar section */}
//               <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
//                 <div className="relative w-24 h-24">
//                   <img
//                     id="viewer"
//                     className="w-full h-full rounded-full border-4 border-white object-cover"
//                     src={`${apiConfig.bucket}/${user?.vendorImage}`}

//                     alt="Vendor Image"
//                   />
//                   {/* <label
//                     className="absolute bottom-0 right-0  p-2 rounded-full cursor-pointer"
//                     style={{color:"white"}}
//                     htmlFor="custom-file-upload"
//                   >
//                     <img
//                       src="https://6valley.6amtech.com/public/assets/back-end/img/add-photo.png"
//                       alt="Change Icon"
//                       className="w-6 h-6"
//                     />
//                   </label>  */}
//                 </div>
//               </div>
//             </div>
//             <div className="mt-16"> {/* Push content down to account for avatar */}
//               <div className="flex items-center gap-3 px-4 py-3">
//                 <IoPerson className="font-bold text-xl" />
//                 <h1 className="font-bold text-md">Basic Information</h1>
//               </div>
//               <form
//                 action=""
//                 className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 "
//               >
//                 <div className="">
//                   <label htmlFor="">First Name</label>
//                   <input
//                     type="text"
//                     value={user?.firstName}
//                     className="px-3 py-2 rounded border-gray-400 border w-full outline-none hover:border-primary"
//                     readOnly
//                   />
//                 </div>
//                 <div className="">
//                   <label htmlFor="">Last Name</label>
//                   <input
//                     type="text"
//                     value={user?.lastName}
//                     className="px-3 py-2 rounded border-gray-400 border w-full outline-none hover:border-primary"
//                     readOnly
//                   />
//                 </div>
//                 {/* <div className="">
//                   <label htmlFor="text-nowrap">
//                     Phone Number <span>(Optional)</span>
//                   </label>
//                   <input
//                     type="number"
//                     // value={user?.phoneNumber}
//                     className="px-3 py-2 rounded border-gray-400 border w-full outline-none"
//                     readOnly
//                   />
//                 </div> */}
//                 <div className="">
//                   <label htmlFor="">Email</label>
//                   <input
//                     type="text"
//                     value={user?.email}
//                     className="px-3 py-2 rounded border-gray-400 border w-full outline-none"
//                     readOnly
//                   />
//                 </div>
//               </form>
//             </div>
//             <div className="flex justify-end items-center px-5 py-3">
//               <button className="px-3 py-2 border bg-primary hover:bg-primary-dark text-nowrap text-white rounded"
//               style={{color:"white"}}>
//                 Save Changes
//               </button>
//             </div>
//           </div>

//           <div
//             className="bg-white px-5 py-3 border border-gray-300 shadow rounded my-5"
//             id="password"
//             ref={passwordSectionRef} // Reference the password section
//           >
//             <div className="flex items-center gap-3">
//               <IoIosLock className="font-bold text-xl" />
//               <h1 className="text-md font-semibold">Change Password</h1>
//             </div>
//             <br />
//             <form action="" className="grid grid-cols-1 md:grid-cols-2 gap-6">
//       <div className="relative">
//         <label htmlFor="password">New Password *</label>
//         <input
//           id="password"
//           type={showPassword ? 'text' : 'password'}
//           placeholder="Enter New Password"
//           className="border border-gray-300 px-3 py-2 rounded w-full outline-none"
//         />
//         <button
//           type="button"
//           onClick={() => setShowPassword(!showPassword)}
//           className="absolute right-3 top-9 text-gray-500"
//         >
//           {showPassword ? (
//             <FaRegEyeSlash className="h-5 w-5" />
//           ) : (
//             <FaEye className="h-5 w-5" />
//           )}
//         </button>
//       </div>
      
//       <div className="relative">
//         <label htmlFor="confirmPassword">Confirm Password *</label>
//         <input
//           id="confirmPassword"
//           type={showConfirmPassword ? 'text' : 'password'}
//           placeholder="Confirm Password"
//           className="border border-gray-300 px-3 py-2 rounded w-full outline-none"
//         />
//         <button
//           type="button"
//           onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//           className="absolute right-3 top-9 text-gray-500"
//         >
//           {showConfirmPassword ? (
//             <FaRegEyeSlash className="h-5 w-5" />
//           ) : (
//             <FaEye className="h-5 w-5" />
//           )}
//         </button>
//       </div>
//     </form>
//             <div className="flex justify-end items-center px-2 py-3">
//               <button className="px-3 py-2 border bg-primary hover:bg-primary-dark text-white rounded"
//               style={{color:"white"}}>
//                 Save Changes
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ProfileInformation;


import React, { useEffect, useState, useRef } from "react";
import { HiEyeDropper } from "react-icons/hi2";
import { IoIosLock } from "react-icons/io";
import { IoHomeSharp, IoPerson } from "react-icons/io5";
import { MdSettingsApplications } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaEdit, FaEye, FaRegEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
import axios from "axios";
import { getAuthData } from "../../../../utils/authHelper";
import apiConfig from "../../../config/apiConfig";
import ActionButton from "../../../ActionButton/Action";



const ProfileInformation = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwords, setPasswords] = useState({
    currentPassword: "",
    newPassword: "",
  });
 
  const validatePassword = (password) => {
    const passwordRegex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };
  const passwordSectionRef = useRef(null);
  const { user, token } = getAuthData();

  const handleScrollToPassword = () => {
    if (passwordSectionRef.current) {
      passwordSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

 
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPasswords((prevState) => ({ ...prevState, [name]: value }));

   
  };
 


  const handlePasswordUpdate = async (e) => {
    e.preventDefault();
  
    if (!validatePassword(passwords.newPassword)) {
      toast.error(
        "New password must start with a capital letter, contain at least one special character, and be at least 8 characters long."
      );
      return;
    }
  
    try {
      const response = await axios.put(
        `${apiConfig.seller}/vendors/update-password`,
        {
          passwordCurrent: passwords.currentPassword,
          passwordNew: passwords.newPassword,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
  
      toast.success("Password updated successfully!");
      setPasswords({ currentPassword: "", newPassword: "" });
  
      // Clear token and user data from localStorage
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    } catch (error) {
      console.error("Error updating password:", error);
      toast.error("current password is incorrect. Please try again.");
    }
  };
  

  return (
    <div>
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mx-4 md:mx-16 my-10">
        <div className="flex items-center gap-3 mb-4 md:mb-0">
          <IoPerson className="text-2xl font-semibold" />
          <h1 className="font-bold text-xl">Profile Information</h1>
        </div>
        <div className="px-3 py-2 rounded bg-primary-500 hover:bg-primary-dark-500 text-white">
          <Link to="/" className="flex gap-2 items-center">
            <IoHomeSharp className="font-semibold text-white" />
            <h1 className="font-semibold text-white">Dashboard</h1>
          </Link>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row mx-4 md:mx-16 gap-5">
        {/* Sidebar */}
        <div className="w-full md:w-1/4 bg-white shadow-md p-4 rounded">
          <div className="mb-4">
            <div className="flex items-center mb-2 gap-3">
              <MdSettingsApplications className="text-2xl font-semibold" />
              <span className="font-semibold text-blue-500">
                <a href="/">Basic Information</a>
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <IoIosLock className="text-2xl font-semibold" />
            <span
              className="font-semibold text-gray-500 cursor-pointer"
              onClick={handleScrollToPassword}
            >
              Password
            </span>
          </div>
        </div>

        {/* Main Content */}
        <div className="w-full md:w-3/4">
          {/* Profile Details */}
          <div className="bg-white p-5 border border-gray-300 shadow rounded">
            <div className="relative">
              <img
                src={`${apiConfig.bucket}/${user?.banner}`}
                className="w-full h-44 rounded object-cover"
                alt="Banner"
              />
              <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
                <img
                  className="w-24 h-24 rounded-full border-4 border-white object-cover"
                  src={`${apiConfig.bucket}/${user?.vendorImage}`}
                  alt="Vendor"
                />
              </div>
            </div>
            <div className="mt-16">
              <div className="row justify-between items-center">
              <div className="flex items-center gap-3 px-4 py-3 ">
                <IoPerson className="font-bold text-xl" />
                <h1 className="font-bold">Basic Information</h1>
              </div>
              
                <div className="flex items-center gap-3 px-4 py-3">
                <ActionButton
            to={`/shopedit/${user?._id}`} // Dynamic link
            icon={FaEdit} // Pass dynamic icon
          />
                </div>
              </div>
             
              <form className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label>First Name</label>
                  <input
                    type="text"
                    value={user?.firstName}
                    className="px-3 py-2 rounded border-gray-400 border w-full outline-none"
                    readOnly
                  />
                </div>
                <div>
                  <label>Last Name</label>
                  <input
                    type="text"
                    value={user?.lastName}
                    className="px-3 py-2 rounded border-gray-400 border w-full outline-none"
                    readOnly
                  />
                </div>
                <div>
                  <label>Email</label>
                  <input
                    type="email"
                    value={user?.email}
                    className="px-3 py-2 rounded border-gray-400 border w-full outline-none"
                    readOnly
                  />
                </div>
              </form>
            </div>
          </div>

          {/* Password Update */}
          <div
            className="bg-white p-5 border border-gray-300 shadow rounded mt-5"
            ref={passwordSectionRef}
          >
            <div className="flex items-center gap-3">
              <IoIosLock className="font-bold text-xl" />
              <h1 className="font-semibold" >Change Password</h1>
            </div>
            <form
              onSubmit={handlePasswordUpdate}
              className=" "
            >
           <div className="grid grid-cols-1 md:grid-cols-2 gap-3 items-center  ">
      <div className="relative">
        <label>New Password</label>
        <input
          type={showPassword ? "text" : "password"}
          name="newPassword"
          value={passwords.newPassword}
          onChange={handleInputChange}
          className="border px-3 py-2 rounded w-full outline-none "
          placeholder="Enter new password"
          required
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-10 text-gray-500"
        >
          {showPassword ? <FaRegEyeSlash /> : <FaEye />}
        </button>
      </div>

      <div className="relative mt-4">
        <label>Current Password</label>
        <input
          type={showConfirmPassword ? "text" : "password"}
          name="currentPassword"
          value={passwords.currentPassword}
          onChange={handleInputChange}
          className="border px-3 py-2 rounded w-full outline-none mb-4"
          placeholder="Enter current password"
          required
        />
        <button
          type="button"
          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          className="absolute right-3 top-10 text-gray-500"
        >
          {showConfirmPassword ? <FaRegEyeSlash /> : <FaEye />}
        </button>
      </div>
    </div>
              <div className="col-span-1 md:col-span-2 text-right">
                <button
                  type="submit"
                  className="px-4 py-2 bg-primary-500 hover:bg-primary-dark-500 text-white rounded"
                 style={{color:"white"}}
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInformation;
