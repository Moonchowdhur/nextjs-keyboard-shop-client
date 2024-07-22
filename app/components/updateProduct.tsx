/* eslint-disable @next/next/no-async-client-component */

"use client";

import { useParams } from "next/navigation";
import React, { useContext } from "react";
import swal from "sweetalert";
import { AuthContext } from "./auth";

const UpdateProduct = async () => {
  const { id } = useParams();
  // @ts-expect-error: Unreachable code error
  const { auth } = useContext(AuthContext);

  const res = await fetch(
    `https://redux-first-assignment.vercel.app/api/v1/product/${id}`
  );
  const sproduct = await res.json();

  console.log(sproduct);

  const onSubmit = async (e: any) => {
    e.preventDefault();
    if (!auth?.user?.email) {
      return swal({
        title: "Product not updated, please login first!",
        icon: "error",
      });
    }
    const formData = new FormData(e.target);
    const dataValue = {
      title: formData.get("title")
        ? formData.get("title")
        : sproduct?.data.title,
      image: formData.get("image")
        ? formData.get("image")
        : sproduct?.data?.image,
      brand: formData.get("brand")
        ? formData.get("brand")
        : sproduct?.data?.brand,
      quantity: parseFloat(formData.get("quantity") as string)
        ? parseFloat(formData.get("quantity") as string)
        : sproduct?.data?.quantity,
      price: parseFloat(formData.get("price") as string)
        ? parseFloat(formData.get("price") as string)
        : sproduct?.data?.price,
      rating: parseFloat(formData.get("rating") as string)
        ? parseFloat(formData.get("rating") as string)
        : sproduct?.data?.rating,
      description: formData.get("description")
        ? formData.get("description")
        : sproduct?.data?.description,
    };

    console.log(dataValue);

    try {
      const response = await fetch(
        `https://redux-first-assignment.vercel.app/api/v1/product/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dataValue),
        }
      );

      const result = await response.json();

      console.log(result);

      if (response.ok && result?.success === true) {
        swal({
          title: "Product updated!",
          text: "Successfull",
          icon: "success",
          // @ts-expect-error: Unreachable code error
          button: "Done",
        });
        e.target.reset();
      }
    } catch (error) {
      console.error("Failed to update product", error);
      swal({
        title: "Error",
        text: "Failed to update product",
        icon: "error",
        // @ts-expect-error: Unreachable code error
        button: "Try Again",
      });
    }
  };

  return (
    <div className="md:px-12 w-full p-4 md:mt-8 rounded-md ">
      <h2 className="text-2xl mb-8 font-bold tracking-widest text-[#957c00] text-center ">
        UPDATE PRODUCT
      </h2>
      <form onSubmit={onSubmit} className="space-y-4 w-full max-w-lg mx-auto">
        <div className="flex items-center gap-5">
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Title</span>
            </div>
            <input
              type="text"
              name="title"
              placeholder="Title"
              className="input input-bordered w-full"
              defaultValue={sproduct?.data?.title}
            />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Brand</span>
            </div>
            <input
              type="text"
              name="brand"
              placeholder="Brand"
              className="input input-bordered w-full"
              defaultValue={sproduct?.data?.brand}
            />
          </label>
        </div>

        <div className="flex items-center gap-5">
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Quantity</span>
            </div>
            <input
              type="text"
              name="quantity"
              placeholder="Quantity"
              className="input input-bordered w-full"
              defaultValue={sproduct?.data?.quantity}
            />
          </label>

          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Price</span>
            </div>
            <input
              type="text"
              name="price"
              placeholder="Price"
              className="input input-bordered w-full"
              defaultValue={sproduct?.data?.price}
            />
          </label>

          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Rating</span>
            </div>
            <input
              type="text"
              name="rating"
              placeholder="Rating"
              className="input input-bordered w-full"
              defaultValue={sproduct?.data?.rating}
            />
          </label>
        </div>
        <div className="flex items-center gap-5">
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Image URL</span>
            </div>
            <input
              type="text"
              name="image"
              placeholder="Image URL"
              className="input input-bordered w-full"
              defaultValue={sproduct?.data?.image}
            />
          </label>

          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Description</span>
            </div>
            <input
              name="description"
              placeholder="Description"
              className="textarea textarea-bordered w-full"
              defaultValue={sproduct?.data?.description}
            ></input>
          </label>
        </div>
        <button
          type="submit"
          className="px-3 py-2 rounded-xl  font-medium bg-[#a58a00] hover:bg-yellow-700 text-white text-base w-full"
        >
          Update Product
        </button>
      </form>
    </div>
  );
};

export default UpdateProduct;
