"use client";

import Link from "next/link";
import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import swal from "sweetalert";

const Register = () => {
  const [eye, setEye] = useState(false);

  const handleRegister = async (event: any) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const phone = event.target.phone.value;
    const address = event.target.address.value;
    const role = "user";

    try {
      const response = await fetch(
        "https://redux-first-assignment.vercel.app/api/v1/auth/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password, name, phone, address, role }),
        }
      );

      const data = await response.json();

      console.log(data);

      if (response.ok) {
        swal({
          title: "Register Successful!",
          icon: "success",
          // @ts-expect-error: Unreachable code error
          button: "Continue",
        });
      } else {
        throw new Error(data.message || "Failed to login");
      }
    } catch (error) {
      console.error("Register error:", error);
      swal({
        title: "Register Failed",
        // @ts-expect-error: Unreachable code error
        text: error.message,
        icon: "error",
        // @ts-expect-error: Unreachable code error
        button: "Try Again",
      });
    }
  };

  return (
    <div className="md:flex mb-20 mt-36 gap-10 items-center justify-center md:mt-7 ">
      <div className="w-96 p-6 shadow-md bg-white rounded">
        <div className="text-center mb-3 font-bold text-3xl justify-center gap-3 flex items-center">
          <FaUser className="text-fuchsia-700" />
          <h1 className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-3xl font-black">
            Create an account
          </h1>
        </div>

        <hr className="mt-3" />
        <form onSubmit={handleRegister}>
          <div className="mt-3">
            <label htmlFor="username" className="block text-base mb-2">
              Username
            </label>
            <input
              type="text"
              required
              name="name"
              id="name"
              placeholder="Enter Username"
              className="border w-full px-2 focus:outline-none text-base py-1 focus:ring-0 focus:border-gray-600 rounded"
            />
          </div>

          <div className="mt-3">
            <label htmlFor="email" className="block text-base mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Email"
              className="border w-full px-2 focus:outline-none text-base py-1 focus:ring-0 focus:border-gray-600 rounded"
              required
            />
          </div>
          <div className="mt-3">
            <label htmlFor="password" className="block text-base mb-2">
              Password
            </label>
            <div className="flex items-center">
              <input
                type={eye ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Enter Password"
                className="border w-full px-2 focus:outline-none text-base py-1 focus:ring-0 focus:border-gray-600 rounded"
                required
              />
              <span onClick={() => setEye(!eye)}>
                {eye ? (
                  <AiFillEye className="text-4xl border focus:outline-none focus:ring-0 focus:border-gray-600 rounded " />
                ) : (
                  <AiFillEyeInvisible className="text-4xl border focus:outline-none focus:ring-0 focus:border-gray-600  rounded " />
                )}
              </span>
            </div>
          </div>
          <div className="mt-3">
            <label htmlFor="phone" className="block text-base mb-2">
              Phone No
            </label>
            <input
              type="text"
              name="phone"
              required
              id="phone"
              placeholder="Phone No"
              className="border w-full px-2 focus:outline-none text-base py-1 focus:ring-0 focus:border-gray-600 rounded"
            />
          </div>
          <div className="mt-3">
            <label htmlFor="address" className="block text-base mb-2">
              Address
            </label>
            <input
              type="text"
              name="address"
              required
              id="address"
              placeholder="Address"
              className="border w-full px-2 focus:outline-none text-base py-1 focus:ring-0 focus:border-gray-600 rounded"
            />
          </div>
          <div className="mt-3 ">
            <label className="label cursor-pointer">
              <input type="checkbox" className="checkbox" />
              <span className="label-text">
                {
                  <div className="text-indigo-700 underline">
                    I accept the Terms and Conditions
                  </div>
                }
              </span>
            </label>
          </div>
          <button
            type="submit"
            className="mt-5 disabled:bg-gray-200 disabled:text-black font-semibold text-xl border-2 w-full px-3 py-2 rounded-lg border-[#40128B] bg-[#40128B] hover:bg-transparent hover:text-indigo-700 text-white "
          >
            Create an account
          </button>
        </form>
        <button className="mt-3">
          <small>
            Already have an account?
            <span className="text-indigo-700 font-semibold underline ms-2">
              <Link href="/login">login here</Link>
            </span>
          </small>
        </button>
      </div>
      {/* login pic */}
      <div className="md:-mt-20 ">
        <img
          src="https://i.ibb.co/kqyn1w9/Sign-up-rafiki.png"
          className="w-[500px]"
          alt=""
        />
      </div>
    </div>
  );
};

export default Register;
