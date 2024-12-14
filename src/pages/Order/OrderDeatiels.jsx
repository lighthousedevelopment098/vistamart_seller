import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { IoIosPrint } from "react-icons/io";
import { IoPersonSharp } from "react-icons/io5";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateOrderStatus, fetchOrderById }
 from
  "../../components/redux/orderSlice";
import LoadingSpinner from "../../components/LoodingSpinner/LoadingSpinner";
import apiConfig from "../../components/config/apiConfig";
import { getAuthData } from "../../utils/authHelper";
import axios from "axios";

const OrderDetails = () => {
  const { id } = useParams(); // Get the order ID from URL parameters
  const dispatch = useDispatch();

  const { orders, status, error } = useSelector((state) => state.vendorOrder);
  const navigate = useNavigate(); // Initialize useNavigate hook

  const [paymentStatus, setPaymentStatus] = useState(true);
  const fallbackImage = "/image-place-holder.png"; // Replace with the path to your fallback image
  const [showModal, setShowModal] = useState(false);
  const [weight, setWeight] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [pickupId, setPickupId] = useState(null); // State to store Pickup ID

  const {token, user} = getAuthData();
  useEffect(() => {
    dispatch(fetchOrderById(id)); // Fetch order details via Redux
  }, [dispatch, id]);


  const printInvoice = () => {
    window.print();
  };

  useEffect(() => {
    const fetchPickupId = async () => {
      try {
        const response = await axios.get(
          `${apiConfig.seller}/shippingInfo?vendorId=${user?._id}`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
  
        // Access the first item in the `doc` array to get `pickingAddressId`
        const pickingAddressId = response.data.doc?.[0]?.pickingAddressId || null;
  
        setPickupId(pickingAddressId);
      } catch (err) {
        console.error("Failed to fetch Pickup ID:", err.response || err.message);
      }
    };
  
    fetchPickupId();
  }, [token, user?._id]);
  
  console.log("pickup ", pickupId)
  const handleBookShipping = async () => {
    const payload = {
      service_type_id: 1,
      pickup_address_id: pickupId,
      information_display: 0,
      consignee_city_id: order?.shippingAddress?.cityId,
      consignee_name: order?.customer?.firstName,
      consignee_address: order?.shippingAddress?.address,
      consignee_phone_number_1: order?.customer?.phoneNumber,
      consignee_email_address: order?.customer?.email,
      order_id: order?.orderId, // Dynamic Order ID
      item_product_type_id: 12, // category id 
      item_description: "One black t-shirt medium",
      item_quantity: order?.totalQty,
      item_insurance: 0,
      item_price: order?.totalAmount,
      pickup_date: pickupDate, // Pickup Date from Form
      special_instructions: "Please call before delivery",
      estimated_weight: parseFloat(weight), // Weight from Form
      shipping_mode_id: 1,
      same_day_timing_id: 1,
      amount: order?.totalAmount,
      payment_mode_id: 1,
      charges_mode_id: 4,
      open_shipment: 0,
      pieces_quantity: 1,
      shipper_reference_number_1: "Abdullah 1122",
    };  
    try {
      console.log("Data to be submitted:", payload);
      const response = await fetch("http://app.sonic.pk/api/shipment/book", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: import.meta.env.VITE_API_KEY,
        },
        body: JSON.stringify(payload),
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log("Shipping data:", data);
  
        
        const trackingId = data.tracking_number;
        console.log("Tracking ID:", trackingId);

        await dispatch(updateOrder({ orderId: order?._id, trackingId })).unwrap();
  
        toast.success(`Shipping booked successfully! Tracking Number: ${data.tracking_number}`);
        setShowModal(false); // Close modal
      } else {
        toast.error("Failed to book shipping. Please try again.");
      }
    } catch (error) {
      console.error("Error occurred while booking shipping:", error);
      toast.error("An error occurred while booking shipping.");
    }
  };
  

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const handleUpdateStatus = async (orderId, status) => {
    try {
      await dispatch(updateOrderStatus({ orderId, status })).unwrap();
      toast.success("Order status updated successfully!");
       if (status === "confirmed") {
        navigate("/confirmedorder");
      }
       else if (status === "packaging") {
        navigate("/packagingorder");

      } 
       else if (status === "pending") {
        navigate("/pendingorder");

      } 
      
      else if (status === "out_for_delivery") {
        navigate("/outfordelivery");
      } else if (status === "delivered") {
        navigate("/deliveredorder");
      } else if (status === "canceled") {
        navigate("/cancel");
      } else if (status === "failed_to_deliver") {
        navigate("/failedorder");
      } else if (status === "returned") {
        navigate("/returnedorder");
      }
    } catch (error) {
      toast.error("Failed to update order status.");
    }
  };

  const togglePaymentStatus = () => {
    setPaymentStatus(!paymentStatus);
  };
  const order = orders.find((order) => order._id === id);


  // Check the loading state
  if (status === 'loading') {
    return <LoadingSpinner />;
  }

  // Check for errors
  if (status === 'failed') {
    return <div>Error fetching orders details: {error}</div>;
  }
 // Find the specific order based on the ID
 const Orders = orders.find((order) => order?._id === id);
 // Check if orders exists
  if (!orders) {
    return <div>No orders details found.</div>;
  }

  const {
    customer,
    vendor,
    products,
    orderStatus,
    totalAmount,
    paymentMethod,
    shippingAddress,
    billingAddress,
  } = Orders;

  console.log("produc=====", products)
  return (
    <>
      <div className="bg-[#F9F9FB] w-full px-10 py-8">
        <div className="flex items-center gap-2">
          <img
            src="/all-orders.png"
            alt=""
            className="w-5 h-5"
          />
          <h1 className="text-xl font-bold">Order Details</h1>
        </div>
        <br />

        <div className="grid grid-cols-1 lg:grid-cols-6 gap-5">
          <div className="col-span-1 lg:col-span-4 bg-white rounded h-full border-gray-400 hover:shadow-md p-2">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-[1rem] font-bold pb-5">
                  Order ID #{Orders?.orderId}
                </h2>
                <p>{new Date(Orders?.createdAt).toLocaleString()}</p>
              </div>
              <div className="flex items-center gap-2">
                <div>
                  <Button  className="bg-primary-500 text-white hover:bg-primary-dark-500" onClick={handleShow}>
                  Book Shipping
                  </Button>
                </div>
                {/* <button
                  className="borders rounded px-3 py-2  bg-primary flex items-center gap-2 text-white hover:bg-primary-dark"
                  onClick={printInvoice}
                  style={{ color: "white" }}
                >
                  <IoIosPrint className="text-white" /> Print Invoice
                </button> */}
              </div>
            </div>
            <div className="text-end pt-2">
              {/* <h1>
                Status :
                <span
                  className={`bg-primary-500 font-bold p-1 rounded border text-primary mb-3`}
                >
                  {status}
                </span>
              </h1> */}
              <h1 className="bg-secondary-500">
              Tracking Id :
                <span
                  className={`bg-secondary-500 font-bold p-1 rounded border text-primary-500 mt-3 mb-2`}
                >
                  {order?.trackingId || "0"}
                </span>
              </h1>
              <h1 className="pt-3 text-md">
                Payment Method :
                <span className="font-bold text-md">{paymentMethod}</span>
              </h1>
              <h1 className="pt-3 text-md">
                Payment Status :
                <span className={`font-bold text-primary ms-3`}>
                  {paymentStatus ? "Paid" : "Unpaid"}
                </span>
              </h1>
              <h1 className="pt-3 text-md">
                orders verification code :
                <span className="font-bold ms-3">
                  {" "}
                  {Orders?.orderId}
                </span>
              </h1>
            </div>
            <div className="container p-4">
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr className="bg-[#F7FAFF] text-gray-700">
                      <th className="px-4 py-2 text-center font-semibold text-lg whitespace-nowrap">
                        SL
                      </th>
                      <th className="px-4 py-2 text-center font-semibold text-lg whitespace-nowrap">
                        Item Details
                      </th>
                      <th className="px-4 py-2 text-center font-semibold text-lg whitespace-nowrap">
                        Item Price
                      </th>
                      <th className="px-4 py-2 text-center font-semibold text-lg whitespace-nowrap">
                        Tax
                      </th>
                      <th className="px-4 py-2 text-center font-semibold text-lg whitespace-nowrap">
                        Item Discount
                      </th>
                      <th className="px-4 py-2 text-center font-bold text-lg whitespace-nowrap">
                        Total Price
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    
                  {products && products?.length > 0 ? (
  products?.map((item, index) => (
    <tr className="hover:bg-gray-100" key={item?._id}>
      <td className="px-4 py-2 text-center">{index + 1}</td>
      <td className="px-4 py-2 w-full">
        <div className="flex items-center whitespace-nowrap">
          <img
            src={
              item?.productDetails?.thumbnail
                ? `${apiConfig.bucket}/${item.productDetails.thumbnail}`
                : fallbackImage
            }
            alt={item?.productDetails?.name || "Product Image"}
            className="w-10 h-10 object-cover rounded mr-3"
            onError={(e) => (e.target.src = fallbackImage)} // Fallback image if load fails
          />
          <div>
            <div>{item?.productDetails?.name}</div>
            <div>Qty: {item?.quantity}</div>
            <div>
              Unit price: PKR {item?.price} (Tax: {item?.taxAmount}%)
            </div>
          </div>
        </div>
      </td>
      <td className="px-4 py-2 text-center">PKR {item?.price}</td>
      <td className="px-4 py-2 text-center">PKR {item?.taxAmount}</td>
      <td className="px-4 py-2 text-center">PKR {item?.discountAmount}</td>
      <td className="px-4 py-2 text-center">
        PKR {item?.price - item?.discountAmount + item?.taxAmount}
      </td>
    </tr>
  ))
) : (
  <tr>
    <td colSpan="6" className="text-center py-4">
      No products available
    </td>
  </tr>
)}

                  </tbody>
                </table>
              </div>
              <div className="mt-4 p-2">
    {/* {products?.map((product, index) => (
      <div key={index} className="mb-4">
        <div className="flex justify-between border-t pt-2">
          <span>Item {index + 1} Price</span>
          <span>PKR {product.price}</span>
        </div>
        <div className="flex justify-between">
          <span>Item Discount</span>
          <span>- PKR {product.discountAmount}</span>
        </div>
        <div className="flex justify-between">
          <span>VAT/TAX</span>
          <span>PKR {product.taxAmount}</span>
        </div>
        <div className="flex justify-between">
          <span>Delivery Fee</span>
          <span>PKR {product.shippingCost || 0}</span>
        </div>
      </div>
    ))} */}

    {/* Calculations for the overall totals */}
    <div className="flex justify-between border-t pt-2 font-bold">
      <span>Sub Total</span>
      <span>
        PKR {products?.reduce((acc, product) => acc + product.price, 0)}
      </span>
    </div>
    <div className="flex justify-between">
      <span>Total Discount</span>
      <span>
        - PKR {products?.reduce((acc, products) => acc + (products.discountAmount), 0)}
      </span>
    </div>
    <div className="flex justify-between">
      <span>VAT/TAX</span>
      <span>
        PKR {products?.reduce((acc, product) => acc + (product.tax || 0), 0)}
      </span>
    </div>
    <div className="flex justify-between">
      <span>Delivery Fee</span>
      <span>
        PKR {products?.reduce((acc, product) => acc + (product.shippingCost || 0), 0)}
      </span>
    </div>
    <div className="flex justify-between font-bold border-t pt-2">
      <span>Total</span>
      <span>
        PKR{" "}
        {products?.reduce(
          (acc, product) =>
            acc +
            product.price -
            (product.discountAmount || 0) +
            (product.tax || 0) +
            (product.shippingCost || 0),
          0
        )}
      </span>
    </div>
  </div>
            </div>
          </div>

          <div className="col-span-1 lg:col-span-2">
            <div className="px-4 py-3 bg-white rounded-xl shadow-md space-y-4">
              <div className="space-y-2">
                <h2 className="text-xl font-semibold text-center">
                  Order & Shipping Info
                </h2>
                <div>
                  <label className="block">
                    <span className="text-gray-700 font-semibold">
                      Change Order Status
                    </span>
                    <select
                      className="form-select mt-1 bg-white borders border-gray-400 px-3 py-2 rounded block w-full"
                      value={Orders.status}
                      onChange={(e) =>
                        handleUpdateStatus(Orders._id, e.target.value)
                      }
                    >
                      <option value="pending">Pending</option>
                      <option value="confirmed">Confirmed</option>
                      <option value="delivered">Delivered</option>
                      <option value="canceled">Cancelled</option>
                      <option value="packaging">Packaging</option>
                      <option value="out_for_delivery">Out_for_delivery</option>
                      <option value="failed_to_deliver">
                        Failed_to_deliver
                      </option>
                      <option value="returned">Returned</option>
                    </select>
                  </label>
                  <label className="mt-3 flex justify-between items-center bg-white border border-gray-400 px-3 py-2 rounded">
                    <span className="text-gray-700">Payment Status</span>
                    <div className="flex items-center mt-1">
                      <span className="mr-2 text-primary">Paid</span>
                      <button
                        onClick={togglePaymentStatus}
                        className={`relative inline-flex items-center h-6 rounded-full w-11 focus:outline-none ${
                          paymentStatus ? "bg-green-600" : "bg-gray-200"
                        }`}
                      >
                        <span
                          className={`${
                            paymentStatus ? "translate-x-6" : "translate-x-1"
                          } inline-block w-4 h-4 transform bg-white rounded-full transition-transform duration-200 ease-in-out`}
                        />
                      </button>
                    </div>
                  </label>
                </div>
              </div>
            </div>
            <div className="px-4 py-3 bg-white rounded-xl shadow-md space-y-4 mt-5">
              <div className="space-y-2">
                <h2 className="text-md flex items-center gap-2 font-semibold">
                  <IoPersonSharp /> Customer information
                </h2>
                <div className="flex items-center space-x-4">
                  <div>
                    <img
        src={customer?.image ? `${apiConfig.bucket}/${customer?.image}` : fallbackImage}
        alt="Avatar"
                      className="w-16 h-16 rounded-full"
                    />
                  </div>
                  <div className="pt-5">
                    <p className="text-md font-medium">{customer?.firstName}</p>
                    {/* <p className="text-gray-500">17 Orders</p> */}
                    <p className="text-gray-500">{customer?.phoneNumber}</p>
                    <p className="text-gray-500">{customer?.email}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-4 py-3 bg-white rounded-xl shadow-md space-y-4 mt-5">
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <h2 className="text-md font-semibold flex gap-2">
                    <IoPersonSharp /> Shipping Address
                  </h2>
                  {/* <MdEdit className="text-[2rem] p-1 border hover:bg-primary-dark hover:text-white rounded border-primary bg-primary text-white" /> */}
                </div>
                <div className="space-y-1">
                  <p className="text-md font-medium">Name:{vendor?.firstName}</p>
                  <p className="text-gray-500">
                    Contact: {vendor?.phoneNumber}
                  </p>
                  <p className="text-gray-500">
                    Country: {shippingAddress?.country}
                  </p>
                  <p className="text-gray-500">City: {shippingAddress?.city}</p>
                  <p className="text-gray-500">
                    Zip Code: {shippingAddress?.zipCode}
                  </p>
                  <p className="text-gray-500">
                    address: {shippingAddress?.address}
                  </p>
                </div>
              </div>
            </div>
            <div className="px-4 py-3 bg-white rounded-xl shadow-md space-y-4 mt-5">
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <h2 className="text-md font-semibold flex gap-2">
                    <IoPersonSharp /> Billing Address
                  </h2>
                  {/* <MdEdit className="text-[2rem] p-1 border hover:bg-primary-dark hover:text-white rounded border-primary text-white bg-primary" /> */}
                </div>
                <div className="space-y-1">
                  <p className="text-gray-500">
                    Country: {billingAddress?.country}
                  </p>
                  <p className="text-gray-500">City: {billingAddress?.city} </p>
                  <p className="text-gray-500">
                    Zip Code: {billingAddress?.zipCode}
                  </p>
                  <p className="text-gray-500">
                    Address: {billingAddress?.address}
                  </p>
                </div>
              </div>
            </div>

            
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg p-6 w-96">
            <h2 className="text-lg font-bold mb-4">Book Shipping</h2>
            <label className="block mb-2 text-sm font-medium">Weight (Grams)</label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="w-full border rounded px-3 py-2 mb-4"
              placeholder="Enter weight in Gram"
            />
            <label className="block mb-2 text-sm font-medium">Pickup Date</label>
            <input
              type="date"
              value={pickupDate}
              onChange={(e) => setPickupDate(e.target.value)}
              className="w-full border rounded px-3 py-2 mb-4"
            />
            <div className="flex justify-end gap-3">
              <button
                onClick={handleClose}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleBookShipping}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default OrderDetails;
