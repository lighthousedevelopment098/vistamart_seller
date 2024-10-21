

import React, { useState } from 'react';
import { AiOutlineDelete } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../../../../components/FormInput/imagepreview.css";
import FileUpload from './imageFileUpload';

const ProductImageWrapper = ({ thumbnail, setThumbnail, images, setImages }) => {
  const [additionalImages, setAdditionalImages] = useState([]);

    const validateFile = (file) => {
    const allowedTypes = [
      "image/jpeg",
      "image/png",
      "image/webp",
      "image/gif",
      "image/bmp",
      "image/tiff",
    ];
    const maxSize = 2 * 1024 * 1024; // 2 MB

    if (!allowedTypes.includes(file.type)) {
      toast.error(
        "Invalid file format. Please upload a JPG, PNG, WEBP, GIF, BMP, or TIFF image."
      );
      return false;
    }

    if (file.size > maxSize) {
      toast.error("File size exceeds 2 MB. Please upload a smaller image.");
      return false;
    }

    return true;
  };

  const handleThumbnailChange = (e) => {
    const file = e.target.files[0];
    if (file && validateFile(file)) {
      const reader = new FileReader();
      reader.onloadend = () => {
        console.log("Thumbnail (base64):", reader.result);
        setThumbnail(reader.result); // Passes thumbnail up to parent
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAdditionalImageChange = (e, index) => {
    const file = e.target.files[0];
    if (file && validateFile(file)) {
      const reader = new FileReader();
      reader.onloadend = () => {
        console.log(`Additional Image ${index + 1} (base64):`, reader.result);
        const newImages = [...additionalImages];
        newImages[index] = reader.result; // Set additional image as base64
        setAdditionalImages(newImages);
        setImages((prevImages) => {
          const updatedImages = [...prevImages];
          updatedImages[index] = reader.result; // Update images in parent state
          return updatedImages;
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDeleteImage = (index) => {
    const updatedImages = additionalImages.filter((_, idx) => idx !== index);
    setAdditionalImages(updatedImages);
    setImages(updatedImages); // Ensure parent state is updated
  };

  return (
    <div className="product-image-wrapper mt-6 mb-3">
      <ToastContainer />
      {/* Thumbnail Section */}
      <FileUpload
        label="Product Thumbnail"
        ratio="1:1 (500 x 500 px)"
        image={thumbnail}
        onChange={handleThumbnailChange}
        onDelete={() => setThumbnail(null)}
        isThumbnail
      />
      {/* Additional Images Section */}
      <div className="row g-2">
        {additionalImages.map((img, idx) => (
          <FileUpload
            key={idx}
            label={`Additional Image ${idx + 1}`}
            image={img}
            onChange={(e) => handleAdditionalImageChange(e, idx)}
            onDelete={() => handleDeleteImage(idx)}
          />
        ))}
        <FileUpload
          label="Upload Additional Image"
          ratio="1:1 (500 x 500 px)"
          onChange={(e) =>
            handleAdditionalImageChange(e, additionalImages.length)
          }
        />
      </div>
    </div>
  );
};

export default ProductImageWrapper;
