import React from "react";
import "./ProductImagesSection.css";
const ProductImagesSection = () => {
  return (
    <div className="row grid grid-cols-11 gap-3 mx-5">
      <div className=" col-span-1 lg:col-span-3 h-80 bg-white px-5 py-3 border border-gray-400 rounded shadow hover:shadow-md">
        <div>
          <div className="form-group">
            <div className="d-flex align-items-center justify-content-between gap-2 mb-3">
              <div>
                <label
                  htmlFor="name"
                  className="title-color text-capitalize font-weight-bold mb-0"
                >
                  Product thumbnail
                </label>
                <span className="badge badge-soft-info">
                  Ratio 1:1 (500 x 500 px)
                </span>
                <span
                  className="input-label-secondary cursor-pointer"
                  data-toggle="tooltip"
                  title="Add your product’s thumbnail in JPG, PNG or JPEG Format within 2MB"
                >
                  <div className=" flex flex-col justify-center items-center border border-double border-gray-400  mt-4 w-40 h-40 ">
                    <img
                      src="https://6valley.6amtech.com/public/assets/back-end/img/icons/product-upload-icon.svg"
                      alt=""
                      className="text-center "
                    />
                    <span>
                      {" "}
                      <h1 className="text-gray-500 text-md font-semibold">
                        Upload Image
                      </h1>
                    </span>
                  </div>
                </span>
                <h1 className="pt-3 text-gray-400">Image format : Jpg, png,</h1>
                <h1 className="text-gray-400">jpeg, webp,</h1>
                <h1 className="text-gray-400">Image size : Max 2 MB</h1>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="card-body snipcss-vecMV">
          <div className="form-group">
            <div className="d-flex align-items-center justify-content-between gap-2 mb-3">
              <div>
                <label
                  htmlFor="name"
                  className="title-color text-capitalize font-weight-bold mb-0"
                >
                  Product thumbnail
                </label>
                <span className="badge badge-soft-info">
                  Ratio 1:1 (500 x 500 px)
                </span>
                <span
                  className="input-label-secondary cursor-pointer"
                  data-toggle="tooltip"
                  title="Add your product’s thumbnail in JPG, PNG or JPEG Format within 2MB"
                >
                  <img
                    src="https://6valley.6amtech.com/public/assets/back-end/img/info-circle.svg"
                    alt=""
                  />
                </span>
              </div>
            </div>
            <div>
              <div className="custom_upload_input">
                <input
                  type="file"
                  name="image"
                  className="custom-upload-input-file action-upload-color-image"
                  id=""
                  data-imgpreview="pre_img_viewer"
                  accept=".jpg, .webp, .png, .jpeg, .gif, .bmp, .tif, .tiff|image/*"
                />
                <span className="delete_file_input btn btn-outline-danger btn-sm square-btn d--none">
                  <i className="tio-delete"></i>
                </span>
                <div className="img_area_with_preview position-absolute z-index-2">
                  <img
                    id="pre_img_viewer"
                    className="h-auto aspect-1 bg-white d-none"
                    src="https://6valley.6amtech.com/admin/products/dummy"
                    alt=""
                  />
                </div>
                <div className="position-absolute h-100 top-0 w-100 d-flex align-content-center justify-content-center">
                  <div className="d-flex flex-column justify-content-center align-items-center">
                    <img
                      alt=""
                      className="w-75"
                      src="https://6valley.6amtech.com/public/assets/back-end/img/icons/product-upload-icon.svg"
                    />
                    <h3 className="text-muted">Upload Image</h3>
                  </div>
                </div>
              </div>
              <p className="text-muted mt-2">
                {" "}
                Image format : Jpg, png, jpeg, webp, <br /> Image size : Max 2
                MB
              </p>
            </div>
          </div>
        </div> */}
      </div>
      <div className="col-span-8 h-96 bg-white px-5 py-3 border border-gray-400 rounded shadow hover:shadow-md">
        <div className="flex gap-2 items-center">
          <label
            htmlFor="name"
            className="title-color text-capitalize font-weight-bold mb-0"
          >
            Upload additional image
          </label>
          <span className="badge badge-soft-info">
            Ratio 1:1 (500 x 500 px)
          </span>
          <span
            className="input-label-secondary cursor-pointer"
            data-toggle="tooltip"
            title="Upload any additional images for this product from here."
          >
            <img
              src="https://6valley.6amtech.com/public/assets/back-end/img/info-circle.svg"
              alt=""
            />
          </span>
        </div>
        <div className="">
          <h1 className=" text-gray-400">Upload additional product images</h1>
          <div className=" ">
            <img
              src="https://6valley.6amtech.com/public/assets/back-end/img/icons/product-upload-icon.svg"
              alt=""
              className="w-40 h-40"
            />
            <span>
              {" "}
              <h1>Upload Image</h1>
            </span>
          </div>
        </div>

        {/* <div className="card-body snipcss-LsOwr">
          <div className="d-flex align-items-center justify-content-between gap-2 mb-2">
            <div>
              <label
                htmlFor="name"
                className="title-color text-capitalize font-weight-bold mb-0"
              >
                Upload additional image
              </label>
              <span className="badge badge-soft-info">
                Ratio 1:1 (500 x 500 px)
              </span>
              <span
                className="input-label-secondary cursor-pointer"
                data-toggle="tooltip"
                title="Upload any additional images for this product from here."
              >
                <img
                  src="https://6valley.6amtech.com/public/assets/back-end/img/info-circle.svg"
                  alt=""
                />
              </span>
            </div>
          </div>
          <p className="text-muted">Upload additional product images</p>
          <div className="row g-2" id="additional_Image_Section">
            <div className="col-sm-12 col-md-4">
              <div className="custom_upload_input position-relative border-dashed-2">
                <input
                  type="file"
                  name="images[]"
                  className="custom-upload-input-file action-add-more-image"
                  data-index="1"
                  data-imgpreview="additional_Image_1"
                  accept=".jpg, .png, .webp, .jpeg, .gif, .bmp, .tif, .tiff|image/*"
                  data-target-section="#additional_Image_Section"
                />
                <span className="delete_file_input delete_file_input_section btn btn-outline-danger btn-sm square-btn d-none">
                  <i className="tio-delete"></i>
                </span>
                <div className="img_area_with_preview position-absolute z-index-2 border-0">
                  <img
                    id="additional_Image_1"
                    className="h-auto aspect-1 bg-white d-none "
                    src="https://6valley.6amtech.com/public/assets/back-end/img/icons/product-upload-icon.svg-dummy"
                    alt=""
                  />
                </div>
                <div className="position-absolute h-100 top-0 w-100 d-flex align-content-center justify-content-center">
                  <div className="d-flex flex-column justify-content-center align-items-center">
                    <img
                      alt=""
                      src="https://6valley.6amtech.com/public/assets/back-end/img/icons/product-upload-icon.svg"
                      className="w-75"
                    />
                    <h3 className="text-muted">Upload Image</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default ProductImagesSection;
