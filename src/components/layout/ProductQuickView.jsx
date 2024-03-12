import React, { useState } from "react";
import { Modal } from "antd";
import { useModal } from "../../context/modal";
import ProductQuantityCounter from "../ProductQuantityCounter";
import { Slide } from "react-slideshow-image";
import { useCart } from "../../context/cart";
import toast from "react-hot-toast";

const ProductQuickView = ({ product }) => {
  const [modalOpen, setModalOpen] = useModal();
  const [count, setCount] = useState(1);
  const [cart, setCart] = useCart();

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
        onCancel={() => {
          setModalOpen(false), setCount(1);
        }}
        width={"65%"}
      >
        <div className="flex gap-8 pr-5">
          <div className="w-[400px]">
            {product?.images?.length > 0 && (
              <Slide transitionDuration={600} indicators>
                {product?.images?.map((image, index) => (
                  <div key={index} className="w-full h-[300px]">
                    <img
                      src={image.src}
                      alt=""
                      className="w-full h-full object-contain"
                    />
                  </div>
                ))}
              </Slide>
            )}
          </div>

          <div>
            <div className="text-center text-xl font-semibold">
              {product.name}
            </div>

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

            <div
              onClick={() => {
                setCart([...cart, product]);
                localStorage.setItem(
                  "cart",
                  JSON.stringify([...cart, product])
                );
                toast.success("Item added to cart");
              }}
              className="mt-4"
            >
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
