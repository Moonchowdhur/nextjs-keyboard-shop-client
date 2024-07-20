"use client";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import {
  AiFillPhone,
  AiOutlineMail,
  AiFillHome,
  AiFillGithub,
} from "react-icons/ai";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-[#dbd3eb] md:px-16 w-full mt-20 p-4 md:mt-30 rounded-md">
      <footer className="footer flex flex-col md:flex-row justify-between items-start">
        <div className="flex flex-col mx-4 md:mx-0  items-start">
          <div className="flex items-center gap-3">
            <img
              src="https://i.ibb.co/7Y3rTBz/yaroslav-kolodiy-6qx-THv-BUq-Eg-unsplash.jpg"
              alt="Instrument Academy"
              className="w-10 h-10 rounded-full"
            />
            <span className="footer-title text-2xl md:text-2xl font-bold">
              Keyboard World
            </span>
          </div>
          <p className="mt-2 text-lg">
            This website is different kind of keyboard.
          </p>
          <div className="flex text-3xl items-center gap-4 my-5">
            <Link href="https://www.facebook.com/meema.chowdhury.5?mibextid=ZbWKwL">
              <BsFacebook className="text-blue-500" />
            </Link>
            <Link href="https://www.instagram.com/meema.chowdhury/?igshid=MzRlODBiNWFlZA%3D%3D">
              <BsInstagram className="text-orange-600" />
            </Link>
            <Link href="https://github.com/Moonchowdhur">
              <AiFillGithub className="text-blue-500 text-4xl" />
            </Link>
          </div>
        </div>

        <div className="flex mx-4 md:mx-0  flex-col md:flex-row md:gap-20 w-full md:w-auto">
          <div className="mt-4  md:mt-0">
            <span className="footer-title text-xl">About</span>
            <ul className="mt-2">
              <li>
                <a className="link  link-hover" href="#">
                  Best Keyboard by popularity
                </a>
              </li>
              <li>
                <a className="link link-hover" href="#">
                  More Search
                </a>
              </li>
              <li>
                <a className="link link-hover" href="#">
                  Top Keyboard Brands
                </a>
              </li>
            </ul>
          </div>
          <div className="mt-4 md:mt-0">
            <span className="footer-title text-xl">Helpful Links</span>
            <ul className="mt-2">
              <li>
                <a className="link link-hover" href="#">
                  Join Our Team
                </a>
              </li>
              <li>
                <a className="link link-hover" href="#">
                  Keyboard Info
                </a>
              </li>
              <li>
                <a className="link link-hover" href="#">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a className="link link-hover" href="#">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-4 mx-4 md:mx-0  md:mt-0">
          <span className="footer-title text-xl">Contact Us</span>
          <div className="mt-2">
            <div className="flex items-center gap-2">
              <AiFillPhone className="text-black text-3xl" />
              <p>+8777090567</p>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <AiOutlineMail className="text-red-500 text-3xl" />
              <p>support@keyboardlife.com</p>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <AiFillHome className="text-black text-3xl" />
              <p>73 Canal Street, Kolkata</p>
            </div>
          </div>
        </div>
      </footer>
      <hr className="mt-8" />
      <div className="flex flex-col md:flex-row justify-around items-center py-5 text-center md:text-left">
        <p>&copy;2024 Keyboard World. All Rights Reserved</p>
        <p>Powered by Keyboard Worl</p>
      </div>
    </div>
  );
};

export default Footer;
