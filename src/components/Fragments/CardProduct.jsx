import React from "react";
import Button from "../Elements/Button";

const CardProduct = (props) => {
    const {children} = props
  return (
    <div className="w-full flex flex-col justify-between  max-w-xs bg-gray-300 border border-gray-200 p-5 rounded-lg shadow-lg">
     {children}
    </div>
  );
};
const Header = (props) => {
    const {src} = props
  return (
    <a href="">
      <img src={src} alt="" className="rounded-lg mx-auto w-full" />
    </a>
  );
};
const Body =(props) => {
    const {name,children} = props
    return (
        <div className="py-5">
        <h1 className="font-bold">{name}</h1>
        <p className="text-xs tracking-wide line-clamp-3 lg:line-clamp-none">{children}</p>
      </div>
    )
}
const Footer= (props) => {
    const {price,handleAddToCart,id} = props
    return (
        <div className="grid grid-cols-1 gap-2 xl:grid-cols-2">
        <span className="lg:text-lg text-xs font-bold">{price.toLocaleString('id-ID',{style:'currency',currency:'IDR'})}</span>
        <Button classess="text-xs xl:text-lg tracking-wide rounded px-2 py-2 lg:py-1 lg:rounded" onClick={()=>handleAddToCart(id)}> Checkout </Button>
      </div>
    )
}

CardProduct.Header = Header
CardProduct.Body = Body
CardProduct.Footer = Footer

export default CardProduct;
