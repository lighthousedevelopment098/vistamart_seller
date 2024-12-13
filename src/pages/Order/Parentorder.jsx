import React from 'react';
import FirstContainer from './FirstContainer';
import OrderList from './OrderList';
import { Link } from 'react-router-dom';

const Parentorder = () => {
  return (

     
      <div className="col-span-10 flex items-center">
        <div className="bg-[#F9F9FB] px-4 py-2 ">
          <div className="flex items-center">
            <img src="https://6valley.6amtech.com/public/assets/back-end/img/all-orders.png" alt="All Orders" className="mr-2" />
            <p className="text-lg font-semibold text-[#334257]">All Orders</p>
            <p className="text-xs font-semibold text-[#334257] ml-4 bg-slate-400 rounded-full px-2 py-1">190</p>
          </div>
          <FirstContainer/>
          <OrderList/>
        </div>
        
      </div>
  
  );
};

export default Parentorder;
