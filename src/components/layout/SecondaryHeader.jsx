import React from "react";
import { Link } from "react-router-dom";

const SecondaryHeader = () => {
  return (
    <div className="secondary-header">
      <nav className="navbar">
        <ul className="unorderd-list md:justify-center">
        
          <li className="dropdown">
            <Link to={""}>Furniture</Link>
            <div className="dropdown-content pt-5 ">
              <div className="flex gap-4 justify-around mx-auto md:w-[60%]">
                <ol>
                  <li>
                    <div className="px-[12px] text-[#232323] hover:text-[#F58634]">
                      TABLES
                    </div>
                    <Link to="">
                      <span>Nesting Tables</span>
                    </Link>
                    <Link to="">
                      <span>Console Tables</span>
                    </Link>
                    <Link to="">
                      <span>Side Tables</span>
                    </Link>
                    <Link to="">
                      <span>UV Printed Tables</span>
                    </Link>
                    <Link to="">
                      <span>Hairpin Leg Tables</span>
                    </Link>
                    <Link to="">
                      <span>Hand Painted Tables</span>
                    </Link>
                  </li>
                </ol>

                <ol>
                  <li>
                    <div className="px-[12px] text-gray-900 hover:text-[#F58634]">
                      RACKS
                    </div>
                    <Link to={""}>
                      <span>Bookcase Racks</span>
                    </Link>
                    <Link to={""}>
                      <span>Kitchen Organizer Racks</span>
                    </Link>
                    <Link to={""}>
                      <span>Kids Racks</span>
                    </Link>
                    <Link to={""}>
                      <span>Plant Decor Racks</span>
                    </Link>
                    <Link to={""}>
                      <span>Bathroom Racks</span>
                    </Link>
                  </li>
                </ol>

                <ol>
                  <li>
                    <div className="px-[12px] text-gray-900 hover:text-[#F58634]">
                      FLOATING SHELVES
                    </div>
                    <Link to={""}>Animal Floating Shelves</Link>
                    <Link to={""}>Cars Floating Shelves</Link>
                    <Link to={""}>Marvel Heroes Floating Shelves</Link>
                    <Link to={""}>DC Heroes Floating Shelves</Link>
                  </li>
                  <Link>FLOATING SHELVES</Link>
                </ol>

                <ol>
                  <li>
                    <div className="px-[12px] text-gray-900 hover:text-[#F58634]">
                      COATS & SHOES
                    </div>
                    <Link to={""}>Coat Organizers</Link>
                    <Link to={""}>Shoe Organizers</Link>
                  </li>
                </ol>
              </div>
            </div>
          </li>

          <li className="dropdown">
            <Link to={""}>Kitchen item</Link>

            <div className="dropdown-content"></div>
          </li>

          <li className="dropdown">
            <Link to={""}>Fashion &amp; fitness point</Link>
            <div className="dropdown-content-small">
              <Link to={""}>Watches & Smart Gadgets</Link>
              <Link to={""}>Ladies Point</Link>
              <Link to={""}>Shoes</Link>
              <Link to={""}>Kids</Link>
              <Link to={""}>Fitness</Link>
            </div>
          </li>

          <li className="dropdown">
            <Link to={""}>Home decor</Link>
            <div className="dropdown-content">
              <Link to={""}>Category 1</Link>
              <Link to={""}>Category 2</Link>
              <Link to={""}>Category 3</Link>
            </div>
          </li>

          <li className="dropdown">
            <Link to={""}>Brands</Link>
            <div className="dropdown-content-small">
              <Link to={""}>Lustroware</Link>
              <Link to={""}>Sistema</Link>
              <Link to={""}>Shengya</Link>
              <Link to={""}>Oziba</Link>
              <Link to={""}>PinPin Family</Link>
              <Link to={""}>Limon</Link>
              <Link to={""}>DELI Glassware</Link>
              <Link to={""}>Konstar</Link>
              <Link to={""}>Gondol</Link>
              <Link to={""}>Tak Plastik</Link>
              <Link to={""}>Imperial</Link>
            </div>
          </li>

          <li className="dropdown">
            <Link to={""}>Mix &amp; match</Link>
          </li>
          
          <li className="dropdown">
            <Link to={""}>Our Specialization</Link>
            <div className="dropdown-content">
              <Link to={""}>Category 1</Link>
              <Link to={""}>Category 2</Link>
              <Link to={""}>Category 3</Link>
            </div>
          </li>
          <li className="dropdown">
            <Link to={""}>Who we are</Link>
            <div className="dropdown-content-small">
              <Link to={""}>Category 1</Link>
              <Link to={""}>Category 2</Link>
              <Link to={""}>Category 3</Link>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SecondaryHeader;
