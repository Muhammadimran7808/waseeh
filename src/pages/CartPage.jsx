import React, { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import { useCart } from "../context/cart";
import { Link } from "react-router-dom";
import ProductQuantityCounter from "../components/ProductQuantityCounter";

const CartPage = () => {
  const [cart, setCart] = useCart();
  const [count, setCount] = useState(1);

  const setDecrease = () => {
    count > 1 ? setCount(count - 1) : setCount(1);
  };
  const setIncrease = () => {
    setCount(count + 1);
  };

  return (
    <Layout>
      <div className="md:w-[72%] sm:[85%] w-[97%] mx-auto mt-12">
        <div className="flex justify-between">
          <h3 className="uppercase font-bold text-2xl">my cart</h3>
          <Link to={"/"} className="flex items- text-sm">
            Continue Shopping
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              width="17"
              height="17"
            >
              <path d="M352 256L217.6 121.6c-9.4-9.4-24.6-9.4-33.9 0-9.4 9.4-9.4 24.6 0 33.9L294.1 256l-110.4 110.4c-9.4 9.4-9.4 24.6 0 33.9 9.4 9.4 24.6 9.4 33.9 0L352 256z" />
            </svg>
          </Link>
        </div>

        <div className="flex gap-9 mt-8">
          <div className="w-[70%]">
            <p className="border-b p-3 bg-gray-50 uppercase font-medium">
              products
            </p>

            <div>
              {cart?.map((product) => (
                /* product cart */
                <div
                  key={product.id}
                  className="flex items-center gap-10 border-b py-8 "
                >
                  <img
                    src={product.images[0].src}
                    alt=""
                    className="h-[100px] w-[100px]"
                  />

                  <div>
                    <div className="pb-2">{product.name}</div>
                    <div className="font-semibold pb-2">
                      Rs. {product.price}
                    </div>
                    <div className="font-medium pb-2">Quantity:</div>
                    <div className="">
                      <ProductQuantityCounter
                        quantity={count}
                        setDecrease={setDecrease}
                        setIncrease={setIncrease}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-[30%]">by</div>
        </div>
      </div>
    </Layout>
  );
};

export default CartPage;
