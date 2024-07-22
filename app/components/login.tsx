"use client";

import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { AuthContext } from "./auth";
import swal from "sweetalert";
import { jwtDecode } from "jwt-decode";

const Login = () => {
  const [eye, setEye] = useState(false);

  // @ts-expect-error: Unreachable code error
  const { auth, setAuth } = useContext(AuthContext);
  // const router = useRouter();

  console.log(auth);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    try {
      const response = await fetch(
        "https://redux-first-assignment.vercel.app/api/v1/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      const data = await response.json();

      const token = data.token;
      const decoded = jwtDecode(token);
      console.log(decoded, "decoded");

      if (response.ok) {
        swal({
          title: "Login Successful!",
          text: "You are now logged in.",
          icon: "success",
          // @ts-expect-error: Unreachable code error
          button: "Continue",
        });
        setAuth({ user: decoded, token: data.token });
        // router.push("/protected-route"); // Change this to your protected route
      } else {
        throw new Error(data.message || "Failed to login");
      }
    } catch (error) {
      console.error("Login error:", error);
      swal({
        title: "Login Failed",
        // @ts-expect-error: Unreachable code error
        text: error.message,
        icon: "error",
        // @ts-expect-error: Unreachable code error
        button: "Try Again",
      });
    }
  };

  return (
    <div className="md:flex mb-20 mt-36 gap-10 items-center justify-center md:mt-7  ">
      {/* login pic */}
      <div className="">
        <img
          src="https://i.ibb.co/wz7tbnj/Login-rafiki.png"
          className="w-[500px]"
          alt=""
        />
      </div>

      <div className="w-96 p-6 shadow-md bg-white rounded">
        <div className="text-center mb-3 font-bold text-3xl justify-center gap-3 flex items-center">
          <FaUser className="text-fuchsia-700 " />
          <h1 className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-2xl font-black">
            Sign in to your account
          </h1>
        </div>

        <hr className="mt-3" />
        <form onSubmit={handleSubmit}>
          <div className="mt-3">
            <label htmlFor="email" className="block text-base mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder="Enter Email"
              className="border w-full px-2 focus:outline-none text-base py-1 focus:ring-0 focus:border-gray-600 rounded"
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
                required
                placeholder="Enter Password"
                className="border w-full px-2 focus:outline-none text-base py-1 focus:ring-0 focus:border-gray-600 rounded"
              />
              <span onClick={() => setEye(!eye)}>
                {eye ? (
                  <AiFillEye className="text-4xl border focus:outline-none focus:ring-0 focus:border-gray-600 rounded " />
                ) : (
                  <AiFillEyeInvisible className="text-4xl border focus:outline-none focus:ring-0 focus:border-gray-600   rounded " />
                )}
              </span>
            </div>
          </div>
          <div className="mt-3 ">
            <label className="label gap-2 flex  items-center cursor-pointer">
              <input type="checkbox" className="checkbox" />
              <span className="label-text">Remember Me</span>
            </label>
          </div>
          <button
            type="submit"
            className="mt-5 font-semibold text-xl border-2 w-full px-3 py-2 rounded-lg border-[#40128B] bg-[#40128B] hover:bg-transparent hover:text-indigo-700 text-white "
          >
            Sign in
          </button>
        </form>

        <button className="mt-3">
          <small>
            Don’t have an account yet?{" "}
            <span className="text-indigo-700 font-semibold underline">
              <Link href="/register">Sign up</Link>
            </span>
          </small>
        </button>
      </div>
    </div>
  );
};

export default Login;
