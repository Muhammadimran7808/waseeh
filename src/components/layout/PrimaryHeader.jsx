import React from "react";

const PrimaryHeader = () => {
  return (
    <div className="py-4 ">
      <div className="w-4/5 mx-auto flex gap-3 justify-end">
        <div className="text-[13px]">Customer Service +92 300 6639694</div>
        <div>
          <form className="">
            <input
              className="border-black border-b-[1px] focus:outline-none text-sm"
              type="text"
              placeholder="Search"
              aria-label="Search"
            />
            <i className="fas fa-search" aria-hidden="true" />
          </form>
        </div>
      </div>

      <div className="w-4/5 mx-auto">
        <div>
          <img
            src="https://www.waseeh.com/cdn/shop/files/logo-new-website.png?v=1692205973"
            alt=""
            height={"70px"}
            width={"70px"}
          />
        </div>
      </div>
    </div>
  );
};

export default PrimaryHeader;
