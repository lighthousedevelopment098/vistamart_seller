import React from "react";
import { FaPerson } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";

const AddVideo = () => {
  return (
    <div className="bg-white px-5 py-3 border border-gray-400 rounded shadow hover:shadow-md mt-5">
      <div className="flex items-center gap-4 border-b-2 pt-2 border-spacing-5 border-b-shadow-lg">
        <IoPerson className="text-xl" />
        <h1 className="text-md font-bold">Product variation setup</h1>
      </div>
      <div className="pt-5">
        <label htmlFor="">
          Youtube Video Link{" "}
          <span className="text-blue-400">
            (Optional please provide embed link not direct link.)
          </span>
        </label>
        <input
          placeholder="Ex:wwwwhttps youtube.com"
          type="text"
          className="w-full border border-green-300 hover:border-blue-300 px-4 py-2 rounded"
        />
      </div>
    </div>
  );
};

export default AddVideo;
