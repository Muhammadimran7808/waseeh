import React, { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import axios from "axios";
import { BiSolidHeartCircle } from "react-icons/bi";
import { useModal } from "../context/modal";
import ProductQuickView from "../components/layout/ProductQuickView";
import { apikeys } from "../configuration/apikey";
import { useCart } from "../context/cart";
import toast from "react-hot-toast";

const FurniturePage = () => {
  const [modalOpen, setModalOpen] = useModal();
  const [quickViewProduct, setquickViewProduct] = useState([]);
  const [cart, setCart] = useCart();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const siteURl = "https://localhost/wp";

  const getProducts = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `${siteURl}/wp-json/wc/v3/products?category=24`,
        {
          headers: {
            Authorization: `Basic ${apikeys()}`,
            "content-type": "application/json",
          },
        }
      );
      if (res?.status === 200) {
        setProducts(res?.data);
      }
    } catch (error) {
      console.log(`erro message ${error.message}`);
      toast.error("Some thing went wrong. Check your connection");
    }
    setLoading(false);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Layout>
      <div>
        <div className="w-[70%] my-10 mx-auto">
          <h1 className="text-2xl font-semibold">Furniture</h1>
        </div>
        {/* product container */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-5 items-center md:w-[85%] sm:w-[90%] sm:mx-auto">
          {loading ? (
            <div className="flex justify-center text-xl items-center h-[400px] w-full">
              Loading...
            </div>
          ) : (
            products?.map((product) => (
              /*card container */
              <div
                key={product.id}
                className="card-container relative w-[200px] h-[400px]"
              >
                {/* product card */}
                <div>
                  {product?.images?.length > 0 && (
                    <img
                      src={product.images[0].src}
                      alt={product.images[0].alt}
                      className="w-[200px] h-[200px] object-cover "
                    />
                  )}

                  {/* discount lable */}
                  <div className="product-label">
                    <strong className="label sale-label">
                      -
                      {Math.floor(
                        ((product.regular_price - product.price) /
                          product.regular_price) *
                          100
                      )}
                      %
                    </strong>
                    <br />
                  </div>

                  <div
                    className="mt-2 px-1 text-[13px] text-gray-700 text-center font-[550]"
                    dangerouslySetInnerHTML={{ __html: product.name }}
                  ></div>

                  <div className="flex flex-wrap justify-center text-[14px] gap-3 mt-2 font-semibold">
                    <p className="line-through text-gray-400">
                      Rs.{product.regular_price}
                    </p>
                    <p className="text-[#F58634]">Rs.{product.price}</p>
                  </div>
                </div>

                {/* When hover on product card */}
                <div className="card-hover-content hidden bg-[#f7f5f5b9] absolute top-0 w-full h-[200px]  z-[1]">
                  <div className="h-[200px] flex flex-col gap-4 pt-6 items-center">
                    <BiSolidHeartCircle size={25} className="text-[#e28206]" />
                    <button
                      onClick={() => {
                        setCart([...cart, product]);
                        localStorage.setItem(
                          "cart",
                          JSON.stringify([...cart, product])
                        );
                        toast.success("Item added to cart");
                      }}
                      className="w-full border border-black bg-white hover:bg-black hover:text-white py-[8px] text-[14px] font-semibold uppercase"
                    >
                      Add to cart
                    </button>
                    <div>
                      <div>
                        <i className="fa-regular fa-star" />
                        <i className="fa-regular fa-star" />
                        <i className="fa-regular fa-star" />
                        <i className="fa-regular fa-star" />
                        <i className="fa-regular fa-star" />
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        setModalOpen(true);
                        setquickViewProduct(product);
                      }}
                      className="absolute bg-[#e28206] text-gray-200 w-full bottom-0 uppercase px-1"
                    >
                      quick view
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      <ProductQuickView product={quickViewProduct} />
    </Layout>
  );
};

export default FurniturePage;
