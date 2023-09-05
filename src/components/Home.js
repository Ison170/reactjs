import React from 'react';
import DynamicTable from './DynamicTable';
import Navigation from './Navigation';
const Home = ({ isAdmin, onLogout, onNavigate }) => {
  return (
    //  <Navigation/>
    <div>
       <Navigation/>
      <h1>Home Page</h1>
      {isAdmin && <DynamicTable department="Production" />}
      {isAdmin && <DynamicTable department="Maintenance" />}
      {isAdmin && <DynamicTable department="Analysis" />}
      {/* Add buttons and logic for navigation */}
     
    </div>
  );
};

export default Home;