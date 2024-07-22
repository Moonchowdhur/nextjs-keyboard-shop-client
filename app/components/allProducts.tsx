/* eslint-disable @next/next/no-async-client-component */
"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import Rating from "react-rating";

const AllProducts = async () => {
  const [showAll, setShowAll] = useState(false);

  const res = await fetch(
    "https://redux-first-assignment.vercel.app/api/v1/product"
  );
  const product = await res.json();

  console.log(product);

  const displayedProducts = showAll ? product?.data : product?.data.slice(0, 6);

  return (
    <div className="md:px-12 w-full   p-4 mt-16 rounded-md ">
      <div className="text-3xl mb-2 font-bold text-center">
        <h2 className="text-3xl mb-2 font-bold text-center">
          {" "}
          WELCOME TO OUR <span className="text-[#4A249D]"> PRODCUTS</span>
        </h2>

        <div className="flex justify-center mt-2">
          <div className="h-2 w-12  rounded-lg text-center bg-[#4A249D]"></div>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-5  justify-between items-center mt-10 rounded-lg">
          {/* card */}

          {displayedProducts?.map((product: any) => {
            return (
              <div
                key={product._id}
                className="border-gray-200 bg-[#dbd3eb]  border p-4 rounded-lg"
              >
                <div className="badge  relative hover:text-white top-5  m-2 rounded-full text-black bg-[#F0D133] text-base">${product?.price}</div>
                <img
                  src={product?.image}
                  className="h-[400px] w-[500px] rounded-xl mb-4"
                  alt=""
                />

                <div className="flex p-1 mb-2 items-center justify-between text-[#34196e]">
                  <h2 className="text-center font-medium text-xl">
                    {product?.brand}
                  </h2>
                  <div className="flex items-center gap-1">
                    {/* @ts-expect-error: Type issue with Rating component */}
                    <Rating
                      initialRating={product?.rating}
                      emptySymbol={<FaStar className="text-gray-300 text-lg" />}
                      fullSymbol={<FaStar className="text-[#34196e] text-lg" />}
                      fractions={2}
                      readonly
                    />
                  </div>
                </div>
                <h2 className=" text-[#34196e] mb-1 font-normal text-left text-lg">
                  {product?.title}
                </h2>
                <div className="flex items-center justify-between">
                  <h2 className="text-[#34196e] font-normal text-left text-lg">
                    Quantity:
                    <span className="font-medium"> {product?.quantity}</span>
                  </h2>
                  <Link
                    href={`/products/${product?._id}`}
                    className="bg-[#F0D133]  hover:border text-lg  font-medium px-3 py-2 rounded-lg"
                  >
                    Details
                  </Link>
                </div>
              </div>
            );
          })}
          {/* card end */}
        </div>
        {!showAll && (
          <button
            onClick={() => setShowAll(true)}
            className="bg-[#a58a00] hover:text-white hover:bg-[#4A249D] mt-6 text-lg shadow-xl font-medium px-3 py-2 rounded-lg"
          >
            See More
          </button>
        )}
      </div>
    </div>
  );
};

export default AllProducts;
