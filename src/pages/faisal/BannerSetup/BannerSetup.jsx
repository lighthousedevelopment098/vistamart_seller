import React, { useState } from "react";
import { FaChevronDown, FaPen } from "react-icons/fa";
import './BannerSetForm.css'
import { MdDelete } from "react-icons/md";
import {
  FiSearch,
  FiDownload,
  FiChevronDown,
  FiPlus,
  FiEdit,
  FiTrash,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi"; // Importing icons
import { CiImport } from "react-icons/ci";
import { IoMdAdd } from "react-icons/io";
import { Link } from "react-router-dom";

const BannerSetup = () => {
  const list = [
    {
      id: 27,
      name: "Computer, Office & Security",
      img: "https://6valley.6amtech.com/storage/app/public/banner/2024-01-14-65a36dd06beed.webp",
      priority: 3,
    },
    {
      id: 26,
      name: "Mobile Accessories",
      img: "https://6valley.6amtech.com/storage/app/public/banner/2024-01-14-65a36d26cf15d.webp",
      priority: 4,
    },
    {
      id: 25,
      name: "Beauty, Health & Hair",
      img: "https://6valley.6amtech.com/storage/app/public/banner/2024-01-14-65a36d26cf15d.webp",
      priority: 5,
    },
    {
      id: 24,
      name: "Jewelry & Watches",
      img: "https://6valley.6amtech.com/storage/app/public/banner/2024-01-14-65a36d26cf15d.webp",
      priority: 6,
    },
    { id: 16, name: "ebook", priority: 7 },
    {
      id: 15,
      name: "Women's fashion",
      priority: 8,
      img: "https://6valley.6amtech.com/storage/app/public/banner/2024-01-14-65a36d26cf15d.webp",
    },
    {
      id: 14,
      name: "Outdoor Fun & Sports",
      priority: 9,
      img: "https://6valley.6amtech.com/storage/app/public/banner/2024-01-14-65a36d26cf15d.webp",
    },
    {
      id: 13,
      name: "Men's fashion",
      priority: 10,
      img: "https://6valley.6amtech.com/storage/app/public/banner/2024-01-14-65a36d26cf15d.webp",
    },
    {
      id: 12,
      name: "Toys, Kids & Babies",
      priority: 5,
      img: "https://6valley.6amtech.com/storage/app/public/banner/2024-01-14-65a36d26cf15d.webp",
    },
    {
      id: 11,
      name: "Home Improvement & Tools",
      priority: 5,
      img: "https://6valley.6amtech.com/storage/app/public/banner/2024-01-14-65a36d26cf15d.webp",
    },
  ];
  const staticProducts = [
    {
      id: 1,
      name: "Product A",
      image:
        "https://6valley.6amtech.com/storage/app/public/banner/2024-01-14-65a370a244906.webp",
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
    <>
      <div className="bg-[#F9F9FB]  px-5 py-5 w-[100%]">
        <div className="font-bold text-[1.3rem]  bg-[#F9F9FB] flex gap-2 items-center">
          <img
            src="https://6valley.6amtech.com/public/assets/back-end/img/banner.png"
            alt=""
            className="w-8 h-8"
          />
          <h1>
            Banner Setup{" "}
            <span className="text-xl font-weight-bold text-blue-500">
              (Default)
            </span>
          </h1>
        </div>
        <div className="row mt-8">
          <div className="col-md-12">
            <div className="card">
              <div className="d-flex justify-content-between align-items-center px-5">
                <div className="flex gap-3">
                  <h1 className="text-[1rem ] font-bold">Banner Table</h1>
                  <span className="badge badge-soft-dark radius-50 fz-14 ml-1">
                    {products.length}
                  </span>
                </div>
                <div>
                  <div className="px-3 py-4">
                    <div className="row align-items-center">
                      <div className="col-lg-12 d-flex justify-content-end gap-3 align-items-center">
                        <form onSubmit={handleSearchSubmit}>
                          <div className="flex justify-center gap-2 ">
                            <select className="form-select px-8 py-2 border border-gray-300 bg-white rounded-md text-black focus:outline-none focus:ring-1 focus:ring-blue-300">
                              <option value="edit">All</option>
                              <option value="delete">Main Banner </option>
                              <option value="delete">Main Banner </option>
                              <option value="delete">Main Banner </option>
                            </select>
                          </div>
                          {/* <input
                            type="search"
                            name="searchValue"
                            className="form-control"
                            placeholder="Search by Product Name"
                            value={filters.searchValue}
                            onChange={handleInputChange}
                          />
                          <button
                            type="submit"
                            className="btn btn--primary bg-[#0177CD] text-white "
                          >
                            Search
                          </button> */}
                        </form>
                        <button
                          type="button"
                          className="  flex gap-2 items-center justify-center bg-blue-500 border-gray-500 border text-white rounded px-4 py-2"
                        >
                          {" "}
                          {/* <FiDownload /> Export <FiChevronDown /> */}
                          Filter
                        </button>
                        <Link to='/addbannerform'
                          type="button"
                          className="  flex gap-2 items-center bg-green-500 justify-center border-green-500 border text-white rounded px-3 py-2"
                        >
                        
                          <IoMdAdd />
                          {/* <FiDownload /> Export <FiChevronDown /> */}
                          Add banner
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="table-responsive">
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                    <thead className="bg-blue-50 text-blue-900">
                      <tr>
                        <th className="px-4 py-2">ID</th>
                        <th className="px-4 py-2"> Image</th>
                        <th className="px-4 py-2 text-center">Banner Type</th>

                        <th className="px-4 py-2 text-center">PUblished</th>

                        <th className="px-4 py-2 text-center">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {list.map((product, index) => (
                        <tr key={product.id} className=" hover:bg-gray-100">
                          <td className="p-10" key={index}>
                            {product.id}
                          </td>
                          <td className="px-4 py-2">
                            <a href="#" className="flex items-center gap-2">
                              <img
                                src={product.img}
                                alt=""
                                className="h-5 w-20"
                              />
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
                                    list.name ? "bg-green-500" : "bg-gray-300"
                                  }`}
                                />
                              </label>
                            </form>
                          </td>
                          <td className="px-4 py-2 text-center">
                            <div className="flex justify-center gap-2">
                              <Link to='/bannersetupform'
                                type="button"
                                className="btn btn-outline-primary  p-2 btn-sm text-white border-green-500"
                              >
                                <FiEdit />
                              </Link>
                              <button
                                type="button"
                                className="btn btn-outline-danger p-2  btn-sm text-pink-500 border-pink-500"
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
      </div>
    </>
  );
};

export default BannerSetup;
