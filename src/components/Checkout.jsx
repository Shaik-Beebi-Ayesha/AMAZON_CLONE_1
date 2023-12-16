import React, { useState,useEffect } from "react";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [totalPrice , setTotalPrice] = useState(0);
  const [basketCount , setBasketCount] = useState(0);
  
  useEffect(()=>{
    let Total = 0;
    let basketLength = 0;
    if(basket?.length==0){
      setTotalPrice(0);
      setBasketCount(0);
    }
    basket.map((item)=>{
      Total += item.price*(item.quantity);
      basketLength += item.quantity;
      setTotalPrice(Total);
      setBasketCount(basketLength);
    })
  },[basket])
  return (
    
    <>
      <div className="flex justify-around h-full m-5">
        <div className="w-[70%] bg-white p-6">
          <h1 className="text-2xl font-semibold">Shopping Cart</h1>
          <span className="float-right text-sm font-semibold relative right-12">Price</span>
          <p className="text-sm text-[#226f54] hover:underline font-semibold mb-5">Deselect all items</p>
          <hr/>
          
          {basket.map(item => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
              description={item.description}
              discountPercentage={item.discountPercentage}
              quantity={item.quantity}
            />
          ))}
        </div>  
        <div className="w-[25%] bg-white h-full p-5">
          <Subtotal total={totalPrice} itemscount={basketCount}/>
        </div>
      </div>    
    </>
  );
}

export default Checkout;
