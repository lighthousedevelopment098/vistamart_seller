import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import WithdrowModel from "./OrderStatic/WithdrowModel/WithdrowModel";
import ModelWithdrow from "./OrderStatic/WithdrowModel/ModelWithdrow";
import { getAuthData } from "../../../utils/authHelper";
import apiConfig from "../../../components/config/apiConfig";
const ApiUrl = apiConfig.transaction;

const { user, token } = getAuthData();
const id = user?._id;

const Adminwallet = () => {
  const [showModal, setShowModal] = useState(false);
  const [wallet, setWallet] = useState(null); // State to store wallet data

  // Fetch wallet data
  const fetchWalletData = async () => {
    try {
      const response = await fetch(`${ApiUrl}/seller-wallets/?vendor=${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log("response=====", response)
      if (!response.ok) throw new Error("Failed to fetch wallet data");
      const data = await response.json();

      if (data.status === "success" && data.results > 0) {
        setWallet(data.doc[0]); // Set the fetched wallet data
      } else {
        setWallet({
          withdrawableBalance: 0,
          pendingWithdraw: 0,
          totalCommissionGiven: 0,
          totalDeliveryChargeEarned: 0,
          totalTaxGiven: 0,
          collectedCash: 0,
        });
      }
    } catch (error) {
      console.error(error);
      setWallet({
        withdrawableBalance: 0,
        pendingWithdraw: 0,
        totalCommissionGiven: 0,
        totalDeliveryChargeEarned: 0,
        totalTaxGiven: 0,
        collectedCash: 0,
      });
    }
  };

  // Handle wallet activity activation
  const handleActivityWalletClick = async () => {
    // SweetAlert2 confirmation dialog
    const result = await Swal.fire({
      title: "Activate Your Wallet?",
      text: "Are you sure you want to activate your wallet for live commissions, pending withdrawals, etc.?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, activate!",
      cancelButtonText: "No, cancel",
    });

    if (result.isConfirmed) {
      // If confirmed, make the POST request to activate the wallet
      try {
        const response = await fetch(`${ApiUrl}/seller-wallets`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ vendor: id }),
        });

        if (!response.ok) throw new Error("Failed to activate wallet");

        // On success, show success notification
        Swal.fire("Success!", "Your wallet is now active. You will receive live commission and pending withdrawals.", "success");

        // Fetch updated wallet data
        fetchWalletData();
      } catch (error) {
        Swal.fire("Error!", "There was an issue activating your wallet. Please try again.", "error");
      }
    }
  };

  // Fetch wallet data when the component mounts
  useEffect(() => {
    fetchWalletData();
  }, []);


  return (
    <div className="card-body snipcss-KRwJd bg-white rounded-md mt-3 mx-0">
       <div className="flex justify-between items-center">

  
      <h4 className="d-flex align-items-center text-md font-semibold text-capitalize gap-2 mb-3">
        <img
          className="mb-1 w-7 h-7"
          src="https://6valley.6amtech.com/public/assets/back-end/img/admin-wallet.png"
          alt=""
        />
        Vendor Wallet
      </h4>
      <button
          className="btn px-4 py-2 bg-primary-500 text-white text-md hover:bg-primary-dark-500"
          onClick={handleActivityWalletClick} // Added onClick handler for Activity Wallet button
        >
          <h1 className="text-white">Activity Wallet</h1>
        </button>
      </div>
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
                PKR {wallet ? wallet.withdrawableBalance : 0}
              </h3>
              <div className=" text-md font-semibold text-gray-500">
                Withdrawable Balance
              </div>

              <button
                className="btn px-4 py-2 bg-primary-500 text-white text-md hover:bg-primary-dark-500"
                style={{ color: "white" }}
                onClick={() => setShowModal(true)}
              >
                <h1 className="text-white">Withdraw</h1>
              </button>
              <WithdrowModel
  show={showModal}
  onClose={() => setShowModal(false)}
  title="Withdraw Request"
  withdrawableBalance={wallet ? wallet.withdrawableBalance : 0} // Passing the balance as a prop
>
  <ModelWithdrow
    onClose={() => setShowModal(false)}
    withdrawableBalance={wallet ? wallet.withdrawableBalance : 0} // Prop forwarding
  />
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
                    <h3 className="mb-1 fz-24 text-xl font-bold">
                      PKR {wallet ? wallet.pendingWithdraw : 0}
                    </h3>
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
                    <h3 className="mb-1 fz-24 text-xl font-bold">
                      PKR {wallet ? wallet.totalCommissionGiven : 0}
                    </h3>
                    <div className="text-capitalize mb-0">Total Commission Given</div>
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
                    <h3 className="mb-1 fz-24 text-xl font-bold">
                      PKR {wallet ? wallet.alreadyWithdrawn : 0}
                    </h3>
                    <div className="text-capitalize mb-0">Already Withdrawn</div>
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
                    <h3 className="mb-1 fz-24 text-xl font-bold">
                      PKR {wallet ? wallet.totalDeliveryChargeEarned : 0}
                    </h3>
                    <div className="text-capitalize mb-0">Total Delivery Charge</div>
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
                    <h3 className="mb-1 fz-24 text-xl font-bold">
                      PKR {wallet ? wallet.totalTaxGiven : 0}
                    </h3>
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
                    <h3 className="mb-1 fz-24 text-xl font-bold">
                      PKR {wallet ? wallet.collectedCash : 0}
                    </h3>
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
