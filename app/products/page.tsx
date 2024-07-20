"use client";

import { useState } from "react";
import ProductCards from "../components/productCards";
const page = async () => {

  
async function fetchData(){
  const res = await fetch(
    "https://redux-first-assignment.vercel.app/api/v1/product",
    { next: { revalidate: 1 } }
  );
  const product = await res.json();
return product
}

//   console.log(product);

  return (
    <div className="md:px-12 w-full p-4 mt-36 md:mt-12  rounded-md ">
      <h2 className="text-2xl  mb-10 font-bold tracking-widest text-[#957c00] text-center ">
        PRODUCTS
      </h2>
      <div className="overflow-x-auto ">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th className="bg-[#a58a00] text-white text-lg ">Title</th>
              <th className="bg-[#a58a00] text-white text-lg">Name</th>
              <th className="bg-[#a58a00] text-white text-lg">Image</th>
              <th className="bg-[#a58a00] text-white text-lg">Brand</th>
              <th className="bg-[#a58a00] text-white text-lg">Action</th>
            </tr>
          </thead>
          <ProductCards product={await fetchData()} fetchData={fetchData}/>
        </table>
      </div>
    </div>
  );
};

export default page;
