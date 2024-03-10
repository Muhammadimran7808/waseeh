import React, { useState } from "react";
import { Modal } from "antd";
import { useModal } from "../../context/modal";
import ProductQuantityCounter from "../ProductQuantityCounter";

const ProductQuickView = ({ product }) => {
  const [modalOpen, setModalOpen] = useModal();
  const [count, setCount] = useState(1);

  const setDecrease = () => {
    count > 1 ? setCount(count - 1) : setCount(1);
  };
  const setIncrease = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <Modal
        centered
        open={modalOpen}
        footer={null}
        onOk={() => setModalOpen(false)}
        onCancel={() => setModalOpen(false)}
        width={"60%"}
      >
        <div className="flex gap-8">
          <div className="w-[400px]">
            {product?.images?.length > 0 && (
              <img
                src={product.images[0].src}
                alt={product.images[0].alt}
                className="w-full h-[300px] object-cover "
              />
            )}
          </div>
          <div>
            <div className="text-center text-xl font-semibold">
              {product.name}
            </div>
            <div
              className="mt-2 px-1 text-[13px] tracking-wide text-gray-700 font-[550]"
              dangerouslySetInnerHTML={{ __html: product.description }}
            ></div>

            <div className="flex gap-8 mt-4">
              <div>Availability :</div>
              <div className="">{product.stock_status}</div>
            </div>

            <div className="flex gap-3 mt-2 font-semibold">
              <p className="line-through text-2xl text-gray-400">
                Rs.{product.regular_price}
              </p>
              <p className="text-[#F58634] text-2xl">Rs.{product.price}</p>
            </div>

            <div>
              <div className="mt-4">Quentity :</div>
              <ProductQuantityCounter
                quantity={count}
                setDecrease={setDecrease}
                setIncrease={setIncrease}
              />
            </div>

            <div>
              <div>Subtotal : Rs.{product.price * count}</div>
            </div>

            <div className="mt-4">
              <button className="bg-[#000] text-white hover:bg-white hover:text-black border border-black px-10 py-3 uppercase mr-7">
                Add to cart
              </button>
              <button className="bg-white hover:text-white hover:bg-[#000] text-black border border-gray-300 px-10 py-3 uppercase">
                🖤 ADD TO WISH LIST
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ProductQuickView;
