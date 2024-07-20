"use client";

import { useRouter } from "next/router";
import React from "react";
import swal from "sweetalert";

const AddProduct = () => {
  //   const navigate = useRouter();

  const onSubmit = async (e: any) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const dataValue = {
      title: formData.get("title"),
      image: formData.get("image"),
      brand: formData.get("brand"),
      quantity: parseFloat(formData.get("quantity") as string),
      price: parseFloat(formData.get("price") as string),
      rating: parseFloat(formData.get("rating") as string),
      description: formData.get("description"),
    };

    console.log(dataValue);

    try {
      const response = await fetch(
        "https://redux-first-assignment.vercel.app/api/v1/product/create-product",
        {
          method: "POST",
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
          title: "Product added!",
          text: "Successfull",
          icon: "success",
          // @ts-expect-error: Unreachable code error
          button: "Done",
        });
        e.target.reset();
        // navigate.push("/products");
      }
    } catch (error) {
      console.error("Failed to add product", error);
      swal({
        title: "Error",
        text: "Failed to add product",
        icon: "error",
        // @ts-expect-error: Unreachable code error
        button: "Try Again",
      });
    }
  };

  return (
    <div className="md:px-12 w-full p-4 md:mt-8 rounded-md ">
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
              required
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
              required
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
              required
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
              required
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
              required
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
              required
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
              required
            ></input>
          </label>
        </div>
        <button
          type="submit"
          className="px-3 py-2 rounded-xl font-medium bg-[#a58a00] hover:bg-yellow-700 text-white text-base w-full"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
