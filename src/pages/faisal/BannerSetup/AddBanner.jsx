// import React from 'react';
// // import { BiLinkExternal } from 'react-icons/bi'; // Example import of BiLinkExternal icon
// import './addbanner.css'
// const AddBannerForm = () => {
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // Handle form submission logic here
//         console.log('Form submitted');
//     };

//     return (
//         <div className="card mt-20 p-7">
//             <div className="card-header snipcss0-4-17-18 snipcss0-1-1-2">
//                 <h5 className="mb-0 text-capitalize snipcss0-5-18-19 snipcss0-2-2-3">Banner form</h5>
//             </div>
//             <div className="card-body snipcss0-4-17-20 snipcss0-1-1-4">
//                 <form onSubmit={handleSubmit} encType="multipart/form-data" className="banner_form snipcss0-5-20-21 snipcss0-2-4-5">
//                     <input type="hidden" name="_token" value="PwtXfCOB4jJW4r7EFP7tbQ85VIeh6Q28sCgcjoVB" autoComplete="off" className="snipcss0-6-21-22 snipcss0-3-5-6" />
//                     <div className="row g-3 snipcss0-6-21-23 snipcss0-3-5-7">
//                         <div className="col-md-6 snipcss0-7-23-24 snipcss0-4-7-8">
//                             <input type="hidden" id="id" name="id" className="snipcss0-8-24-25 snipcss0-5-8-9" />
//                             <div className="form-group snipcss0-8-24-26 snipcss0-5-8-10">
//                                 <label htmlFor="name" className="title-color text-capitalize snipcss0-9-26-27 snipcss0-6-10-11"> Banner type </label>
//                                 <select className="js-example-responsive form-control w-100 select2-hidden-accessible snipcss0-9-26-28 snipcss0-6-10-12" name="banner_type" required id="banner_type_select" tabIndex="-1" aria-hidden="true">
//                                     <option value="Main Banner" className="snipcss0-10-28-29 snipcss0-7-12-13">Main Banner</option>
//                                     <option value="Popup Banner" className="snipcss0-10-28-30 snipcss0-7-12-14">Popup Banner</option>
//                                     <option value="Footer Banner" className="snipcss0-10-28-31 snipcss0-7-12-15">Footer Banner</option>
//                                     <option value="Main Section Banner" className="snipcss0-10-28-32 snipcss0-7-12-16">Main Section Banner</option>
//                                 </select>
//                             </div>
//                             <div className="form-group mb-3 snipcss0-8-24-40 snipcss0-5-8-24">
//                                 <label htmlFor="name" className="title-color text-capitalize snipcss0-9-40-41 snipcss0-6-24-25">Banner URL</label>
//                                 <input type="url" name="url" className="form-control snipcss0-9-40-42 snipcss0-6-24-26" id="url" required placeholder="Enter url" />
//                             </div>
//                             <div className="form-group snipcss0-8-24-43 snipcss0-5-8-27">
//                                 <label htmlFor="resource_id" className="title-color text-capitalize snipcss0-9-43-44 snipcss0-6-27-28">Resource type</label>
//                                 <select className="js-example-responsive form-control w-100 action-display-data select2-hidden-accessible snipcss0-9-43-45 snipcss0-6-27-29" name="resource_type" required tabIndex="-1" aria-hidden="true">
//                                     <option value="product" className="snipcss0-10-45-46 snipcss0-7-29-30">Product</option>
//                                     <option value="category" className="snipcss0-10-45-47 snipcss0-7-29-31">Category</option>
//                                     <option value="shop" className="snipcss0-10-45-48 snipcss0-7-29-32">Shop</option>
//                                     <option value="brand" className="snipcss0-10-45-49 snipcss0-7-29-33">Brand</option>
//                                 </select>
//                             </div>
//                             <div className="form-group mb-0 snipcss0-8-24-57 snipcss0-5-8-41" id="resource-product">
//                                 <label htmlFor="product_id" className="title-color text-capitalize snipcss0-9-57-58 snipcss0-6-41-42">Product</label>
//                                 <select className="js-example-responsive form-control w-100 select2-hidden-accessible snipcss0-9-57-59 snipcss0-6-41-43" name="product_id" tabIndex="-1" aria-hidden="true">
//                                     <option value="1" className="snipcss0-10-59-60 snipcss0-7-43-44">Women's long-sleeve lightweight french terry fleece quarter-zip top</option>
//                                     <option value="3" className="snipcss0-10-59-61 snipcss0-7-43-45">Ladies Winter Long Sleeve Sweater</option>
//                                     <option value="4" className="snipcss0-10-59-62 snipcss0-7-43-46">Crossbody Shoulder Bag Soft Leather Bag Female Fashion</option>
//                                     {/* Other options omitted for brevity */}
//                                 </select>
//                             </div>
//                         </div>
//                     </div>
//                     <button type="submit" className="btn btn-primary">Submit</button>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default AddBannerForm;





// import React, { useState } from 'react';
// import { FiSkipBack } from 'react-icons/fi';
// import { Link } from 'react-router-dom';

// const AddBannerForm = () => {
//     const [bannerType, setBannerType] = useState('Main Section Banner');
//     const [resourceType, setResourceType] = useState('product');
//     const [productId, setProductId] = useState('');
//     const [category, setCategory] = useState('');
//     const [shop, setShop] = useState('');
//     const [brand, setBrand] = useState('');
//     const [bannerImage, setBannerImage] = useState(null);

//     const handleBannerTypeChange = (e) => {
//         setBannerType(e.target.value);
//     };

//     const handleResourceTypeChange = (e) => {
//         setResourceType(e.target.value);
//     };

//     const handleProductChange = (e) => {
//         setProductId(e.target.value);
//     };

//     const handleCategoryChange = (e) => {
//         setCategory(e.target.value);
//     };

//     const handleShopChange = (e) => {
//         setShop(e.target.value);
//     };

//     const handleBrandChange = (e) => {
//         setBrand(e.target.value);
//     };

//     const handleImageChange = (e) => {
//         const file = e.target.files[0];
//         setBannerImage(file);
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // Implement your form submission logic here
//         console.log('Form submitted:', { bannerType, resourceType, productId, category, shop, brand, bannerImage });
//     };

//     return (
//         <div className="content container-fluid snipcss-j33vn">
//             <div className="d-flex justify-content-between mb-3">
//                 <div>
//                     <h2 className="h1 mb-1 text-capitalize d-flex align-items-center gap-2">
//                         <img width="20" src="https://6valley.6amtech.com/public/assets/back-end/img/banner.png" alt="" /> Add Banner                     </h2>
//                 </div>
//                 <div>
//                     <Link to='/bannersetup' className="btn flex align-items-center gap-2 text-white"  style={{background:"lightgreen"}}>
//                         <FiSkipBack /> Back
//                     </Link>
//                 </div>
//             </div>
//             <div className="row text-start">
//                 <div className="col-md-12">
//                     <div className="card">
//                         <div className="card-body">
//                             <form onSubmit={handleSubmit} encType="multipart/form-data" className="banner_form">
//                                 <input type="hidden" name="_token" value="PwtXfCOB4jJW4r7EFP7tbQ85VIeh6Q28sCgcjoVB" autoComplete="off" />
//                                 <div className="row g-3">
//                                     <div className="col-md-6">
//                                         <div className="form-group">
//                                             <input type="hidden" id="id" name="id" />
//                                         </div>
//                                         <div className="form-group snipcss0-8-24-26 snipcss0-5-8-10">
//                                  <label htmlFor="name" className="title-color text-capitalize snipcss0-9-26-27 snipcss0-6-10-11"> Banner type </label>
//                                  <select className="js-example-responsive form-control w-100 select2-hidden-accessible snipcss0-9-26-28 snipcss0-6-10-12" name="banner_type" required id="banner_type_select" tabIndex="-1" aria-hidden="true">
//                                      <option value="Main Banner" className="snipcss0-10-28-29 snipcss0-7-12-13">Main Banner</option>
//                                      <option value="Popup Banner" className="snipcss0-10-28-30 snipcss0-7-12-14">Popup Banner</option>
//                                      <option value="Footer Banner" className="snipcss0-10-28-31 snipcss0-7-12-15">Footer Banner</option>
//                                      <option value="Main Section Banner" className="snipcss0-10-28-32 snipcss0-7-12-16">Main Section Banner</option>
//                                  </select>
//                            </div> 
//                              <div className="form-group">
//                                             <label htmlFor="banner_type" className="title-color text-capitalize">Banner type</label>
//                                             <select className="form-control" name="banner_type" id="banner_type" value={bannerType} onChange={handleBannerTypeChange}>
//                                                 <option value="Main Banner">Main Banner</option>
//                                                 <option value="Popup Banner">Popup Banner</option>
//                                                 <option value="Footer Banner">Footer Banner</option>
//                                                 <option value="Main Section Banner">Main Section Banner</option>
//                                             </select>
//                                         </div>
//                                         <div className="form-group">
//                                             <label htmlFor="url" className="title-color text-capitalize">Banner URL</label>
//                                             <input type="url" name="url" className="form-control" id="url" required placeholder="Enter URL" defaultValue="https://codecanyon.net/item/6valley-multivendor-ecommerce-complete-ecommerce-mobile-app-web-and-admin-panel/31448597?s_rank=1" />
//                                         </div>
//                                         <div className="form-group">
//                                             <label htmlFor="resource_type" className="title-color text-capitalize">Resource type</label>
//                                             <select className="form-control" name="resource_type" id="resource_type" value={resourceType} onChange={handleResourceTypeChange}>
//                                                 <option value="product">Product</option>
//                                                 <option value="category">Category</option>
//                                                 <option value="shop">Shop</option>
//                                                 <option value="brand">Brand</option>
//                                             </select>
//                                         </div>
//                                         {resourceType === 'product' && (
//                                             <div className="form-group">
//                                                 <label htmlFor="product_id" className="title-color text-capitalize">Product</label>
//                                                 <select className="form-control" name="product_id" id="product_id" value={productId} onChange={handleProductChange}>
//                                                     <option value="1">Product 1</option>
//                                                     <option value="2">Product 2</option>
//                                                     {/* Add more options as needed */}
//                                                 </select>
//                                             </div>
//                                         )}
//                                         {resourceType === 'category' && (
//                                             <div className="form-group">
//                                                 <label htmlFor="category_id" className="title-color text-capitalize">Category</label>
//                                                 <select className="form-control" name="category_id" id="category_id" value={category} onChange={handleCategoryChange}>
//                                                     <option value="11">Category 1</option>
//                                                     <option value="12">Category 2</option>
//                                                     {/* Add more options as needed */}
//                                                 </select>
//                                             </div>
//                                         )}
//                                         {resourceType === 'shop' && (
//                                             <div className="form-group">
//                                                 <label htmlFor="shop_id" className="title-color text-capitalize">Shop</label>
//                                                 <select className="form-control" name="shop_id" id="shop_id" value={shop} onChange={handleShopChange}>
//                                                     <option value="1">Shop 1</option>
//                                                     <option value="2">Shop 2</option>
//                                                     {/* Add more options as needed */}
//                                                 </select>
//                                             </div>
//                                         )}
//                                         {resourceType === 'brand' && (
//                                             <div className="form-group">
//                                                 <label htmlFor="brand_id" className="title-color text-capitalize">Brand</label>
//                                                 <select className="form-control" name="brand_id" id="brand_id" value={brand} onChange={handleBrandChange}>
//                                                     <option value="1">Brand 1</option>
//                                                     <option value="2">Brand 2</option>
//                                                     {/* Add more options as needed */}
//                                                 </select>
//                                             </div>
//                                         )}
//                                     </div>
//                                     <div className="col-md-6 d-flex flex-column justify-content-between">
//                                         <div className="form-group text-center mb-4">
//                                             <label htmlFor="banner_image" className="title-color text-capitalize">Banner Image</label>
//                                             <input type="file" name="banner_image" className="form-control-file" id="banner_image" accept=".jpg, .png, .jpeg, .gif, .bmp, .webp | image/*" onChange={handleImageChange} />
//                                         </div>
//                                         <div className="form-group mt-auto">
//                                             <button type="submit" className="btn  float-end" style={{background:"lightgreen"}}>Submit</button>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default AddBannerForm;



import React, { useState, useEffect } from 'react';
import { FiSkipBack } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import axios from 'axios';

const AddBannerForm = () => {
    const [bannerType, setBannerType] = useState('Main Section Banner');
    const [resourceType, setResourceType] = useState('product');
    const [productId, setProductId] = useState('');
    const [category, setCategory] = useState('');
    const [shop, setShop] = useState('');
    const [brand, setBrand] = useState('');
    const [bannerImage, setBannerImage] = useState(null);

    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [brands, setBrands] = useState([]);
    const [shops, setShops] = useState([]);

    // Fetch data based on resourceType
    useEffect(() => {
        const fetchData = async () => {
            try {
                if (resourceType === 'product') {
                    const response = await axios.get('http://localhost:3000/api/products/');
                    setProducts(response.data.docs);
                } else if (resourceType === 'category') {
                    const response = await axios.get('http://localhost:3000/api/categories/');
                    setCategories(response.data.data);
                } else if (resourceType === 'shop') {
                    const response = await axios.get('http://localhost:3000/api/shops/');
                    setShops(response.data.data); // Ensure you have the right structure here
                } else if (resourceType === 'brand') {
                    const response = await axios.get('http://localhost:3000/api/brands/');
                    setBrands(response.data);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [resourceType]);

    console.log("dataaaaaaaaaaaaaa----",products, categories, brands)
    const handleBannerTypeChange = (e) => {
        setBannerType(e.target.value);
    };

    const handleResourceTypeChange = (e) => {
        setResourceType(e.target.value);
        // Clear previous selection when resourceType changes
        setProductId('');
        setCategory('');
        setShop('');
        setBrand('');
    };

    const handleProductChange = (e) => {
        setProductId(e.target.value);
    };

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
    };

    const handleShopChange = (e) => {
        setShop(e.target.value);
    };

    const handleBrandChange = (e) => {
        setBrand(e.target.value);
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setBannerImage(file);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('bannerType', bannerType);
        formData.append('resourceType', resourceType);
        formData.append('resourceId', 
            resourceType === 'product' ? productId : 
            resourceType === 'category' ? category : 
            resourceType === 'shop' ? shop : 
            brand
        );
        formData.append('url', e.target.url.value);
        formData.append('publish', false); // Example publish value
        if (bannerImage) {
            formData.append('bannerImage', bannerImage);
        }

        try {
            await axios.post('http://localhost:3000/api/brands/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log('Banner submitted successfully');
        } catch (error) {
            console.error('Error submitting banner:', error);
        }
    };

    return (
        <div className="content container-fluid snipcss-j33vn">
            <div className="d-flex justify-content-between mb-3">
                <div>
                    <h2 className="h1 mb-1 text-capitalize d-flex align-items-center gap-2">
                        <img width="20" src="https://6valley.6amtech.com/public/assets/back-end/img/banner.png" alt="" /> Add Banner
                    </h2>
                </div>
                <div>
                    <Link to='/bannersetup' className="btn flex align-items-center gap-2 text-white" style={{background: "lightgreen"}}>
                        <FiSkipBack /> Back
                    </Link>
                </div>
            </div>
            <div className="row text-start">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-body">
                            <form onSubmit={handleSubmit} encType="multipart/form-data" className="banner_form">
                                <input type="hidden" name="_token" value="PwtXfCOB4jJW4r7EFP7tbQ85VIeh6Q28sCgcjoVB" autoComplete="off" />
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="banner_type" className="title-color text-capitalize">Banner type</label>
                                            <select className="form-control" name="banner_type" id="banner_type" value={bannerType} onChange={handleBannerTypeChange}>
                                                <option value="Main Banner">Main Banner</option>
                                                <option value="Popup Banner">Popup Banner</option>
                                                <option value="Footer Banner">Footer Banner</option>
                                                <option value="Main Section Banner">Main Section Banner</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="url" className="title-color text-capitalize">Banner URL</label>
                                            <input type="url" name="url" className="form-control" id="url" required placeholder="Enter URL" defaultValue="https://codecanyon.net/item/6valley-multivendor-ecommerce-complete-ecommerce-mobile-app-web-and-admin-panel/31448597?s_rank=1" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="resource_type" className="title-color text-capitalize">Resource type</label>
                                            <select className="form-control" name="resource_type" id="resource_type" value={resourceType} onChange={handleResourceTypeChange}>
                                                <option value="product">Product</option>
                                                <option value="category">Category</option>
                                                <option value="shop">Shop</option>
                                                <option value="brand">Brand</option>
                                            </select>
                                        </div>
                                        {resourceType === 'product' && (
                                            <div className="form-group">
                                                <label htmlFor="product_id" className="title-color text-capitalize">Product</label>
                                                <select className="form-control" name="product_id" id="product_id" value={productId} onChange={handleProductChange}>
                                                    {products.map(product => (
                                                        <option key={product._id} value={product._id}>{product.name}</option>
                                                    ))}
                                                </select>
                                            </div>
                                        )}
                                        {resourceType === 'category' && (
                                            <div className="form-group">
                                                <label htmlFor="category_id" className="title-color text-capitalize">Category</label>
                                                <select className="form-control" name="category_id" id="category_id" value={category} onChange={handleCategoryChange}>
                                                    {categories.map(cat => (
                                                        <option key={cat._id} value={cat._id}>{cat.name}</option>
                                                    ))}
                                                </select>
                                            </div>
                                        )}
                                        {resourceType === 'shop' && (
                                            <div className="form-group">
                                                <label htmlFor="shop_id" className="title-color text-capitalize">Shop</label>
                                                <select className="form-control" name="shop_id" id="shop_id" value={shop} onChange={handleShopChange}>
                                                    {shops.map(shopItem => (
                                                        <option key={shopItem._id} value={shopItem._id}>{shopItem.name}</option>
                                                    ))}
                                                </select>
                                            </div>
                                        )}
                                        {resourceType === 'brand' && (
                                            <div className="form-group">
                                                <label htmlFor="brand_id" className="title-color text-capitalize">Brand</label>
                                                <select className="form-control" name="brand_id" id="brand_id" value={brand} onChange={handleBrandChange}>
                                                    {brands.map(brandItem => (
                                                        <option key={brandItem._id} value={brandItem._id}>{brandItem.name}</option>
                                                    ))}
                                                </select>
                                            </div>
                                        )}
                                        <div className="form-group">
                                            <label htmlFor="banner_image" className="title-color text-capitalize">Banner Image</label>
                                            <input type="file" name="banner_image" className="form-control" id="banner_image" onChange={handleImageChange} />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group mt-3">
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddBannerForm;
