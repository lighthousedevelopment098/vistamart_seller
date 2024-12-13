// import { useState } from 'react';
// import { FiSkipBack } from 'react-icons/fi';
// // import { IoChevronLeft } from 'react-icons/io5';

// const BannerUpdateForm = () => {
//     const [bannerType, setBannerType] = useState('Main Section Banner');
//     const [resourceType, setResourceType] = useState('Product');
//     const [selectedProduct, setSelectedProduct] = useState("Women's long-sleeve lightweight french terry fleece quarter-zip top");

//     const handleBannerTypeChange = (event) => {
//         setBannerType(event.target.value);
//     };

//     const handleResourceTypeChange = (event) => {
//         setResourceType(event.target.value);
//     };

//     const handleProductChange = (event) => {
//         setSelectedProduct(event.target.value);
//     };

//     const handleFileChange = (event) => {
//         const file = event.target.files[0];
//         // Handle file upload logic here
//     };

//     return (
//         <div className="content container-fluid snipcss-j33vn">
//             <div className="d-flex justify-content-between mb-3">
//                 <div>
//                     <h2 className="h1 mb-1 text-capitalize d-flex align-items-center gap-2">
//                         <img src="https://6valley.6amtech.com/public/assets/back-end/img/banner.png" alt="Banner Icon" width="20" />
//                         Banner update form
//                     </h2>
//                 </div>
//                 <div>
//                     <a href="https://6valley.6amtech.com/admin/banner/list" className="btn btn--primary text-white">
//                         <FiSkipBack className="mr-1" /> Back
//                     </a>
//                 </div>
//             </div>
//             <div className="row text-start">
//                 <div className="col-md-12">
//                     <div className="card">
//                         <div className="card-body">
//                             <form action="https://6valley.6amtech.com/admin/banner/update/48" method="post" encType="multipart/form-data" className="banner_form">
//                                 <input type="hidden" name="_token" value="PwtXfCOB4jJW4r7EFP7tbQ85VIeh6Q28sCgcjoVB" autoComplete="off" />
//                                 <div className="row g-3">
//                                     <div className="col-md-6">
//                                         <div className="form-group">
//                                             <input type="hidden" id="id" name="id" />
//                                         </div>
//                                         <div className="form-group">
//                                             <label htmlFor="banner_type_select" className="title-color text-capitalize">Banner type</label>
//                                             <select
//                                                 className="js-example-responsive form-control w-100 select2-hidden-accessible"
//                                                 id="banner_type_select"
//                                                 name="banner_type"
//                                                 value={bannerType}
//                                                 onChange={handleBannerTypeChange}
//                                                 required
//                                                 tabIndex="-1"
//                                                 aria-hidden="true"
//                                             >
//                                                 <option value="Main Banner">Main Banner</option>
//                                                 <option value="Popup Banner">Popup Banner</option>
//                                                 <option value="Footer Banner">Footer Banner</option>
//                                                 <option value="Main Section Banner">Main Section Banner</option>
//                                             </select>
//                                         </div>
//                                         <div className="form-group mb-3">
//                                             <label htmlFor="url" className="title-color text-capitalize">Banner URL</label>
//                                             <input
//                                                 type="url"
//                                                 id="url"
//                                                 name="url"
//                                                 className="form-control"
//                                                 placeholder="Enter URL"
//                                                 required
//                                                 defaultValue="https://codecanyon.net/item/6valley-multivendor-ecommerce-complete-ecommerce-mobile-app-web-and-admin-panel/31448597?s_rank=1"
//                                             />
//                                         </div>
//                                         <div className="form-group">
//                                             <label htmlFor="resource_type" className="title-color text-capitalize">Resource type</label>
//                                             <select
//                                                 className="js-example-responsive form-control w-100 action-display-data select2-hidden-accessible"
//                                                 id="resource_type"
//                                                 name="resource_type"
//                                                 value={resourceType}
//                                                 onChange={handleResourceTypeChange}
//                                                 required
//                                                 tabIndex="-1"
//                                                 aria-hidden="true"
//                                             >
//                                                 <option value="product">Product</option>
//                                                 <option value="category">Category</option>
//                                                 <option value="shop">Shop</option>
//                                                 <option value="brand">Brand</option>
//                                             </select>
//                                         </div>
//                                         {resourceType === 'product' && (
//                                             <div className="form-group mb-0">
//                                                 <label htmlFor="product_id" className="title-color text-capitalize">Product</label>
//                                                 <select
//                                                     className="js-example-responsive form-control w-100 select2-hidden-accessible"
//                                                     id="product_id"
//                                                     name="product_id"
//                                                     value={selectedProduct}
//                                                     onChange={handleProductChange}
//                                                     tabIndex="-1"
//                                                     aria-hidden="true"
//                                                 >
//                                                     <option value="1">Women's long-sleeve lightweight french terry fleece quarter-zip top</option>
//                                                     {/* Add other options dynamically */}
//                                                 </select>
//                                             </div>
//                                         )}
//                                         {/* Add other resource type selections here */}
//                                     </div>
//                                     <div className="col-md-6 d-flex flex-column justify-content-center">
//                                         <div className="mx-auto text-center">
//                                             <div className="uploadDnD">
//                                                 <div className="form-group inputDnD input_image input_image_edit bg-img style-V2BEw" id="style-V2BEw">
//                                                     <input
//                                                         type="file"
//                                                         id="banner"
//                                                         name="image"
//                                                         className="form-control-file text--primary font-weight-bold"
//                                                         accept=".jpg, .png, .jpeg, .gif, .bmp, .webp"
//                                                         onChange={handleFileChange}
//                                                     />
//                                                 </div>
//                                             </div>
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

// export default BannerUpdateForm;

///submit isss 
// import React, { useState } from 'react';

// const BannerUpdateForm = () => {
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
//                         <img width="20" src="https://6valley.6amtech.com/public/assets/back-end/img/banner.png" alt="" /> Banner update form
//                     </h2>
//                 </div>
//                 <div>
//                     <a className="btn btn--primary text-white" href="https://6valley.6amtech.com/admin/banner/list">
//                         <i className="tio-chevron-left"></i> Back
//                     </a>
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
//                                         <div className="form-group">
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
//                                     <div className="col-md-6">
//                                         <div className="form-group">
//                                             <label htmlFor="banner_image" className="title-color text-capitalize">Banner Image</label>
//                                             <input type="file" name="banner_image" className="form-control-file" id="banner_image" accept=".jpg, .png, .jpeg, .gif, .bmp, .webp | image/*" onChange={handleImageChange} />
//                                         </div>
//                                         <div className="form-group mt-3">
//                                             <button type="submit" className="btn btn-primary">Submit</button>
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

// export default BannerUpdateForm;


import React, { useState } from 'react';
import { FiSkipBack } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const BannerUpdateForm = () => {
    const [bannerType, setBannerType] = useState('Main Section Banner');
    const [resourceType, setResourceType] = useState('product');
    const [productId, setProductId] = useState('');
    const [category, setCategory] = useState('');
    const [shop, setShop] = useState('');
    const [brand, setBrand] = useState('');
    const [bannerImage, setBannerImage] = useState(null);

    const handleBannerTypeChange = (e) => {
        setBannerType(e.target.value);
    };

    const handleResourceTypeChange = (e) => {
        setResourceType(e.target.value);
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

    const handleSubmit = (e) => {
        e.preventDefault();
        // Implement your form submission logic here
        console.log('Form submitted:', { bannerType, resourceType, productId, category, shop, brand, bannerImage });
    };

    return (
        <div className="content container-fluid snipcss-j33vn">
            <div className="d-flex justify-content-between mb-3">
                <div>
                    <h2 className="h1 mb-1 text-capitalize d-flex align-items-center gap-2">
                        <img width="20" src="https://6valley.6amtech.com/public/assets/back-end/img/banner.png" alt="" /> Banner update form
                    </h2>
                </div>
                <div>
                    <Link to='/bannersetup' className="btn flex align-items-center gap-2 text-white"  style={{background:"lightgreen"}}>
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
                                            <input type="hidden" id="id" name="id" />
                                        </div>
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
                                                    <option value="1">Product 1</option>
                                                    <option value="2">Product 2</option>
                                                    {/* Add more options as needed */}
                                                </select>
                                            </div>
                                        )}
                                        {resourceType === 'category' && (
                                            <div className="form-group">
                                                <label htmlFor="category_id" className="title-color text-capitalize">Category</label>
                                                <select className="form-control" name="category_id" id="category_id" value={category} onChange={handleCategoryChange}>
                                                    <option value="11">Category 1</option>
                                                    <option value="12">Category 2</option>
                                                    {/* Add more options as needed */}
                                                </select>
                                            </div>
                                        )}
                                        {resourceType === 'shop' && (
                                            <div className="form-group">
                                                <label htmlFor="shop_id" className="title-color text-capitalize">Shop</label>
                                                <select className="form-control" name="shop_id" id="shop_id" value={shop} onChange={handleShopChange}>
                                                    <option value="1">Shop 1</option>
                                                    <option value="2">Shop 2</option>
                                                    {/* Add more options as needed */}
                                                </select>
                                            </div>
                                        )}
                                        {resourceType === 'brand' && (
                                            <div className="form-group">
                                                <label htmlFor="brand_id" className="title-color text-capitalize">Brand</label>
                                                <select className="form-control" name="brand_id" id="brand_id" value={brand} onChange={handleBrandChange}>
                                                    <option value="1">Brand 1</option>
                                                    <option value="2">Brand 2</option>
                                                    {/* Add more options as needed */}
                                                </select>
                                            </div>
                                        )}
                                    </div>
                                    <div className="col-md-6 d-flex flex-column justify-content-between">
                                        <div className="form-group text-center mb-4">
                                            <label htmlFor="banner_image" className="title-color text-capitalize">Banner Image</label>
                                            <input type="file" name="banner_image" className="form-control-file" id="banner_image" accept=".jpg, .png, .jpeg, .gif, .bmp, .webp | image/*" onChange={handleImageChange} />
                                        </div>
                                        <div className="form-group mt-auto">
                                            <button type="submit" className="btn btn-secondary float-end" style={{background:"lightgreen"}}>Submit</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerUpdateForm;
