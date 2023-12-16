import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { useStateValue } from "./StateProvider";

function SingleProduct({id,title,image,description,price,rating,discountPercentage,quantity}) {
  const [{ basket }, dispatch] = useStateValue();
  const addToBasket = () => {
    
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id:id,
        title: title,
        image: image,
        description : description,
        price: price,
        rating: rating,
        quantity : quantity,
        discountPercentage:discountPercentage,
      },
    });
  };
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
  return (
    <div>
      <div className="flex flex-wrap relative hover:cursor-pointer">
        <div className="bg-white text-sm sm:w-[350px] mdl:w-[350px] lgl:w-[300px] h-[420px] p-4 shadow-slate-600">
          <img className="w-[80%] h-[50%] m-auto mb-6" src={image}/>
          <span className="float-right font-semibold">${price}</span>
          <p className="font-bold mb-3">{title}</p>
          <p className="text-xs">{description}</p>
          <span className="absolute bottom-16 font-extrabold bg-red-700 text-white py-[1px] px-2 right-20 text-xs">{Math.round(discountPercentage)}% OFF</span>
          <span className="absolute bottom-16"><span><IconDisplay iconfull={<StarIcon/>} iconnull={<StarBorderIcon/>} times={Math.round(rating)}/></span></span>
          <div className="absolute bottom-4 left-0 sm:w-[400px] mdl:w-[300px] flex justify-center">
          <button className="bg-yellow-400 text-black font-semibold text-xs sm:w-[60%] mdl:w-[80%] p-1 rounded-md border-yellow-600 border-[1px] hover:cursor-pointer hover:bg-yellow-500" onClick={addToBasket} >
          Add to Cart
        </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleProduct
