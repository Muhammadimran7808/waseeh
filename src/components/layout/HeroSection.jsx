import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const HeroSection = () => {

    const fadeImages = [
      {
        url: "https://www.waseeh.com/cdn/shop/files/slide-1_2.webp?v=1690293584",
      },
      {
        url: "https://www.waseeh.com/cdn/shop/files/slide-3_1_1.webp?v=1690293679",
      },
      {
        url: "https://www.waseeh.com/cdn/shop/files/slide-2_2_1_1_2_1.webp?v=1690293631",
      },
    ];
  return (
    <>
      <div className="">
        <Fade indicators={true} >
          {fadeImages.map((fadeImage, index) => (
            <div key={index}>
              <img style={{ width: "100%" }} src={fadeImage.url} />
            </div>
          ))}
        </Fade>
      </div>
    </>
  );
};

export default HeroSection;
