import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Pages/Navbar';
import Footer from '../Pages/Footer';

const Rootlayout = () => {
    return (
        <div>
            <Navbar></Navbar>
           <div className='bg-[#F9FAFB]'>
             <Outlet></Outlet>
           </div>
           <Footer/>
        </div>
    );
};

export default Rootlayout;