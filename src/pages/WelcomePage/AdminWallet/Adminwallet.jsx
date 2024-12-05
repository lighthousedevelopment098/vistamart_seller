// import React from "react";

// import admin_wallet from "../AdminWallet/Assets/admin-wallet.png";
// import inhouse_earning from "../AdminWallet/Assets/inhouse-earning.png";
// import dce from "../AdminWallet/Assets/dce.png";
// import ce from "../AdminWallet/Assets/ce.png";
// import ttc from "../AdminWallet/Assets/ttc.png";
// import pa from "../AdminWallet/Assets/pa.png";
// const Adminwallet = () => {
//   return (
//     <div className="bg-white border rounded-lg border-gray-200 mt-2 mx-5 p-5">
//       <div className="font-bold text-[1rem] flex gap-2 items-center ">
//         <img src={admin_wallet} alt="" className="h-5 w-5" />
//         <h1>Admin Wallet</h1>
//       </div>
//       <div className="  grid grid-cols-3  mt-2 gap-2">
//         <div className="flex flex-col gap-2 items-center py-7 justify-center bg-white rounded-lg shadow-md cursor-pointer hover:shadow-lg   row-span-2">
//           <img src={inhouse_earning} alt="" className="h-14 w-14 " />
//           <h1 className="text-[1.5rem] font-bold ">$39,892.00</h1>
//           <p className="text-[.9rem]">In-House Earning</p>
//         </div>
//         <div className="flex justify-between items-center bg-white rounded-lg shadow-md  cursor-pointer hover:shadow-lg p-2">
//           <div className="">
//             <h1 className="text-[1.5rem] font-bold ">$12,755.02</h1>
//             <p className="text-[.9rem]">Commission Earned</p>
//           </div>
//           <img src={ce} alt="" className="h-7 w-7" />
//         </div>
//         <div className="flex justify-between items-center bg-white rounded-lg shadow-md cursor-pointer hover:shadow-lg  px-6 py-3">
//           <div className="">
//             <h1 className="text-[1.5rem] font-bold ">$1,360.00</h1>
//             <p className="text-[.9rem]">Delivery Charge Earned</p>
//           </div>
//           <img src={dce} alt="" className="h-7 w-7" />
//         </div>
//         <div className="flex justify-between items-center bg-white rounded-lg shadow-md cursor-pointer hover:shadow-lg  px-6 py-3">
//           <div className="">
//             <h1 className="text-[1.5rem] font-bold">$2,343.00</h1>
//             <p className="text-[.9rem]">Total Tax Collected</p>
//           </div>
//           <img src={ttc} alt="" className="h-7 w-7" />
//         </div>
//         <div className="flex justify-between items-center bg-white rounded-lg shadow-md cursor-pointer hover:shadow-lg px-6 py-3">
//           <div className="">
//             <h1 className="text-[1.5rem] font-bold ">$8,153.00</h1>
//             <p className="text-[.9rem]">Pending Amount</p>
//           </div>
//           <img src={pa} alt="" className="h-7 w-7" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Adminwallet;

import React, { useState } from "react";
import {
  FaWallet,
  FaMoneyCheckAlt,
  FaTruckLoading,
  FaPercentage,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import WithdrowModel from "./OrderStatic/WithdrowModel/WithdrowModel";
import WithdrawRequest from "../../faisal/Delivery Men/WithdrawRequest";
import ModelWithdrow from "./OrderStatic/WithdrowModel/ModelWithdrow";

const Adminwallet = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="card-body snipcss-KRwJd bg-white rounded-md mt-3 mx-0">
      <h4 className="d-flex align-items-center  text-md font-semibold  text-capitalize gap-2 mb-3">
        <img
          className="mb-1 w-7 h-7"
          src="https://6valley.6amtech.com/public/assets/back-end/img/admin-wallet.png"
          alt=""
        />{" "}
        Vendor Wallet
      </h4>
      <div className="row g-2" id="order_stats">
        <div className="col-lg-4">
          <div className="card h-full d-flex justify-content-center align-items-center">
            <div className="card-body d-flex flex-column gap-3 align-items-center justify-content-center">
              <img
                className="w-20 h-20 mb-4"
                src="https://6valley.6amtech.com/public/assets/back-end/img/withdraw.png"
                alt=""
              />
              <h3 className="for-card-count text-xl font-bold mb-0 fz-24">
                PKR 0
              </h3>
              <div className=" text-md font-semibold text-gray-500">
                Withdrawable Balance
              </div>

              <button
                className="btn px-4 py-2 bg-primary  text-white text-md  hover:bg-primary-dark"
                style={{ color: "white" }}
                onClick={() => setShowModal(true)}
              >
                <h1 className="text-white"> Withdraw</h1>
              </button>
              <WithdrowModel
                show={showModal}
                onClose={() => setShowModal(false)}
                title="Withdraw Request"
              >
                <ModelWithdrow onClose={() => setShowModal(false)} />
              </WithdrowModel>
            </div>
          </div>
        </div>
        <div className="col-lg-8 text-md font-semibold">
          <div className="row g-2">
            <div className="col-md-6">
              <div className="card card-body h-100 justify-content-center">
                <div className="d-flex gap-2 justify-content-between align-items-center">
                  <div className="d-flex flex-column align-items-start">
                    <h3 className="mb-1 fz-24 text-xl font-bold">PKR 0</h3>
                    <div className="text-capitalize mb-0">Pending Withdraw</div>
                  </div>
                  <div>
                    <img
                      src="https://6valley.6amtech.com/public/assets/back-end/img/pw.png"
                      alt=""
                      className="h-10 w-10"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card card-body h-100 justify-content-center">
                <div className="d-flex gap-2 justify-content-between align-items-center">
                  <div className="d-flex flex-column align-items-start">
                    <h3 className="mb-1 fz-24 text-xl font-bold">PKR 0</h3>
                    <div className="text-capitalize mb-0">
                      Total Commission Given
                    </div>
                  </div>
                  <div>
                    <img
                      src="https://6valley.6amtech.com/public/assets/back-end/img/tcg.png"
                      className="h-10 w-10"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card card-body h-100 justify-content-center">
                <div className="d-flex gap-2 justify-content-between align-items-center">
                  <div className="d-flex flex-column align-items-start">
                    <h3 className="mb-1 fz-24 text-xl font-bold">PKR 0</h3>
                    <div className="text-capitalize mb-0">
                      Already Withdrawn
                    </div>
                  </div>
                  <div>
                    <img
                      src="https://6valley.6amtech.com/public/assets/back-end/img/aw.png"
                      className="h-10 w-10"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card card-body h-100 justify-content-center">
                <div className="d-flex gap-2 justify-content-between align-items-center">
                  <div className="d-flex flex-column align-items-start">
                    <h3 className="mb-1 fz-24 text-xl font-bold">PKR 0</h3>
                    <div className="text-capitalize mb-0">
                      Total Delivery Charge
                    </div>
                  </div>
                  <div>
                    <img
                      src="https://6valley.6amtech.com/public/assets/back-end/img/tdce.png"
                      className="h-10 w-10"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card card-body h-100 justify-content-center">
                <div className="d-flex gap-2 justify-content-between align-items-center">
                  <div className="d-flex flex-column align-items-start">
                    <h3 className="mb-1 fz-24 text-xl font-bold">PKR 0</h3>
                    <div className="text-capitalize mb-0">Total Tax Given</div>
                  </div>
                  <div>
                    <img
                      src="https://6valley.6amtech.com/public/assets/back-end/img/ttg.png"
                      className="h-10 w-10"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card card-body h-100 justify-content-center">
                <div className="d-flex gap-2 justify-content-between align-items-center">
                  <div className="d-flex flex-column align-items-start">
                    <h3 className="mb-1 fz-24 text-xl font-bold">PKR 0</h3>
                    <div className="text-capitalize mb-0">Collected Cash</div>
                  </div>
                  <div>
                    <img
                      src="https://6valley.6amtech.com/public/assets/back-end/img/cc.png"
                      className="h-10 w-10"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adminwallet;
