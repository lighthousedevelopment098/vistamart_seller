import React from 'react';
import TopCustomers from './TopCustomers';
import MostCustomers from './MostP/MostP';
 // Import your TopCustomers component

const TopCustomersSection = () => (
  <div className="row p-5">
    <TopCustomers />
    <MostCustomers />
    {/* <MostCustomers /> */}
  </div>
);

export default TopCustomersSection;
