import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  
} from "react-router-dom";

import AttributeSetup from "./pages/ProductAttributeSetUp/ProductAttributeSetUp";
// import InHouseProductList from "./pages/In_House_Product/InHouseProductList/In_House_Product";

import MainHouseAddProduct from "./pages/In_House_Product/AddProduct/mainHouseAddProduct";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import Categories from "./pages/Categoreis/Categories";
import SubCateggories from "./pages/Categoreis/SubCateggories";
import Sub_Sub_Categories from "./pages/Categoreis/Sub_Sub_Categories";
import AddNewBrand from "./pages/Brands/AddNew";
import BulkImport from "./pages/In_House_Product/AddProduct/BulkImport/BulkImport";
import Coupon from "./pages/OfferAndDeals/Coupon/Coupon";
import FlashDeals from "./pages/OfferAndDeals/FlashDeal/FlashDeals";
import DealOfTheDay from "./pages/OfferAndDeals/DealOfDay/DealOfDay";
import FeatureDeal from "./pages/OfferAndDeals/FeatureDeal/FeatureDeal";
import CustomerReviews from "./pages/Costumers/Costumer_Review/CustomerReviews";
import CustomerList from "./pages/Costumers/Costumer_Review/CustomerList/CustomerList";
import WalletManagement from "./pages/Costumers/CWallet/CustomersWallet";
import CustomerBonusSetUp from "./pages/Costumers/CustomerBonusSetUp/CustomerBonusSetUp";

import CustomerLoyaltyReport from "./pages/Costumers/CustomerLoyalityReport/CustomerLoyaltyReport";
import EmployeeRoleSetup from "./pages/Employees/EmployeRoleSetUp/EmployeeRoleSetup";

import EmployeeList from "./pages/Employees/Employees/Employees";
import SubscriberList from "./pages/Subscriber/SubscriberList";
import SystemSetup from "./pages/SettingSetup/SystemSetup.jsx/SystemSetup";
import AppSettings from "./pages/SettingSetup/SystemSetup.jsx/SystemSetups";
import SystemSettings from "./pages/SettingSetup/SystemSetup.jsx/SystemSetups";
import SystemSetups from "./pages/SettingSetup/SystemSetup.jsx/SystemSetups";
import LoginSetups from "./pages/SettingSetup/LoginSetting/LoginSetting";
import TheemSetUp from "./pages/SettingSetup/Theem/TheemSetUp";
import ThirParty from "./pages/ThirdParty/ThirParty";
import OtherConfiguration from "./pages/ThirdParty/Paymentmethod/OtherConfiguration/OtherConfiguration";
import Page from "./pages/ThirdParty/Paymentmethod/OtherConfiguration/page";
import SocialMedia from "./pages/PagesAndMedia/SocialMedia";
import PageAndMedia from "./pages/PagesAndMedia/page";
import Combine from "./pages/SalesAndTransaction/EarnReport/totallcomponent";
import EarningReport from "./pages/SalesAndTransaction/EarnReport/totallcomponent";
import InhouseSale from "./pages/SalesAndTransaction/InhouseProduct/InhouseProduct";
import BusinessSetup from "./pages/Bussnesssetup/BusinessSetup";
import InHouseBusiness from "./pages/Bussnesssetup/InHouseBusiness/InHouseBusiness";

import Ticket_Support from "./pages/Health_Support/Ticket_Support";
import Message from "./pages/Health_Support/Message";
import OrderList from "./pages/Order/OrderList";

import ProdictGallery from "./pages/Health_Support/Product_Gallery";
import BrandList from "./pages/Brands/BrandList";
import BannerSetup from "./pages/faisal/BannerSetup/BannerSetup";
import POS from "./pages/Health_Support/Pos";
import IndexMessage from "./pages/Health_Support/Index";
import LoginPage from "./components/LoginPage/LoginPage";
import PendingOrder from "./pages/Order/PendingOrder";

import PuchNotify from "./pages/faisal/PuchNotifaction/PuchNotify";
import AnnouncementSetup from "./pages/faisal/AnnouncementSetup/AnnouncementSetup";
import SendNotifaction from "./pages/faisal/SendNotifaction";
import AddNewDelivery from "./pages/faisal/Delivery Men/AddNew";
import DeliveryManList from "./pages/faisal/Delivery Men/List";
import EmergencyContact from "./pages/faisal/Delivery Men/EmergencyContact";
import WithdrawRequest from "./pages/faisal/Delivery Men/WithdrawRequest";
import BusinessSetupShop from "./pages/Bussnesssetup/BusinessSetup";
import VendorList from "./pages/Vender/VenderList/VenderList";
import VenderListDetail from "./pages/Vender/VendereListDetail/VenderList";
import ShopStoreDetails from "./pages/Vender/VendereListDetail/ShopStoreDetails";

import AddVendorForm from "./pages/Vender/AddVender/AddVender";
import VenderWallet from "./pages/Vender/VenderWallet/VenderWallet";
import VenderWalletMethod from "./pages/Vender/VenderWalletMethod/VenderWalletMethod";
import WithdrawalMethods from "./pages/Vender/VenderWalletMethod/VenderWidrawmethod";
import RefundDetails from "./pages/Refound/Details/RefoundDetail/RefoundDetail";
import CategoryUpdate from "./pages/Categoreis/CategoryEdit/CategoryEdit";
import SubEdit from "./pages/Categoreis/Subcategoryedit";
import BrandUpdate from "./pages/Brands/BrandUpdate";
import UpdateAttribute from "./pages/ProductAttributeSetUp/UpdateAtribute";
import GenerateBarcode from "./pages/In_House_Product/InHouseProductList/GeneratCode/GeneratCode";
import InhouseProductBtn from "./pages/In_House_Product/InHouseProductList/InhouseProductbutton/ProductBtn";
import BannerUpdateForm from "./pages/faisal/BannerSetup/BannerSetupForm";
import AddBannerForm from "./pages/faisal/BannerSetup/AddBanner";
import CouponUpdate from "./pages/OfferAndDeals/Coupon/CouponUpdate";
import AddNewProductComponent from "./pages/OfferAndDeals/FeatureDeal/AddDealProduct";
import LimitedStockProductsList from "./pages/In_House_Product/InHouseProductList/LimitedProduct/LimitedProduct";
import ProductGallery from "./pages/Health_Support/Product_Gallery";
import PageGallery from "./pages/Health_Support/Gallery";
import EaringReports from "./pages/faisal/ReportAndAnalysis/SalesAndTranscationReports/EmaingReport/EamingReports";
import ProductReports from "./pages/faisal/ReportAndAnalysis/ProductReports/ProductReports";
import OrderReports from "./pages/faisal/ReportAndAnalysis/OrderReports/OrderReports";
import InHouseSales from "./pages/faisal/ReportAndAnalysis/SalesAndTranscationReports/InHouseSales";
import VendorSales from "./pages/faisal/ReportAndAnalysis/SalesAndTranscationReports/VendorSales";
import TranscatioReports from "./pages/faisal/ReportAndAnalysis/SalesAndTranscationReports/TransctionReports/TranscatioReports";
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
import AddNewProduct from "./pages/seller_product/add/addProduct/addProductForm.jsx";
import ProductDetail from "./pages/seller_product/productDetail/ProductDetail.jsx";
import InhouseProductUpdate from "./pages/seller_product/add/updateProduct/InhouseProductUpdate.jsx";

function AllRoutes() {

  return (
   <>

<Routes>
                  
                  <Route path="/login" element={<LoginPage />} />
               
                  <Route path="/businesssetup" element={<BusinessSetup />} />
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
                  <Route path="/pos" element={<POS />} />
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
                    path="/productattributesetup"
                    element={<AttributeSetup />}
                  />
                  <Route
                    path="/productattributeupdate"
                    element={<UpdateAttribute />}
                  />
                  <Route
                    path="/inhouseproductlist"
                    element={<InHouseProductPage />}
                  />
                  <Route
                    path="/inhouseproductlistcode"
                    element={<GenerateBarcode />}
                  />
                  <Route
                    path="/inhouseprod  uctlistproduct"
                    element={<InhouseProductBtn />}
                  />
                  <Route
                    path="/inhouseaddproduct"
                    element={<AddNewProduct />}
                  />
                  <Route path="/categories" element={<Categories />} />
                  <Route path="/categoryedit" element={<CategoryUpdate />} />
                  <Route path="/subcategories" element={<SubCateggories />} />
                  <Route path="/subedit" element={<SubEdit />} />
                  <Route
                    path="/subsubcategories"
                    element={<Sub_Sub_Categories />}
                  />
                  <Route path="/addnewbrand" element={<AddNewBrand />} />
                  <Route path="/brandlist" element={<BrandList />} />
                  <Route path="/brandupdate" element={<BrandUpdate />} />
                  <Route path="/bulkimport" element={<BulkImport />} />
                  <Route path="/coupon" element={<Coupon />} />
                  <Route path="/couponupdate" element={<CouponUpdate />} />

                  <Route path="/flashdeals" element={<FlashDeals />} />
                  <Route path="/dealofday" element={<DealOfTheDay />} />
                  <Route path="/featuredeal" element={<FeatureDeal />} />
                  <Route
                    path="/inhouseaddproduct"
                    element={<AddNewProduct />}
                  />
                  <Route path="/product/:productId" 
                  element={<InhouseProductUpdate />} />

                  <Route path="/creview" element={<CustomerReviews />} />
                  <Route path="/customerlist" element={<CustomerList />} />
                  <Route
                    path="/walletmanagement"
                    element={<WalletManagement />}
                  />
                  <Route
                    path="/customerbonussetup"
                    element={<CustomerBonusSetUp />}
                  />
                  <Route
                    path="/customerloyaltyreport"
                    element={<CustomerLoyaltyReport />}
                  />
                  <Route
                    path="/employeerolesetup"
                    element={<EmployeeRoleSetup />}
                  />
                  <Route path="/employeelist" element={<EmployeeList />} />
                  <Route path="/subscriberlist" element={<SubscriberList />} />
                  <Route path="/systemsetup" element={<SystemSetup />} />
                  <Route path="/appsettings" element={<AppSettings />} />
                  <Route path="/systemsettings" element={<SystemSettings />} />
                  <Route path="/systemsetups" element={<SystemSetups />} />
                  <Route path="/loginsetups" element={<LoginSetups />} />
                  <Route path="/theemsetup" element={<TheemSetUp />} />
                  <Route path="/thirdparty" element={<ThirParty />} />
                  <Route
                    path="/otherconfiguration"
                    element={<OtherConfiguration />}
                  />
                  <Route path="/pagesocialmedia" element={<SocialMedia />} />
                  <Route path="/pagemedia" element={<PageAndMedia />} />

                  <Route path="/earningreport" element={<EaringReports />} />
                  <Route path="/inhousesales" element={<InHouseSales />} />
                  <Route path="/vendersale" element={<VendorSales />} />
                  <Route
                    path="/transactionrepo"
                    element={<TranscatioReports />}
                  />

                  <Route path="/productreport" element={<ProductReports />} />
                  <Route
                    path="/salesandtransactionreport"
                    element={<TranscatioReports />}
                  />
                  <Route path="/orderreports" element={<OrderReports />} />

                  <Route path="/pagegallery" element={<PageGallery />} />
                  <Route path="/productgallery" element={<ProductGallery />} />
                  <Route path="/earningreport" element={<EarningReport />} />
                  <Route
                    path="/inhouseproductearning"
                    element={<InhouseSale />}
                  />
                  <Route
                    path="/inhouselimitedproduct"
                    element={<LimitedStockProductsList />}
                  />

                  <Route
                    path="/businessinhouse"
                    element={<InHouseBusiness />}
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
                  <Route path="/pushnotification" element={<PuchNotify />} />
                  <Route path="/announcement" element={<AnnouncementSetup />} />
                  <Route
                    path="/sendnotification"
                    element={<SendNotifaction />}
                  />
                  <Route path="/addnewdelivery" element={<AddNewDelivery />} />
                  <Route
                    path="/deliverymanlist"
                    element={<DeliveryManList />}
                  />
                  <Route
                    path="/emergencycontact"
                    element={<EmergencyContact />}
                  />
                  <Route
                    path="/withdrawrequest"
                    element={<WithdrawRequest />}
                  />
                  <Route
                    path="/bankinformation"
                    element={<BankInformation />}
                  />
                  <Route path="/shopsetting" element={<Shop_Setting />} />
                  <Route path="/bankinfoedit" element={<Editbtn />} />
                  <Route path="/withdraws" element={<Withdraws />} />
                  <Route path="/indexmessage" element={<IndexMessage />} />
                  <Route path="/bannersetup" element={<BannerSetup />} />
                  <Route
                    path="/bannersetupform"
                    element={<BannerUpdateForm />}
                  />
                  <Route path="/addbannerform" element={<AddBannerForm />} />

                  <Route path="/venderlist" element={<VendorList />} />
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
                  <Route path="/" element={<WithdrawalMethods />} />

                  {/* Add other routes here as needed */}
                </Routes>
                </>
  );
}

export default AllRoutes;

