

import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import {
  FiDownload,
  FiChevronDown,
  FiPlus,
  FiEdit,
  FiTrash,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi"; // Importing icons
import { CiImport } from "react-icons/ci";
import { FaChevronDown } from "react-icons/fa";

const PendingList = () => {
  const list = [
    {
      id: 27,
      name: "Computer, Office & Security",
      img: "Computer, Office & Security",
      priority: 3,
    },
    {
      id: 26,
      name: "Mobile Accessories",
      img: "Mobile Accessories",
      priority: 4,
    },
    {
      id: 25,
      name: "Beauty, Health & Hair",
      img: "Beauty, Health & Hair",
      priority: 5,
    },
    {
      id: 24,
      name: "Jewelry & Watches",
      img: "Beauty, Health & Hair",
      priority: 6,
    },
    { id: 16, name: "ebook", priority: 7 },
    {
      id: 15,
      name: "Women's fashion",
      priority: 8,
      img: "Beauty, Health & Hair",
    },
    {
      id: 14,
      name: "Outdoor Fun & Sports",
      priority: 9,
      img: "Beauty, Health & Hair",
    },
    {
      id: 13,
      name: "Men's fashion",
      priority: 10,
      img: "Beauty, Health & Hair",
    },
    {
      id: 12,
      name: "Toys, Kids & Babies",
      priority: 5,
      img: "Beauty, Health & Hair",
    },
    {
      id: 11,
      name: "Home Improvement & Tools",
      priority: 5,
      img: "Beauty, Health & Hair",
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
    <div className="bg-[#F9F9FB]  px-5 py-5 w-[100%]">
      <div className="font-bold text-[1.3rem] flex gap-2 items-center mb-5">
        <img
          src="https://6valley.6amtech.com/public/assets/back-end/img/inhouse-product-list.png"
          alt=""
          className="w-7 h-7"
        />
        <h1>Approved Product List</h1>
      </div>
      <div className="h-[50vh]  bg-white rounded-lg   px-5 py-5">
        <h1 className="text-md font-bold">Filter Products</h1>
        <div className=" ">
          {/* <div className=" flex gap-8 w-96 border-b-2 border-gray-300 pb-5 items-center ">
        <h1 className="text-blue-500 text-[1rem] font-semibold">
          English(EN)
        </h1>
        <h1 className="text-[1rem] font-semibold">Arabic(SA)</h1>
        <h1 className="text-[1rem] font-semibold">Bangla(BD)</h1>
        <h1 className="text-[1rem] font-semibold">Hindi(IN)</h1>
      </div> */}
          <form action="/" className="grid grid-cols-4 gap-5">
            <div className="flex flex-col gap-3 pt-5 ">
              <label htmlFor="priority">Brand</label>
              <select
                name="priority"
                id="priority"
                className="px-5 py-3 border pe-5 bg-white border-gray-200 rounded-md focus:outline-none focus:border-blue-500"
              >
                <option value="" disabled selected>
                  Brands *
                </option>
                <option value="1">Iro</option>
                <option value="2">Aisro</option>
                <option value="3">tero</option>
                <option value="4">perrta</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>{" "}
            </div>
            <div className="flex flex-col gap-3 pt-5 ">
              <label htmlFor="priority">Category</label>
              <select
                name="priority"
                id="priority"
                className="px-5 py-3 border pe-5 bg-white border-gray-200 rounded-md focus:outline-none focus:border-blue-500"
              >
                <option value="" disabled selected>
                  Select Category *
                </option>
                <option value="1">Toys Kid</option>
                <option value="2">Home Product</option>
                <option value="3">School Product</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>{" "}
            </div>
            <div className="flex flex-col gap-3 pt-5 ">
              <label htmlFor="priority"> Sub Category</label>
              <select
                name="priority"
                id="priority"
                className="px-5 py-3 border pe-5 bg-white border-gray-200 rounded-md focus:outline-none focus:border-blue-500"
              >
                <option value="" disabled selected>
                  Select Sub Category *
                </option>
                <option value="1">Toys Kid</option>
                <option value="2">Home Product</option>
                <option value="3">School Product</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>{" "}
            </div>
            <div className="flex flex-col gap-3 pt-5 ">
              <label htmlFor="priority">Sub SubCategory</label>
              <select
                name="priority"
                id="priority"
                className="px-5 py-3 border pe-5 bg-white border-gray-200 rounded-md focus:outline-none focus:border-blue-500"
              >
                <option value="" disabled selected>
                  Select Sub Sub Category *
                </option>
                <option value="1">Toys Kid</option>
                <option value="2">Home Product</option>
                <option value="3">School Product</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>{" "}
              <div className="flex justify-end items-end gap-3 pt-8">
                <button className="bg-[#EDEDED] rounded-md px-4 py-1 border border-gray-300">
                  Rest{" "}
                </button>
                <button className="rounded-md px-4 bg-blue-500 text-white py-1 border border-gray-300">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-12">
          <div className="card">
            <div className="d-flex justify-content-between align-items-center px-5">
              {/* <div className="flex gap-3">
            <h1 className="text-[1rem ] font-bold">Sub Category List</h1>
           
          </div> */}

              <div className="px-3 py-4 d-flex  w-100 justify-content-between gap-3 align-items-center">
                <div>
                  <form>
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
                        // value={filters.searchValue}
                        // onChange={handleInputChange}
                      />
                      <button
                        type="submit"
                        className="btn btn--primary bg-[#0177CD] text-white "
                      >
                        Search
                      </button>
                    </div>
                  </form>
                </div>
                <div>
                  <button
                    type="button"
                    className="  flex gap-2 items-center justify-center border-blue-500 border text-blue-300 rounded px-3 py-2"
                  >
                    {" "}
                    <CiImport />
                    {/* <FiDownload /> Export <FiChevronDown /> */}
                    Export
                    <FaChevronDown />
                  </button>
                </div>
              </div>
            </div>
            <div className="table-responsive h-[70vh]">
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                  <thead className="bg-blue-50 text-blue-900">
                    <tr>
                      <th className="px-4 py-2">SL</th>
                      <th className="px-4 py-2 text-center"> Product Name</th>

                      <th className="px-4 py-2 text-center">Product Type</th>

                      <th className="px-4 py-2 text-center">Unit Price</th>

                      <th className="px-4 py-2 text-center">
                        Show As Featured
                      </th>
                      <th className="px-4 py-2 text-center">Active Status</th>
                      <th className="px-4 py-2 text-center">Action</th>
                    </tr>
                  </thead>
                  {list.map((product, index) => (
                    <tr key={product.id} className=" hover:bg-gray-100">
                      <td className="p-8 font-semibold" key={index}>
                        {product.id}
                      </td>
                      <td className="px-4 py-2 text-center text-[.7rem] font-semibold">
                        <h1>{product.img}</h1>
                      </td>
                      <td className="px-4 py-2 text-center text-[.7rem] font-semibold">
                        {product.name}
                      </td>{" "}
                      <td className="px-4 py-2 text-center text-[.7rem] font-semibold">
                        {product.name}
                      </td>
                      <td className="px-4 py-2 text-center font-semibold">
                        ${product.priority}
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
                                list.name ? "bg-blue-500" : "bg-gray-300"
                              }`}
                            />
                          </label>
                        </form>
                      </td>
                      <td className="px-4 py-2 text-center">
                        <div className="flex justify-center gap-2">
                          <button
                            type="button"
                            className="btn btn-outline-primary btn-sm text-blue-500 border-blue-500"
                          >
                            <FiEdit />
                          </button>
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
                </table>
                {/* <div className="text-center h-70 pt-10 w-100 flex flex-column justify-content-center align-items-center">
                  <img
                    src="https://6valley.6amtech.com/public/assets/back-end/img/empty-state-icon/default.png"
                    alt=""
                    className="w-[30vh] h-[20vh]"
                  />
                  <h3>No Product Found</h3>
                </div> */}
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
  );
};

export default PendingList;
