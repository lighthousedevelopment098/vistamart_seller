// import React from "react";
// import { CiImport } from "react-icons/ci";
// import { FaChevronDown, FaDownload, FaSearch } from "react-icons/fa";
// import { FiSearch } from "react-icons/fi";

// const DeniedProduct = () => {
//   return (
//     <div className="bg-[#F9F9FB]  px-5 py-5 w-[100%]">
//       <div className="font-bold text-[1.3rem] flex gap-2 items-center mb-5">
//         <img
//           src="https://6valley.6amtech.com/public/assets/back-end/img/inhouse-product-list.png"
//           alt=""
//           className="w-7 h-7"
//         />
//         <h1>Denied Product List</h1>
//       </div>
//       <div className=" bg-white rounded-lg px-5 py-5">
//         <h1 className="text-md font-bold">Filter Products</h1>
//         <div>
//           <form
//             action="/"
//             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
//           >
//             <div className="flex flex-col gap-3 pt-5">
//               <label htmlFor="brand">Brand</label>
//               <select
//                 name="brand"
//                 id="brand"
//                 className="px-5 py-3 border bg-white border-gray-200 rounded-md focus:outline-none focus:border-blue-500"
//               >
//                 <option value="" disabled selected>
//                   Brands *
//                 </option>
//                 <option value="1">Iro</option>
//                 <option value="2">Aisro</option>
//                 <option value="3">Tero</option>
//                 <option value="4">Perrta</option>
//                 <option value="5">5</option>
//                 <option value="6">6</option>
//                 <option value="7">7</option>
//                 <option value="8">8</option>
//                 <option value="9">9</option>
//                 <option value="10">10</option>
//               </select>
//             </div>
//             <div className="flex flex-col gap-3 pt-5">
//               <label htmlFor="category">Category</label>
//               <select
//                 name="category"
//                 id="category"
//                 className="px-5 py-3 border bg-white border-gray-200 rounded-md focus:outline-none focus:border-blue-500"
//               >
//                 <option value="" disabled selected>
//                   Select Category *
//                 </option>
//                 <option value="1">Toys Kid</option>
//                 <option value="2">Home Product</option>
//                 <option value="3">School Product</option>
//                 <option value="4">4</option>
//                 <option value="5">5</option>
//                 <option value="6">6</option>
//                 <option value="7">7</option>
//                 <option value="8">8</option>
//                 <option value="9">9</option>
//                 <option value="10">10</option>
//               </select>
//             </div>
//             <div className="flex flex-col gap-3 pt-5">
//               <label htmlFor="sub-category">Sub Category</label>
//               <select
//                 name="sub-category"
//                 id="sub-category"
//                 className="px-5 py-3 border bg-white border-gray-200 rounded-md focus:outline-none focus:border-blue-500"
//               >
//                 <option value="" disabled selected>
//                   Select Sub Category *
//                 </option>
//                 <option value="1">Toys Kid</option>
//                 <option value="2">Home Product</option>
//                 <option value="3">School Product</option>
//                 <option value="4">4</option>
//                 <option value="5">5</option>
//                 <option value="6">6</option>
//                 <option value="7">7</option>
//                 <option value="8">8</option>
//                 <option value="9">9</option>
//                 <option value="10">10</option>
//               </select>
//             </div>
//             <div className="flex flex-col gap-3 pt-5">
//               <label htmlFor="sub-sub-category">Sub SubCategory</label>
//               <select
//                 name="sub-sub-category"
//                 id="sub-sub-category"
//                 className="px-5 py-3 border bg-white border-gray-200 rounded-md focus:outline-none focus:border-blue-500"
//               >
//                 <option value="" disabled selected>
//                   Select Sub Sub Category *
//                 </option>
//                 <option value="1">Toys Kid</option>
//                 <option value="2">Home Product</option>
//                 <option value="3">School Product</option>
//                 <option value="4">4</option>
//                 <option value="5">5</option>
//                 <option value="6">6</option>
//                 <option value="7">7</option>
//                 <option value="8">8</option>
//                 <option value="9">9</option>
//                 <option value="10">10</option>
//               </select>
//             </div>
//             <div className="flex justify-end items-end gap-3 pt-8 col-span-full">
//               <button className="bg-[#EDEDED] rounded-md px-4 py-2 border border-gray-300">
//                 Reset
//               </button>
//               <button className="rounded-md px-4 btn   bg-[#A1CB46] text-white hover:bg-[#7e9f37] border border-gray-300">
//                 Submit
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//       <div className="row mt-5">
//         <div className="col-md-12">
//           <div className="card">
//             <div className="px-3 py-4 light-bg">
//               <div className="d-flex flex-wrap justify-between gap-3 align-items-center">
//                 <form
//                   action="https://6valley.6amtech.com/admin/coupon/add"
//                   method="GET"
//                 >
//                   <div
//                     className="input-group input-group-merge input-group-custom"
//                     style={{ border: "1px solid green" }}
//                   >
//                     <div className="input-group-prepend">
//                       <div className="input-group-text">
//                         <FaSearch />
//                       </div>
//                     </div>
//                     <input
//                       id="datatableSearch_"
//                       type="search"
//                       name="searchValue"
//                       className="form-control"
//                       placeholder="Search by Title or Code or Discount Type"
//                       required
//                     />
//                     <button
//                       type="submit"
//                       className="btn px-4 py-2 bg-[#A1CB46] text-white hover:bg-[#7e9f37]"
//                       style={{ display: "flex", background: "#A1CB46" }}
//                     >
//                       Search
//                     </button>
//                   </div>
//                 </form>
//                 <div className="flex flex-wrap gap-3 w-full md:w-auto">
//                   <button
//                     type="button"
//                     className="flex items-center px-4 py-2 bg-[#A1CB46] rounded text-white hover:bg-[#7e9f37] gap-2  justify-center"
//                     data-toggle="dropdown"
//                   >
//                     <FaDownload /> Export
//                   </button>
//                 </div>
//               </div>
//             </div>
//             <div className="table-responsive h-[70vh]">
//               <div className="overflow-x-auto">
//                 <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
//                   <thead className="bg-blue-50 text-blue-900">
//                     <tr>
//                       <th className="px-4 py-2">SL</th>
//                       <th className="px-4 py-2 text-center"> Product Name</th>

//                       <th className="px-4 py-2 text-center">Product Type</th>

//                       <th className="px-4 py-2 text-center">Unit Price</th>

//                       <th className="px-4 py-2 text-center">
//                         Show As Featured
//                       </th>
//                       <th className="px-4 py-2 text-center">Active Status</th>
//                       <th className="px-4 py-2 text-center">Action</th>
//                     </tr>
//                   </thead>
//                 </table>
//                 <div className="text-center h-70 pt-10 w-100 flex flex-column justify-content-center align-items-center">
//                   <img
//                     src="https://6valley.6amtech.com/public/assets/back-end/img/empty-state-icon/default.png"
//                     alt=""
//                     className="w-[30vh] h-[20vh]"
//                   />
//                   <h3>No Product Found</h3>
//                 </div>
//               </div>
//             </div>

//             <div className="page-area">
//               <nav aria-label="Page navigation">
//                 <ul className="pagination flex gap-2">
//                   <li className="page-item">
//                     <button className="page-link">
//                       {/* <FiChevronLeft /> Prev */}
//                       Prev
//                     </button>
//                   </li>
//                   <li className="page-item active">
//                     <button className="page-link">1</button>
//                   </li>
//                   <li className="page-item">
//                     <button className="page-link">2</button>
//                   </li>
//                   <li className="page-item">
//                     <button className="page-link">3</button>
//                   </li>
//                   <li className="page-item">
//                     <button className="page-link">
//                       {/* Next <FiChevronRight /> */}
//                       Next
//                     </button>
//                   </li>
//                 </ul>
//               </nav>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DeniedProduct;





import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FiSearch, FiEdit, FiTrash, FiEye } from 'react-icons/fi';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import {
  fetchProductsByStatus,
  updateProductStatus,
  deleteProduct,
} from '../../components/redux/product/productSlice'; // Adjust the import path as necessary
const DeniedProduct = () => {
const dispatch = useDispatch();
const { products, loading, error } = useSelector((state) => state.product);

const { user } = useSelector(state => state.auth);
 const userId = user._id
  const [filters, setFilters] = React.useState({
    brand: '',
    category: '',
    searchValue: '',
  });

  useEffect(() => {
    console.log('User ID:', userId);
  }, [userId]);
  useEffect(() => {
    if (userId) {
      dispatch(fetchProductsByStatus(userId));
    }
  }, [dispatch, userId]);

  const handleInputChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  const toggleFeatured = async (product) => {
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
        await dispatch(updateProductStatus({ productId: product._id, status: !product.isFeatured }));
        Swal.fire('Success', 'Product status updated successfully!', 'success');
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
        await dispatch(deleteProduct(productId));
        Swal.fire('Deleted!', 'Product has been deleted.', 'success');
      } catch (error) {
        Swal.fire('Error', error.message, 'error');
      }
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="content container-fluid">
      <div className="mb-3">
        <h2 className="h1 mb-0 text-capitalize d-flex gap-2">
          <img src="https://6valley.6amtech.com/public/assets/back-end/img/inhouse-product-list.png" alt="In House Product List" />
          Denied Product List
          <span className="badge badge-soft-dark radius-50 fz-14 ml-1">
            {products.length}
          </span>
        </h2>
      </div>
      <div className="card">
        <div className="card-body">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="row gx-2">
              <div className="col-12">
                <h4 className="mb-3">Filter Products</h4>
              </div>
              <div className="col-sm-6 col-lg-3 col-xl-3">
                <div className="form-group">
                  <label className="title-color" htmlFor="brand">Brand</label>
                  <select name="brand" className="form-control" onChange={handleInputChange}>
                    <option value="">All Brands</option>
                    {/* Add more options dynamically */}
                  </select>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3 col-xl-3">
                <div className="form-group">
                  <label className="title-color" htmlFor="category">Category</label>
                  <select name="category" className="form-control" onChange={handleInputChange}>
                    <option value="">Select category</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Furniture">Furniture</option>
                    <option value="Clothing">Clothing</option>
                    {/* Add more options dynamically */}
                  </select>
                </div>
              </div>
              <div className="col-12">
                <div className="d-flex gap-3 justify-content-end">
                  <button type="button" className="btn btn-secondary px-5" onClick={() => setFilters({ brand: '', category: '', searchValue: '' })}>
                    Reset
                  </button>
                  <button type="submit" className="btn btn--secondary px-5">Show data</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="row mt-20">
        <div className="col-md-12">
          <div className="card">
            <div className="px-3 py-4">
              <div className="row align-items-center">
                <div className="col-lg-4">
                  <form onSubmit={(e) => e.preventDefault()}>
                    <div className="input-group input-group-custom input-group-merge">
                      <div className="input-group-prepend">
                        <div className="input-group-text">
                          <FiSearch />
                        </div>
                      </div>
                      <input
                        type="search"
                        name="searchValue"
                        className="form-control"
                        placeholder="Search by Product Name"
                        value={filters.searchValue}
                        onChange={handleInputChange}
                      />
                      <button type="submit" className="btn" style={{ background: "lightgreen" }}>
                        Search
                      </button>
                    </div>
                  </form>
                </div>
                <div className="col-lg-8 mt-3 mt-lg-0 d-flex flex-wrap gap-3 justify-content-lg-end">
                  <Link to='/inhouselimitedproduct' className="btn btn-info border-green-400">
                    <span className="text">Limited Stocks</span>
                  </Link>
                  <Link to='/inhouseaddproduct' className="btn bg-green-400 text-white">
                    <span className="text">Add new product</span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="table-responsive">
              <table className="table table-hover table-borderless table-thead-bordered table-nowrap table-align-middle card-table w-100 text-start">
                <thead className="thead-light thead-50 text-capitalize">
                  <tr>
                    <th>SL</th>
                    <th>Product Name</th>
                    <th>Product Type</th>
                    <th>Unit Price</th>
                    <th className="text-center">Verify Status</th>
                        <th className="text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {products
                    .filter(product => 
                      (filters.brand === '' || product.brand === filters.brand) &&
                      (filters.category === '' || product.category === filters.category) &&
                      (filters.searchValue === '' || product.name.toLowerCase().includes(filters.searchValue.toLowerCase()))
                    )
                    .map((product, index) => (
                      <tr key={product._id}>
                        {console.log("product................",product)}
                        <td>{index + 1}</td>
                        <td>
                         <a href="#" className="media align-items-center gap-2">
                           <img src={`http://localhost:3000/${product.thumbnail}`} className="avatar border" alt={product.name} />
                           <span className="hover-c1">{product.name}</span>
                         </a>
                       </td>
                       <td className="text-center">{product.productType}</td>
                       <td className="text-center">PKR{product.price}</td>
                        <td className="text-center">
                          {product.status ? 
                            <span className=" text-yellow-500 p-1 rounded " style={{border:" 1px solid yellow"}}>{product.status}</span> : 
                            <span className="badge border-green-200">pending</span>
                          }
                        </td>
               

                        <td className="text-center">
                          <div className="d-flex justify-content-center gap-2">
                            <Link to={`/product/${product._id}`} className="btn btn-info">
                              <FiEye />
                            </Link>
                            <Link to={`/edit-product/${product._id}`} className="btn btn-warning">
                              <FiEdit />
                            </Link>
                            <button 
                              className="btn btn-danger" 
                              onClick={() => handleDeleteProduct(product._id)}
                            >
                              <FiTrash />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeniedProduct;
