import React from "react";
import "./ProductVariationSetup.css";
const ProductVariationSetup = () => {
  return (
    <>
      <div className="border border-gray-300 rounded px-3 py-3 shadow hover:shadow  bg-white mb-4">
        <div className="card-header snipcss-1Xl2J">
          <div className="d-flex gap-2">
            <i className="tio-user-big"></i>
            <h4 className="mb-0">Product variation setup</h4>
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
        </div>
        <div className="card-body snipcss-Oca59">
          <div className="row align-items-end">
            <div className="col-md-6">
              <div className=" d-flex align-items-center gap-2">
                <label htmlFor="colors" className="title-color mb-0">
                  {" "}
                  Select colors :
                </label>
                <label className="switcher">
                  <input
                    type="checkbox"
                    className="switcher_input"
                    id="product-color-switcher"
                    value=""
                    name="colors_active"
                  />
                  <span className="switcher_control"></span>
                </label>{" "}
              </div>{" "}
              <br />
              <select
                name=""
                id=""
                className="border rounded hover:border-green-500 w-full border-gray-400 bg-white px-3 py-2"
              >
                {" "}
                <option value="">Red</option>
                <option value="">Redblue</option>
                <option value="">Green</option>
                <option value="">Blue</option>
                <option value="">White</option>
              </select>
            </div>
            <div className="col-md-6">
              <label htmlFor="choice_attributes" className="title-color">
                {" "}
                Select attributes :{" "}
              </label>
              <select
                className="js-example-basic-multiple js-states js-example-responsive form-control select2-hidden-accessible"
                name="choice_attributes[]"
                id="choice_attributes"
                multiple
                tabIndex="-1"
                aria-hidden="true"
              >
                {/* Options here */}
              </select>
              <span
                className="select2 select2-container select2-container--default style-xQrM5"
                dir="ltr"
                id="style-xQrM5"
              >
                {/* Select2 rendering */}
              </span>
              <br />
              <select
                name=""
                id=""
                className="border rounded w-full border-gray-400 bg-white px-3 py-2"
              >
                <option value="">Type</option>
                <option value="">Size</option>
              </select>
            </div>
            <div className="col-md-12 mt-2 mb-2">
              <div
                className="row customer_choice_options mt-2"
                id="customer_choice_options"
              >
                {/* Additional content */}
              </div>
              <div className="form-group sku_combination" id="sku_combination">
                {/* Additional content */}
              </div>
            </div>
          </div>
        </div>
        {/* --------------'' */}
      </div>
    </>
  );
};

export default ProductVariationSetup;
