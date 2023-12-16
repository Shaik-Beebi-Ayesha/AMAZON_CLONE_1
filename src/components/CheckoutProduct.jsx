
import React, { useState } from 'react';
import { useStateValue } from "./StateProvider";
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';



function CheckoutProduct({ id, image, title, price, rating ,description,discountPercentage,quantity }) {
    const [{ basket }, dispatch] = useStateValue();
    const removeFromBasket = () => {
        
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }
    
    const Icon = ({ symbol }) => {
        return <span className="text-yellow-500">{symbol}</span>;
      };
      const IconDisplay = ({ iconfull,iconnull, times }) => {
        const icons = [];
        for (let i = 0; i < times; i++) {
          icons.push(<Icon key={i} symbol={iconfull}/>);
        }
        for (let i = 0; i < 5-times; i++) {
          icons.push(<Icon key={6+i} symbol={iconnull}/>);
          }
        return <div>{icons}</div>;
      };


    const increment = ()=>{
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
              id:id,
              title: title,
              image: image,
              description : description,
              price: price,
              rating: rating,
              quantity : 0,
              discountPercentage:discountPercentage,
            },
          });
    }
    const decrement = ()=>{
        if(quantity<=1){
          return;
        }
        dispatch({
          type: "SUB_TO_BASKET",
          item: {
            id:id,
            title: title,
            image: image,
            description : description,
            price: price,
            rating: rating,
            quantity : 0,
            discountPercentage:discountPercentage,
          },
        });
    }
    return (
        <>
            <div className='flex p-3 gap-6'>
                <div className='w-[20%] h-[100%]'>
                    <img className='h-[180px]' src={image}/>
                </div>
                <div className='w-[65%]'>
                    <span className='text-[20px] font-semibold mr-5'>{title}</span>
                    <span className="font-extrabold bg-red-700 text-white py-[1px] px-2 right-20 text-xs">{Math.round(discountPercentage)}% OFF</span>
                    <p className='text-sm my-5'>{description}</p>
                    <button className='bg-gray-300 p-[2px] px-1 rounded-md shadow-md shadow-gray-300 mb-4'>Qty: <button className='bg-gray-100 px-2 hover:bg-gray-200' onClick={increment}>+</button><span className='px-2'>{quantity}</span><button className='bg-gray-100 px-2 hover:bg-gray-200' onClick={decrement}>-</button></button>
                    <span className=""><span><IconDisplay iconfull={<StarIcon/>} iconnull={<StarBorderIcon/>} times={Math.round(rating)}/></span></span>
                    <button className="bg-yellow-400 text-black font-semibold text-xs my-3 p-1 rounded-md border-yellow-600 border-[1px] hover:cursor-pointer hover:bg-yellow-500" onClick={removeFromBasket} >
          Remove from Cart
        </button>
                </div>
                <div className='font-semibold'>
                    <p className='float-right'>${price}</p>
                </div>
            </div>
            <hr/>
        
        </>
      
    )
}

export default CheckoutProduct
