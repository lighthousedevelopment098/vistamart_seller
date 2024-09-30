// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchProducts, toggleFeatured, deleteProduct, updateProductStatus }
//  from '../../components/redux/product/productSlice';
// import { FiSearch, FiEdit, FiTrash, FiEye } from 'react-icons/fi';
// import Swal from 'sweetalert2';
// import { Link } from 'react-router-dom';

// const InHouseProductList = ({ initialTitle = 'In House Product List', initialFilters = {} }) => {
//   const dispatch = useDispatch();
//   const { products, loading, error } = useSelector((state) => state.product);

//   const [filters, setFilters] = useState({
//     brand: initialFilters.brand || '',
//     category: initialFilters.category || '',
//     searchValue: initialFilters.searchValue || '',
//     userType: initialFilters.userType || '', // Default userType to 'vendor'
//     status: initialFilters.status || '',  // Default status
//     userId: initialFilters.userId || '',  // Default status
//     vendorNew4Days: initialFilters.vendorNew4Days || false
//   });

//   useEffect(() => {
//     dispatch(fetchProducts(filters));
//   }, [filters, dispatch]);

//   const handleInputChange = (e) => {
//     setFilters({
//       ...filters,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleToggleFeatured = async (product) => {
//     const result = await Swal.fire({
//       title: 'Are you sure?',
//       text: `Do you want to ${product.isFeatured ? 'remove' : 'add'} this product as featured?`,
//       icon: 'warning',
//       showCancelButton: true,
//       confirmButtonText: 'Yes',
//       cancelButtonText: 'No',
//     });

//     if (result.isConfirmed) {
//       try {
//         await dispatch(toggleFeatured({ productId: product._id, isFeatured: !product.isFeatured })).unwrap();
//         Swal.fire('Success', 'Product status updated successfully!', 'success');
//       } catch (error) {
//         Swal.fire('Error', error.message, 'error');
//       }
//     }
//   };

//   const handleUpdateStatus = async (product) => {
//     const result = await Swal.fire({
//       title: 'Update Status',
//       text: `Do you want to change the status of this product to ${product.active ? 'inactive' : 'active'}?`,
//       icon: 'warning',
//       showCancelButton: true,
//       confirmButtonText: 'Yes',
//       cancelButtonText: 'No',
//     });

//     if (result.isConfirmed) {
//       try {
//         await dispatch(updateProductStatus({ productId: product._id, status: !product.active })).unwrap();
//         Swal.fire('Success', 'Product status updated successfully!', 'success');
//       } catch (error) {
//         Swal.fire('Error', error.message, 'error');
//       }
//     }
//   };

//   const handleDeleteProduct = async (productId) => {
//     const result = await Swal.fire({
//       title: 'Are you sure?',
//       text: 'Do you want to delete this product?',
//       icon: 'warning',
//       showCancelButton: true,
//       confirmButtonText: 'Yes, delete it!',
//       cancelButtonText: 'No',
//     });

//     if (result.isConfirmed) {
//       try {
//         await dispatch(deleteProduct(productId)).unwrap();
//         Swal.fire('Deleted!', 'Product has been deleted.', 'success');
//       } catch (error) {
//         Swal.fire('Error', error.message, 'error');
//       }
//     }
//   };

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;

//   return (
//     <div className="content container-fluid">
//       <div className="mb-3">
//         <h2 className="h1 mb-0 text-capitalize d-flex gap-2">
//           <img src="https://6valley.6amtech.com/public/assets/back-end/img/inhouse-product-list.png" alt="In House Product List" />
//           {initialTitle}
//           <span className="badge badge-soft-dark radius-50 fz-14 ml-1">{products.length}</span>
//         </h2>
//       </div>

//       <div className="card">
//         <div className="card-body">
//           <form onSubmit={(e) => e.preventDefault()}>
//             <div className="row gx-2">
//               <div className="col-12">
//                 <h4 className="mb-3">Filter Products</h4>
//               </div>
//               <div className="col-sm-6 col-lg-3 col-xl-3">
//                 <div className="form-group">
//                   <label className="title-color" htmlFor="brand">Brand</label>
//                   <select name="brand" className="form-control" onChange={handleInputChange} value={filters.brand}>
//                     <option value="">All Brands</option>
//                     {/* Add more options dynamically */}
//                   </select>
//                 </div>
//               </div>
//               <div className="col-sm-6 col-lg-3 col-xl-3">
//                 <div className="form-group">
//                   <label className="title-color" htmlFor="category">Category</label>
//                   <select name="category" className="form-control" onChange={handleInputChange} value={filters.category}>
//                     <option value="">Select category</option>
//                     <option value="Electronics">Electronics</option>
//                     <option value="Furniture">Furniture</option>
//                     <option value="Clothing">Clothing</option>
//                     {/* Add more options dynamically */}
//                   </select>
//                 </div>
//               </div>
//               <div className="col-12">
//                 <div className="d-flex gap-3 justify-content-end">
//                   <button type="button" className="btn btn-secondary px-5" onClick={() => setFilters({ ...filters, brand: '', category: '', searchValue: '' })}>
//                     Reset
//                   </button>
//                   <button type="submit" className="btn btn--secondary px-5">Show data</button>
//                 </div>
//               </div>
//             </div>
//           </form>
//         </div>
//       </div>

//       <div className="row mt-4">
//         <div className="col-md-12">
//           <div className="card">
//             <div className="px-3 py-4">
//               <div className="row align-items-center">
//                 <div className="col-lg-4">
//                   <form onSubmit={(e) => e.preventDefault()}>
//                     <div className="input-group  input-group-merge border-green-400">
//                       <div className="input-group-prepend">
//                         <div className="input-group-text">
//                           <FiSearch />
//                         </div>
//                       </div>
//                       <input
//                         type="search"
//                         name="searchValue"
//                         className="form-control"
//                         placeholder="Search by Product Name"
//                         value={filters.searchValue}
//                         onChange={handleInputChange}
//                       />
//                       <button type="submit" className="btn" style={{ background: "lightgreen" }}>
//                         Search
//                       </button>
//                     </div>
//                   </form>
//                 </div>
//                 <div className="col-lg-8 mt-3 mt-lg-0 d-flex flex-wrap gap-3 justify-content-lg-end">
//                   <Link to='/inhouselimitedproduct' className="btn btn-info border-green-400">
//                     <span className="text">Limited Stocks</span>
//                   </Link>
//                   <Link to='/inhouseaddproduct' className="btn bg-green-400 text-white">
//                     <span className="text">Add new product</span>
//                   </Link>
//                 </div>
//               </div>
//             </div>

//             <div className="table-responsive">
//               <table className="table table-hover table-borderless table-thead-bordered table-nowrap table-align-middle card-table w-100 text-start">
//                 <thead className="thead-light thead-50 text-capitalize">
//                   <tr>
//                     <th>SL</th>
//                     <th>Product Name</th>
//                     <th className="text-center">Product Type</th>
//                     <th className="text-center">Unit price</th>
//                     <th className="text-center">Show as featured</th>
//                     <th className="text-center">Active status</th>
//                     <th className="text-center">Action</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {products.map((product, index) => (
//                     <tr key={product._id}>
//                       <th scope="row">{index + 1}</th>
//                       <td>
//                         <a href="#" className="media align-items-center gap-2">
//                           <img src={`http://localhost:3000/${product.thumbnail}`} className="avatar border" alt={product.name} />
//                           <span className="hover-c1">{product.name}</span>
//                         </a>
//                       </td>
//                       <td className="text-center">{product.productType}</td>
//                       <td className="text-center">PKR{product.price}</td>
//                       <td className="text-center">
//                         <label className="switcher mx-auto">
//                           <input
//                             type="checkbox"
//                             className="switcher_input"
//                             checked={product.isFeatured}
//                             onChange={() => handleToggleFeatured(product)}
//                           />
//                           <span className="switcher_control" />
//                         </label>
//                       </td>
//                       <td className="text-center">
//                         <label className="switcher mx-auto">
//                           <input
//                             type="checkbox"
//                             className="switcher_input"
//                             checked={product.active}
//                             onChange={() => handleUpdateStatus(product)}
//                           />
//                           <span className="switcher_control" />
//                         </label>
//                       </td>
//                       <td className="text-center">
//                         <div className="btn-group flex gap-3">
//                           <Link to={`/products/${product._id}`} className="btn border-green-500 text-green-500  hover:bg-green-500 hover:text-white" title="View">
//                             <FiEye />
//                           </Link>
//                           <Link to={`/product/${product._id}`} className="btn btn-sm  border-gray-400 hover:bg-gray-500 hover:text-white  " title="Edit">
//                             <FiEdit />
//                           </Link>
//                           <button
//                             type="button"
//                             className="btn btn-sm  border-red-400 text-red-400 hover:bg-red-500 hover:text-white"
//                             title="Delete"
//                             onClick={() => handleDeleteProduct(product._id)}
//                           >
//                             <FiTrash />
//                           </button>
//                         </div>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default InHouseProductList;







// import React, { useState, useEffect, Suspense, lazy } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchProducts, toggleFeatured, deleteProduct, updateProductStatus } 
// from '../../components/redux/product/productSlice';
// import { fetchCategories, fetchBrands } from '../../components/redux/categorybrandSlice';
// import Swal from 'sweetalert2';
// import FilterForm from './FilterForm';
// import './Product.css';
// import LoadingSpinner from '../../components/LoodingSpinner/LoadingSpinner';

// // Lazy load the ProductTable component
// const ProductTable = lazy(() => import('./ProductTable'));

// const InHouseProductList = ({ initialTitle = 'In House Product List', initialFilters = {} }) => {
//   const dispatch = useDispatch();
  
//   const {
//     products,
//     loading,
//     error,
//     totalDocs,
//     limit,
//     totalPages,
//     currentPage,
//     hasPrevPage,
//     hasNextPage,
//     prevPage,
//     nextPage
//   } = useSelector((state) => state.product);
  
//   const { categories, brands } = useSelector((state) => state.category);

//   const [filters, setFilters] = useState({
//     brand: initialFilters.brand || '',
//     category: initialFilters.category || '',
//     searchValue: initialFilters.searchValue || '',
//     userType: initialFilters.userType || '', // Default userType to 'vendor'
//     status: initialFilters.status || '',  // Default status
//     vendorNew4Days: initialFilters.vendorNew4Days || false
//   });

//   useEffect(() => {
//     dispatch(fetchProducts(filters));
//     dispatch(fetchCategories());
//     dispatch(fetchBrands());
//   }, [filters, dispatch]);

//   const handleInputChange = (e) => {
//     setFilters({
//       ...filters,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleToggleFeatured = async (product) => {
//     const result = await Swal.fire({
//       title: 'Are you sure?',
//       text: `Do you want to ${product.isFeatured ? 'remove' : 'add'} this product as featured?`,
//       icon: 'warning',
//       showCancelButton: true,
//       confirmButtonText: 'Yes',
//       cancelButtonText: 'No',
//     });

//     if (result.isConfirmed) {
//       try {
//         await dispatch(toggleFeatured({ productId: product._id, isFeatured: !product.isFeatured })).unwrap();
//         Swal.fire('Success', 'Product status updated successfully!', 'success');
//       } catch (error) {
//         Swal.fire('Error', error.message, 'error');
//       }
//     }
//   };

//   const handleUpdateStatus = async (product) => {
//     const result = await Swal.fire({
//       title: 'Update Product Status',
//       input: 'select',
//       inputOptions: {
//         'pending': 'Pending',
//         'approved': 'Approved',
//         'rejected': 'Rejected'
//       },
//       inputPlaceholder: 'Select status',
//       showCancelButton: true,
//       confirmButtonText: 'Update',
//       cancelButtonText: 'Cancel'
//     });

//     if (result.isConfirmed) {
//       const selectedStatus = result.value; // 'pending', 'approved', or 'rejected'

//       try {
//         await dispatch(updateProductStatus({ productId: product._id, status: selectedStatus })).unwrap();
//         Swal.fire('Success', `Product status updated to ${selectedStatus}!`, 'success');
//       } catch (error) {
//         Swal.fire('Error', error.message, 'error');
//       }
//     }
//   };

//   const handleDeleteProduct = async (productId) => {
//     const result = await Swal.fire({
//       title: 'Are you sure?',
//       text: 'Do you want to delete this product?',
//       icon: 'warning',
//       showCancelButton: true,
//       confirmButtonText: 'Yes, delete it!',
//       cancelButtonText: 'No',
//     });

//     if (result.isConfirmed) {
//       try {
//         await dispatch(deleteProduct(productId)).unwrap();
//         Swal.fire('Deleted!', 'Product has been deleted.', 'success');
//       } catch (error) {
//         Swal.fire('Error', error.message, 'error');
//       }
//     }
//   };

//   const handleResetFilters = () => {
//     setFilters({
//       brand: '',
//       category: '',
//       searchValue: '',
//       userType: '',
//       status: '',
//       vendorNew4Days: false,
//       minPrice: '', 
//       maxPrice: '', 
//     });
//   };

//   const handlePageChange = (page) => {
//     dispatch(fetchProducts({ ...filters, page }));
//   };

//   return (
//     <>
//       <div className="content container-fluid px-12">
//         <div className="mb-3">
//           <h2 className="h1 mb-0 text-capitalize d-flex gap-2">
//             <img src="/inhouse-product-list.png" alt="In House Product List" />
//             {initialTitle}
//             <span className="badge badge-soft-dark radius-50 fz-14 ml-1">{products.length}</span>
//           </h2>
//         </div>

//         {categories.length > 0 && brands.length > 0 && (
//           <FilterForm
//             filters={filters}
//             onInputChange={handleInputChange}
//             onReset={handleResetFilters}
//             categories={categories}
//             brands={brands}
//           />
//         )}

//         {loading && <LoadingSpinner />}

//         {/* Lazy load ProductTable component */}
//         <div className="product-table-container">
//           {error ? (
//             <div>{typeof error === 'object' && error !== null ? JSON.stringify(error) : error}</div>
//           ) : (
//             <Suspense fallback={<LoadingSpinner />}>
//               <ProductTable
//                 products={products}
//                 onToggleFeatured={handleToggleFeatured}
//                 onUpdateStatus={handleUpdateStatus}
//                 onDeleteProduct={handleDeleteProduct}
//                 totalDocs={totalDocs}
//                 limit={limit}
//                 totalPages={totalPages}
//                 currentPage={currentPage}
//                 hasPrevPage={hasPrevPage}
//                 hasNextPage={hasNextPage}
//                 onPageChange={handlePageChange}
//               />
//             </Suspense>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default InHouseProductList;



import React, { useState, useEffect, Suspense, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, toggleFeatured, deleteProduct, updateProductStatus } 
from '../../components/redux/product/productSlice';
import { fetchCategories, fetchBrands } from '../../components/redux/categorybrandSlice';
import Swal from 'sweetalert2';
import FilterForm from './FilterForm';
import LoadingSpinner from '../../components/LoodingSpinner/LoadingSpinner';

// Lazy load the ProductTable component
const ProductTable = lazy(() => import('./ProductTable'));

const InHouseProductList = ({ initialTitle = 'In House Product List', initialFilters = {} }) => {
  const dispatch = useDispatch();
  
  const {
    loading,
    error,
    status,
    cached,
    results,
    products,
  } = useSelector((state) => state.product);

  const { categories, brands } = useSelector((state) => state.category);
  const [filters, setFilters] = useState({
    brand: initialFilters.brand || '',
    category: initialFilters.category || '',
    searchValue: initialFilters.searchValue || '',
    userType: initialFilters.userType || '', // Default userType to 'vendor'
    status: initialFilters.status || '',  // Default status
    vendorNew4Days: initialFilters.vendorNew4Days || false,
    minPrice: initialFilters.minPrice || '', 
    maxPrice: initialFilters.maxPrice || ''
  });

  useEffect(() => {
    const cleanFilters = {
      ...filters,
      brand: filters.brand || undefined,
      category: filters.category || undefined,
      searchValue: filters.searchValue || undefined,
      userType: filters.userType || undefined,
      status: filters.status || undefined,
      vendorNew4Days: filters.vendorNew4Days || undefined,
      minPrice: filters.minPrice || undefined,
      maxPrice: filters.maxPrice || undefined
    };
    console.log('Fetching products with cleaned filters:', cleanFilters);
    dispatch(fetchProducts(cleanFilters));
    dispatch(fetchCategories());
    dispatch(fetchBrands());
  }, [filters, dispatch]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters(prevFilters => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const handleToggleFeatured = async (product) => {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: `Do you want to ${product.isFeatured ? 'remove' : 'add'} this product as featured?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
    });
    if (result.isConfirmed) {
      try {
        await dispatch(toggleFeatured({ productId: product._id, isFeatured: !product.isFeatured })).unwrap();
        Swal.fire('Success', 'Product status updated successfully!', 'success');
      } catch (error) {
        Swal.fire('Error', error.message, 'error');
      }
    }
  };

  const handleUpdateStatus = async (product) => {
    const result = await Swal.fire({
      title: 'Update Product Status',
      input: 'select',
      inputOptions: {
        'pending': 'Pending',
        'approved': 'Approved',
        'rejected': 'Rejected'
      },
      inputPlaceholder: 'Select status',
      showCancelButton: true,
      confirmButtonText: 'Update',
      cancelButtonText: 'Cancel'
    });

    if (result.isConfirmed) {
      const selectedStatus = result.value; // 'pending', 'approved', or 'rejected'

      try {
        await dispatch(updateProductStatus({ productId: product._id, status: selectedStatus })).unwrap();
        Swal.fire('Success', `Product status updated to ${selectedStatus}!`, 'success');
      } catch (error) {
        Swal.fire('Error', error.message, 'error');
      }
    }
  };

  const handleDeleteProduct = async (productId) => {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: 'Do you want to delete this product?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No',
    });

    if (result.isConfirmed) {
      try {
        await dispatch(deleteProduct(productId)).unwrap();
        Swal.fire('Deleted!', 'Product has been deleted.', 'success');
      } catch (error) {
        Swal.fire('Error', error.message, 'error');
      }
    }
  };

  
  const handleResetFilters = () => {
    setFilters({
      brand: '',
      category: '',
      searchValue: '',
      userType: '',
      status: '',
      vendorNew4Days: false,
      minPrice: '', 
      maxPrice: '', 
    });
  };

  const handlePageChange = (page) => {
    console.log('Changing page to:', page);
    dispatch(fetchProducts({ ...filters, page }));
  };

  return (
    <>
      <div className="content container-fluid px-12">
        <div className="mb-3">
          <h2 className="h1 mb-0 text-capitalize d-flex gap-2">
            <img src="/inhouse-product-list.png" alt="In House Product List" />
            {initialTitle}
            <span className="badge badge-soft-dark radius-50 fz-14 ml-1">{results}</span>
          </h2>
        </div>

        {categories.length > 0 && brands.length > 0 && (
          <FilterForm
            filters={filters}
            onInputChange={handleInputChange}
            onReset={handleResetFilters}
            categories={categories}
            brands={brands}
          />
        )}
        
        {loading && <LoadingSpinner />}

        {/* Lazy load ProductTable component */}
        <div className="product-table-container">
          {error ? (
            <div>{typeof error === 'object' && error !== null ? JSON.stringify(error) : error}</div>
          ) : (
            <Suspense fallback={<LoadingSpinner />}>
              {console.log("product data==========",products)}
              <ProductTable
                products={products}
                onToggleFeatured={handleToggleFeatured}
                onUpdateStatus={handleUpdateStatus}
                onDeleteProduct={handleDeleteProduct}
                results={results}
                onPageChange={handlePageChange}
              />
            </Suspense>
          )}
        </div>
      </div>
    </>
  );
};

export default InHouseProductList;
