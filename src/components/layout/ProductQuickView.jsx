import React from "react";
import { Modal } from "antd";
import { useModal } from "../../context/modal";

const ProductQuickView = ({ product }) => {
  const [modalOpen, setModalOpen] = useModal();
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
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ProductQuickView;
