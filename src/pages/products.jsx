import React, { useEffect, useRef, useState } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import { getProduct } from "../services/products.service";
import TableCart from "../components/Fragments/tableCart";
import Navbar from "../components/Fragments/Navbar";


export default function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProduct((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <>
      <Navbar />
      <div className="grid lg:grid-cols-3 grid-cols-1">
        <div className="col-span-2 bg-blue-400 grid grid-cols-2 xl:grid-cols-2 lg: p-4 gap-3 place-content-center justify-center min-h-screen">
          {products.map((product) => (
            <CardProduct key={product.id}>
              <CardProduct.Header src={product.image} id={product.id} />
              <CardProduct.Body name={product.title}>
                {product.description}
              </CardProduct.Body>
              <CardProduct.Footer price={product.price} id={product.id} />
            </CardProduct>
          ))}
        </div>
        <div className="col-span-1 lg:w-full  bg-slate-200 ">
          <h2 className="text-md lg:text-lg font-semibold mx-auto text-blue-500 px-2">
            Cart
          </h2>
          <div className=" xl:px-1 px-0 py-2 xl:py-0 overflow-x-auto ">
            <TableCart products={products} />
          </div>
        </div>
      </div>
    </>
  );
}
