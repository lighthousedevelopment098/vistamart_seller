// import React, { useEffect, useState } from "react";
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
//   Navigate,
// } from "react-router-dom";

// import Header from "./components/new/Header";
// import Sidebar from "./components/new/Sidebar";
// import LoginPage from "./components/LoginPage/LoginPage";

// import Footer from "./components/new/Footer/Footer";
// import { RiMenuUnfold3Fill } from "react-icons/ri";
// import { useDispatch, useSelector } from 'react-redux';
// import { logout } from './components/redux/auth/authSlice.js';
// import { checkAuth } from './utils/auth';
// import AllRoutes from "./Routes.jsx";

// function App() {
//   const { isLoggedIn, user } = useSelector((state) => state.auth);
//   const dispatch = useDispatch();


//   useEffect(() => {
//     // Check if user is authenticated
//     checkAuth(dispatch);
//   }, [dispatch]);


//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };
//   return (
//     <Router>
//       <div className="flex flex-col min-h-screen">
//         {isLoggedIn ? (
//           <>
//             <Header />
//             <div className="row">
//               <div
//                 className={`fixed inset-0 z-30 ${
//                   isSidebarOpen ? "block" : "hidden"
//                 } lg:block lg:relative lg:w-2/12`}
//               >
//                 <div
//                   className="fixed inset-0 bg-gray-600 bg-opacity-75 lg:hidden"
//                   onClick={toggleSidebar}
//                 ></div>
//                 <Sidebar />
//                 <h1 onClick={() => dispatch(logout())}>logout</h1>
//               </div>
//               {/* <main className="flex-1 w-10/12 overflow-auto main "> */}
//               <main className="flex-1 lg:w-10/12 ml-4 overflow-auto">
//                 <button className="p-4 lg:hidden" onClick={toggleSidebar}>
//                   {isSidebarOpen ? (
//                     "Close"
//                   ) : (
//                     <RiMenuUnfold3Fill className="text-[1rem] font-semibold" />
//                   )}
//                 </button>
//                  <AllRoutes />
//                 <Footer />
//               </main>
//             </div>
//           </>
//          ) : (
//           <Routes>
//           <Route path="/login" element={<LoginPage />} />
//           <Route path="*" element={<Navigate to="/login" />} />
//         </Routes>
//         )} 
//       </div>
//     </Router>
//   );
// }``

// export default App;



import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Header from "./components/new/Header";
import Sidebar from "./components/new/Sidebar";
import LoginPage from "./components/LoginPage/LoginPage";
import Footer from "./components/new/Footer/Footer";
import { RiMenuUnfold3Fill } from "react-icons/ri";
import AllRoutes from "./Routes.jsx";
import "./App.css";
import LoadingSpinner from "./components/LoodingSpinner/LoadingSpinner.jsx";

const queryClient = new QueryClient();

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
      const storedUser = JSON.parse(localStorage.getItem("user"));
      setUser(storedUser); // Set user data from local storage
    }
    setLoading(false);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    setUser(null);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  if (loading) return <div><LoadingSpinner /></div>;

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="flex flex-col">
          {isLoggedIn ? (
            <>
              <Header user={user} handleLogout={handleLogout} />
              <div className="flex flex-1">
                <div
                  className={`fixed inset-0 z-30 ${
                    isSidebarOpen ? "block" : "hidden"
                  } lg:block lg:relative lg:w-2/12`}
                >
                  <div
                    className="fixed inset-0 bg-gray-600 bg-opacity-75 lg:hidden"
                    onClick={toggleSidebar}
                  ></div>
                  <Sidebar toggleSidebar={toggleSidebar} />
                </div>
                <main className="flex-1 lg:w-10/12 md:ml-5 overflow-hidden px-5 py-6">
                  <button className="p-4 lg:hidden" onClick={toggleSidebar}>
                    {isSidebarOpen ? (
                      "Close"
                    ) : (
                      <RiMenuUnfold3Fill className="text-[1rem] h-6 w-6 mt-5 font-semibold" />
                    )}
                  </button>
                  <AllRoutes />
                  <Footer />
                </main>
              </div>
            </>
          ) : (
            <Routes>
              <Route path="/login" element={<LoginPage setIsLoggedIn={setIsLoggedIn} />} />
              <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
          )}
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
