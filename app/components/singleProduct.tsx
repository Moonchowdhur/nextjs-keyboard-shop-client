/* eslint-disable @next/next/no-async-client-component */
"use client";
import swal from "sweetalert";

import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { RiMapPinAddLine } from "react-icons/ri";
import Rating from "react-rating";
import { AuthContext } from "./auth";

type TProduct = {
  data: {
    _id: string;
    image: string;
    title: string;
    brand: string;
    quantity: number;
    price: number;
    rating: number;
    description: string;
    __v: number;
  };
};

const SingleProduct = () => {
  const { id } = useParams();

  const [loading, setLoading] = useState(false);
  // @ts-expect-error: Unreachable code error
  const { cart, setCart } = useContext(AuthContext);
  // const [sproduct, setSproduct] = useState();
  const [sproduct, setSproduct] = useState<TProduct | null>(null);

  // (async () => {
  //   const res = await fetch(
  //     `https://redux-first-assignment.vercel.app/api/v1/product/${id}`
  //   );
  //   const sproduct = await res.json();
  //   setSproduct(sproduct);
  //   setLoading(false);
  // })();

  const fetchProductData = useCallback(() => {
    (async () => {
      setLoading(true);
      const res = await fetch(
        `https://redux-first-assignment.vercel.app/api/v1/product/${id}`
      );
      const sproduct = await res.json();
      setSproduct(sproduct);
      setLoading(false);
    })();
  }, [id]);

  useEffect(() => {
    fetchProductData();
  }, [setSproduct, id]);

  console.log(loading);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#4A249D]"></div>
      </div>
    );
  }

  const handleAddToCart = () => {
    setCart((prevCart: any) => [...prevCart, id]); // Add product to cart

    // Show success message
    swal({
      title: "Product added",
      text: "Successfully added to your cart.",
      icon: "success",
    });
  };

  return (
    <div className="md:px-12 w-full p-4 mt-32 md:mt-12  rounded-md ">
      <div className="md:flex items-start gap-8  ">
        <div className="md:w-1/2 w-full rounded-lg   p-4">
          <div className=" w-full ">
            <img
              src={sproduct?.data?.image}
              className="rounded-lg bg-[#dbd3eb]  p-4 md:w-[700px] md:h-[500px]"
              alt=""
            />
          </div>

          {/* coupon section */}
          <div className="border mt-5 flex justify-center items-center border-dashed py-2 mb-4 px-3 rounded-md border-[#957c00]">
            <div className=" ">
              <h2 className="rounded-md  p-2 text-base mb-2 text-center">
                Easy 7 days return and exchange. Return Policies may vary based
                on products and promotions. For full details on our Returns
                Policies,
                <span className={"text-[#957c00]  font-bold"}>
                  please click here․
                </span>
              </h2>
              <h2 className="text-[#736100] mx-auto text-sm text-center mt-2">
                HANDPICKED STYLES | ASSURED QUALITY
              </h2>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 w-full">
          <h2 className="text-3xl font-bold mb-2  tracking-widest text-[#957c00] text-center ">
            {sproduct?.data?.title}
          </h2>
          <h2 className="text-lg  mb-1 w-8/12 mx-auto text-center ">
            {/* // @ts-expect-error: Unreachable code error */}
            {sproduct?.data?.description}
          </h2>
          <h2 className="text-lg font-medium   mb-2 w-8/12 mx-auto text-center ">
            Qty:{sproduct?.data?.quantity}
          </h2>
          <h2 className="text-lg text-[#957c00] font-bold mb-5 w-8/12 mx-auto text-center ">
            Brand:{sproduct?.data?.brand}
          </h2>
          <div className="flex items-center mb-2  justify-center gap-1">
            {/* @ts-expect-error: Type issue with Rating component */}
            <Rating
              initialRating={sproduct?.data?.rating}
              emptySymbol={<FaStar className="text-gray-300 " />}
              fullSymbol={<FaStar className="text-[#957c00]" />}
              fractions={2}
              readonly
            />
          </div>
          <h2 className="text-3xl font-medium mb-2   text-center ">
            ${sproduct?.data?.price}
          </h2>
          {/* coupon section */}
          <div className="border flex justify-center items-center border-dashed py-2 mb-4 px-3 rounded-md border-[#957c00]">
            <div className=" ">
              <h2 className="bg-[#ede8cc] rounded-md  p-2 text-base mb-2 text-center">
                Get it 20% off
              </h2>
              <h2 className=" rounded-md  p-2 text-base mb-2 text-center">
                Free Shipping on 499 and above. Just <br /> for you.{" "}
                <Link href="/products" className={"text-[#957c00]  font-bold"}>
                  View All Products
                </Link>
              </h2>
            </div>
          </div>
          <h2 className="bg-[#ede8cc] flex justify-center items-center gap-2 rounded-md md:w-9/12 mx-auto  p-2 text-base mb-2 text-center">
            <RiMapPinAddLine /> Enter Pin-code To Know Estimated Delivery Date
          </h2>
          <div className="flex justify-center mt-4">
            <button
              onClick={() => handleAddToCart()}
              //   onClick={handleAddToCart}
              className="text-white text-lg md:w-4/12 mx-auto rounded px-3 py-2   bg-[#736100]"
            >
              Add to Cart{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
