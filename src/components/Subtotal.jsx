import React,{useState} from 'react'
import BeenhereRoundedIcon from '@mui/icons-material/BeenhereRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';

function Subtotal({total,itemscount}) {
    const[emi,setemi] = useState(false)
  return (
    <>
      <div className='flex justify-center gap-2'>
        <BeenhereRoundedIcon className='text-[#24715b]'/>
        <div><p className='text-xs text-[#24715b] font-semibold flex'> Your order qualifies for FREE Shipping Choose this option at checkout. See details....</p></div>
      </div>
      <div className='flex justify-center'>
        <p className='font-semibold mt-5'>Subtotal ({itemscount} items) : <span className='font-extrabold'>${total}</span></p>
      </div>
      <div className='flex justify-center'>
        <button className='bg-yellow-400 hover:bg-yellow-500 w-[90%] rounded-md my-5 border-yellow-600 border-[1px] font-semibold text-sm p-1'>Proceed to Buy</button>
      </div>
      <div className='flex justify-center'>
            <div className=' w-[90%] border-[1px] border-gray-300 py-2 px-3' onClick={()=>setemi(!emi)}>
            <span className='text-sm'>EMI Available</span>
            <KeyboardArrowDownRoundedIcon className='float-right'/>
            {
                emi && (
                    <div className='my-3'>
                    <p className='text-xs'>Your order qualifies for EMI with valid credit cards (not available on purchase of Gold, Jewelry, Gift cards and Amazon pay balance top up).<span className='text-[#24715b] hover:underline font-semibold'> Learn more</span></p>
                </div>
                )
            }
            </div>
      </div>
    </>
  )
}

export default Subtotal
