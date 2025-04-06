import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../index.css";
import MenuIcon from "@mui/icons-material/Menu";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="w-full bg-[#3D464D] border-b-2 text-white px-6">

        {/* for desktop screen */}
        <div className="flex justify-center items-center py-4">
          <ul className="hidden md:flex space-x-6 ">
            <li>
              <Link to="/home" className="hover:text-[#FFD333] gray-400">
                Home  
              </Link>
            </li>
              
              
            <li>
            
              <Link to="/products" className=" hover:text-[#FFD333] gray-400 ">
                Products
              </Link>
            </li>
            <li>
            
              <Link to="/about" className=" hover:text-[#FFD333] gray-400">
                About
              </Link>
            </li>
            <li>
           
              <Link to="/contact" className=" hover:text-[#FFD333] gray-400">
                Contact Us
              </Link>
            </li>
          </ul>
          <button className="md:hidden text-2xl" onClick={()=> setIsOpen(!isOpen)}>
            <MenuIcon size ={24}/>
          </button>

        </div>

       {/* For mobile screen */}
        {isOpen && (
          <ul className="md:hidden flex flex-col bg-[#3D464D] p-2 space-y-2">
   <li>
              <Link to="/" className="hover:text-[#FFD333] " onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>
            <li>
             
              <Link to="/products" className=" hover:text-[#FFD333]  " onClick={() => setIsOpen(false)}>
                Products
              </Link>
            </li>
            <li>
     
              <Link to="/about" className=" hover:text-[#FFD333]  " onClick={() => setIsOpen(false)}>
                About
              </Link>
            </li>
            <li>
              
              <Link to="/contact" className=" hover:text-[#FFD333]  " onClick={() => setIsOpen(false)}>
                Contact Us
              </Link>
            </li>
            
          </ul>
        )}
      </div>
    </>
  );
}

export default Navbar;
