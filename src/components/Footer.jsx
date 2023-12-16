import React from "react";
import LanguageIcon from "@mui/icons-material/Language";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import {Link} from 'react-router-dom'

function Footer() {
  return (
    <>
      <div className="font-titleFont">
        <div className="w-full py-6 bg-white">
          <div className="w-full py-8  border-t-[1px] border-b-[1px]">
            <div className="w-64 mx-auto text-center">
              <p className="font-titleFont text-xs font-semibold">
                See personalized recommendations
              </p>
              <Link to='/signin'>
              <button className="bg-yellow-400 text-black font-semibold text-xs w-full p-1 rounded-md border-yellow-600 border-[1px] hover:cursor-pointer hover:bg-yellow-500">
                Sign in
              </button>
              </Link>
              <small className="font-titleFont text-xs font-semibold">
                New customer?{" "}
                <span className="text-blue-600 font-normal hover:cursor-pointer hover:text-orange-600">
                  Start here
                </span>
              </small>
            </div>
          </div>
        </div>
        <div className="bg-slate-700 py-2 text-white text-center font-bold text-sm hover:bg-slate-600">
          <p>Back to top</p>
        </div>
        <div className="w-full py-10 border-b-[1px] border-gray-500 bg-amazon_light text-white">
          <div className="max-w-5xl mx-auto text-gray-300 flex flex-col justify-center gap-5 items-center md:gap-0 md:flex-row md:justify-evenly md:items-start px-5 lgl:px-0">
            <div className="font-titleFont text-sm flex flex-col gap-1">
              <h5 className="text-center md:text-left font-extrabold text-white mb-4">
                Get to Know Us
              </h5>
              <p className="text-center md:text-left hover:underline">About Us</p>
              <p className="text-center md:text-left hover:underline">Careers</p>
              <p className="text-center md:text-left hover:underline">Press Releases</p>
              <p className="text-center md:text-left hover:underline">Amazon Science</p>
            </div>
            <div className="font-titleFont text-sm flex flex-col gap-1">
              <h5 className=" text-center md:text-left font-extrabold text-white  mb-4">
                Connect with Us
              </h5>
              <p className="text-center md:text-left hover:underline">Facebook</p>
              <p className="text-center md:text-left hover:underline">Twitter</p>
              <p className="text-center md:text-left hover:underline">Instagram</p>
            </div>
            <div className="font-titleFont text-sm flex flex-col gap-1">
              <h5 className="text-center md:text-left font-extrabold text-white  mb-4">
                Make Money with Us
              </h5>
              <p className="text-center md:text-left hover:underline">Sell on Amazon</p>
              <p className="text-center md:text-left hover:underline">Sell under Amazon Accelerator</p>
              <p className="text-center md:text-left hover:underline">Protect and Build Your Brand</p>
              <p className="text-center md:text-left hover:underline">Amazon Global Selling</p>
              <p className="text-center md:text-left hover:underline">Become an Affiliate</p>
              <p className="text-center md:text-left hover:underline">Fulfilment by Amazon</p>
              <p className="text-center md:text-left hover:underline">Advertise Your Products</p>
              <p className="text-center md:text-left hover:underline">Amazon Pay on Merchants</p>
            </div>
            <div className="font-titleFont text-sm flex flex-col gap-1">
              <h5 className="text-center md:text-left font-extrabold text-white  mb-4">
                Let Us Help You
              </h5>
              <p className="text-center md:text-left hover:underline">COVID-19 and Amazon</p>
              <p className="text-center md:text-left hover:underline">Your Account</p>
              <p className="text-center md:text-left hover:underline">Returns Centre</p>
              <p className="text-center md:text-left hover:underline">100% Purchase Protection</p>
              <p className="text-center md:text-left hover:underline">Amazon App Download</p>
              <p className="text-center md:text-left hover:underline">Help</p>
            </div>
          </div>
        </div>
        <div className="w-full py-10 border-gray-500 bg-amazon_light text-white flex flex-col justify-center items-center">
          <div className="w-52 flex justify-between items-centers">
            <img
              className="w-20 hover:cursor-pointer relative top-2"
              src="https://amazonyoutube.vercel.app/static/media/logo.1c9be0b254d3ff1dc9e9.png"
            />
            <div>
              <p className="text-sm p-1 border-white border-[1px]">
                <LanguageIcon className="mr-1" />
                English
                <UnfoldMoreIcon className="ml-1" />
              </p>
            </div>
          </div>
          <div className="max-w-3xl flex flex-wrap justify-center gap-2 mt-5 px-4 lgl:px-0">
            <p className="text-xs hover:underline">Australia</p>
            <p className="text-xs hover:underline">Brazil</p>
            <p className="text-xs hover:underline">Canada</p>
            <p className="text-xs hover:underline">China</p>
            <p className="text-xs hover:underline">France</p>
            <p className="text-xs hover:underline">Germany</p>
            <p className="text-xs hover:underline">Italy</p>
            <p className="text-xs hover:underline">Japan</p>
            <p className="text-xs hover:underline">Mexico</p>
            <p className="text-xs hover:underline">Netherlands</p>
            <p className="text-xs hover:underline">Poland</p>
            <p className="text-xs hover:underline">Singapore</p>
            <p className="text-xs hover:underline">Spain</p>
            <p className="text-xs hover:underline">Turkey</p>
            <p className="text-xs hover:underline">United Arab Emirates</p>
            <p className="text-xs hover:underline">United Kingdom</p>
            <p className="text-xs hover:underline">United States</p>
          </div>
        </div>
        <div className="w-full bg-amazon_blue py-5 px-5 lgl:px-0">
          <div className="max-w-4xl mx-auto text-gray-300 flex flex-col justify-center gap-4 items-center md:flex-row md:justify-between md:items-start md:gap-0 px-5 lgl:px-0">
            <div className="flex flex-col gap-4">
              <div className="text-center hover:underline hover:cursor-pointer">
                <p className="text-xs font-semibold">AbeBooks</p>
                <p className="text-xs">Books, art</p>
                <p className="text-xs">& collectibles</p>
              </div>
              <div className="text-center hover:underline hover:cursor-pointer">
                <p className="text-xs font-semibold">Shopbop</p>
                <p className="text-xs">Designer</p>
                <p className="text-xs">Fashion Brands</p>
              </div>
            </div>
            <div className="text-center flex flex-col gap-4">
              <div className="hover:underline hover:cursor-pointer">
                <p className="text-xs font-semibold">Amazon Web Services</p>
                <p className="text-xs">Scalable Cloud</p>
                <p className="text-xs">Computing Services</p>
              </div>
              <div className="hover:underline hover:cursor-pointer">
                <p className="text-xs font-semibold">Amazon Business</p>
                <p className="text-xs">Everything For</p>
                <p className="text-xs">Your Business</p>
              </div>
            </div>
            <div className="text-center flex flex-col gap-4">
              <div className="hover:underline hover:cursor-pointer">
                <p className="text-xs font-semibold">Audible</p>
                <p className="text-xs">Download</p>
                <p className="text-xs">Audio Books</p>
              </div>
              <div className="hover:underline hover:cursor-pointer">
                <p className="text-xs font-semibold">Prime Now</p>
                <p className="text-xs">2-Hour Delivery</p>
                <p className="text-xs">on Everyday Items</p>
              </div>
            </div>
            <div className="text-center flex flex-col gap-4">
              <div className="hover:underline hover:cursor-pointer">
                <p className="text-xs font-semibold">IMDb</p>
                <p className="text-xs">Movies, TV</p>
                <p className="text-xs">& Celebrities</p>
              </div>
              <div className="hover:underline hover:cursor-pointer">
                <p className="text-xs font-semibold">Amazon Prime Music</p>
                <p className="text-xs">100 million songs, ad-free</p>
                <p className="text-xs">Over 15 million podcast episodes</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-amazon_blue py-5 flex flex-col justify-center items-center pt-10">
            <div className="flex gap-4">
                <p className="text-xs text-white hover:underline hover:cursor-pointer">Conditions of Use & Sale</p>
                <p className="text-xs text-white hover:underline hover:cursor-pointer">Privacy Notice</p>
                <p className="text-xs text-white hover:underline hover:cursor-pointer">Interest-Based Ads</p>
            </div>
            <p className="text-white text-xs mt-1">© 1996-2023, Amazon.com, Inc. or its affiliates</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
