import React, { useEffect, useState } from "react";

import products from "../data/products";


function Products() {
  return (
    <div className="mt-36 lg:mt-28 mb-6 px-4">
      <h1 className="text-2xl font-bold  tracking-wide text-center">
         PRODUCTS
      </h1>


      <div class="bg-gradient-to-bl from-blue-50 to-violet-50 flex items-center justify-center mt-4">
        <div class="container  mx-auto p-4">
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4 relative  shadow-md rounded-xl overflow-hidden">
            {products.map((products) => (
              <div key={products.id} class="bg-white rounded-lg border p-4 shadow-md">
                <img
                  src={products.image}
                  alt=""
                  className="h-36 sm:h-44 w-full object-cover rounded-md"
                />
            
                  <div class="font-bold text-lg mt-2 text-center">{products.name}</div>
                  <p class="text-gray-700 text-xs text-center mt-1">{products.description}</p>
             
                <div class="text-center mt-3 px-1 py-2  hover:text-blue-500 cursor-pointer">
                  <a
                    href="#"
                    className="text-blue-500 hover:underline cursor-pointer"
                  >
                    Read More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
