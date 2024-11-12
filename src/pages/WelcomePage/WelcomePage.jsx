import React from "react";
import BussniesWallet from "./BussniesWallet";

import Adminwallet from "./AdminWallet/Adminwallet";
import OrderStatic from "./AdminWallet/OrderStatic/OrderStatic";
import OrderStatistic from "./AdminWallet/OrderStatic/OrderStatistic/OrderStatistic";
import TopCustomersSection from "./AdminWallet/adminCard/TopCustomerCard";
import TopProductSection from "./ProductAdmin/ProductAdmin";
import { IoDiamond } from "react-icons/io5";
import { Link } from "react-router-dom";

const WelcomePage = () => {
  return (
    <div className="grid  grid-cols-12 bg-[#F9F9FB]">
      <div className="col-span-12">
        <div className="bg-[#F9F9FB]  flex flex-col md:flex-row gap-2 justify-between items-center  px-5 py-5 w-full">
          <div>
            <h1 className="text-[1.3rem] font-bold">Welcome</h1>
            <p className="text-[.9rem] text-gray-400">
              Monitor your business analytics and statistics.
            </p>
          </div>
          <Link to={"/inhouseproductlist"}>
            <button className="btn px-3 py-2 bg-primary text-white font-semibold flex items-center gap-2 hover:bg-primary-dark">
              <IoDiamond className="text-white" />{" "}
              <h2 className="text-white">Products</h2>
            </button>
          </Link>
        </div>
        <BussniesWallet />
        <Adminwallet />
        <OrderStatistic />

        {/* <TopCustomersSection /> */}

        {/* <TopProductSection /> */}
      </div>
    </div>
  );
};

export default WelcomePage;
