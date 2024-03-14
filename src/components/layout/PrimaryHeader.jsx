import React from "react";
import { Link } from "react-router-dom";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { Badge } from "antd";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/cart";

const PrimaryHeader = () => {
  const navigate = useNavigate();
  const [cart] = useCart();

  return (
    <div className="py-4">
      <div className="md:w-4/5 sm:px-5 mx-auto flex flex-wrap gap-3 sm:justify-end justify-center">
        <div className="text-[13px]">Customer Service +92 300 6639694</div>
        <div>
          <form className="">
            <input
              className="border-black border-b-[1px] md:w-44 sm:w-36 w-20 focus:outline-none text-sm"
              type="text"
              placeholder="Search"
              aria-label="Search"
            />
            <i className="fas fa-search" aria-hidden="true" />
          </form>
        </div>
      </div>

      <div className="md:w-4/5  px-5 mx-auto flex items-end justify-between">
        <Link to={"/"}>
          <img
            src="https://www.waseeh.com/cdn/shop/files/logo-new-website.png?v=1692205973"
            alt=""
            height={"70px"}
            width={"70px"}
          />
        </Link>

        <div className="flex gap-6 cursor-pointer">
          <div onClick={() => navigate("/cart")} className="text-[13px]">
            <Badge count={cart?.length} className="flex items-center gap-2">
              <LiaShoppingBagSolid size={24} />
              <div className="sm:block hidden">Shopping Cart</div>
            </Badge>
          </div>
          <div className="text-[13px]">🖤 My Wish Lists</div>
          <div>
            <Link to={""} className="text-[13px] hover:border-b border-black">
              Sign In
            </Link>
            <span> or </span>
            <Link to={""} className="text-[13px] hover:border-b border-black">
              Create an account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrimaryHeader;
