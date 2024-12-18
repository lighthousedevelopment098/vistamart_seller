


// import React, { useState, useEffect } from "react";
// import FileUpload from "../../pages/In_House_Product/AddProduct/addProduct/addProductFormComponent/imageFileUpload";
// const PreviewImage = ({ image, altText }) => {
//   const [previewSrc, setPreviewSrc] = useState(
//     "https://6valley.6amtech.com/public/assets/back-end/img/400x400/img2.jpg"
//   );
  

//   useEffect(() => {
//     if (image) {
//       setPreviewSrc(image); // Directly set the image URL or base64 string
//     }

//     return () => {
//       // Revoke URL if it was generated by createObjectURL
//       if (image && typeof image === "object") {
//         URL.revokeObjectURL(previewSrc);
//       }
//     };
//   }, [image]);

//   return (
//     <div className="form-group">
//       <div className="d-flex justify-content-center">
//         <img className="upload-img-view" src={previewSrc} alt={altText || "Preview"} />
//       </div>
//     </div>
//   );
// };

// export default PreviewImage;


import React, { useState, useEffect } from "react";

const PreviewImage = ({ image, altText }) => {
  const [previewSrc, setPreviewSrc] = useState(
    "https://6valley.6amtech.com/public/assets/back-end/img/400x400/img2.jpg"
  );

  useEffect(() => {
    if (image) {
      setPreviewSrc(image); // Update preview with the provided image
    }

    return () => {
      // Clean up the object URL when the component unmounts
      if (image && typeof image === "object") {
        URL.revokeObjectURL(image); // This ensures the created object URL is properly revoked
      }
    };
  }, [image]); // Trigger this effect when `image` prop changes

  return (
    <div className="form-group">
      <div className="d-flex justify-content-center">
        <img className="upload-img-view" src={previewSrc} alt={altText || "Preview"} />
      </div>
    </div>
  );
};

export default PreviewImage;

