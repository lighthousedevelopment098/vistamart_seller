import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IoMdPerson } from "react-icons/io";
import FormInput from "../../../../../components/FormInput/FormInput";
import FormSection from "../../../../../components/FormInput/FormSection";
import FormSelect from "../../../../../components/FormInput/FormSelect";

const ProductAdditional = ({ formData = {}, handleChange }) => {
  // Update discount or discountAmount based on discountType
  useEffect(() => {
    if (formData.discountType === "percent" && formData.discountAmount !== 0) {
      handleChange({
        target: {
          name: "discountAmount",
          value: 0, // Reset discountAmount if switching to "percent"
        },
      });
    } else if (formData.discountType === "flat" && formData.discount !== 0) {
      handleChange({
        target: {
          name: "discount",
          value: 0, // Reset discount if switching to "flat"
        },
      });
    }
  }, [formData.discountType]); // Only trigger when discountType changes

  useEffect(() => {
    // Check for discount validation
    if (formData.discountType === "percent" && formData.discountAmount > 100) {
      toast.error("Discount amount cannot exceed 100%.");
    } else if (
      formData.discountType === "flat" &&
      formData.discountAmount > formData.price
    ) {
      toast.error("Discount amount cannot exceed the price.");
    }
  }, [formData.discountAmount, formData.discountType, formData.price]);

  const handleDiscountFocus = (e) => {
    // Reset discountAmount or discount to empty string when focused
    if (e.target.name === "discountAmount" && formData.discountAmount === 0) {
      handleChange({
        target: {
          name: "discountAmount",
          value: "", // Clear the input field
        },
      });
    } else if (e.target.name === "discount" && formData.discount === 0) {
      handleChange({
        target: {
          name: "discount",
          value: "", // Clear the input field
        },
      });
    }
  };

  return (
    <FormSection title="Pricing & Others" icon={<IoMdPerson />}>
      <ToastContainer />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Price */}
        <div className="flex flex-col">
          <label>Purchase Price</label>
          <FormInput
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Price"
            required
          />
        </div>

        {/* Minimum Order Quantity */}
        <div className="flex flex-col px-2">
          <label>Minimum Order Qty</label>
          <FormInput
            type="number"
            name="minimumOrderQty"
            value={formData.minimumOrderQty}
            onChange={handleChange}
            placeholder="Minimum Order Quantity"
            required
          />
        </div>

        {/* Stock */}
        <div className="flex flex-col px-2">
          <FormInput
            label="Current Stock Qty"
            name="stock"
            placeholder="Stock"
            value={formData.stock}
            onChange={handleChange}
            required
          />
        </div>

        {/* Discount Type */}
        <div className="flex flex-col px-2">
          <FormSelect
            label="Discount Type"
            name="discountType"
            value={formData.discountType}
            onChange={handleChange}
            options={[
              { value: "percent", label: "Percentage" },
              { value: "flat", label: "Flat Amount" },
            ]}
          />
        </div>

        {/* Discount Amount */}
        <div className="flex flex-col px-2">
          <label>
            Discount Amount {formData.discountType === "percent" ? "( % )" : "( Rs )"}
          </label>
          <div className="relative">
            <FormInput
              type="number"
              name="discountAmount"
              value={formData.discountAmount}
              onChange={handleChange}
              onFocus={handleDiscountFocus} // Clear on focus
              placeholder={`Discount Amount`}
              required
            />
          </div>
        </div>

        {/* Tax Amount */}
        <div className="flex flex-col px-2">
          <label>Tax Amount ( % )</label>
          <FormInput
            type="number"
            name="taxAmount"
            value={formData.taxAmount}
            onChange={handleChange}
            placeholder="Tax Amount"
          />
        </div>

        {/* Tax Included Checkbox */}
        <div className="flex flex-col px-2 mt-3">
          <label>Tax Included</label>
          <div className="flex gap-3 items-center">
            <input
              type="checkbox"
              name="taxIncluded"
              checked={formData.taxIncluded}
              onChange={handleChange}
              className="w-5 h-5"
            />
            <span className="font-medium">Include tax in price</span>
          </div>
        </div>

        {/* Shipping cost link */}
        <div className="flex flex-col px-2">
          <label>Shipping Cost (Rs.)</label>
          <FormInput
            type="text"
            name="shippingCost"
            value={formData.shippingCost}
            onChange={handleChange}
            placeholder="Shipping Cost"
          />
        </div>
      </div>
    </FormSection>
  );
};

export default ProductAdditional;


// import { useEffect, useState } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { IoMdPerson } from "react-icons/io";
// import FormInput from "../../../../../components/FormInput/FormInput";
// import FormSection from "../../../../../components/FormInput/FormSection";
// import FormSelect from "../../../../../components/FormInput/FormSelect";

// const ProductAdditional = ({ formData = {}, handleChange }) => {
//   const [finalPrice, setFinalPrice] = useState(formData.price || 0);

//   // Calculate final price whenever price, discount type, or discount amount changes
//   useEffect(() => {
//     let calculatedPrice = formData.price || 0;
    
//     if (formData.discountType === "percent") {
//       if (formData.discountAmount > 100) {
//         toast.error("Discount amount cannot exceed 100%.");
//       } else {
//         calculatedPrice -= (calculatedPrice * formData.discountAmount) / 100;
//       }
//     } else if (formData.discountType === "flat") {
//       if (formData.discountAmount > formData.price) {
//         toast.error("Discount amount cannot exceed the price.");
//       } else {
//         calculatedPrice -= formData.discountAmount;
//       }
//     }

//     // Ensure calculatedPrice is a number
//     setFinalPrice(isNaN(calculatedPrice) ? 0 : calculatedPrice);
//   }, [formData.price, formData.discountType, formData.discountAmount]);



  
//   return (
//     <FormSection title="Pricing & Others" icon={<IoMdPerson />}>
//       <ToastContainer />
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//         {/* Price */}
//         <div className="flex flex-col ">
//           <label className="">Purchase Price</label>
//           <FormInput
//             type="number"
//             name="price"
//             value={formData.price}
//             onChange={handleChange}
//             placeholder="Price"
//             required
//           />
//         </div>

//         {/* Minimum Order Quantity */}
//         <div className="flex flex-col px-2">
//           <label className="">Minimum Order Qty</label>
//           <FormInput
//             type="number"
//             name="minimumOrderQty"
//             value={formData.minimumOrderQty}
//             onChange={handleChange}
//             placeholder="Minimum Order Quantity"
//             required
//           />
//         </div>

//         {/* Stock */}
//         <div className="flex flex-col px-2">
//           <FormInput
//             label="Current Stock Qty"
//             name="stock"
//             placeholder="Stock"
//             value={formData.stock}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         {/* Discount Type */}
//         <div className="flex flex-col px-2">
//           <FormSelect
//             label="Discount Type"
//             name="discountType"
//             value={formData.discountType}
//             onChange={handleChange}
//             options={[
//               { value: "percent", label: "Percentage" },
//               { value: "flat", label: "Flat Amount" },
//             ]}
//           />
//         </div>

//         {/* Discount Amount */}
//         <div className="flex flex-col px-2 ">
//           <label className="">
//             Discount Amount {formData.discountType === "percent" ? "( % )" : "( Rs )"}
//           </label>
//           <div className="relative">
//             <FormInput
//               type="number"
//               name="discountAmount"
//               value={formData.discountAmount}
//               onChange={handleChange}
//               placeholder="Discount Amount"
//               required
//             />
//           </div>
//         </div>

//         {/* Tax Amount */}
//         <div className="flex flex-col px-2">
//           <label className="">Tax Amount ( % )</label>
//           <FormInput
//             type="number"
//             name="taxAmount"
//             value={formData.taxAmount}
//             onChange={handleChange}
//             placeholder="Tax Amount"
//           />
//         </div>

//         {/* Tax Included Checkbox */}
//         <div className="flex flex-col px-2 mt-3">
//           <label className="">Tax Included</label>
//           <div className="flex gap-3 items-center">
//             <input
//               type="checkbox"
//               name="taxIncluded"
//               checked={formData.taxIncluded}
//               onChange={handleChange}
//               className="w-5 h-5"
//             />
//             <span className="font-medium">Include tax in price</span>
//           </div>
//         </div>

//         {/* Shipping Cost */}
//         <div className="flex flex-col px-2">
//           <label className="">Shipping Cost (Rs.)</label>
//           <FormInput
//             type="text"
//             name="shippingCost"
//             value={formData.shippingCost}
//             onChange={handleChange}
//             placeholder="Shipping Cost"
//           />
//         </div>

//         {/* Display Final Price */}
//         <div className="flex flex-col px-2">
//           <label className="">Final Price</label>
//           <div className="relative">
//             <input
//               type="text"
//               name="finalPrice"
//               value={Number(finalPrice).toFixed(2)}
//               readOnly
//               className="border border-gray-300 rounded-md p-2"
//               placeholder="Final Price after Discount"
//             />
//           </div>
//         </div>
//       </div>
//     </FormSection>
//   );
// };

// export default ProductAdditional;


