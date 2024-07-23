import React, { useEffect, useRef, useState } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import Navbar from "../components/Fragments/Navbar";
import "flowbite";
import { getProduct } from "../services/products.service";

export default function ProductsPage() {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProduct((data) => {
      setProducts(data);
    });
  }, []);

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);
  useEffect(() => {
    if (products.length > 0 && cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + product.price * item.quantity;
      }, 0);
      setTotalPrice(sum);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, products]);
  const handleAddToCart = (id) => {
    if (cart.find((item) => item.id === id)) {
      setCart(
        cart.map((item) =>
          item.id == id ? { ...item, quantity: item.quantity + 1 } : item,
        ),
      );
    } else {
      setCart([
        ...cart,
        {
          id: id,
          quantity: 1,
        },
      ]);
    }
  };

  // useReff
  const cartRef = useRef([{ id: 1, quantity: 1 }]);

  const handleAddCartRef = (id) => {
    cartRef.current = [...cartRef.current, { id: id, quantity: 1 }];
    localStorage.setItem("cart", JSON.stringify(cartRef.current));
  };

  const totalPriceRef = useRef(null);
  useEffect(() => {
    if (cart.length > 0) {
      totalPriceRef.current.style.display = "table-row";
    } else {
      totalPriceRef.current.style.display = "none";
    }
  }, [cart, products]);

  return (
    <>
      <Navbar />
      <div className="grid lg:grid-cols-3 grid-cols-1">
        <div className="col-span-2 bg-blue-400 grid grid-cols-2 xl:grid-cols-2 lg: p-4 gap-3 place-content-center justify-center min-h-screen">
          {products.map((product) => (
            <CardProduct key={product.id}>
              <CardProduct.Header src={product.image} />
              <CardProduct.Body name={product.title}>
                {product.description}
              </CardProduct.Body>
              <CardProduct.Footer
                price={product.price}
                handleAddToCart={handleAddToCart}
                id={product.id}
              />
            </CardProduct>
          ))}
        </div>
        <div className="col-span-1 lg:w-full bg-slate-200 ">
          <h2 className="text-xl font-semibold mx-auto text-blue-500 px-2">
            Cart
          </h2>
          <div className="relative xl:px-1 px-2 py-2 xl:py-0 overflow-x-auto">
            <table className="w-1/2  text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Product name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    price
                  </th>
                  <th scope="col" className="px-6 py-3">
                    quantity
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Total
                  </th>
                </tr>
              </thead>
              <tbody>
                {products.length > 0 &&
                  cart.map((item) => {
                    const product = products.find(
                      (product) => product.id === item.id,
                    );
                    return (
                      <tr className="bg-white dark:bg-gray-800" key={item.id}>
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          {product.title.substring(0,20)}
                        </th>
                        <td className="px-6 py-4">
                          {product.price.toLocaleString("us-US", {
                            style: "currency",
                            currency: "USD",
                          })}
                        </td>
                        <td className="px-6 py-4">{item.quantity}</td>
                        <td className="px-6 py-4">
                          {(item.quantity * product.price).toLocaleString(
                            "us-US",
                            {
                              style: "currency",
                              currency: "USD",
                            },
                          )}
                        </td>
                      </tr>
                    );
                  })}
                <tr className="bg-white dark:bg-gray-800" ref={totalPriceRef}>
                  <td className="px-6 py-4" colSpan={3}>
                    Total Price
                  </td>
                  <td className="px-6 py-4">
                    {totalPrice.toLocaleString("us-US", {
                      style: "currency",
                      currency: "USD",
                    })}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
