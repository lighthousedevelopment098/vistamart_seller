
// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { BsBank } from "react-icons/bs";
// import { FaAd, FaEdit, FaUser } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import { fetchVendorBanks } from "../../../components/redux/vendorBankSlice";
// import "./Tooltip.css"; // Assuming you have some tooltips or styling
// import { getAuthData } from "../../../utils/authHelper";
// import ActionButton from "../../../components/ActionButton/Action";
// import { AiFillBank } from "react-icons/ai";
// import LoadingSpinner from "../../../components/LoodingSpinner/LoadingSpinner";

// const BankInformation = () => {
//   const dispatch = useDispatch();
//   const { user } = getAuthData();
//   const userId = user?.id;  // Get the user ID from the user slice of the Redux store

//   const { vendorBanks, loading, error } = useSelector((state) => state.vendorBanks);

//   // Fetch vendor bank information by passing user ID (vendor ID)
//   useEffect(() => {
//     if (userId) {
//       dispatch(fetchVendorBanks({ vendor: userId }));
//     }
//   }, [dispatch, userId]);

//   if (loading) {
//     return <div><LoadingSpinner /></div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   // Assume we fetch only one bank info, or map through multiple if needed
//   const bankInfo = vendorBanks.length > 0 ? vendorBanks[0] : null;
  
//   return (
//     <div className="bg-[#F9F9FB] md:p-8">
//       <div className="row flex justify-between ">

//       <div className="flex items-center gap-2 m-5">
//         <img
//           src="https://6valley.6amtech.com/public/assets/back-end/img/my-bank-info.png"
//           className="h-7 w-7 "
//           alt="Bank Icon"
//         />
//         <p className="text-[#334257] text-lg md:text-xl font-semibold">My Bank Info</p>
//       </div>
//        {/* add your bank details here... */}
//        <div className="btn">
         
//        <ActionButton
//   to={`/bankinfoadd`}  
//   icon={AiFillBank}  
//   label="Add Bank"  // Set the label
// />

      
//        </div>
//       </div>
//       {/* Header */}
     
//       {/* Bank Info Card */}
//       <div className="bg-white border rounded-md">
//         <div className="flex items-center gap-2 p-2 border-b-2 border-gray-100">
//           <BsBank className="w-6 h-6 text-[#334257]" />
//           <p className="ml-2 font-semibold text-base md:text-lg text-[#334257]">Account Details</p>
//         </div>
//         <div className="w-full flex justify-center items-center my-5">
//           <div
//             className="md:w-[40%] w-full mx-4 opacity-90 p-4 rounded-lg shadow-lg relative bg-[#F2F7FF] bg-cover"
//             style={{
//               backgroundImage: "url(https://6valley.6amtech.com/public/assets/back-end/img/wallet-bg.png)",
//               backgroundSize: "cover",
//               backgroundPosition: "right",
//               backgroundRepeat: "no-repeat",
//             }}
//           >
//             {bankInfo ? (
//               <>
//                 {/* Top Section */}
//                 <div className="flex justify-between items-center">
//                   <div className="flex items-center space-x-2">
//                     <FaUser className="text-gray-700" />
//                     <p>
//                       Holder Name: <span className="font-bold">{bankInfo.holderName}</span>
//                     </p>
//                   </div>
//                   {/* <Link
//                     to={`/bankinfoedit/${bankInfo._id}` }
                   
//                     className="flex items-center space-x-1 bg-primary hover:bg-primary-dark text-white p-1 rounded-md"
//                   >
//                     <FaEdit />
//                     <span>Edit</span>
//                   </Link> */}
//                 </div>

//                 {/* Account Details */}
//                 <div className="mt-4 space-y-2">
//                   <div className="flex justify-start gap-4">
//                     <span className="font-medium">Bank Name :</span>
//                     <span className="font-semibold">{bankInfo.bankName}</span>
//                   </div>
//                   <div className="flex justify-start gap-4">
//                     <span className="font-medium">Branch Name :</span>
//                     <span className="font-semibold">{bankInfo.branch}</span>
//                   </div>
//                   <div className="flex justify-start gap-4">
//                     <span className="font-medium">Account Number :</span>
//                     <span className="font-semibold">{bankInfo.accountNumber}</span>
//                   </div>
//                 </div>
//               </>
//             ) : (
//               <p>No bank information available.</p>
//             )}
//           </div>
          
//         </div>
//         <div className="flex justify-end items-center p-2 gap-3">
//           <button className="flex px-4 py-2 bg-red-500 rounded-md">
//             Remove
//           </button>

//         <Link
//                     to={`/bankinfoedit/${bankInfo._id}` }
                   
//                     className="flex  items-center px-4 py-2    bg-primary hover:bg-primary-dark text-white p-1 rounded-md"
//                     style={{color:"white"}}
//                   >
//                     <FaEdit />
//                     <span>Edit</span>
//                   </Link>
//                   </div>
//       </div>
//     </div>
//   );
// };

// export default BankInformation;



import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsBank } from "react-icons/bs";
import { FaAd, FaEdit, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { fetchVendorBanks, deleteVendorBank } from "../../../components/redux/vendorBankSlice"; // import delete action
import "./Tooltip.css"; // Assuming you have some tooltips or styling
import { getAuthData } from "../../../utils/authHelper";
import ActionButton from "../../../components/ActionButton/Action";
import { AiFillBank } from "react-icons/ai";
import LoadingSpinner from "../../../components/LoodingSpinner/LoadingSpinner";

const BankInformation = () => {
  const dispatch = useDispatch();
  const { user } = getAuthData();
  const userId = user?.id; // Get the user ID from the user slice of the Redux store

  const { vendorBanks, loading, error } = useSelector((state) => state.vendorBanks);

  useEffect(() => {
    if (userId) {
      dispatch(fetchVendorBanks({ vendor: userId }));
    }
  }, [dispatch, userId]);

  const handleRemove = () => {
    if (bankInfo && bankInfo._id) {
      dispatch(deleteVendorBank(bankInfo._id));
    }
  };

  if (loading) {
    return <div><LoadingSpinner /></div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const bankInfo = vendorBanks.length > 0 ? vendorBanks[0] : null;
  
  return (
    <div className="bg-[#F9F9FB] md:p-8">
      <div className="row flex justify-between ">
        <div className="flex items-center gap-2 m-5">
          <img
            src="https://6valley.6amtech.com/public/assets/back-end/img/my-bank-info.png"
            className="h-7 w-7 "
            alt="Bank Icon"
          />
          <p className="text-[#334257] text-lg md:text-xl font-semibold">My Bank Info</p>
        </div>
        <div className="btn">
          <ActionButton
            to={`/bankinfoadd`}  
            icon={AiFillBank}  
            label="Add Bank"
          />
        </div>
      </div>

      <div className="bg-white border rounded-md">
        <div className="flex items-center gap-2 p-2 border-b-2 border-gray-100">
          <BsBank className="w-6 h-6 text-[#334257]" />
          <p className="ml-2 font-semibold text-base md:text-lg text-[#334257]">Account Details</p>
        </div>
        <div className="w-full flex justify-center items-center my-5">
          <div
            className="md:w-[40%] w-full mx-4 opacity-90 p-4 rounded-lg shadow-lg relative bg-[#F2F7FF] bg-cover"
            style={{
              backgroundImage: "url(https://6valley.6amtech.com/public/assets/back-end/img/wallet-bg.png)",
              backgroundSize: "cover",
              backgroundPosition: "right",
              backgroundRepeat: "no-repeat",
            }}
          >
            {bankInfo ? (
              <>
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <FaUser className="text-gray-700" />
                    <p>
                      Holder Name: <span className="font-bold">{bankInfo.holderName}</span>
                    </p>
                  </div>
                </div>

                <div className="mt-4 space-y-2">
                  <div className="flex justify-start gap-4">
                    <span className="font-medium">Bank Name :</span>
                    <span className="font-semibold">{bankInfo.bankName}</span>
                  </div>
                  <div className="flex justify-start gap-4">
                    <span className="font-medium">Branch Name :</span>
                    <span className="font-semibold">{bankInfo.branch}</span>
                  </div>
                  <div className="flex justify-start gap-4">
                    <span className="font-medium">Account Number :</span>
                    <span className="font-semibold">{bankInfo.accountNumber}</span>
                  </div>
                </div>
              </>
            ) : (
              <p>No bank information available.</p>
            )}
          </div>
        </div>
        <div className="flex justify-end items-center p-2 gap-3">
          <button onClick={handleRemove} className="flex px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md">
            Remove
          </button>

          <Link
            to={`/bankinfoedit/${bankInfo?._id}`}
            className="flex items-center px-4 py-2 bg-primary hover:bg-primary-dark text-white rounded-md"
            style={{color:"white"}}
          >
            <FaEdit />
            <span>Edit</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BankInformation;
