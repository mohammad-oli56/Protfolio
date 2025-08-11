import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Pages/Navbar';
import Footer from '../Pages/Footer';

const Rootlayout = () => {
    return (
        <div>
            <Navbar></Navbar>
           <div className='bg-gray-50'>
             
             <Outlet></Outlet>
           </div>
           <Footer/>
        </div>
    );
};

export default Rootlayout;