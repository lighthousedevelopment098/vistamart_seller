import React from "react";
// import { IoPerson } from "react-icons/io5";
import { IoMdPerson } from "react-icons/io";
const SeoSection = () => {
  const img =
    "https://6valley.6amtech.com/public/assets/back-end/img/info-circle.svg";
  return (
    <div className="border border-gray-300 shadow hover:shadow-md bg-white mt-5 rounded px-4 mx-4 py-3">
      <div className="flex items-center gap-2">
        <IoMdPerson className="text-[1rem] " />{" "}
        <h1 className="text-[1rem] font-bold ">Seo Section</h1>
      </div>
      <div className="grid grid-cols-10 gap-5">
        <div className=" col-span-7">
          <label htmlFor="" className="flex items-center gap-2 pt-4">
            Meta Title{" "}
            <span>
              <img
                src="https://6valley.6amtech.com/public/assets/back-end/img/info-circle.svg"
                alt=""
              />
            </span>
          </label>
          <input
            type="text"
            placeholder="Meta Title"
            className="border border-gray-500 w-full rounded px-4 py-2"
          />
          <label htmlFor="" className="flex items-center gap-2 pt-4">
            Meta Description{" "}
            <span>
              <img
                src="https://6valley.6amtech.com/public/assets/back-end/img/info-circle.svg"
                alt=""
              />
            </span>
          </label>
          <textarea
            name=""
            rows={5}
            cols={75}
            id=""
            className="border border-gray-400 rounded px-4 py-2"
          ></textarea>
        </div>

        <div className="col-span-3">
          <div>
            <label htmlFor="" className="flex items-center gap-3">
              Meta Image <span className="text-blue-500">(Ratio 2:1) </span>{" "}
              <span>
                <img
                  src="https://6valley.6amtech.com/public/assets/back-end/img/info-circle.svg"
                  alt=""
                />
              </span>
            </label>
            <div className="border-2 items-center flex justify-center flex-col border-dashed border-gray-200 p-4">
              <img
                src="https://6valley.6amtech.com/public/assets/back-end/img/icons/product-upload-icon.svg"
                alt=""
              />
              <h1 className="text-md text-gray-500 font-bold">Upload Image</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-5 w-[90%] px-5 py-3">
        <div className="col-span-4 bg-white shadow rounded border border-gray-700 px-5 py-3">
          <div className=" flex items-center justify-between">
            <label className="flex items-center pt-2 font-bold">
              <input type="radio" name="indexing" className="mr-2 " />
              Index
            </label>
            <label className="flex items-center mt-2">
              <input type="radio" name="indexing" className="mr-2" />
              No Index
            </label>
          </div>{" "}
          <br />
          <div className="">
            <div className="flex justify-between items-center text-[.7rem]">
              <label className="flex items-center font-bold">
                <input type="checkbox" className="mr-2" />
                No Follow
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                No Archive
              </label>
            </div>{" "}
            <br />
            <div className="flex justify-between items-center text-[.6rem]">
              <label className="flex items-center font-bold">
                <input type="checkbox" className="mr-2" />
                No Image Index
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                No Snippet
              </label>{" "}
            </div>
          </div>
        </div>
        <div className="col-span-6 bg-white shadow rounded border border-gray-700 px-5 py-3">
          <div className="">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Max Snippet
            </label>
            <input
              type="number"
              className="ml-2 border p-1 rounded mb-4"
              defaultValue="-1"
            />
            <label className="flex items-center text-[.7rem]">
              <input type="checkbox" className="mr-2" />
              Max Video Preview
            </label>
            <input
              type="number"
              className="ml-2 border p-1 rounded mb-3"
              defaultValue="-1"
            />
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Max Image Preview
              <select className="ml-2 border p-1 rounded bg-white">
                <option>Large</option>
                <option>Medium</option>
                <option>Small</option>
              </select>
            </label>
          </div>
        </div>
      </div>
      <div className="flex justify-end items-center gap-4">
        <button className="px-4 py-2 bg-slate-400 rounded hover:bg-gray-500">
          Rest
        </button>
        <button
          className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-400"
          style={{ color: "white" }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default SeoSection;
