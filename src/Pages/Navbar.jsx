



const Navbar = () => {
  return (
    <div className="flex justify-center mt-6 sticky top-0 z-50">


      <div className="bg-white/70 backdrop-blur-md border rounded-md flex items-center lg:space-x-6 space-x-3 shadow-sm">
        {/* Logo */}
        <span className="playwrite-au-qld rounded-l-md bg-orange-500 py-2 text-2xl text-white font-extrabold flex items-center px-3 border-r-1 border-gray-300">
          O L I
        </span>

        {/* Navigation Links */}
        <ul className="flex items-center  text-sm font-bold text-black">
          <li className="border-r-2 pr-2 border-gray-400"><a href="#">Home </a></li>
         <div className="hidden md:block lg:block">
           <div className=" flex  ">
             <li className="border-r-2 px-2 border-gray-400"><a href="#about">About</a></li>
              <li className="border-r-2 px-2 border-gray-400"><a href="#skil">Skills</a></li>
              <li className="border-r-2 px-2 border-gray-400"><a href="#education">Education</a></li>
              <li className="pl-2"><a href="#project">Projects</a></li>
          </div>
         </div>


          <div className="dropdown dropdown-end lg:hidden md:hidden">
            <div tabIndex={0} role="button" className=" m-1">More ⬇️</div>
            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
              <li><a href="#about">About</a></li>
              <li><a href="#skil">Skills</a></li>
              {/* <li><a href="#education">Education</a></li> */}
              <li><a href="#project">Projects</a></li>
            </ul>
          </div>
        </ul>

        {/* Button */}
        <a href="#contact" className="bg-black text-white px-4 py-2 rounded-md text-sm border-l-1 mx-1.5 border-gray-300 hover:bg-gray-800">
          Hire me
        </a>
      </div>
    </div>
  );
};

export default Navbar;
