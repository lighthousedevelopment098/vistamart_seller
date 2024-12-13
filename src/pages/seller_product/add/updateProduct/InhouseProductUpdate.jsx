import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { getAuthData } from "../../../../utils/authHelper";
import {
  fetchCategories,
  fetchBrands,
  fetchColors,
  fetchAttributes,
  fetchSubCategories,
  fetchSubSubCategories,
} from "../../../../components/redux/categorybrandSlice";
import {
  fetchProductById,
  updateProductStatus,
} from '../../../../components/redux/product/productSlice';
import apiConfig from "../../../../components/config/apiConfig";
import ProductForm from "../../../In_House_Product/AddProduct/addProduct/addProductFormComponent/productForm";
import ProductGeneral from "../../../In_House_Product/AddProduct/addProduct/addProductFormComponent/productGeneral";
import ProductAdditional from "../../../In_House_Product/AddProduct/addProduct/addProductFormComponent/productAdditional";
import ProductVideo from "../../../In_House_Product/AddProduct/addProduct/addProductFormComponent/productVideo";
import ProductImageWrapper from "../../../In_House_Product/AddProduct/addProduct/addProductFormComponent/productImageUpload";
import SeoSection from "../../../In_House_Product/AddProduct/addProduct/addProductFormComponent/SeoSection";
const API_URL = `${apiConfig.seller}/products`;

const InhouseProductUpdate = () => {
  const dispatch = useDispatch();
  const { productId } = useParams();  // Get productId from the URL params
  const {
    categories,
    subCategories,
    subSubCategories,
    brands,
    colors,
    attributes,
  } = useSelector((state) => state.category);

  const { loading, error, products } = useSelector((state) => state.product);  // Assuming 'product' holds the fetched product
  const product = products.find((prod) => prod._id === productId); // Assuming products is an array
  
  console.log("product id from param", productId)
  console.log("product by fetch by id", product)
  // Form states
  const initialFormState = {
    name: "",
    description: "",
    brand: "",
    productType: "",
    digitalProductType: "physical",
    sku: "",
    unit: "",
    tags: "",
    price: "",
    discount: "",
    discountType: "percent",
    discountAmount: "",
    taxAmount: "",
    taxIncluded: false,
    minimumOrderQty: "3",
    shippingCost: "",
    stock: "",
    isFeatured: false,
    videoLink: "",
    metaTitle: "",
    metaDescription: "",
    userType: "vendor",
  };

  const [formData, setFormData] = useState(initialFormState);
  const [thumbnail, setThumbnail] = useState(null);
  const [images, setImages] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [productAttributes, setProductAttributes] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  
  // Fetch categories, brands, etc.
  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchBrands());
    dispatch(fetchColors());
    dispatch(fetchAttributes());
  }, [dispatch]);



  useEffect(() => {
    dispatch(fetchProductById({ productId }));
  }, [dispatch, productId]);
  // Populate form when product data is fetched
  useEffect(() => {
    if (product) {
      setFormData({
        ...initialFormState,
        ...product,  // Assuming your API response structure matches the form structure
      });
      setThumbnail(product.thumbnail);
      setImages(product.images || []);
      setSelectedColors(product.colors || []);
      setProductAttributes(product.attributes || []);
    }
  }, [product]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleDescriptionChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      description: value,
    }));
  };

  const handleImageChange = (e, isThumbnail = false) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (isThumbnail) {
          setThumbnail(reader.result);
        } else {
          setImages((prevImages) => [...prevImages, reader.result]);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { token, user } = getAuthData();
      const userId = user?._id;

      if (!userId) {
        throw new Error("Admin not authenticated.");
      }

      const productData = {
        ...formData,
        userId,
        thumbnail,
        images,
        colors: selectedColors.length > 0 ? selectedColors.map((color) => color._id) : null,
  attributes: Array.isArray(productAttributes) && productAttributes.length > 0 ? productAttributes.map((attr) => attr._id) : null,

      };

      const response = await fetch(`${API_URL}/${productId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(productData),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Failed to update product");
      }

      Swal.fire({
        icon: "success",
        title: "Product updated successfully!",
        showConfirmButton: false,
        timer: 2000,
      });

      // Reset form
      setFormData(initialFormState);
      setThumbnail(null);
      setImages([]);
      setSelectedColors([]);
      setProductAttributes([]);

    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Update failed",
        text: error.message || "Please try again.",
      });
    }
  };
   console.log("formData=====", formData)
  return (
    <form onSubmit={handleSubmit} className="update-product-form p-6">
      <ProductForm
        formData={formData}
        handleChange={handleChange}
        handleDescriptionChange={handleDescriptionChange}
        errorMessage={errorMessage}
      />
      <ProductGeneral
        formData={formData}
        handleChange={handleChange}
        setFormData={setFormData}
        categories={categories}
        subCategories={subCategories || ""}
        subSubCategories={subSubCategories || " "}
        brands={brands}
      />
      <ProductAdditional formData={formData} handleChange={handleChange} />
      <ProductVideo formData={formData} handleChange={handleChange} />
      <ProductImageWrapper
        thumbnail={thumbnail}
        setThumbnail={setThumbnail}
        images={images}
        setImages={setImages}
        handleImageChange={handleImageChange}
      />
      <SeoSection formData={formData} handleChange={handleChange} />
      <div className="flex justify-end m-5">
        <button
          type="submit"
          className="btn mt-3 flex justify-end btn-submit bg-primary outline-none"
          style={{ color: "white", background: "green" }}
        >
          Submit Product
        </button>
      </div>
    </form>
  );
};

export default InhouseProductUpdate;
