import React, { useState, useEffect } from "react";
import { FiUserPlus, FiInfo, FiImage, FiMail } from "react-icons/fi";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getUploadUrl, uploadImageToS3 } from "./helpers";
import { useNavigate, useParams } from "react-router-dom";
import apiConfig from "../../components/config/apiConfig";
import { getAuthData } from "../../utils/authHelper";
import FormSection from "../../components/FormInput/FormSection";
import FormInput from "../../components/FormInput/FormInput";
import FileUpload from "../../components/FormInput/FileUpload";
import PreviewImage from "../../components/FormInput/PreviewImage";
import axiosInstance from "../../utils/axiosConfig";
import FormTextArea from "../../components/FormInput/FormTextArea";

const UpdateVendor = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const backendUrl = apiConfig.bucket;

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    shopName: "",
    address: "",
    vendorImage: null,
    logo: null,
    banner: null,
  });

  const [logoPreview, setLogoPreview] = useState(null);
  const [bannerPreview, setBannerPreview] = useState(null);
  const [vendorPreview, setVendorPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch vendor data on mount
  useEffect(() => {
    const fetchVendor = async () => {
      try {
        const { token, user } = getAuthData();
        const response = await axiosInstance.get(
          `${apiConfig.seller}/vendors/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.data) {
          const vendor = response.data.doc;
          setFormData(vendor);
          setLogoPreview(`${backendUrl}/${vendor.logo}`);
          setBannerPreview(`${backendUrl}/${vendor.banner}`);
          setVendorPreview(`${backendUrl}/${vendor.vendorImage}`);
        }
      } catch (error) {
        toast.error("Failed to load vendor data.");
      }
    };
    fetchVendor();
  }, [id, backendUrl]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const { token } = getAuthData();
    const uploadedKeys = [];

    // Extract files and initial URLs from formData
    const { logo, banner, vendorImage } = formData;

    // Files to upload: Include new files and keep existing URLs for unchanged files
    const filesToUpload = [
      { file: logo, name: "logo", initialUrl: logoPreview },
      { file: banner, name: "banner", initialUrl: bannerPreview },
      { file: vendorImage, name: "vendorImage", initialUrl: vendorPreview },
    ];

    // Filter files that are new (File objects)
    const validFiles = filesToUpload.filter(
      (fileObj) => fileObj.file instanceof File
    );

    try {
      // Get upload URLs for new files
      const uploadConfigs = await Promise.all(
        validFiles.map((fileObj) => getUploadUrl(fileObj.file.type, "vendors"))
      );

      // Upload each file and collect their keys
      for (let i = 0; i < validFiles.length; i++) {
        const uploadConfig = uploadConfigs[i];
        const file = validFiles[i].file;
        await uploadImageToS3(uploadConfig.url, file);
        uploadedKeys.push({ name: validFiles[i].name, key: uploadConfig.key });
      }

      // Construct vendor data
      const vendorData = {
        ...formData,
        logo:
          uploadedKeys.find((key) => key.name === "logo")?.key ||
          (typeof logo === "string" ? logo : null),
        banner:
          uploadedKeys.find((key) => key.name === "banner")?.key ||
          (typeof banner === "string" ? banner : null),
        vendorImage:
          uploadedKeys.find((key) => key.name === "vendorImage")?.key ||
          (typeof vendorImage === "string" ? vendorImage : null),
      };

      // Send the data to the server
      const response = await axiosInstance.put(
        `${apiConfig.seller}/vendors/${id}`,
        vendorData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data.doc) {
        toast.success("Vendor updated successfully!");
        // Reset form and previews
        setFormData({
          firstName: "",
          lastName: "",
          phoneNumber: "",
          email: "",
          shopName: "",
          address: "",
          vendorImage: null,
          logo: null,
          banner: null,
        });
        setLogoPreview(null);
        setBannerPreview(null);
        setVendorPreview(null);
      }
    } catch (error) {
      console.error("Error updating vendor:", error);
      toast.error("Failed to update vendor!");
    } finally {
      setLoading(false);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const name = e.target.name;
    const allowedTypes = ["image/jpeg", "image/png", "image/jpg", "image/gif"];

    if (!file) return;
    if (!allowedTypes.includes(file.type)) {
      toast.error("Invalid file type. Only JPG, PNG, and GIF are allowed.");
      return;
    }

    const previewMap = {
      logo: setLogoPreview,
      banner: setBannerPreview,
      vendorImage: setVendorPreview,
    };

    const setPreview = previewMap[name];
    if (setPreview) {
      const objectUrl = URL.createObjectURL(file);
      setPreview(objectUrl);
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: file,
    }));
  };


  const handleInputChange = (event) => {
    const { name, value } = event.target;
  
    if (["firstName", "lastName", "shopName"].includes(name)) {
      // Check for non-alphabetic characters
      const alphabetRegex = /^[a-zA-Z\s]*$/;
      if (!alphabetRegex.test(value)) {
        toast.error(`${name.replace(/^\w/, (c) => c.toUpperCase())} must contain only alphabetic characters.`);
        return;
      }
  
      // Limit length to 50 characters
      if (value.length > 50) {
        toast.error(`${name.replace(/^\w/, (c) => c.toUpperCase())} is limited to 50 characters.`);
        return;
      }
    }
  
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="content container-fluid main-card ltr ">
      <div className="mb-4">
        <h2 className="h1 mb-0 text-capitalize text-[1rem] font-semibold d-flex align-items-center gap-2">
          <FiUserPlus className="mb-1" /> Update Vendor
        </h2>
      </div>
      <form
        className="user"
        onSubmit={handleSubmit}
        encType="multipart/form-data"
        id="update-vendor-form"
      >
        {/* Vendor Information Section */}
        <FormSection
          icon={<FiInfo className="mb-1" />}
          title="Vendor Information"
        >
          <div className="row align-items-center p-4">
            <div className="col-lg-6 mb-4">
              <FormInput
                label="First Name"
                name="firstName"
                type="text"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="Ex: John"
                required
              />
              <FormInput
                label="Last Name"
                name="lastName"
                type="text"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="Ex: Doe"
                required
              />
              <div className="form-group">
                <label
                  htmlFor="phoneNumber"
                  className="d-flex gap-1 align-items-center"
                >
                  Phone
                </label>
                <PhoneInput
                  inputProps={{
                    name: "phoneNumber",
                    required: true,
                    placeholder: "Enter phone number",
                    autoComplete: "off",
                  }}
                  value={formData.phoneNumber}
                  onChange={(value) =>
                    handleInputChange({
                      target: { name: "phoneNumber", value },
                    })
                  }
                />
              </div>
            </div>
            <div className="col-lg-6">
              <PreviewImage
                image={vendorPreview}
                altText="Vendor image"
                style={{ width: "200px" }}
              />
              <FileUpload
                name="vendorImage"
                label="Vendor Image"
                accept="image/*"
                onChange={handleImageChange}
              />
            </div>
          </div>
        </FormSection>

        {/* Account Information Section */}
        <FormSection
          icon={<FiMail className="mb-1" />}
          title="Account Information"
        >
          <div className="row p-4">
            <div className="col-lg-4">
              <FormInput
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Ex: john@company.com"
                required
              />
            </div>
            {/* <div className="col-lg-4">
              <FormInput
                label="Password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Password (min. 8 characters)"
                required
              />
            </div> */}
          </div>
        </FormSection>

        {/* Shop Details Section */}
        <FormSection icon={<FiImage className="mb-1" />} title="Shop Details">
          <div className="row p-4">
            <div className="col-lg-6">
              <FormInput
                label="Shop Name"
                name="shopName"
                type="text"
                value={formData.shopName}
                onChange={handleInputChange}
                placeholder="Ex: John's Shop"
                required
              />
              <FormTextArea
                label="Address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                placeholder="Enter your shop address"
                required
              />
            </div>
            <div className="col-lg-6">
              <PreviewImage
                image={logoPreview}
                altText="Logo"
                style={{ width: "150px" }}
              />
              <FileUpload
                name="logo"
                label="Logo"
                accept="image/*"
                onChange={handleImageChange}
              />
              <PreviewImage
                image={bannerPreview}
                altText="Banner"
                style={{ width: "300px" }}
              />
              <FileUpload
                name="banner"
                label="Banner"
                accept="image/*"
                onChange={handleImageChange}
              />
            </div>
          </div>
        </FormSection>

        <div className="d-flex flex justify-end w-full my-3">
          <button
            className={`btn btn-success text-white px-4 py-2 bg-primary-500 hover:bg-primary-dark-500 ${
              loading ? "loading" : ""
            }`}
            style={{ color: "white" }}
            type="submit"
            disabled={loading}
          >
            {loading ? "Updating..." : "Update Vendor"}
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default UpdateVendor;
