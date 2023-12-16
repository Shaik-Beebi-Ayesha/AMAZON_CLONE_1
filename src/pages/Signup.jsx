import React from 'react'
import {Link} from 'react-router-dom'

function Signup() {
  const handleSignup = (e)=>{
    e.preventDefault();
  }
  return (
    <>
      <div className='flex flex-col items-center bg-white h-full pb-9'>
      <Link to='/home'>
      <div className='my-5'>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png" className="w-28 mt-2"/>
      </div>
      </Link>
      <div className='p-5 w-[30%]  bg-white rounded-md border-[1px] border-gray-300'>
        <h1 className='text-2xl font-titleFont font-bold mb-5'>Create Account</h1>
        <label className='text-xs font-semibold'>Your name</label>
        <div className='flex justify-center'>
        <input type='text' placeholder='First and last name' className='w-[100%] outline-blue-500 px-3 py-1 border-[1px] rounded-md border-gray-400 placeholder:text-xs'/>
        </div>
        <label className='text-xs font-semibold'>Mobile</label>
        <div className='flex justify-center'>
        <input type='text' className='w-[100%] outline-blue-500 px-3 py-1 border-[1px] rounded-md border-gray-400 placeholder:text-xs'/>
        </div>
        <label className='text-xs font-semibold'>Email</label>
        <div className='flex justify-center'>
        <input type='email' className='w-[100%] outline-blue-500 px-3 py-1 border-[1px] rounded-md border-gray-400 placeholder:text-xs'/>
        </div>
        <label className='text-xs font-semibold'>Password</label>
        <div className='flex justify-center'>
        <input type='password' placeholder='At least 6 characters' className='w-[100%] outline-blue-500 px-3 py-1 border-[1px] rounded-md border-gray-400 placeholder:text-xs'/>
        </div>
        <p className='text-[10px] text-semibold mt-2'> Passwords must be at least 6 characters.</p>
        <p className='text-xs mt-5 font-semibold'>To verify your number, we will send you a text message with a temporary code. Message and data rates may apply</p>
        <div className='my-5'>
        <button onClick={handleSignup} className="bg-yellow-400 text-black font-semibold text-xs w-[100%] p-1 rounded-md border-yellow-600 border-[1px] hover:cursor-pointer hover:bg-yellow-500" >
                Create Account
              </button>
        </div>
        <hr/>
        <div className='my-5'>
            <p className='text-xs font-semibold'>Buying for work?</p>
            <p className='text-xs text-blue-500 hover:underline  hover:text-orange-600'>Create a free business account</p>
        </div>
        <hr/>
        <div className='my-5'>
           <p className='text-xs'>Already have an account? <Link to='/signin'><span className='text-blue-500 hover:underline  hover:text-orange-600 font-semibold'>Sign in</span></Link></p> 
        </div>
        <div>
            <p className='text-xs'>By creating an account or logging in, you agree to Amazon’s <span className='text-blue-500  hover:underline  hover:text-orange-600'>Conditions of Use</span> and <span className='text-blue-500 hover:underline  hover:text-orange-600'>Privacy Policy</span>.</p>
        </div>
      </div>
      </div>
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

export default Signup
