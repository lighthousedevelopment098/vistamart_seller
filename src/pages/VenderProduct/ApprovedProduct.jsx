

// import React, { useState, useEffect } from 'react';
// import { FiSearch, FiEdit, FiTrash, FiEye } from 'react-icons/fi';
// import Swal from 'sweetalert2';
// import { Link } from 'react-router-dom';
// import {useAuth} from '../../components/context/AuthContext.jsx'
// const ApprovedProduct = () => {
//   const { user } = useAuth();
//   const [filters, setFilters] = useState({
//     brand: '',
//     category: '',
//     searchValue: '',
//   });
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await fetch(`http://localhost:3000/api/products/vendor/${user._id}/approved`);
//         if (!response.ok) throw new Error('Failed to fetch data');
//         const data = await response.json();
//       // console.log("dataaaaaaaaaaaa", data)
//         setProducts(data);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   const handleInputChange = (e) => {
//     setFilters({
//       ...filters,
//       [e.target.name]: e.target.value,
//     });
//   };


 
//   const toggleFeatured = async (product) => {
//     const result = await Swal.fire({
//       title: 'Are you sure?',
//       text: `Do you want to ${product.status ? 'approved' : 'pending'} this product ?`,
//       icon: 'warning',
//       showCancelButton: true,
//       confirmButtonText: 'Yes',
//       cancelButtonText: 'No',
//     });
  
//     if (result.isConfirmed) {
//       try {
//         const response = await fetch(`http://localhost:3000/api/products/${product._id}/status`, {
//           method: 'PUT',
//           headers: { 'Content-Type': 'application/json' },
//           body: JSON.stringify({ status: !product.status }),
//         });
  
//         if (!response.ok) throw new Error('Failed to update Product status');
//         const updatedProduct = await response.json();
        
//         // Update the state with the new featured status
//         setProducts((prev) => prev.map((p) => (p._id === product._id ? updatedProduct : p)));
//         Swal.fire('Success', 'Product status updated successfully!', 'success');
//       } catch (error) {
//         Swal.fire('Error', error.message, 'error');
//       }
//     }
//   };
  

//   const deleteProduct = async (productId) => {
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
//         const response = await fetch(`http://localhost:3000/api/products/${productId}`, {
//           method: 'DELETE',
//         });

//         if (!response.ok) throw new Error('Failed to delete product');
//         setProducts((prev) => prev.filter((p) => p._id !== productId));
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
//           In House Product List
//           <span className="badge badge-soft-dark radius-50 fz-14 ml-1">
//             {/* {products.length} */}  6
//             </span>
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
//                   <select name="brand" className="form-control" onChange={handleInputChange}>
//                     <option value="">All Brands</option>
//                     {/* Add more options dynamically */}
//                   </select>
//                 </div>
//               </div>
//               <div className="col-sm-6 col-lg-3 col-xl-3">
//                 <div className="form-group">
//                   <label className="title-color" htmlFor="category">Category</label>
//                   <select name="category" className="form-control" onChange={handleInputChange}>
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
//                   <button type="button" className="btn btn-secondary px-5" onClick={() => setFilters({ brand: '', category: '', searchValue: '' })}>
//                     Reset
//                   </button>
//                   <button type="submit" className="btn btn--secondary px-5">Show data</button>
//                 </div>
//               </div>
//             </div>
//           </form>
//         </div>
//       </div>

//       <div className="row mt-20">
//         <div className="col-md-12">
//           <div className="card">
//             <div className="px-3 py-4">
//               <div className="row align-items-center">
//                 <div className="col-lg-4">
//                   <form onSubmit={(e) => e.preventDefault()}>
//                     <div className="input-group input-group-custom input-group-merge">
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
//                     <th className="text-center">Verify Status</th>
//                     <th className="text-center">Active status</th>
//                     <th className="text-center">Action</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {products.map((product, index) => (

//                     <tr key={product.id}>
//                          {console.log("product=============", product)}
//                       <th scope="row">{index + 1}</th>
//                       <td>
//                         <a href="#" className="media align-items-center gap-2">
//                           <img src={`http://localhost:3000/${product.thumbnail}`} className="avatar border" alt={product.name} />
//                           <span className="hover-c1">{product.name}</span>
//                         </a>
//                       </td>
//                       <td className="text-center">{product.productType}</td>
//                       <td className="text-center">PKR{product.price}</td>
                    
//                       <td>
//                         <span className={`badge bg-${product.status === 'approved'?'green-300 text-white' : 'red-300 text-white'} radius-50 fz-14`}>
//                           {product.status}
//                         </span>
//                       </td>
//                       {/* <td className="text-center">
//                         <label className="switcher mx-auto">
//                           <input
//                             type="checkbox"
//                             className="switcher_input"
//                             checked={product.active}
//                             readOnly
//                           />
//                           <span className="switcher_control" />
//                         </label>
//                       </td> */}
//                         <td className="text-center">
//                         <label className="switcher mx-auto">
//                           <input
//                             type="checkbox"
//                             className="switcher_input"
//                             checked={product.status}
//                             onChange={() => toggleFeatured(product)}
//                           />
//                           <span className="switcher_control" />
//                         </label>
//                       </td>
//                       <td className="text-center">
//                         <Link to={`/products/${product._id}/edit`} className="btn btn-icon btn-circle btn-warning">
//                           <FiEdit />
//                         </Link>
//                         <button
//                           className="btn btn-icon btn-circle btn-danger"
//                           onClick={() => deleteProduct(product._id)}
//                         >
//                           <FiTrash />
//                         </button>
//                         <Link to={`/products/${product._id}`} className="btn btn-icon btn-circle btn-info">
//                           <FiEye />
//                         </Link>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//               {products.length === 0 && (
//                 <div className="text-center py-3">No products found</div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ApprovedProduct;


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
const ApprovedProduct = () => {
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
          Pending Product List
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
                        className="form-control outline-none hover:border-primary"
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
                    <th className="text-center">Status</th>
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
                            <span className="bg-green-500 text-white  p-2 rounded ">Active</span> : 
                            <span className="badge bg-danger">Inactive</span>
                          }
                        </td>
                       <td className="text-center">
                         <label className="switcher mx-auto">
                           <input
                             type="checkbox"
                             className="switcher_input"
                             checked={product.active}
                             readOnly
                           />
                           <span className="switcher_control" />
                         </label>
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

export default ApprovedProduct;
