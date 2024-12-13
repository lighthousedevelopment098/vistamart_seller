import React from "react";
import "./BussniesWallet.css";
import { Link } from "react-router-dom";

const BusinessAnalytics = () => {
  return (
    <div className="card-body  snipcss-ti2xq bg-white rounded-md px-5 py-5 ">
      <div className="row flex-between  align-items-center g-2 mb-3 ">
        <div className="col-sm-6   bg-[]">
          <h4 className="d-flex align-items-center text-md font-semibold text-capitalize gap-2 mb-0">
            <img
              src="https://6valley.6amtech.com/public/assets/back-end/img/business_analytics.png"
              alt="Business Analytics"
            />
            Order Analytics
          </h4>
        </div>
        <div className="col-sm-6 d-flex justify-content-sm-end">
          <select
            className="custom-select w-auto"
            name="statistics_type"
            id="statistics_type"
          >
            <option value="overall">Overall statistics</option>
            <option value="today">Today's Statistics</option>
            <option value="this_month">This Month's Statistics</option>
          </select>
        </div>
      </div>

      <div
        className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 gap-2  "
        id="order_stats"
      >
        <div className="  ">
          <Link
            to={"/pendingorder"}
            className="order-stats order-stats_pending "
            href="https://6valley.6amtech.com/admin/orders/list/pending"
          >
            <div className="order-stats__content ">
              <img
                src="https://6valley.6amtech.com/public/assets/back-end/img/pending.png"
                width="20"
                alt="Pending"
              />
              <h6 className="order-stats__subtitle">Pending</h6>
            </div>

            <span className="order-stats__title  ">0</span>
          </Link>
        </div>
        <div className=" ">
          <Link
            to={"/confirmedorder"}
            className="order-stats order-stats_confirmed"
            href="https://6valley.6amtech.com/admin/orders/list/confirmed"
          >
            <div className="order-stats__content  ">
              <img
                src="https://6valley.6amtech.com/public/assets/back-end/img/confirmed.png"
                width="20"
                alt="Confirmed"
              />
              <h6 className="order-stats__subtitle">Confirmed</h6>
            </div>
            <span className="order-stats__title ml-4">0</span>
          </Link>
        </div>
        <div className="">
          <Link
            to={"/packagingorder"}
            className="order-stats order-stats_packaging"
            href="https://6valley.6amtech.com/admin/orders/list/processing"
          >
            <div className="order-stats__content">
              <img
                src="https://6valley.6amtech.com/public/assets/back-end/img/packaging.png"
                width="20"
                alt="Packaging"
              />
              <h6 className="order-stats__subtitle">Packaging</h6>
            </div>
            <span className="order-stats__title">0</span>
          </Link>
        </div>
        <div className="">
          <Link
            to={"/outfordelivery"}
            className="order-stats order-stats_out-for-delivery"
            href="https://6valley.6amtech.com/admin/orders/list/out_for_delivery"
          >
            <div className="order-stats__content">
              <img
                src="https://6valley.6amtech.com/public/assets/back-end/img/out-of-delivery.png"
                width="20"
                alt="Out for Delivery"
              />
              <h6 className="order-stats__subtitle">Out for delivery</h6>
            </div>
            <span className="order-stats__title">0</span>
          </Link>
        </div>
        <div className="">
          <Link to={"/deliveredorder"}>
            <div
              className="order-stats order-stats_delivered cursor-pointer get-view-by-onclick"
              data-link="https://6valley.6amtech.com/admin/orders/list/delivered"
            >
              <div className="order-stats__content">
                <img
                  src="https://6valley.6amtech.com/public/assets/back-end/img/delivered.png"
                  width="20"
                  alt="Delivered"
                />
                <h6 className="order-stats__subtitle">Delivered</h6>
              </div>
              <span className="order-stats__title">0</span>
            </div>
          </Link>
        </div>
        <div className="">
          <Link to={"/cancelledorder"}>
            <div
              className="order-stats order-stats_canceled cursor-pointer get-view-by-onclick"
              data-link="https://6valley.6amtech.com/admin/orders/list/canceled"
            >
              <div className="order-stats__content">
                <img
                  src="https://6valley.6amtech.com/public/assets/back-end/img/canceled.png"
                  width="20"
                  alt="Canceled"
                />
                <h6 className="order-stats__subtitle">Canceled</h6>
              </div>
              <span className="order-stats__title">0</span>
            </div>
          </Link>
        </div>
        <div className="">
          <Link to={"/returnedorder"}>
            <div
              className="order-stats order-stats_returned cursor-pointer get-view-by-onclick"
              data-link="https://6valley.6amtech.com/admin/orders/list/returned"
            >
              <div className="order-stats__content">
                <img
                  src="https://6valley.6amtech.com/public/assets/back-end/img/returned.png"
                  width="20"
                  alt="Returned"
                />
                <h6 className="order-stats__subtitle">Returned</h6>
              </div>
              <span className="order-stats__title">0</span>
            </div>
          </Link>
        </div>
        <div className="">
          <Link to={"/failorder"}>
            <div
              className="order-stats order-stats_failed cursor-pointer get-view-by-onclick"
              data-link="https://6valley.6amtech.com/admin/orders/list/failed"
            >
              <div className="order-stats__content">
                <img
                  src="https://6valley.6amtech.com/public/assets/back-end/img/failed-to-deliver.png"
                  width="20"
                  alt="Failed to Delivery"
                />
                <h6 className="order-stats__subtitle text-[.8rem]">
                  Failed to delivery
                </h6>
              </div>
              <span className="order-stats__title">0</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BusinessAnalytics;
