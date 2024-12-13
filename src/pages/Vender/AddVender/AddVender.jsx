import React from 'react';
import { FiUserPlus, FiInfo, FiImage, FiMail, FiLock } from 'react-icons/fi';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import './AddVenderForm.css'
const AddVendorForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    // Example: validate inputs, submit form data
  };

  return (
    <div className="content container-fluid main-card ltr snipcss-B2K3K">
      <div className="mb-4">
        <h2 className="h1 mb-0 text-capitalize d-flex align-items-center gap-2">
          <FiUserPlus className="mb-1" /> Add new Vendor
        </h2>
      </div>
      <form className="user" onSubmit={handleSubmit} encType="multipart/form-data" id="add-vendor-form">
        <input type="hidden" name="_token" value="OatzLIEm9bwuZ3zpndZjuPUEjNulJdDDGFVMhrzi" autoComplete="off" />
        <div className="card">
          <div className="card-body">
            <input type="hidden" name="status" value="approved" />
            <h5 className="mb-0 text-capitalize d-flex align-items-center gap-2 border-bottom pb-3 mb-4 pl-4">
              <FiInfo className="mb-1" /> Vendor information
            </h5>
            <div className="row align-items-center">
              <div className="col-lg-6 mb-4 mb-lg-0">
                <div className="form-group">
                  <label htmlFor="exampleFirstName" className="title-color d-flex gap-1 align-items-center">First name</label>
                  <input type="text" className="form-control form-control-user" id="exampleFirstName" name="f_name" value="" placeholder="Ex: John" required />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleLastName" className="title-color d-flex gap-1 align-items-center">Last name</label>
                  <input type="text" className="form-control form-control-user" id="exampleLastName" name="l_name" value="" placeholder="Ex: Doe" required />
                </div>
                <div className="form-group">
                  <label className="title-color d-flex gap-1 align-items-center" htmlFor="exampleInputPhone">Phone</label>
                  <PhoneInput
                    inputProps={{
                      name: 'phone',
                      required: true,
                      autoFocus: false,
                      placeholder: 'Enter phone number',
                      autoComplete: 'off',
                    }}
                    country={'us'}
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <div className="d-flex justify-content-center">
                    <img className="upload-img-view" id="viewer" src="https://6valley.6amtech.com/public/assets/back-end/img/400x400/img2.jpg" alt="Banner image" />
                  </div>
                </div>
                <div className="form-group">
                  <div className="title-color mb-2 d-flex gap-1 align-items-center">Vendor Image <span className="text-info">(Ratio 1:1)</span></div>
                  <div className="custom-file text-left">
                    <input type="file" name="image" id="custom-file-upload" className="custom-file-input image-input" data-image-id="viewer" accept=".jpg, .png, .jpeg, .gif, .bmp, .tif, .tiff|image/*" />
                    <label className="custom-file-label" htmlFor="custom-file-upload">Upload image</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card mt-3">
          <div className="card-body">
            <input type="hidden" name="status" value="approved" />
            <h5 className="mb-0 text-capitalize d-flex align-items-center gap-2 border-bottom pb-3 mb-4 pl-4">
              <FiMail className="mb-1" /> Account information
            </h5>
            <div className="row">
              <div className="col-lg-4 form-group">
                <label htmlFor="exampleInputEmail" className="title-color d-flex gap-1 align-items-center">Email</label>
                <input type="email" className="form-control form-control-user" id="exampleInputEmail" name="email" value="" placeholder="Ex: John@company.com" required />
              </div>
              <div className="col-lg-4 form-group">
                <label htmlFor="user_password" className="title-color d-flex gap-1 align-items-center"> Password
                  <span className="input-label-secondary cursor-pointer d-flex" data-toggle="tooltip" data-placement="top" title="The password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one digit, one special character, and no spaces.">
                    <FiInfo width="16" />
                  </span>
                </label>
                <div className="input-group input-group-merge">
                  <input type="password" className="js-toggle-password form-control password-check" name="password" required id="user_password" minLength="8" placeholder="Password minimum 8 characters" data-hs-toggle-password-options="{&quot;target&quot;: &quot;#changePassTarget&quot;,&quot;defaultClass&quot;: &quot;tio-hidden-outlined&quot;,&quot;showClass&quot;: &quot;tio-visible-outlined&quot;,&quot;classChangeTarget&quot;: &quot;#changePassIcon&quot;}" />
                  <div id="changePassTarget" className="input-group-append">
                    <a className="input-group-text" href="javascript:">
                      <i id="changePassIcon" className="tio-hidden-outlined"></i>
                    </a>
                  </div>
                </div>
                <span className="text-danger mx-1 password-error"></span>
              </div>
              <div className="col-lg-4 form-group">
                <label htmlFor="confirm_password" className="title-color d-flex gap-1 align-items-center">Confirm password</label>
                <div className="input-group input-group-merge">
                  <input type="password" className="js-toggle-password form-control" name="confirm_password" required id="confirm_password" placeholder="Confirm password" data-hs-toggle-password-options="{&quot;target&quot;: &quot;#changeConfirmPassTarget&quot;,&quot;defaultClass&quot;: &quot;tio-hidden-outlined&quot;,&quot;showClass&quot;: &quot;tio-visible-outlined&quot;,&quot;classChangeTarget&quot;: &quot;#changeConfirmPassIcon&quot;}" />
                  <div id="changeConfirmPassTarget" className="input-group-append">
                    <a className="input-group-text" href="javascript:">
                      <i id="changeConfirmPassIcon" className="tio-hidden-outlined"></i>
                    </a>
                  </div>
                </div>
                <div className="pass invalid-feedback">Repeat password not match.</div>
              </div>
            </div>
          </div>
        </div>
        <div className="card mt-3">
          <div className="card-body">
            <h5 className="mb-0 text-capitalize d-flex align-items-center gap-2 border-bottom pb-3 mb-4 pl-4">
              <FiImage className="mb-1" /> Shop information
            </h5>
            <div className="row">
              <div className="col-lg-6 form-group">
                <label htmlFor="shop_name" className="title-color d-flex gap-1 align-items-center">Shop name</label>
                <input type="text" className="form-control form-control-user" id="shop_name" name="shop_name" placeholder="Ex: John" value="" required />
              </div>
              <div className="col-lg-6 form-group">
                <label htmlFor="shop_address" className="title-color d-flex gap-1 align-items-center">Shop address</label>
                <textarea name="shop_address" className="form-control text-area-max" id="shop_address" rows="1" placeholder="Ex: Doe"></textarea>
              </div>
              <div className="col-lg-6 form-group">
                <div className="d-flex justify-content-center">
                  <img className="upload-img-view" id="viewerLogo" src="https://6valley.6amtech.com/public/assets/back-end/img/400x400/img2.jpg" alt="Banner image" />
                </div>
                <div className="mt-4">
                  <div className="d-flex gap-1 align-items-center title-color mb-2"> Shop logo <span className="text-info">(Ratio 1:1)</span></div>
                  <div className="custom-file">
                    <input type="file" name="logo" id="logo-upload" className="custom-file-input image-input" data-image-id="viewerLogo" accept=".jpg, .png, .jpeg, .gif, .bmp, .tif, .tiff|image/*" />
                    <label className="custom-file-label" htmlFor="logo-upload">Upload image</label>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 form-group">
                <label htmlFor="shop_number" className="title-color d-flex gap-1 align-items-center">Phone number</label>
                <input type="text" className="form-control form-control-user" id="shop_number" name="shop_number" placeholder="Ex: 512-512-2025" value="" required />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-3">
          <button type="submit" className="btn btn--danger btn-user btn-block" id="add_vendor_btn">
             Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddVendorForm;
