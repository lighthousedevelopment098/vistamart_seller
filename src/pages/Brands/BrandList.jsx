import React, { useState } from "react";

import { FaChevronDown } from "react-icons/fa";
import { FiSearch, FiEdit, FiTrash } from "react-icons/fi"; // Importing icons
import { CiImport } from "react-icons/ci";
import { Link } from "react-router-dom";
const BrandList = () => {
  const list = [
    {
      id: 27,
      name: "Computer, Office & Security",
      img: "https://6valley.6amtech.com/storage/app/public/category/2023-06-13-64881969b0222.png",
      priority: 3,
    },
    {
      id: 26,
      name: "Mobile Accessories",
      img: "https://6valley.6amtech.com/storage/app/public/category/2023-06-13-64881b1462dd9.png",
      priority: 4,
    },
    {
      id: 25,
      name: "Beauty, Health & Hair",
      img: "https://6valley.6amtech.com/storage/app/public/category/2023-06-13-64881a1265b65.png",
      priority: 5,
    },
    {
      id: 24,
      name: "Jewelry & Watches",
      img: "https://6valley.6amtech.com/storage/app/public/category/2023-06-13-6488655ea7f52.png",
      priority: 6,
    },
    { id: 16, name: "ebook", priority: 7 },
    {
      id: 15,
      name: "Women's fashion",
      priority: 8,
      img: "https://6valley.6amtech.com/storage/app/public/category/2023-06-13-64881db930473.png",
    },
    {
      id: 14,
      name: "Outdoor Fun & Sports",
      priority: 9,
      img: "https://6valley.6amtech.com/storage/app/public/category/2023-06-13-64881db930473.png",
    },
    {
      id: 13,
      name: "Men's fashion",
      priority: 10,
      img: "https://6valley.6amtech.com/storage/app/public/category/2023-06-13-64881db930473.png",
    },
    {
      id: 12,
      name: "Toys, Kids & Babies",
      priority: 5,
      img: "https://6valley.6amtech.com/storage/app/public/category/2023-06-13-64881db930473.png",
    },
    {
      id: 11,
      name: "Home Improvement & Tools",
      priority: 5,
      img: "https://6valley.6amtech.com/storage/app/public/category/2023-06-13-64881db930473.png",
    },
  ];
  const staticProducts = [
    {
      id: 1,
      name: "Product A",
      image: "https://via.placeholder.com/50",
      type: "Electronics",
      price: 100,
      featured: true,
      active: true,
    },
    {
      id: 2,
      name: "Product B",
      image: "https://via.placeholder.com/50",
      type: "Furniture",
      price: 200,
      featured: false,
      active: false,
    },
    {
      id: 3,
      name: "Product C",
      image: "https://via.placeholder.com/50",
      type: "Clothing",
      price: 50,
      featured: true,
      active: true,
    },
    {
      id: 4,
      name: "Product D",
      image: "https://via.placeholder.com/50",
      type: "Clothing",
      price: 50,
      featured: true,
      active: true,
    },
    {
      id: 5,
      name: "Product E",
      image:
        "https://th.bing.com/th/id/OIP.yuIhGQGVmD9pCQd22TKOWAHaHd?rs=1&pid=ImgDetMain",
      type: "Clothing",
      price: 50,
      featured: true,
      active: true,
    },
    {
      id: 6,
      name: "Product F",
      image: "https://via.placeholder.com/50",
      type: "Clothing",
      price: 50,
      featured: true,
      active: true,
    },
    {
      id: 7,
      name: "Product G",
      image: "https://via.placeholder.com/50",
      type: "Clothing",
      price: 50,
      featured: true,
      active: true,
    },
    // Add more products as needed
  ];

  // State to manage form inputs and filtered products
  const [filters, setFilters] = useState({
    brand: "",
    category: "",
    subCategory: "",
    subSubCategory: "",
    searchValue: "",
  });

  const [products, setProducts] = useState(staticProducts);

  const handleInputChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Apply filtering logic
    const filteredProducts = staticProducts.filter((product) => {
      return (
        (filters.searchValue === "" ||
          product.name
            .toLowerCase()
            .includes(filters.searchValue.toLowerCase())) &&
        (filters.category === "" || product.type === filters.category)
      );
    });
    setProducts(filteredProducts);
  };

  const handleReset = () => {
    setFilters({
      brand: "",
      category: "",
      subCategory: "",
      subSubCategory: "",
      searchValue: "",
    });
    setProducts(staticProducts);
  };

  return (
    <div className="row mt-3 bg-[#F9F9FB]  px-5 py-5 w-[100%]">
      <div className="col-md-12">
        <div className="font-bold pb-4 text-[1.3rem] flex gap-2 items-center">
          <img
            src="https://6valley.6amtech.com/public/assets/back-end/img/brand.png"
            alt=""
            className="w-7 h-7"
          />
          <h1>BrandList</h1>
          <span className="badge badge-soft-dark radius-50 fz-14 ml-1">
            {products.length}
          </span>
        </div>
        <div className="card">
          <div className="d-flex justify-content-between align-items-center px-5 py-4">
            <form onSubmit={handleSearchSubmit}>
              <div className="input-group input-group-custom input-group-merge border-green-400">
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
                <button
                  type="submit"
                  className="btn btn--success bg-[#01cd56] text-white border-[#01cd56] "
                >
                  Search
                </button>
              </div>
            </form>

            <button
              type="button"
              className="  flex gap-2 items-center justify-center border-green-500 border text-white rounded px-3 py-2"
            >
              {" "}
              <CiImport />
              {/* <FiDownload /> Export <FiChevronDown /> */}
              Export
              <FaChevronDown />
            </button>
          </div>
          <div className="table-responsive">
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                <thead className="bg-green-400 text-white">
                  <tr>
                    <th className="px-4 py-2">SL</th>
                    <th className="px-4 py-2">Brand Logo</th>
                    <th className="px-4 py-2 text-center">Name</th>

                    <th className="px-4 py-2 text-center">Total Product</th>
                    <th className="px-4 py-2 text-center">Total Order</th>
                    <th className="px-4 py-2 text-center">Status</th>
                    <th className="px-4 py-2 text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {list.map((product, index) => (
                    <tr key={product.id} className=" hover:bg-gray-100">
                      <td className="p-10">{index + 1}</td>
                      <td className="px-4 py-2">
                        <a href="#" className="flex items-center gap-2">
                          <img src={product.img} alt="" className="h-16 w-16" />
                          {/* <img
                          src="https://th.bing.com/th/id/OIP.yuIhGQGVmD9pCQd22TKOWAHaHd?rs=1&pid=ImgDetMain"
                          className="w-16 h-16 rounded-lg border"
                          alt={product.name}
                        /> */}
                          {/* <span className="hover:text-blue-500">
                          {product.name}
                        </span> */}
                        </a>
                      </td>
                      <td className="px-4 py-2 text-center text-[.9rem]">
                        {product.name}
                      </td>
                      <td className="px-4 py-2 text-center">
                        {product.priority}
                      </td>
                      <td className="px-4 py-2 text-center">
                        {product.priority}
                      </td>
                      <td className="px-4 py-2 text-center">
                        <form>
                          <label className="switch flex justify-center items-center">
                            <input
                              type="checkbox"
                              className=""
                              name="featured"
                              checked={product.featured}
                              readOnly
                            />
                            <span
                              className={`slider ${
                                list.name ? "bg-green-4000" : "bg-gray-300"
                              }`}
                            />
                          </label>
                        </form>
                      </td>
                      <td className="px-4 py-2 text-center">
                        <div className="flex justify-center gap-2">
                          <Link to='/brandupdate'
                            type="button"
                            className="btn btn-outline-primary btn-sm text-blue-500 border-blue-500"
                          >
                            <FiEdit />
                          </Link>
                          <button
                            type="button"
                            className="btn btn-outline-danger btn-sm text-pink-500 border-pink-500"
                          >
                            <FiTrash />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="page-area">
            <nav aria-label="Page navigation">
              <ul className="pagination flex gap-2">
                <li className="page-item">
                  <button className="page-link">
                    {/* <FiChevronLeft /> Prev */}
                    Prev
                  </button>
                </li>
                <li className="page-item active">
                  <button className="page-link">1</button>
                </li>
                <li className="page-item">
                  <button className="page-link">2</button>
                </li>
                <li className="page-item">
                  <button className="page-link">3</button>
                </li>
                <li className="page-item">
                  <button className="page-link">
                    {/* Next <FiChevronRight /> */}
                    Next
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandList;
