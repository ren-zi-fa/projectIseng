import React, { useEffect, useRef, useState } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import Navbar from "../components/Fragments/Navbar";
import "flowbite";

const products = [
  {
    id: 1,
    product_name: "baju",
    product_description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo, harum. Laboriosam exercitationem mollitia dolore, vitae porro voluptatibus consectetur quisquam ad recusandae provident est non iusto sit quo ullam nulla eveniet!",
    product_price: 210000,
    images: "/images/gambar-itto.png",
  },
  {
    id: 2,
    product_name: "celana",
    product_description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores, fuga",
    product_price: 9100000,
    images: "/images/gambar-itto.png",
  },
  {
    id: 3,
    product_name: "mouse",
    product_description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo, harum. Laboriosam exercitationem molliti",
    product_price: 100000,
    images: "/images/gambar-itto.png",
  },
  {
    id: 4,
    product_name: "mouse",
    product_description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo, harum. Laboriosam exercitationem molliti",
    product_price: 320000,
    images: "/images/gambar-itto.png",
  },
  {
    id: 5,
    product_name: "laptop",
    product_description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo, harum. Laboriosam exercitationem molliti",
    product_price: 320000,
    images: "/images/gambar-itto.png",
  },
];

export default function ProductsPage() {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);
  useEffect(() => {
    if (cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + product.product_price * item.quantity;
      }, 0);
      setTotalPrice(sum);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);
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
      totalPriceRef.current.style.display = "table-row"

    }else {
      totalPriceRef.current.style.display = "none"
    }
  }, [cart]);

  return (
    <>
      <Navbar />
      <div className="grid lg:grid-cols-3 grid-cols-1">
        <div className="col-span-2 bg-blue-400 grid grid-cols-2 xl:grid-cols-2 lg: p-4 gap-3 place-content-center justify-center min-h-screen">
          {products.map((product) => (
            <CardProduct key={product.id}>
              <CardProduct.Header src={product.images} />
              <CardProduct.Body name={product.product_name}>
                {product.product_description}
              </CardProduct.Body>
              <CardProduct.Footer
                price={product.product_price}
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
              <tbody  >
                {cart.map((item) => {
                  const product = products.find(
                    (product) => product.id === item.id,
                  );
                  return (
                    <tr className="bg-white dark:bg-gray-800" key={item.id}>
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {product.product_name}
                      </th>
                      <td className="px-6 py-4">
                        {product.product_price.toLocaleString("id-ID", {
                          style: "currency",
                          currency: "IDR",
                        })}
                      </td>
                      <td className="px-6 py-4">{item.quantity}</td>
                      <td className="px-6 py-4">
                        {(item.quantity * product.product_price).toLocaleString(
                          "id-ID",
                          {
                            style: "currency",
                            currency: "IDR",
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
                  <td className="px-6 py-4" >
                    {totalPrice.toLocaleString("id-ID", {
                      style: "currency",
                      currency: "IDR",
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
