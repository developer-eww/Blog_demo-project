// import { ChevronRight } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router';

function Footer() {
  return (
    <footer className="w-full bg-[#3D474C] text-white ">
      <div className="mx-auto flex max-w-screen-xl items-center justify-between  py-0 lg:px-0 ">
        
        <div className="grid grid-cols-2 justify-items-center  gap-4 px-4 py-0  lg:py-2 md:grid-cols-4 pb-2 pt-2 ">
          <h3 className=  'ml-6 text-[#FFFFFF] px-3 py-0 text-xs sm:text-sm font-semibold '>@Coprights by Aastha Modi 2025</h3>
        <Link
            type="button"
            className="rounded-md text-[#f0e9c4] px-3 py-0 text-xs sm:text-sm font-semibold  shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
          >
            Phone :+07345678871
          </Link>
          <Link
            type="button"
            className=" rounded-md text-[#f0e9c4] px-3 py-0 text-xs sm:text-sm  font-semibold  shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
          >
            missaastha11@gmail.com
          </Link>
          <Link
            type="button"
            className=" rounded-md text-[#f0e9c4] px-3 py-0 text-xs sm:text-sm  font-semibold  shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
          >
            aastha.modi@linkedin.in
          </Link>
         
        </div>
      </div>


     
     
    </footer>



  )
}

export default Footer;