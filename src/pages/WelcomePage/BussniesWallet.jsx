import React, { useEffect, useState } from "react";
import "./BussniesWallet.css";
import { Link } from "react-router-dom";
import apiConfig from "../../components/config/apiConfig";
import { getAuthData } from "../../utils/authHelper";

const ApiUrl = `${apiConfig.seller}/business-analytics`;

const BusinessAnalytics = () => {
  const { token } = getAuthData();
  const [analyticsData, setAnalyticsData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch business analytics data
  useEffect(() => {
    const fetchAnalyticsData = async () => {
      try {
        const response = await fetch(ApiUrl, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch analytics data");
        }
        const data = await response.json();
        console.log("response ====", data )
        setAnalyticsData(data.doc);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching analytics data:", error);
        setLoading(false);
      }
    };

    fetchAnalyticsData();
  }, [token]);

  // Map order statistics
  const orderStats = analyticsData?.ordersByStatus || {
    pending: 0,
    confirmed: 0,
    packaging: 0,
    out_for_delivery: 0,
    delivered: 0,
    failed_to_deliver: 0,
    returned: 0,
    canceled: 0,
  };

  const statItems = [
    { title: "Pending", key: "pending", image: "pending.png", link: "/pendingorder" },
    { title: "Confirmed", key: "confirmed", image: "confirmed.png", link: "/confirmedorder" },
    { title: "Packaging", key: "packaging", image: "packaging.png", link: "/packagingorder" },
    { title: "Out for delivery", key: "out_for_delivery", image: "out-of-delivery.png", link: "/outfordelivery" },
    { title: "Delivered", key: "delivered", image: "delivered.png", link: "/deliveredorder" },
    { title: "Canceled", key: "canceled", image: "canceled.png", link: "/cancelledorder" },
    { title: "Returned", key: "returned", image: "returned.png", link: "/returnedorder" },
    { title: "Failed to delivery", key: "failed_to_deliver", image: "failed-to-deliver.png", link: "/failorder" },
  ];

  return (
    <div className="card-body bg-white rounded-md px-5 py-5">
      <div className="row flex-between align-items-center g-2 mb-3">
        <div className="col-sm-6">
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
        className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 gap-2"
        id="order_stats"
      >
        {loading ? (
          <p>Loading...</p>
        ) : (
          statItems.map((item) => (
            <div key={item.key}>
              <Link
                to={item.link}
                className={`order-stats order-stats_${item.key}`}
              >
                <div className="order-stats__content">
                  <img
                    src={`https://6valley.6amtech.com/public/assets/back-end/img/${item.image}`}
                    width="20"
                    alt={item.title}
                  />
                  <h6 className="order-stats__subtitle">{item.title}</h6>
                </div>
                <span className="order-stats__title">
                  {orderStats[item.key] || 0}
                </span>
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default BusinessAnalytics;
