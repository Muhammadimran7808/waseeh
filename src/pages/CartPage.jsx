import React from "react";
import Layout from "../components/layout/Layout";
import { useCart } from "../context/cart";
import { Link } from "react-router-dom";

const CartPage = () => {
  const [cart, setCart] = useCart();

  return (
    <Layout>
      <div className="md:w-[72%] sm:[85%] w-[97%] mx-auto mt-12">
        <div className="flex justify-between">
          <h3 className="uppercase font-bold text-2xl">my cart</h3>
          <Link className="flex items- text-sm">
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
            <p className="border-b p-3 bg-gray-50 uppercase font-medium">products</p>
            

          </div>
          <div className="w-[30%]">by</div>
        </div>
      </div>
    </Layout>
  );
};

export default CartPage;
