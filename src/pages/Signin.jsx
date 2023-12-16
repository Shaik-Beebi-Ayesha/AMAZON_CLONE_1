import React from 'react'
import {Link} from 'react-router-dom'

function Signin() {
  return (
    <>
      <div className='flex flex-col items-center bg-white h-full pb-9'>
      <Link to='/home'>
      <div className='my-5'>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png" className="w-28 mt-2"/>
      </div>
      </Link>
      <div className='p-5 w-[30%]  bg-white rounded-md border-[1px] border-gray-300'>
      <h1 className='text-2xl font-titleFont font-bold mb-5'>Sign In</h1>
        <label className='text-xs font-semibold'>Email or mobile phone number</label>
        <div className='flex justify-center'>
        <input type='text' className='w-[100%] outline-blue-500 px-3 py-1 border-[1px] rounded-md border-gray-400 placeholder:text-xs'/>
        </div>
        <label className='text-xs font-semibold'>PassWord</label>
        <div className='flex justify-center'>
        <input type='password' className='w-[100%] outline-blue-500 px-3 py-1 border-[1px] rounded-md border-gray-400 placeholder:text-xs'/>
        </div>
        <div className='my-5'>
        <button onClick={(e)=>e.preventDefault()} className="bg-yellow-400 text-black font-semibold text-xs w-[100%] p-1 rounded-md border-yellow-600 border-[1px] hover:cursor-pointer hover:bg-yellow-500" >
                Continue
              </button>
        </div>
        <div>
            <p className='text-xs'>By continuing , you agree to Amazon’s <span className='text-blue-500  hover:underline  hover:text-orange-600'>Conditions of Use</span> and <span className='text-blue-500 hover:underline  hover:text-orange-600'>Privacy Policy</span>.</p>
        </div>
        <p className='text-xs text-blue-500 my-5 hover:underline hover:text-orange-600'>Need help?</p>
        <hr/>
        <div className='my-5'>
            <p className='text-xs font-semibold'>Buying for work?</p>
            <p className='text-xs text-blue-500 hover:underline  hover:text-orange-600'>Shop on Amazon Business</p>
        </div>
      </div>
      </div>
      <div className='flex flex-col items-center bg-white h-full pb-9'>
        <p className='text-xs'>New to Amazon ?</p>
        <div className='my-2 w-[30%]'>
        <Link to='/signup'>
        <button className=" text-black font-semibold text-xs w-[100%] p-1 rounded-md border-gray-600 border-[1px] hover:cursor-pointer hover:bg-gray-100" onClick={()=>handle(product.id)}>
                Continue
              </button>
        </Link>
        </div>
      </div>
      <hr/>
      <div  className='flex flex-col items-center bg-white h-full pt-3 pb-9'>
        <div className='flex gap-5 text-xs my-2'>
            <p className='text-blue-500 hover:underline  hover:text-orange-600'>Conditions of Use</p>
            <p className='text-blue-500 hover:underline  hover:text-orange-600'>Privacy Notice </p>
            <p className='text-blue-500 hover:underline  hover:text-orange-600'>Help</p>
        </div>
        <p className='text-xs'>© 1996-2023, Amazon.com, Inc. or its affiliates</p>
        
      </div>
    </>
  )
}

export default Signin
