import React from "react";
// import { FaUserBig } from 'react-icons/fa';
import "./InHouseProductPricing.css";
const InHouseProductPricing = () => {
  return (
    <>
      {/* Card Header */}
      <div className="  border border-gray-500 shadow hover:shadow-md px-3 py-3 rounded bg-white mb-4">
        <div className="d-flex gap-2 shadow-md border-r-2 border-spacing-2">
          {/* <FaUserBig /> */}
          <h4 className="mb-0 text-1rem font-bold shadow-sm">
            Pricing &amp; others
          </h4>
        </div>
        <div className="card-body snipcss-p6pdm">
          <div className="row align-items-end">
            <div className="col-md-6 col-lg-4 col-xl-3 d-none">
              <div className="form-group">
                <div className="d-flex gap-2 mb-2">
                  <label className="title-color mb-0">
                    Purchase price ($ )
                  </label>
                  <span
                    className="input-label-secondary cursor-pointer"
                    data-toggle="tooltip"
                    title="Add the purchase price for this product."
                  >
                    <img
                      src="https://6valley.6amtech.com/public/assets/back-end/img/info-circle.svg"
                      alt=""
                    />
                  </span>
                </div>
                <input
                  type="number"
                  min="0"
                  step="0.01"
                  placeholder="Purchase price"
                  value=""
                  name="purchase_price"
                  className="form-control"
                  required
                />
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3">
              <div className="form-group">
                <div className="d-flex gap-2 mb-2">
                  <label className="title-color mb-0">Unit price ($)</label>
                  <span
                    className="input-label-secondary cursor-pointer"
                    data-toggle="tooltip"
                    title="Set the selling price for each unit of this product. This Unit Price section won’t be applied if you set a variation wise price."
                  >
                    <img
                      src="https://6valley.6amtech.com/public/assets/back-end/img/info-circle.svg"
                      alt=""
                    />
                  </span>
                </div>
                <input
                  type="number"
                  min="0"
                  step="0.01"
                  placeholder="Unit price"
                  name="unit_price"
                  value=""
                  className="form-control"
                  required
                />
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3" id="minimum_order_qty">
              <div className="form-group">
                <div className="d-flex gap-2 mb-2">
                  <label
                    className="title-color mb-0"
                    htmlFor="minimum_order_qty"
                  >
                    Minimum order qty
                  </label>
                  <span
                    className="input-label-secondary cursor-pointer"
                    data-toggle="tooltip"
                    title="Set the minimum order quantity that customers must choose. Otherwise the checkout process won’t start."
                  >
                    <img
                      src="https://6valley.6amtech.com/public/assets/back-end/img/info-circle.svg"
                      alt=""
                    />
                  </span>
                </div>
                <input
                  type="number"
                  min="1"
                  value="1"
                  step="1"
                  placeholder="Minimum order quantity"
                  name="minimum_order_qty"
                  id="minimum_order_qty"
                  className="form-control"
                  required
                />
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 col-xl-3 physical_product_show"
              id="quantity"
            >
              <div className="form-group">
                <div className="d-flex gap-2 mb-2">
                  <label className="title-color mb-0" htmlFor="current_stock">
                    Current stock qty
                  </label>
                  <span
                    className="input-label-secondary cursor-pointer"
                    data-toggle="tooltip"
                    title="Add the Stock Quantity of this product that will be visible to customers."
                  >
                    <img
                      src="https://6valley.6amtech.com/public/assets/back-end/img/info-circle.svg"
                      alt=""
                    />
                  </span>
                </div>
                <input
                  type="number"
                  min="0"
                  value="0"
                  step="1"
                  placeholder="Quantity"
                  name="current_stock"
                  id="current_stock"
                  className="form-control"
                  required
                />
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3">
              <div className="form-group">
                <div className="d-flex gap-2 mb-2">
                  <label className="title-color mb-0" htmlFor="discount_Type">
                    Discount Type
                  </label>
                  <span
                    className="input-label-secondary cursor-pointer"
                    data-toggle="tooltip"
                    title="If Flat discount amount will be set as fixed amount. If Percentage discount amount will be set as percentage."
                  >
                    <img
                      src="https://6valley.6amtech.com/public/assets/back-end/img/info-circle.svg"
                      alt=""
                    />
                  </span>
                </div>
                <select
                  className="form-control"
                  name="discount_type"
                  id="discount_type"
                >
                  <option value="flat">Flat</option>
                  <option value="percent">Percent</option>
                </select>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3">
              <div className="form-group">
                <div className="d-flex gap-2">
                  <label className="title-color" htmlFor="discount">
                    Discount amount{" "}
                    <span className="discount_amount_symbol">($)</span>
                  </label>
                  <span
                    className="input-label-secondary cursor-pointer"
                    data-toggle="tooltip"
                    title="Add the discount amount in percentage or a fixed value here."
                  >
                    <img
                      src="https://6valley.6amtech.com/public/assets/back-end/img/info-circle.svg"
                      alt=""
                    />
                  </span>
                </div>
                <input
                  type="number"
                  min="0"
                  value="0"
                  step="0.01"
                  placeholder="Ex: 5"
                  name="discount"
                  id="discount"
                  className="form-control"
                  required
                />
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3">
              <div className="form-group">
                <div className="d-flex gap-2">
                  <label className="title-color" htmlFor="tax">
                    Tax amount(%)
                  </label>
                  <span
                    className="input-label-secondary cursor-pointer"
                    data-toggle="tooltip"
                    title="Set the Tax Amount in percentage here"
                  >
                    <img
                      src="https://6valley.6amtech.com/public/assets/back-end/img/info-circle.svg"
                      alt=""
                    />
                  </span>
                </div>
                <input
                  type="number"
                  min="0"
                  step="0.01"
                  placeholder="Ex: 5"
                  name="tax"
                  id="tax"
                  value="0"
                  className="form-control"
                />
                <input name="tax_type" value="percent" className="d-none" />
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3">
              <div className="form-group">
                <div className="d-flex gap-2">
                  <label className="title-color" htmlFor="tax_model">
                    Tax calculation
                  </label>
                  <span
                    className="input-label-secondary cursor-pointer"
                    data-toggle="tooltip"
                    title="Set the tax calculation method from here. Select “Include with product” to combine product price and tax on the checkout. Pick “Exclude from product” to display product price and tax amount separately."
                  >
                    <img
                      src="https://6valley.6amtech.com/public/assets/back-end/img/info-circle.svg"
                      alt=""
                    />
                  </span>
                </div>
                <select
                  name="tax_model"
                  id="tax_model"
                  className="form-control"
                  required
                >
                  <option value="include">Include with product</option>
                  <option value="exclude">Exclude with product</option>
                </select>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 col-xl-3 physical_product_show"
              id="shipping_cost"
            >
              <div className="form-group">
                <div className="d-flex gap-2">
                  <label className="title-color">Shipping cost ($)</label>
                  <span
                    className="input-label-secondary cursor-pointer"
                    data-toggle="tooltip"
                    title="Set the shipping cost for this product here. Shipping cost will only be applicable if product-wise shipping is enabled."
                  >
                    <img
                      src="https://6valley.6amtech.com/public/assets/back-end/img/info-circle.svg"
                      alt=""
                    />
                  </span>
                </div>
                <input
                  type="number"
                  min="0"
                  value="0"
                  step="1"
                  placeholder="Shipping cost"
                  name="shipping_cost"
                  className="form-control"
                  required
                />
              </div>
            </div>
            <div
              className="col-md-6 physical_product_show"
              id="shipping_cost_multy"
            >
              <div className="form-group">
                <div className="form-control h-auto min-form-control-height d-flex align-items-center flex-wrap justify-content-between gap-2">
                  <div className="d-flex gap-2">
                    <label
                      className="title-color text-capitalize"
                      htmlFor="shipping_cost"
                    >
                      Shipping cost multiply with quantity
                    </label>
                    <span
                      className="input-label-secondary cursor-pointer"
                      data-toggle="tooltip"
                      title="If enabled the shipping charge will increase with the product quantity"
                    >
                      <img
                        src="https://6valley.6amtech.com/public/assets/back-end/img/info-circle.svg"
                        alt=""
                      />
                    </span>
                  </div>
                  <div>
                    <label className="switcher">
                      <input
                        type="checkbox"
                        className="switcher_input"
                        name="multiply_qty"
                      />
                      <span className="switcher_control"></span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Card Body */}
    </>
  );
};

export default InHouseProductPricing;
