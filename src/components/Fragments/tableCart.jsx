import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

const TableCart = (props) => {
    const {products} = props
    const cart = useSelector((state)=>state.cart.data);
    const [totalPrice,setTotalPrice] = useState(0)

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

      const totalPriceRef = useRef(null);
      useEffect(() => {
        if (cart.length > 0) {
          totalPriceRef.current.style.display = "table-row";
        } else {
          totalPriceRef.current.style.display = "none";
        }
      }, [cart, products]);

  return (
    <table className="w-full  text-xs text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="px-2 py-3 lg:px-6">
            Product name
          </th>
          <th scope="col" className="px-2 py-3 lg:px-6">
            price
          </th>
          <th scope="col" className="px-2 py-3 lg:px-6">
            quantity
          </th>
          <th scope="col" className="px-2 py-3 lg:px-6">
            Total
          </th>
        </tr>
      </thead>
      <tbody>
        {products.length > 0 &&
          cart.map((item) => {
            const product = products.find((product) => product.id === item.id);
            return (
              <tr className="bg-white dark:bg-gray-800" key={item.id}>
                <th
                  scope="row"
                  className="px-2 py-4 lg:px-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {product.title.substring(0, 20)}
                </th>
                <td className="px-2 py-4 lg:px-2">
                  {product.price.toLocaleString("us-US", {
                    style: "currency",
                    currency: "USD",
                  })}
                </td>
                <td className="px-2 py-4 lg:px-2">{item.quantity}</td>
                <td className="px-2 py-4 lg:px-2">
                  {(item.quantity * product.price).toLocaleString("us-US", {
                    style: "currency",
                    currency: "USD",
                  })}
                </td>
              </tr>
            );
          })}
        <tr className="bg-white dark:bg-gray-800" ref={totalPriceRef}>
          <td className="px-2 py-4 lg:px-2" colSpan={3}>
            Total Price
          </td>
          <td className="px-2 py-4 lg:px-2">
            {totalPrice.toLocaleString("us-US", {
              style: "currency",
              currency: "USD",
            })}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default TableCart;
