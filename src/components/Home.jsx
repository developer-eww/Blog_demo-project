import React from "react";
import blog1 from "../assets/blog1.jpg";
import DownloadIcon from "@mui/icons-material/Download";
import products from "../data/products";
function Home() {
  return (
    <div className=" relative w-full h-full mb-11 ">
      <div className="h-96">
        <img src={blog1} alt="" className="w-full h-full object-cover z-auto" />
      </div>

      <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-100 py-0 sm:py-8">
        <div className="mx-auto max-w-screen-xl py-4 px-4 w-full">
          <h2 className =" flex align-center justify-center mb-4 font-bold text-2xl text-gray-600">
            Our Products Lists
          </h2>
          <div className="grid w-full grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 justify-items-center gap-6  m-auto">
            {products.map((product) => (
              <div key={product.id} >
                <div className="relative flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 max-w-sm">
                  <div className="h-auto overflow-hidden">
                    <div className="h-44 overflow-hidden relative">
                      <img src={product.image} alt="" />
                    </div>
                  </div>
                  <div className="bg-white py-4 px-3">
                    <h3 className="text-xs mb-2 font-medium">{product.name}</h3>
                    <div className="flex justify-between items-center">
                      <p className="text-xs text-gray-400">{product.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
