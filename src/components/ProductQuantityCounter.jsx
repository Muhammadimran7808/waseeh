import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const ProductQuantityCounter = ({ quantity, setDecrease, setIncrease }) => {
  return (
    <div className="flex p-3">
      <button className="border px-5 py-3" onClick={() => setDecrease()}>
        <FaMinus />
      </button>
      <div className="border border-gray-300 w-[80px] text-center py-3">
        {quantity}
      </div>
      <button
        className="border border-gray-300 px-5 py-3"
        onClick={() => setIncrease()}
      >
        <FaPlus />
      </button>
    </div>
  );
};

export default ProductQuantityCounter;
