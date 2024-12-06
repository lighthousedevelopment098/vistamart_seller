import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  
} from "react-router-dom";


import WelcomePage from "./pages/WelcomePage/WelcomePage";

import BulkImport from "./pages/In_House_Product/AddProduct/BulkImport/BulkImport";


import Ticket_Support from "./pages/Health_Support/Ticket_Support";
import Message from "./pages/Health_Support/Message";
import OrderList from "./pages/Order/OrderList";

import IndexMessage from "./pages/Health_Support/Index";


import VenderListDetail from "./pages/Vender/VendereListDetail/VenderList";
import ShopStoreDetails from "./pages/Vender/VendereListDetail/ShopStoreDetails";

import AddVendorForm from "./pages/Vender/AddVender/AddVender";
import VenderWallet from "./pages/Vender/VenderWallet/VenderWallet";
import VenderWalletMethod from "./pages/Vender/VenderWalletMethod/VenderWalletMethod";

import RefundDetails from "./pages/Refound/Details/RefoundDetail/RefoundDetail";
import GenerateBarcode from "./pages/In_House_Product/InHouseProductList/GeneratCode/GeneratCode";
import InhouseProductBtn from "./pages/In_House_Product/InHouseProductList/InhouseProductbutton/ProductBtn";
import LimitedStockProductsList from "./pages/In_House_Product/InHouseProductList/LimitedProduct/LimitedProduct";
import ProductGallery from "./pages/Health_Support/Product_Gallery";
import PageGallery from "./pages/Health_Support/Gallery";
import BankInformation from "./pages/In_House_Product/Bussiness_Section/Bank_Information";
import Withdraws from "./pages/In_House_Product/Bussiness_Section/Withdraws";
import Shop_Setting from "./pages/In_House_Product/Bussiness_Section/Shop_Setting";
import Editbtn from "./pages/In_House_Product/Bussiness_Section/Editbtn";
import ProfileInformation from "./components/new/Footer/ProfileInformation/ProfileInformation";


import {  
  PendingOrders,
 ConfirmedOrders,
 DeliveredOrders,
 PackagingOrders,
 OutForDeliveryOrders,
 FailedToDeliverOrders,
 ReturnedOrders,
 CanceledOrders } 
from './pages/Order/OrderManagementPages.jsx';

import { ApprovedRefunds, PendingRefunds, RefundedRefunds, RejectedRefunds } from "./pages/Refound/RefundRequestPage.jsx";
import {
 InHouseProductPage,
 VendorPendingProductPage,
 VendorNewRequestProductPage,
 VendorApprovedProductPage,
 VendorDeniedProductPage
} from "./pages/In_House_Product/ProductManagmentComponent.jsx";// Adjust the import path as needed

 import OrderDetails from "./pages/Order/OrderDeatiels.jsx"
import AddNewProduct from "./pages/In_House_Product/AddProduct/addProduct/addProductForm.jsx";
import ProductDetail from "./pages/seller_product/productDetail/ProductDetail.jsx";
import UpdateBankForm from "./pages/In_House_Product/Bussiness_Section/upddateBank.jsx";
import TranscatioReports from "./pages/SalesAndTransaction/TransctionReports/TranscatioReports.jsx";
import ProductReports from "./pages/SalesAndTransaction/ProductReports/ProductReports.jsx";
import OrderReports from "./pages/SalesAndTransaction/OrderReports/OrderReports.jsx";
import CouponList from "./pages/Coupon/couponList.jsx";
import UpdateVendor from "./pages/Shop/UpdateVendor.jsx";
import InhouseProductUpdate from "./pages/In_House_Product/AddProduct/updateProduct/InhouseProductUpdate.jsx";


function AllRoutes() {

  return (
   <>

<Routes>
                  
                  {/* <Route path="/login" element={<LoginPage />} /> */}
               
                  <Route
                    path="/newproductrequest"
                    element={<VendorNewRequestProductPage />}
                  />
                  <Route path="/venderupdate" element={<VendorPendingProductPage />} />
                  <Route
                    path="/approvedproductlist"
                    element={<VendorApprovedProductPage />}
                  />
                  <Route path="/products/:productId" element={<ProductDetail />} />
                  <Route path="/deniedproduct" element={<VendorDeniedProductPage />} />
                  {/* <Route path="/orderdetail/:id" element={<OrderDeatiels />} /> */}
                  <Route path="/" element={<WelcomePage />} />
                  <Route path="/allorders" element={<OrderList />} />
                  <Route path="/orderdetail/:id" element={<OrderDetails />} />
                  {/* <Route path="/pendingorders" element={<PendingOrders />} /> */}
                  <Route
                    path="/pendingrefundrequests"
                    element={<PendingRefunds />}
                  />
                  <Route
                    path="/approverefundrequests"
                    element={<ApprovedRefunds />}
                  />
                  <Route path="/refunded" element={<RefundedRefunds />} />
                  <Route path="/rejected" element={<RejectedRefunds />} />
                  <Route path="/refunddetail/:id" element={<RefundDetails />} />
                 
                  
                  <Route
                    path="/inhouseproductlist"
                    element={<InHouseProductPage />}
                  />
                  <Route
                    path="/inhouseproductlistcode"
                    element={<GenerateBarcode />}
                  />
                  <Route
                    path="/inhouseproductlistproduct"
                    element={<InhouseProductBtn />}
                  />
                  <Route path="/bulkimport" element={<BulkImport />} />
                  <Route path="/coupon" element={<CouponList />} />
                  {/* <Route path="/couponupdate" element={<CouponUpdate />} /> */}
                  <Route
                    path="/inhouseaddproduct"
                    element={<AddNewProduct />}
                  />
                  <Route path="/product/:id" 
                  element={<InhouseProductUpdate />} />


                  <Route path="/pagegallery" element={<PageGallery />} />
                  <Route path="/productgallery" element={<ProductGallery />} />
                  
                  <Route
                    path="/inhouselimitedproduct"
                    element={<LimitedStockProductsList />}
                  />

              
                  <Route path="/ticketsupport" element={<Ticket_Support />} />
                  <Route path="/messagesupport" element={<Message />} />
                  <Route path="/orderlist" element={<OrderList />} />
                  <Route path="/pendingorder" element={<PendingOrders />} />
                  <Route path="/confirmedorder" element={<ConfirmedOrders />} />
                  <Route path="/packagingorder" element={<PackagingOrders />} />
                  <Route path="/deliveredorder" element={<DeliveredOrders />} />
                  <Route path="/returnedorder" element={<ReturnedOrders />} />
                  <Route path="/cancelledorder" element={<CanceledOrders />} />
                  <Route path="/failorder" element={<FailedToDeliverOrders />} />
                  <Route path="/outfordelivery" element={<OutForDeliveryOrders />} />
                
                
                  <Route
                    path="/bankinformation"
                    element={<BankInformation />}
                  />
                  <Route path="/shopsetting" element={<Shop_Setting />} />
                  <Route path="/shopedit/:id" element={<UpdateVendor />} />
                  <Route path="/bankinfoadd" element={<Editbtn />} />
                  <Route path="bankinfoedit/:id" element={<UpdateBankForm />} />
                  <Route path="/withdraws" element={<Withdraws />} />
                  <Route path="/indexmessage" element={<IndexMessage />} />
                 
                  <Route path="/venderdetail" element={<VenderListDetail />} />
                  <Route path="/shopview" element={<ShopStoreDetails />} />
                  <Route path="/new" element={<ShopStoreDetails />} />
                  <Route path="/image" element={<ShopStoreDetails />} />
                 
                  <Route path="/addvenderform" element={<AddVendorForm />} />
                  <Route path="/addvenderwallet" element={<VenderWallet />} />
                  <Route path="/withdraw" element={<VenderWallet />} />
                  <Route
                    path="/profileinformation"
                    element={<ProfileInformation />}
                  />
                  <Route
                    path="/addvenderwalletmethod"
                    element={<VenderWalletMethod />}
                  />
                  {/* <Route path="/" element={<WithdrawalMethods />} /> */}
                  <Route path="/salesandtransactionreport" element={<TranscatioReports />} />
                  <Route path="/orderreports" element={<OrderReports />} />
                  <Route path="/productreport" element={<ProductReports />} />

                  {/* Add other routes here as needed */}
                </Routes>
                </>
  );
}

export default AllRoutes;

