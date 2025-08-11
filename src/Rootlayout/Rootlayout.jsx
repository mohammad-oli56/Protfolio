import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Pages/Navbar';
import Footer from '../Pages/Footer';
import Sidevar from '../Pages/Sidevar';

const Rootlayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex bg-gray-50 flex-1">
        <Sidevar />
        <main className="flex-1 ">
          <Outlet />
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default Rootlayout;
