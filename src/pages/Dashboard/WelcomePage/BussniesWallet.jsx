import React, { useEffect, useState } from "react";
import CardFirst from "./CardFirst";
import Card2 from "./Card2";
import busnnises from "./BussniesWallet/2.png";
import total_stores from "./BussniesWallet/total-stores.png";
import total_product from "./BussniesWallet/total-product.png";
import total_customer from "./BussniesWallet/total-customer.png";
import all_orders from "./BussniesWallet/all-orders.png";
import Failed_to_delivery from "./BussniesWallet/failed-to-deliver.png";
import Returned from "./BussniesWallet/returned.png";
import Cancenled from "./BussniesWallet/canceled.png";
import Deliverd from "./BussniesWallet/delivered.png";
import out_of_delivery from "./BussniesWallet/out-of-delivery.png";
import Packaging from "./BussniesWallet/packaging.png";
import Confirmed from "./BussniesWallet/confirmed.png";
import pending from "./BussniesWallet/pending.png";
import apiConfig from "../../../components/config/apiConfig";
import { getAuthData } from "../../../utils/authHelper";

const ApiUrl = apiConfig.seller;

const BussniesWallet = () => {
  const { token } = getAuthData();
  const [cardsData, setCardsData] = useState([]);
  const [card2Data, setCard2Data] = useState([]);

  // Fetch data from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${ApiUrl}/business-analytics`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        const data = await response.json();
       console.log("data-----", response)  
        if (data.status === "success") {
          const doc = data.doc;

          // Map API data to cardsData and card2Data formats
          setCardsData([
            {
              title: "Total Orders",
              value: doc.totalOrders,
              icon: all_orders,
              bgColor: "bg-blue-100",
            },
            {
              title: "Total Stores",
              value: 10, // Placeholder: Update with actual API data if available
              icon: total_stores,
              bgColor: "bg-blue-100",
            },
            {
              title: "Total Products",
              value: doc.totalProducts,
              icon: total_product,
              bgColor: "bg-blue-100",
            },
            {
              title: "Total Customers",
              value: 10, // Placeholder: Update with actual API data if available
              icon: total_customer,
              bgColor: "bg-blue-100",
            },
          ]);

          setCard2Data([
            { Title: "Pending Orders", Count: doc.ordersByStatus.pending, icons: pending },
            { Title: "Confirmed", Count: doc.ordersByStatus.confirmed, icons: Confirmed },
            { Title: "Packaging", Count: doc.ordersByStatus.packaging, icons: Packaging },
            { Title: "Out for Delivery", Count: doc.ordersByStatus.out_for_delivery, icons: out_of_delivery },
            { Title: "Delivered", Count: doc.ordersByStatus.delivered, icons: Deliverd },
            { Title: "Canceled", Count: doc.ordersByStatus.canceled, icons: Cancenled },
            { Title: "Returned", Count: doc.ordersByStatus.returned, icons: Returned },
            { Title: "Failed to Deliver", Count: doc.ordersByStatus.failed_to_deliver, icons: Failed_to_delivery },
          ]);
        } else {
          console.error("Failed to fetch data:", data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [token]);

  return (
    <div className="bg-white border rounded-lg border-gray-200 mx-5">
      <div className="flex justify-between items-center p-5">
        <div className="font-bold text-xs flex gap-2 items-center">
          <img src={busnnises} alt="Business Analytics" />
          <h1>Business Analytics</h1>
        </div>
        <div>
          <select
            name="overall"
            id="overall"
            className="border border-gray-200 text-xs rounded-md px-1 py-1"
          >
            <option value="#" className="text-xs">
              Over All Statistics
            </option>
            <option value="#">Today's Statistics</option>
            <option value="#">This Month's Statistics</option>
          </select>
        </div>
      </div>

      <div className="container p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-2">
          {cardsData.map((card, index) => (
            <CardFirst
              key={index}
              title={card.title}
              value={card.value}
              icon={card.icon}
              bgColor={card.bgColor}
            />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 mx-5 gap-2">
        {card2Data.map((card, index) => (
          <Card2
            key={index}
            Title={card.Title}
            icons={card.icons}
            Count={card.Count}
          />
        ))}
      </div>
    </div>
  );
};

export default BussniesWallet;
