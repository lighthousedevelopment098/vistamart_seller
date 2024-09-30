// import React, { useState } from "react";
// import Select from "react-select"; // Use react-select for custom select components
// import "./AddProductInhouse.css"; // Add your own CSS file to manage styles
// // import ProductEdit from './ProductEdit/ProductEdit';
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css"; // Import the styles for react-quill
// const AddInHouseNewProduct = () => {
//   const [category, setCategory] = useState("");
//   const [subCategory, setSubCategory] = useState("");
//   const [subSubCategory, setSubSubCategory] = useState("");
//   const [brand, setBrand] = useState("");
//   const [productType, setProductType] = useState("physical");
//   const [digitalProductType, setDigitalProductType] = useState("");
//   // const [productName, setProductName] = useState("");
//   // const [productDescription, setProductDescription] = useState("");
//   const [file, setFile] = useState(null);
//   const [sku, setSku] = useState("");
//   const [unit, setUnit] = useState("");
//   const [tags, setTags] = useState([]);

//   const handleFileChange = (e) => setFile(e.target.files[0]);
//   // Handle changes for text inputs
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     if (name === "productName") {
//       setProductName(value);
//     }
//   };
//   const handleTagChange = (e) => setTags(e.target.value.split(","));

//   const generateSku = () => {
//     const generatedSku = Math.random()
//       .toString(36)
//       .substring(2, 8)
//       .toUpperCase();
//     setSku(generatedSku);
//   };

//   const categoryOptions = [
//     { value: "11", label: "Home Improvement & Tools" },
//     { value: "12", label: "Toys, Kids & Babies" },
//     // Add other options...
//   ];

//   const brandOptions = [
//     { value: "1", label: "i Bird" },
//     { value: "4", label: "Agron" },
//     // Add other options...
//   ];

//   const unitOptions = [
//     { value: "kg", label: "kg" },
//     { value: "pc", label: "pc" },
//     // Add other options...
//   ];
//   const [selectedLanguage, setSelectedLanguage] = useState("EN");

//   const [productName, setProductName] = useState("");
//   const [productDescription, setProductDescription] = useState("");
//   // ------------------------------------------
//   //   const [selectedLanguage, setSelectedLanguage] = useState("EN");
//   //   const [productName, setProductName] = useState("");
//   //   const [productDescription, setProductDescription] = useState("");

//   //   const handleLanguageChange = (language) => {
//   //     setSelectedLanguage(language);
//   //     // Optionally, reset inputs when language changes
//   //     setProductName("");
//   //     setProductDescription("");
//   //   };

//   return (
//     <div className="content container-fluid ">
//       <div className="mb-4">
//         <h2 className="h1 mb-0 text-capitalize d-flex align-items-center gap-2">
//           <i className="tio-plus-outline"></i> Add new In-House Product
//         </h2>
//       </div>
//       <div className="row flex-col gap-3 mb-8 bg-white p-8">
//         <div className="form-group">
//           <label htmlFor="productName">Product Name</label>
//           <input
//             type="text"
//             id="productName"
//             name="productName"
//             value={productName}
//             onChange={handleChange}
//             className="input border border-gray-300 w-full px-3 py-2 rounded"
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="productDescription">Product Description</label>
//           <ReactQuill
//             value={productDescription}
//             onChange={setProductDescription}
//             className="quill-editor"
//             theme="snow"
//             placeholder="Write the product description here..."
//           />
//         </div>
//       </div>
//       <div className="card">
//         <div className="card-header">
//           <div className="d-flex gap-2">
//             <i className="tio-user-big"></i>
//             <h4 className="mb-0">General setup</h4>
//           </div>
//         </div>
//         <div className="card-body">
//           <div className="row">
//             <div className="col-md-6 col-lg-4 col-xl-3">
//               <div className="form-group">
//                 <label htmlFor="category" className="title-color">
//                   Category
//                 </label>
//                 <Select
//                   options={categoryOptions}
//                   className="select-custom"
//                   name="category"
//                   value={categoryOptions.find(
//                     (option) => option.value === category
//                   )}
//                   onChange={(selectedOption) =>
//                     setCategory(selectedOption.value)
//                   }
//                   placeholder="Select category"
//                 />
//               </div>
//             </div>
//             <div className="col-md-6 col-lg-4 col-xl-3">
//               <div className="form-group">
//                 <label htmlFor="sub-category" className="title-color">
//                   Sub Category
//                 </label>
//                 <Select
//                   className="select-custom"
//                   name="subCategory"
//                   value={subCategory}
//                   onChange={(selectedOption) =>
//                     setSubCategory(selectedOption.value)
//                   }
//                   placeholder="Select Sub Category"
//                 />
//               </div>
//             </div>
//             <div className="col-md-6 col-lg-4 col-xl-3">
//               <div className="form-group">
//                 <label htmlFor="sub-sub-category" className="title-color">
//                   Sub Sub Category
//                 </label>
//                 <Select
//                   className="select-custom"
//                   name="subSubCategory"
//                   value={subSubCategory}
//                   onChange={(selectedOption) =>
//                     setSubSubCategory(selectedOption.value)
//                   }
//                   placeholder="Select Sub Sub Category"
//                 />
//               </div>
//             </div>
//             <div className="col-md-6 col-lg-4 col-xl-3">
//               <div className="form-group">
//                 <label htmlFor="brand" className="title-color">
//                   Brand
//                 </label>
//                 <Select
//                   options={brandOptions}
//                   className="select-custom"
//                   name="brand"
//                   value={brandOptions.find((option) => option.value === brand)}
//                   onChange={(selectedOption) => setBrand(selectedOption.value)}
//                   placeholder="Select Brand"
//                 />
//               </div>
//             </div>
//             <div className="col-md-6 col-lg-4 col-xl-3">
//               <div className="form-group">
//                 <label htmlFor="product_type" className="title-color">
//                   Product type
//                 </label>
//                 <select
//                   name="product_type"
//                   id="product_type"
//                   className="form-control"
//                   value={productType}
//                   onChange={(e) => setProductType(e.target.value)}
//                   required
//                 >
//                   <option value="physical">Physical</option>
//                   <option value="digital">Digital</option>
//                 </select>
//               </div>
//             </div>
//             {productType === "digital" && (
//               <div
//                 className="col-md-6 col-lg-4 col-xl-3"
//                 id="digital_product_type_show"
//               >
//                 <div className="form-group">
//                   <label htmlFor="digital_product_type" className="title-color">
//                     Delivery type
//                   </label>
//                   <span
//                     className="input-label-secondary cursor-pointer"
//                     title="For “Ready Product” deliveries customers can pay & instantly download pre-uploaded digital products. For “Ready After Sale” deliveries customers pay first then admin uploads the digital products that become available to customers for download"
//                   >
//                     <img
//                       src="https://6valley.6amtech.com/public/assets/back-end/img/info-circle.svg"
//                       alt="info"
//                     />
//                   </span>
//                   <select
//                     name="digital_product_type"
//                     id="digital_product_type"
//                     className="form-control"
//                     value={digitalProductType}
//                     onChange={(e) => setDigitalProductType(e.target.value)}
//                     required
//                   >
//                     <option value="" disabled>
//                       ---Select---
//                     </option>
//                     <option value="ready_after_sell">Ready After Sell</option>
//                     <option value="ready_product">Ready Product</option>
//                   </select>
//                 </div>
//               </div>
//             )}
//             {productType === "digital" && (
//               <div
//                 className="col-md-6 col-lg-4 col-xl-3"
//                 id="digital_file_ready_show"
//               >
//                 <div className="form-group">
//                   <div className="d-flex align-items-center gap-2 mb-2">
//                     <label
//                       htmlFor="digital_file_ready"
//                       className="title-color mb-0"
//                     >
//                       Upload file
//                     </label>
//                     <span
//                       className="input-label-secondary cursor-pointer"
//                       title="Upload the digital products from here"
//                     >
//                       <img
//                         src="https://6valley.6amtech.com/public/assets/back-end/img/info-circle.svg"
//                         alt="info"
//                       />
//                     </span>
//                   </div>
//                   <div className="input-group">
//                     <div className="custom-file">
//                       <input
//                         type="file"
//                         className="custom-file-input"
//                         name="digital_file_ready"
//                         id="digital_file_ready"
//                         onChange={handleFileChange}
//                       />
//                       <label
//                         className="custom-file-label"
//                         htmlFor="digital_file_ready"
//                       >
//                         Choose file
//                       </label>
//                     </div>
//                   </div>
//                   <div className="mt-2">
//                     File type: jpg, jpeg, png, gif, zip, pdf
//                   </div>
//                 </div>
//               </div>
//             )}
//             <div className="col-md-6 col-lg-4 col-xl-3">
//               <div className="form-group">
//                 <label className="title-color d-flex justify-content-between gap-2">
//                   <span className="d-flex align-items-center gap-2">
//                     Product SKU
//                     <span
//                       className="input-label-secondary cursor-pointer"
//                       title="Create a unique product code by clicking on the Generate Code button"
//                     >
//                       <img
//                         src="https://6valley.6amtech.com/public/assets/back-end/img/info-circle.svg"
//                         alt="info"
//                       />
//                     </span>
//                   </span>
//                   <span
//                     className="cursor-pointer text-primary"
//                     onClick={generateSku}
//                   >
//                     Generate code
//                   </span>
//                 </label>
//                 <input
//                   type="text"
//                   minlength="6"
//                   id="generate_number"
//                   name="code"
//                   className="form-control"
//                   value={sku}
//                   onChange={(e) => setSku(e.target.value)}
//                   placeholder="Ex: 161183"
//                   required
//                 />
//               </div>
//             </div>
//             {productType === "physical" && (
//               <div className="col-md-6 col-lg-4 col-xl-3">
//                 <div className="form-group">
//                   <label className="title-color">Unit</label>
//                   <Select
//                     options={unitOptions}
//                     className="select-custom"
//                     name="unit"
//                     value={unitOptions.find((option) => option.value === unit)}
//                     onChange={(selectedOption) => setUnit(selectedOption.value)}
//                     placeholder="Select unit"
//                   />
//                 </div>
//               </div>
//             )}
//             <div className="col-md-9">
//               <div className="form-group">
//                 <label className="title-color d-flex align-items-center gap-2">
//                   Search tags
//                   <span
//                     className="input-label-secondary cursor-pointer"
//                     title="Add the product search tags separated by a comma"
//                   >
//                     <img
//                       src="https://6valley.6amtech.com/public/assets/back-end/img/info-circle.svg"
//                       alt="info"
//                     />
//                   </span>
//                 </label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   name="tags"
//                   value={tags.join(",")}
//                   onChange={handleTagChange}
//                   placeholder="Search tags"
//                   data-role="tagsinput"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     // <div className="p-6 bg-white rounded-lg shadow-lg">
//     //   <h2 className="text-2xl font-semibold mb-4">Add New Product</h2>
//     //   <div className="border-b border-gray-200 mb-4">
//     //     <nav className="-mb-px flex space-x-4">
//     //       {["EN", "SA", "BD", "IN"].map((lang) => (
//     //         <button
//     //           key={lang}
//     //           onClick={() => handleLanguageChange(lang)}
//     //           className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
//     //             selectedLanguage === lang
//     //               ? "text-blue-600 border-blue-600"
//     //               : "text-gray-500 border-transparent"
//     //           }`}
//     //         >
//     //           {lang === "EN" && "English(EN)"}
//     //           {lang === "SA" && "Arabic(SA)"}
//     //           {lang === "BD" && "Bangla(BD)"}
//     //           {lang === "IN" && "Hindi(IN)"}
//     //         </button>
//     //       ))}
//     //     </nav>
//     //   </div>
//     //   <div className="mb-4">
//     //     <label className="block text-sm font-medium text-gray-700">
//     //       Product Name ({selectedLanguage})
//     //     </label>
//     //     <input
//     //       type="text"
//     //       value={productName}
//     //       onChange={(e) => setProductName(e.target.value)}
//     //       className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
//     //       placeholder={`New Product (${selectedLanguage})`}
//     //     />
//     //   </div>
//     //   <div className="mb-4">
//     //     <label className="block text-sm font-medium text-gray-700">
//     //       Description ({selectedLanguage})
//     //     </label>
//     //     <textarea
//     //       value={productDescription}
//     //       onChange={(e) => setProductDescription(e.target.value)}
//     //       className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
//     //       rows="5"
//     //       placeholder={`Description (${selectedLanguage})`}
//     //     ></textarea>
//     //   </div>
//     //   <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600">
//     //     Add Info From Gallery
//     //   </button>
//     // </div>
//   );
// };

// export default AddInHouseNewProduct;






import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories, fetchBrands, fetchColors, fetchAttributes,
   fetchSubCategories, fetchSubSubCategories } from
    '../../../components/redux/categorybrandSlice';

    import 'react-quill/dist/quill.snow.css';
import { createProduct } from 
'../../../components/redux/product/productSlice';
import ReactQuill from 'react-quill';
import './form.css'
const AddNewProduct = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.auth);
   const userId = user._id
  const { categories, subCategories, subSubCategories, brands, colors, attributes } = useSelector((state) => state.category);

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: '',
    subCategorySlug: '',
    subSubCategorySlug: '',
    brand: '',
    productType: '',
    digitalProductType: '',
    sku: '',
    unit: '',
    tags: '',
    price: '',
    discount: '',
    discountType: '',
    discountAmount: '',
    taxAmount: '',
    taxIncluded: false,
    minimumOrderQty: '',
    shippingCost: '',
    stock: '',
    isFeatured: false,
    videoLink: '',
  });

  const [thumbnail, setThumbnail] = useState(null);
  const [images, setImages] = useState([]);
  const [imagePreview, setImagePreview] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedAttribute, setSelectedAttribute] = useState('');
  const [productAttributes, setProductAttributes] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);


  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchBrands());
    dispatch(fetchColors());
    dispatch(fetchAttributes());
  }, [dispatch]);

  useEffect(() => {
    if (formData.category) {
      dispatch(fetchSubCategories(formData.category));
    }
  }, [dispatch, formData.category]);

  useEffect(() => {
    if (formData.subCategorySlug) {
      dispatch(fetchSubSubCategories(formData.subCategorySlug));
    }
  }, [dispatch, formData.subCategorySlug]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleDescriptionChange = (value) => {
    setFormData({
      ...formData,
      description: value,
    });
  };

  const handleThumbnailChange = (e) => {
    const file = e.target.files[0];
    setThumbnail(file);
    const reader = new FileReader();
    reader.onloadend = () => setImagePreview(reader.result);
    reader.readAsDataURL(file);
  };

  // const handleImageChange = (e) => {
  //   const files = Array.from(e.target.files);
  //   setImages(files);
  // };


  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const newPreviews = files.map(file => URL.createObjectURL(file));
    
    setImages(prevImages => [...prevImages, ...files]);
    setImagePreviews(prevPreviews => [...prevPreviews, ...newPreviews]);
  };

  const handleColorChange = (color) => {
    setSelectedColors(prevColors =>
      prevColors.includes(color)
        ? prevColors.filter(c => c !== color)
        : [...prevColors, color]
    );
  };

  const handleAttributeChange = (e) => {
    setSelectedAttribute(e.target.value);
  };

  const addAttribute = () => {
    if (selectedAttribute) {
      const selectedAttr = attributes.find(attr => attr._id === selectedAttribute);
      if (selectedAttr) {
        setProductAttributes(prevAttrs => [
          ...prevAttrs,
          { _id: selectedAttr._id, name: selectedAttr.name }
        ]);
        setSelectedAttribute('');
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const productFormData = new FormData();

    for (const key in formData) {
      let value = formData[key];

      if (key === 'tags') {
        const tagsArray = value.split(',').map(tag => tag.trim()).filter(tag => tag);
        tagsArray.forEach(tag => productFormData.append('tags[]', tag));
      } else {
        switch (key) {
          case 'price':
          case 'discount':
          case 'discountAmount':
          case 'taxAmount':
          case 'shippingCost':
          case 'minimumOrderQty':
          case 'stock':
            value = parseFloat(value) || 0;
            break;
          case 'taxIncluded':
          case 'isFeatured':
            value = value === 'true';
            break;
          default:
            value = String(value);
            break;
        }
          // Conditionally append digitalProductType
      if (key === 'digitalProductType' && formData.productType !== 'digital') {
        continue;  // Skip adding this field if productType is not 'digital'
      }
        productFormData.append(key, value);
      }
    }

    if (thumbnail) {
      productFormData.append('thumbnail', thumbnail);
    }

    images.forEach((image) => {
      productFormData.append('images', image);
    });

    selectedColors.forEach((color) => {
      productFormData.append('colors[]', color);
    });

    productAttributes.forEach((attribute) => {
      productFormData.append('attributes[]', attribute._id);
    });
    productFormData.append('userId', userId);
      productFormData.append('userType', 'admin');

          // Log form data to console
    for (let [key, value] of productFormData.entries()) {
      console.log(key, value);
    }
    try {
      console.log("form data====", productFormData)
      await dispatch(createProduct(productFormData));
      alert('Product added successfully!');
    } catch (error) {
      setErrorMessage(`Error adding product: ${error.message}`);
      console.log(error);
    }
  };

  const removeImage = (index) => {
    setImages(prevImages => prevImages.filter((_, i) => i !== index));
  };

  const removeThumbnail = () => {
    setThumbnail(null);
    setImagePreview('');
  };

  return (
        <div>
            <main id="content" role="main" className="main pointer-event">

                <div className="content container-fluid">
                    <div className="d-flex flex-wrap gap-2 align-items-center mb-3">
                        <h2 className="h1 mb-0 d-flex gap-2">
                            <img src="https://6valley.6amtech.com/public/assets/back-end/img/inhouse-product-list.png" alt="" />
                            Add New Product
                        </h2>
                    </div>
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg space-y-4 p-10">
      {/* Form inputs for each field */}
      <div className="col-12 lightshadow p-5  shadow-md  rounded-md">
      <div className="flex flex-col gap-2">
        <label className="font-semibold">Product Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Product Name" className="p-2 border rounded" required />
      </div>
      {/* <div className="flex flex-col gap-2">
        <label className="font-semibold">Product Description</label>
        <textarea name="description" value={formData.description} 
        onChange={handleChange} placeholder="Product Description" 
        className="p-2 border rounded" required />
   
      </div> */}

<div className="flex flex-col gap-2">
                <label className="font-semibold">Product Description</label>
                <ReactQuill
                  name="description"
                  value={formData.description}
                  onChange={handleDescriptionChange}
                  className="quill-editor p-2 border rounded"
                  theme="snow"
                  placeholder="Write the product description here..."
                />
              </div>
      </div>

<div className="col-12  p-5 flex flex-wrap  shadow-md  rounded-md">
  <div className="flex flex-col w-full lg:w-1/3 gap-1">
    <label className="font-semibold">Category</label>
    <select name="category" value={formData.category} 
    onChange={handleChange} className="p-2 border rounded bg-white" required>
      <option value="">Select Category</option>
      {categories.map(category => (
        <option key={category._id} value={category.slug}>{category.name}</option>
      ))}
    </select>
  </div>

  <div className="flex flex-col w-full lg:w-1/3 gap-1">
    <label className="font-semibold">Sub-Category</label>
    <select name="subCategorySlug" value={formData.subCategorySlug}
     onChange={handleChange} className="p-2 border rounded bg-white">
      <option value="">Select Sub-Category</option>
      {subCategories.map(subCategory => (
        <option key={subCategory._id} value={subCategory.slug}>{subCategory.name}</option>
      ))}
    </select>
  </div>

  <div className="flex flex-col w-full lg:w-1/3 gap-1">
    <label className="font-semibold">Sub-Sub-Category</label>
    <select name="subSubCategorySlug" value={formData.subSubCategorySlug}
     onChange={handleChange} className="p-2 border rounded bg-white">
      <option value="">Select Sub-Sub-Category</option>
      {subSubCategories.map(subSubCategory => (
        <option key={subSubCategory._id} value={subSubCategory.slug}>{subSubCategory.name}</option>
      ))}
    </select>
  </div>

  <div className="flex flex-col w-full lg:w-1/3 gap-1 mt-3">
    <label className="font-semibold">Brand</label>
    <select name="brand" value={formData.brand} onChange={handleChange} className="p-2 bg-white border rounded" required>
      <option value="">Select Brand</option>
      {brands.map(brand => (
        // <option key={brand._id} value={brand._id}>{brand.name}</option>
        <option key={brand._id} value="668e3d6bd14dbdf8f5904f3c">{brand.name}</option>
      ))}
    </select>
  </div>



      {/* Product Type */}
      <div className="flex flex-col w-full lg:w-1/3 gap-1 mt-3">
        <label className="font-semibold">Product Type</label>
        <select
          name="productType"
          value={formData.productType}
          onChange={handleChange}
          className="p-2 border rounded bg-white"
          required
        >
          <option value="" disabled>Select Product Type</option>
          <option value="physical">Physical</option>
          <option value="digital">Digital</option>
        </select>
      </div>

      {/* Conditionally Render Digital Product Type */}
      {formData.productType === 'digital' && (
        <div className="flex flex-col w-full lg:w-1/3 gap-1 mt-3">
          <label className="font-semibold">Digital Product Type</label>
          <select
            name="digitalProductType"
            value={formData.digitalProductType}
            onChange={handleChange}
            className="p-2 border rounded bg-white"
          >
            <option value="" disabled>Select Digital Product Type</option>
            <option value="readyAfterSell">Ready After Sell</option>
            <option value="readyProduct">Ready Product</option>
          </select>
        </div>
      )}


  <div className="flex flex-col w-full lg:w-1/3 gap-1 mt-3">
    <label className="font-semibold">SKU</label>
    <input type="text" name="sku" value={formData.sku} onChange={handleChange} placeholder="SKU" className="p-2 border rounded" required />
  </div>

  <div className="flex flex-col w-full lg:w-1/3 gap-1 mt-3">
    <label className="font-semibold">Unit</label>
    <input type="text" name="unit" value={formData.unit} onChange={handleChange} placeholder="Unit" className="p-2 border rounded" required />
  </div>

  <div className="flex flex-col w-full lg:w-1/3 gap-1 mt-3">
    <label className="font-semibold">Tags</label>
    <input type="text" name="tags" value={formData.tags} onChange={handleChange} placeholder="Tags (comma-separated)" className="p-2 border rounded" />
  </div>
</div>

<div className="col-12  p-5 flex flex-wrap  shadow-md  rounded-md" 
>

<div className="flex flex-col w-full lg:w-1/4 gap-1 mb-4">
        <label className="font-semibold">Price</label>
        <input type="number" name="price" value={formData.price} onChange={handleChange} placeholder="Price" className="p-2 border rounded" required />
      </div>

      <div className="flex flex-col w-full lg:w-1/4 gap-1 mb-4">
        <label className="font-semibold">Discount</label>
        <input type="number" name="discount" value={formData.discount} onChange={handleChange} placeholder="Discount" className="p-2 border rounded" />
      </div>

<div className="flex flex-col w-full lg:w-1/4 gap-1 mb-4">
        <label className="font-semibold">Discount Type</label>
        <select name="discountType" value={formData.discountType} 
        onChange={handleChange} className="p-2 border rounded bg-white">
          <option value="">Select Discount Type</option>
          <option value="percent">Percentage</option>
          <option value="flat">Flat Amount</option>
        </select>
      </div>

      <div className="flex flex-col w-full lg:w-1/4 gap-1 mb-4">
        <label className="font-semibold">Discount Amount</label>
        <input type="number" name="discountAmount" value={formData.discountAmount} onChange={handleChange} placeholder="Discount Amount" className="p-2 border rounded" />
      </div>

      <div className="flex flex-col w-full lg:w-1/4 gap-1 mb-4">
        <label className="font-semibold">Tax Amount</label>
        <input type="number" name="taxAmount" value={formData.taxAmount} onChange={handleChange} placeholder="Tax Amount" className="p-2 border rounded" />
      </div>

      <div className="flex flex-col w-full lg:w-1/4 gap-1 mb-4 ">
        <label className="font-semibold">Tax Included</label>
       <div className="row flex gap-3 justify-center items-center">

        <input type="checkbox" name="taxIncluded" checked={formData.taxIncluded} onChange={handleChange} className="mr-2" />
        <span className="text-sm text-gray-600">Include tax in price</span>
       </div>
      </div>
 </div>
 
 <div className="col-12  p-8 flex flex-wrap  shadow-md  rounded-md " 
 >
 <div className="flex flex-col w-full lg:w-1/3 gap-2">
 <label className="font-semibold">Minimum Order Quantity</label>
        <input type="number" name="minimumOrderQty" value={formData.minimumOrderQty} onChange={handleChange} placeholder="Minimum Order Quantity" className="p-2 border rounded" />
      </div>

      <div className="flex flex-col w-full lg:w-1/3 gap-2">
      <label className="font-semibold">Shipping Cost</label>
        <input type="number" name="shippingCost" value={formData.shippingCost} onChange={handleChange} placeholder="Shipping Cost" className="p-2 border rounded" />
      </div>

      <div className="flex flex-col w-full lg:w-1/3 gap-2">
      <label className="font-semibold">Stock</label>
        <input type="number" name="stock" value={formData.stock} onChange={handleChange} placeholder="Stock" className="p-2 border rounded" />
      </div>

      </div>

<div className="col-12  p-5 flex flex-wrap  shadow-md  rounded-md">

      <div className="flex flex-col gap-2">
        <label className="font-semibold">Video Link</label>
        <input type="text" name="videoLink" value={formData.videoLink} onChange={handleChange} placeholder="Video Link" className="p-2 border rounded" />
      </div>
</div>

<div className="col-12  p-5 flex flex-wrap  shadow-md  rounded-md">

<div className="flex flex-col w-full lg:w-1/2 gap-2">
<label className="font-semibold">Colors</label>
  <div className="flex flex-wrap gap-2">
    {colors.map((color) => (
      <label key={color._id} className="inline-flex items-center">
        <input
          type="checkbox"
          checked={selectedColors.includes(color._id)}
          onChange={() => handleColorChange(color._id)}
          className="form-checkbox"
        />
        <span className="ml-2">{color.name}</span>
      </label>
    ))}
  </div>
</div>

<div className="flex flex-col w-full lg:w-1/2 gap-2">

  <label className="font-semibold">Attributes</label>
  <div className="flex w-full gap-2">

  <select name="attributes" value={selectedAttribute} 
  onChange={handleAttributeChange} className="px-2 border rounded  w-full bg-white">
    <option value="">Select Attribute</option>
    {attributes.map(attr => (
      <option key={attr._id} value={attr._id}>{attr.name}</option>
    ))}
  </select>
  <button type="button" onClick={addAttribute} className="mt-2 px-4 py-2 bg-green-500 text-white rounded">Add</button>
  </div>
  <ul className="mt-2">
    {productAttributes.map(attr => (
      <li key={attr._id} className="flex justify-between items-center p-2 border-b">
        <span>{attr.name}</span>
        <button type="button" onClick={() => setProductAttributes(prevAttrs => prevAttrs.filter(a => a._id !== attr._id))} className="text-red-500">Remove</button>
      </li>
    ))}
  </ul>
</div>
</div>
   


<div className="p-5">
      <div className="col-12 p-5 flex flex-col gap-3 shadow-md rounded-md">
        <div className="flex flex-col gap-2">
          <label className="font-semibold">Product Images</label>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageChange}
            className="p-2 border rounded"
          />
        </div>
        {images.length > 0 && (
          <div className="flex gap-2 flex-wrap">
            {images.map((image, index) => (
              <div key={index} className="relative">
                <img
                  src={URL.createObjectURL(image)}
                  alt="Preview"
                  className="w-20 h-20 object-cover border rounded"
                />
                <button
                  type="button"
                  onClick={() => removeImage(index)}
                  className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1 text-xs"
                >
                  X
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="col-12 p-5 flex flex-col gap-3 shadow-md rounded-md">
        <div className="flex flex-col gap-2">
          <label className="font-semibold">Product Thumbnail</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleThumbnailChange}
            className="p-2 border rounded"
          />
          {imagePreview && (
            <div className="relative">
              <img
                src={imagePreview}
                alt="Thumbnail Preview"
                className="w-20 h-20 object-cover border rounded mt-2"
              />
              <button
                type="button"
                onClick={removeThumbnail}
                className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1 text-xs"
              >
                X
              </button>
            </div>
          )}
        </div>
      </div>
    </div>


      <div className="mt-5">
        <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded">
          Add Product
        </button>
      </div>
      {console.log("error msge==============",errorMessage)}
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      {/* <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Submit</button> */}
    </form> </div> </main> </div>
  );
};

export default AddNewProduct;

