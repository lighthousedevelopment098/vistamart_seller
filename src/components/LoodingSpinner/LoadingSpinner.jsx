// import React from "react";
// // import "./LoadingSpinner.css"; // Add this file for custom styling if needed

// const LoadingSpinner = () => {
//   return (
//     <div className="loading-overlay flex justify-center">
//       {/* <div className="flex items-center justify-center h-full">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 100 100"
//           preserveAspectRatio="xMidYMid"
//           width={100}
//           height={100}
//           style={{
//             shapeRendering: "auto",
//             background: "rgba(255, 255, 255, 0.8)",
//           }}
//           xmlnsXlink="http://www.w3.org/1999/xlink"
//         >
//           <g>
//             <circle
//               strokeWidth="3"
//               stroke="#05cc47"
//               fill="none"
//               r="0"
//               cy="50"
//               cx="50"
//             >
//               <animate
//                 begin="0s"
//                 calcMode="spline"
//                 keySplines="0 0.2 0.8 1"
//                 keyTimes="0;1"
//                 values="0;40"
//                 dur="1s"
//                 repeatCount="indefinite"
//                 attributeName="r"
//               ></animate>
//               <animate
//                 begin="0s"
//                 calcMode="spline"
//                 keySplines="0.2 0 0.8 1"
//                 keyTimes="0;1"
//                 values="1;0"
//                 dur="1s"
//                 repeatCount="indefinite"
//                 attributeName="opacity"
//               ></animate>
//             </circle>
//             <circle
//               strokeWidth="3"
//               stroke="#4dc47d"
//               fill="none"
//               r="0"
//               cy="50"
//               cx="50"
//             >
//               <animate
//                 begin="-0.5s"
//                 calcMode="spline"
//                 keySplines="0 0.2 0.8 1"
//                 keyTimes="0;1"
//                 values="0;40"
//                 dur="1s"
//                 repeatCount="indefinite"
//                 attributeName="r"
//               ></animate>
//               <animate
//                 begin="-0.5s"
//                 calcMode="spline"
//                 keySplines="0.2 0 0.8 1"
//                 keyTimes="0;1"
//                 values="1;0"
//                 dur="1s"
//                 repeatCount="indefinite"
//                 attributeName="opacity"
//               ></animate>
//             </circle>
//           </g>
//         </svg>
//       </div> */}
//       <img src="/loader1.gif" alt="" />
//     </div>
//   );
// };

// export default LoadingSpinner;

// // src/components/LoadingSpinner.jsx

import React from 'react';
// import './LoadingSpinner.css'; // Add this file for custom styling if needed

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center w-full h-full z-50">
      <div className="flex space-x-2">
        <div className="w-3 h-3 bg-primary-500 rounded-full animate-pulse delay-[0ms]"></div>
        <div className="w-3 h-3 bg-primary-500 rounded-full animate-pulse delay-[200ms]"></div>
        <div className="w-3 h-3 bg-primary-500 rounded-full animate-pulse delay-[400ms]"></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;



