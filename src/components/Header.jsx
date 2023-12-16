import React, { useRef, useState , useEffect} from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CloseIcon from '@mui/icons-material/Close';
import {motion} from 'framer-motion'
import {Link} from 'react-router-dom'
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
    const sideref=useRef();
    const allref=useRef();
  const [showAll, setShowAll] = useState(false);
  const [sideMenu , setSideMenu] =useState(false);
  useEffect(()=>{
    document.body.addEventListener("click",(e)=>{
        if(e.target.contains(sideref.current)){
            setSideMenu(false)
        }
        if(e.target.contains(allref.current)){
          setShowAll(false)
        }
    })
},[sideref,allref,showAll,sideMenu])

const [basketcount,setBasketCount] =useState(0)
useEffect(()=>{
  if(basket?.length==0){
    setBasketCount(0);
  }
  let basketLength = 0;
  basket.map((item)=>{
    basketLength += item.quantity;
    setBasketCount(basketLength)
  })
},[basket])
  return (
    <>
      <div className="bg-amazon_blue w-full px-4 py-1 sticky top-0 text-white flex items-center gap-3 z-40">
        <div className="px-2 py-1 h-[80%] flex items-center border border-transparent hover:border-white cursor-pointer duration-100">
          <Link to='/home'>
          <img
            src="https://freelogopng.com/images/all_img/1688364164amazon-logo-transparent.png"
            className="w-24 mt-2"
          />
          </Link>
        </div>
        <div className="px-2  py-2 h-[80%] items-center border border-transparent hover:border-white cursor-pointer duration-100 hidden mdl:inline-flex">
          <LocationOnIcon />
          <p className="text-xs text-lightText flex flex-col">
            Delivering to Hyderabad 500001{" "}
            <span className="text-white -mt-1 font-extrabold  text-sm">
              Update location
            </span>
          </p>
        </div>
        <div className="h-8 rounded-md hidden lgl:flex flex-grow relative">
          <span
            onClick={() => setShowAll(!showAll)}
            className="h-full w-12 flex items-center justify-center bg-lightText text-amazon_blue pl-2 hover:bg-gray-400 cursor-pointer duration-300 rounded-tl-md rounded-bl-md"
          >
            <span>All</span>
            <span>
              <ArrowDropDownIcon />
            </span>
          </span>
          {showAll && (
            <div ref={allref} className="absolute w-56 h-80 top-10 left-0 bg-white text-black border-[1px] border-amazon_blue flex-col gap-1 z-50 overflow-y-scroll overflow-x-hidden">
              <ul>
                <li className="text-xs font-semibold text-black pl-2 p-[0.125rem] hover:bg-blue-600 hover:text-white">
                  All Departments
                </li>
                <li className="text-xs font-semibold text-black pl-2 p-[0.125rem] hover:bg-blue-600 hover:text-white">
                  Arts & Crafts
                </li>
                <li className="text-xs font-semibold text-black pl-2 p-[0.125rem] hover:bg-blue-600 hover:text-white">
                  Automotive
                </li>
                <li className="text-xs font-semibold text-black pl-2 p-[0.125rem] hover:bg-blue-600 hover:text-white">
                  Baby
                </li>
                <li className="text-xs font-semibold text-black pl-2 p-[0.125rem] hover:bg-blue-600 hover:text-white">
                  Beauty & Personal Care
                </li>
                <li className="text-xs font-semibold text-black pl-2 p-[0.125rem] hover:bg-blue-600 hover:text-white">
                  Books
                </li>
                <li className="text-xs font-semibold text-black pl-2 p-[0.125rem] hover:bg-blue-600 hover:text-white">
                  Boys' Fashion
                </li>
                <li className="text-xs font-semibold text-black pl-2 p-[0.125rem] hover:bg-blue-600 hover:text-white">
                  Computers
                </li>
                <li className="text-xs font-semibold text-black pl-2 p-[0.125rem] hover:bg-blue-600 hover:text-white">
                  Deals
                </li>
                <li className="text-xs font-semibold text-black pl-2 p-[0.125rem] hover:bg-blue-600 hover:text-white">
                  Digital Music
                </li>
                <li className="text-xs font-semibold text-black pl-2 p-[0.125rem] hover:bg-blue-600 hover:text-white">
                  Electronics
                </li>
                <li className="text-xs font-semibold text-black pl-2 p-[0.125rem] hover:bg-blue-600 hover:text-white">
                  Girls' Fashion
                </li>
                <li className="text-xs font-semibold text-black pl-2 p-[0.125rem] hover:bg-blue-600 hover:text-white">
                  Health & Household
                </li>
                <li className="text-xs font-semibold text-black pl-2 p-[0.125rem] hover:bg-blue-600 hover:text-white">
                  Home & Kitchen
                </li>
                <li className="text-xs font-semibold text-black pl-2 p-[0.125rem] hover:bg-blue-600 hover:text-white">
                  Industrial & Scientific
                </li>
                <li className="text-xs font-semibold text-black pl-2 p-[0.125rem] hover:bg-blue-600 hover:text-white">
                  Kindle Store
                </li>
                <li className="text-xs font-semibold text-black pl-2 p-[0.125rem] hover:bg-blue-600 hover:text-white">
                  Luggage
                </li>
                <li className="text-xs font-semibold text-black pl-2 p-[0.125rem] hover:bg-blue-600 hover:text-white">
                  Men's Fashion
                </li>
                <li className="text-xs font-semibold text-black pl-2 p-[0.125rem] hover:bg-blue-600 hover:text-white">
                  Movies & TV
                </li>
                <li className="text-xs font-semibold text-black pl-2 p-[0.125rem] hover:bg-blue-600 hover:text-white">
                  Music, CDs & Vinyl
                </li>
                <li className="text-xs font-semibold text-black pl-2 p-[0.125rem] hover:bg-blue-600 hover:text-white">
                  Pet Supplies
                </li>
                <li className="text-xs font-semibold text-black pl-2 p-[0.125rem] hover:bg-blue-600 hover:text-white">
                  Prime Video
                </li>
                <li className="text-xs font-semibold text-black pl-2 p-[0.125rem] hover:bg-blue-600 hover:text-white">
                  Software
                </li>
                <li className="text-xs font-semibold text-black pl-2 p-[0.125rem] hover:bg-blue-600 hover:text-white">
                  Sports & Outdoors
                </li>
                <li className="text-xs font-semibold text-black pl-2 p-[0.125rem] hover:bg-blue-600 hover:text-white">
                  Tools & Home Improvement
                </li>
                <li className="text-xs font-semibold text-black pl-2 p-[0.125rem] hover:bg-blue-600 hover:text-white">
                  Toys & Games
                </li>
                <li className="text-xs font-semibold text-black pl-2 p-[0.125rem] hover:bg-blue-600 hover:text-white">
                  Video Games
                </li>
                <li className="text-xs font-semibold text-black pl-2 p-[0.125rem] hover:bg-blue-600 hover:text-white">
                  Women's Fashion
                </li>
              </ul>
            </div>
          )}

          <input
            className="h-full text-base text-amazon_blue flex-grow outline-none border-none px-2"
            type="text"
          />
          <span className="h-full w-12 flex items-center justify-center bg-amazon_yellow hover:bg-[#f3a847] duration-300 text-amazon_blue cursor-pointer rounded-tr-md rounded-br-md">
            <SearchIcon />
          </span>
        </div>
        <div className="px-2  py-2 h-[80%] items-center border border-transparent hover:border-white cursor-pointer duration-100">
          <Link to='/signin'>
          <p className="text-sm mdl:text-xstext-white font-bold mdl:font-normal mdl:text-lightText flex flex-col">
            Hello,sign in{" "}
            <span className="text-white -mt-1 font-extrabold  text-sm hidden mdl:inline-flex">
              Accounts & Lists
              <ArrowDropDownIcon />
            </span>
          </p>
          </Link>
        </div>
        <div className="px-2  py-2 h-[80%] hidden lgl:flex items-center border border-transparent hover:border-white cursor-pointer duration-100">
          <p className="text-xs text-lightText flex flex-col">
            Returns{" "}
            <span className="text-white -mt-1 font-extrabold  text-sm">
              & Orders
              <ArrowDropDownIcon />
            </span>
          </p>
        </div>
        <div className="px-2 py-2 h-[80%] flex items-end border border-transparent hover:border-white cursor-pointer duration-100 relative">
          <Link to='/checkout'>
          <span className="">
            <ShoppingCartIcon className="" />
          </span>
          <span className="text-xs font-bold">
            Cart
            <span className="absolute text-xs top-0 left-6 p-1 h-4 bg-amazon_yellow text-amazon_blue rounded-full flex justify-center items-center font-semibold">
              {basketcount}
            </span>
          </span>
          </Link>
        </div>
      </div>

      <div className="w-full px-4 bg-amazon_light text-white h-[40px] pt-1 flex justify-between">
        <div className="flex">
          <div onClick={()=>setSideMenu(true)} className="px-2  text-xs font-semibold py-2 h-[80%] flex items-center border border-transparent hover:border-white cursor-pointer duration-100">
            <MenuIcon />
            All
          </div>
          <div className="px-2  text-xs font-semibold py-2 h-[80%] hidden mdl:flex items-center border border-transparent hover:border-white cursor-pointer duration-100">
            Fresh
          </div>
          <div className="px-2  text-xs font-semibold py-2 h-[80%] hidden mdl:flex items-center border border-transparent hover:border-white cursor-pointer duration-100">
            Amazon miniTV
          </div>
          <div className="px-2  text-xs font-semibold py-2 h-[80%] hidden mdl:flex items-center border border-transparent hover:border-white cursor-pointer duration-100">
            Sell
          </div>
          <div className="px-2  text-xs font-semibold py-2 h-[80%] hidden mdl:flex items-center border border-transparent hover:border-white cursor-pointer duration-100">
            Best Sellers
          </div>
          <div className="px-2  text-xs font-semibold py-2 h-[80%] hidden mdl:flex items-center border border-transparent hover:border-white cursor-pointer duration-100">
            Today's Deals
          </div>
          <div className="px-2  text-xs font-semibold py-2 h-[80%] hidden mdl:flex items-center border border-transparent hover:border-white cursor-pointer duration-100">
            Mobiles
          </div>
          <div className="px-2  text-xs font-semibold py-2 h-[80%] hidden mdl:flex items-center border border-transparent hover:border-white cursor-pointer duration-100">
            Customer Services
          </div>
          <div className="px-2  text-xs font-semibold py-2 h-[80%] hidden mdl:flex items-center border border-transparent hover:border-white cursor-pointer duration-100">
            Electronics
          </div>
        </div>
        <div className="hidden mdl:inline-block">
          <img
            src="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/G/31/IN-hq/2021/img/Mobile_Traffic_/XCM_Manual_1321458_1651511_IN_3781247_400x39_en_IN._CB655944656_.jpg"
            className="h-[90%]"
          />
        </div>
      </div>
      {
        sideMenu && 
        <div className="flex items-start w-full h-screen bg-amazon_blue bg-opacity-70">
        <motion.div initial={{x:-500 , opacity:0}} animate={{x:0,opacity:1}} transition={{duration:0.5}}  className="relative left-[80%] xxs:left-[85%] mdl:left-[60%] lgl:left-[30%] bottom-[100px] cursor-pointer text-black ml-1 flex justify-center items-center hover:bg-gray-300 z-50" ><CloseIcon onClick={()=>setSideMenu(false)} className="bg-white p-1"/></motion.div>
         <motion.div ref={sideref} initial={{x:-500 , opacity:0}} animate={{x:0,opacity:1}} transition={{duration:0.5}} className="w-[80%] xxs:w-[85%] mdl:w-[60%] lgl:w-[30%] h-screen fixed top-0 left-0 overflow-y-scroll overflow-x-scroll z-50">
            <div className="bg-amazon_light py-3 px-10">
                <p className="text-lg font-semibold text-white"><AccountCircleIcon/><span className='pl-2'>Hello , sign in</span></p>
            </div>
            <div className="bg-white py-2 text-black">
                <div className="font-bold px-10 text-lg py-3">Trending</div>
                <div className="">
                    <ul>
                        <li className="py-2 px-10 text-sm text-black hover:bg-gray-200">Best Sellers</li>
                        <li className="py-2 px-10 text-sm text-black hover:bg-gray-200">New Releases</li>
                        <li className="py-2 px-10 text-sm text-black hover:bg-gray-200">Movers & Shakers</li>
                    </ul>
                </div>
                <hr/>
            </div>
            <div className="bg-white py-2 text-black">
                <div className="font-bold px-10 text-lg py-3">Digital Content And Devices</div>
                <div className="">
                    <ul>
                        <li className="py-2 px-10 text-sm text-black hover:bg-gray-200">Amazon miniTV free Entertainment</li>
                        <li className="py-2 px-10 text-sm text-black hover:bg-gray-200">Echo & Alexa<KeyboardArrowRightIcon className="float-right text-gray-500"/></li>
                        <li className="py-2 px-10 text-sm text-black hover:bg-gray-200">Fire TV<KeyboardArrowRightIcon className="float-right text-gray-500"/></li>
                        <li className="py-2 px-10 text-sm text-black hover:bg-gray-200">Kindle E-Readers & eBooks<KeyboardArrowRightIcon className="float-right text-gray-500"/></li>
                        <li className="py-2 px-10 text-sm text-black hover:bg-gray-200">Audible Audiobooks<KeyboardArrowRightIcon className="float-right text-gray-500"/></li>
                        <li className="py-2 px-10 text-sm text-black hover:bg-gray-200">Amazon Prime Video<KeyboardArrowRightIcon className="float-right text-gray-500"/></li>
                        <li className="py-2 px-10 text-sm text-black hover:bg-gray-200">Amazon Prime Music<KeyboardArrowRightIcon className="float-right text-gray-500"/></li>
                    </ul>
                </div>
                <hr/>
            </div>
            <div className="bg-white py-2 text-black">
                <div className="font-bold px-10 text-lg py-3">Shop By Category</div>
                <div className="">
                    <ul>
                        <li className="py-2 px-10 text-sm text-black hover:bg-gray-200">Mobiles, Computers<KeyboardArrowRightIcon className="float-right text-gray-500"/></li>
                        <li className="py-2 px-10 text-sm text-black hover:bg-gray-200">TV, Appliances, Electronics<KeyboardArrowRightIcon className="float-right text-gray-500"/></li>
                        <li className="py-2 px-10 text-sm text-black hover:bg-gray-200">Men's Fashion<KeyboardArrowRightIcon className="float-right text-gray-500"/></li>
                        <li className="py-2 px-10 text-sm text-black hover:bg-gray-200">Women's Fashion<KeyboardArrowRightIcon className="float-right text-gray-500"/></li>
                        <li className="py-2 px-10 text-sm text-black my-4 hover:bg-gray-200">See All<KeyboardArrowDownIcon className="text-gray-500"/></li>
                    </ul>
                </div>
                <hr/>
            </div>
            <div className="bg-white py-2 text-black">
                <div className="font-bold px-10 text-lg py-3">Programs & Features</div>
                <div className="">
                    <ul>
                        <li className="py-2 px-10 text-sm text-black hover:bg-gray-200">Amazon Pay</li>
                        <li className="py-2 px-10 text-sm text-black hover:bg-gray-200">Gift Cards & Mobile Recharges<KeyboardArrowRightIcon className="float-right text-gray-500"/></li>
                        <li className="py-2 px-10 text-sm text-black hover:bg-gray-200">Amazon Launchpad</li>
                        <li className="py-2 px-10 text-sm text-black hover:bg-gray-200">Handloom and Handicrafts</li>
                        <li className="py-2 px-10 text-sm text-black my-4 hover:bg-gray-200">See All<KeyboardArrowDownIcon className="text-gray-500"/></li>
                    </ul>
                </div>
                <hr/>
            </div>
            <div className="bg-white py-2 text-black">
                <div className="font-bold px-10 text-lg py-3">Help & Settings</div>
                <div className="">
                    <ul>
                        <li className="py-2 px-10 text-sm text-black hover:bg-gray-200">Your Account</li>
                        <li className="py-2 px-10 text-sm text-black hover:bg-gray-200">Customer Service</li>
                        <li className="py-2 mb-10 px-10 text-sm text-black hover:bg-gray-200">Sign in</li>
                        
                    </ul>
                </div>
                <hr/>
            </div>
        </motion.div>
        
        </div>
        
      }
    </>
  );
}

export default Header;
