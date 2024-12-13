import React from "react";
import "./TopSellingProducts.css"; // Import your CSS file for styling
import { Link } from "react-router-dom";

const TopSellingProducts = () => {
  return (
    <div className="col-md-6 col-xl-6 snipcss-5ovlo">
      <div className="card h-100 remove-card-shadow">
        <div className="card-header gap-10">
          <h4 className="d-flex align-items-center text-capitalize gap-10 mb-0">
            <img
              width="20"
              src="https://6valley.6amtech.com/public/assets/back-end/img/top-selling-product-icon.png"
              alt=""
            />{" "}
            Top selling products
          </h4>
        </div>
        <div className="card-body">
          <div className="grid-item-wrap">
            <div
              className="cursor-pointer get-view-by-onclick"
              data-link="https://6valley.6amtech.com/admin/products/view/vendor/5"
            >
              <Link to={"/inhouseproductlistproduct"}>
                <div className="grid-item bg-transparent basic-box-shadow">
                  <div className="d-flex gap-10 align-items-center">
                    <img
                      src="https://6valley.6amtech.com/storage/app/public/product/thumbnail/2022-04-23-6263633d3b0a6.png"
                      className="avatar avatar-lg rounded avatar-bordered"
                      alt="Exclusive & Fashionable Suit For Men_Image"
                    />
                    <div className="title-color line--limit-2">
                      Exclusive & Fashiona ...
                    </div>
                  </div>
                  <div className="orders-count py-2 px-3 d-flex gap-1">
                    <div>Sold :</div>
                    <div className="sold-count">37</div>
                  </div>
                </div>
              </Link>
            </div>
            <Link to={"/inhouseproductlistproduct"}>
              <div
                className="cursor-pointer get-view-by-onclick"
                data-link="https://6valley.6amtech.com/admin/products/view/in-house/1"
              >
                <div className="grid-item bg-transparent basic-box-shadow">
                  <div className="d-flex gap-10 align-items-center">
                    <img
                      src="https://6valley.6amtech.com/storage/app/public/product/thumbnail/2022-04-20-625fe69f72cce.png"
                      className="avatar avatar-lg rounded avatar-bordered"
                      alt="Women's long-sleeve lightweight french terry fleece quarter-zip top_Image"
                    />
                    <div className="title-color line--limit-2">
                      Women's long-sleeve ...
                    </div>
                  </div>
                  <div className="orders-count py-2 px-3 d-flex gap-1">
                    <div>Sold :</div>
                    <div className="sold-count">27</div>
                  </div>
                </div>
              </div>
            </Link>
            <div
              className="cursor-pointer get-view-by-onclick"
              data-link="https://6valley.6amtech.com/admin/products/view/in-house/17"
            >
              <Link to={"/inhouseproductlistproduct"}>
                <div className="grid-item bg-transparent basic-box-shadow">
                  <div className="d-flex gap-10 align-items-center">
                    <img
                      src="https://6valley.6amtech.com/storage/app/public/product/thumbnail/2022-04-20-625fe97736a17.png"
                      className="avatar avatar-lg rounded avatar-bordered"
                      alt="Simple Mobile Carrier-Locked Galaxy A50 4G LTE Prepaid Smartphone - Blac_Image"
                    />
                    <div className="title-color line--limit-2">
                      Simple Mobile Carrie ...
                    </div>
                  </div>
                  <div className="orders-count py-2 px-3 d-flex gap-1">
                    <div>Sold :</div>
                    <div className="sold-count">13</div>
                  </div>
                </div>
              </Link>
            </div>
            <div
              className="cursor-pointer get-view-by-onclick"
              data-link="https://6valley.6amtech.com/admin/products/view/vendor/3"
            >
              <Link to={"/inhouseproductlistproduct"}>
                <div className="grid-item bg-transparent basic-box-shadow">
                  <div className="d-flex gap-10 align-items-center">
                    <img
                      src="https://6valley.6amtech.com/storage/app/public/product/thumbnail/2022-04-23-62636369a0855.png"
                      className="avatar avatar-lg rounded avatar-bordered"
                      alt="Ladies Winter Long Sleeve Sweater_Image"
                    />
                    <div className="title-color line--limit-2">
                      Ladies Winter Long S ...
                    </div>
                  </div>
                  <div className="orders-count py-2 px-3 d-flex gap-1">
                    <div>Sold :</div>
                    <div className="sold-count">13</div>
                  </div>
                </div>
              </Link>
            </div>
            <div
              className="cursor-pointer get-view-by-onclick"
              data-link="https://6valley.6amtech.com/admin/products/view/vendor/8"
            >
              <Link to={"/inhouseproductlistproduct"}>
                <div className="grid-item bg-transparent basic-box-shadow">
                  <div className="d-flex gap-10 align-items-center">
                    <img
                      src="https://6valley.6amtech.com/storage/app/public/product/thumbnail/2023-06-13-648830d2af5b5.png"
                      className="avatar avatar-lg rounded avatar-bordered"
                      alt="Girls Beautiful White & Purple Sneakers_Image"
                    />
                    <div className="title-color line--limit-2">
                      Girls Beautiful Whit ...
                    </div>
                  </div>
                  <div className="orders-count py-2 px-3 d-flex gap-1">
                    <div>Sold :</div>
                    <div className="sold-count">12</div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSellingProducts;
