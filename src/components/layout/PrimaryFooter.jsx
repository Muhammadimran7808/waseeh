import React from "react";
import "../../assets/primaryfooter.css";
import { Link } from "react-router-dom";

const PrimaryFooter = () => {
  return (
    <div>
      <footer>
        <div className="footer-container">
          <div className="footer-section">
            <h3>Shop</h3>
            <ul>
              <li>
                <Link to={""}>Furniture</Link>
              </li>
              <li>
                <Link to={""}>Kitchen Items</Link>
              </li>
              <Link to={""}></Link>
              <li>
                <Link to={""} />
                <Link to={""}>Fashion &amp; Fitness Point</Link>
              </li>
              <li>
                <Link to={""}>Home Décor</Link>
              </li>
              <li>
                <Link to={""}>Brands</Link>
              </li>
              <li>
                <Link to={""}>Mix &amp; Match</Link>
              </li>
              <li>
                <Link to={""}>Our Specialization</Link>
              </li>
              <li>
                <Link to={""}>Who We Are</Link>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Information</h3>
            <ul>
              <li>
                <Link to={""}>Search</Link>
              </li>
              <li>
                <Link to={""}>Shipping Policy</Link>
              </li>
              <li>
                <Link to={""}>Return policy</Link>
              </li>
              <li>
                <Link to={""}>Refund policy</Link>
              </li>
              <li>
                <Link to={""}>Terms of Service</Link>
              </li>
              <li>
                <Link to={""}>Earn Online</Link>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>More about Waseeh</h3>
            <ul>
              <li>
                <Link to={""}>About Us</Link>
              </li>
              <li>
                <Link to={""}>Contact Us</Link>
              </li>
              <li>
                <Link to={""}>Reviews</Link>
              </li>
              <li>
                <Link to={""}>FAQs</Link>
              </li>
              <li>
                <Link to={""}>Blogs</Link>
              </li>
            </ul>
          </div>
          <div className="footer-section ">
            <div>
              <h3>Get Connected</h3>
              <div className="flex gap-2 items-center">
                <span className=" rounded-[50%]  hover:bg-white">
                  <i class="fa-brands fa-facebook fa-2xl hover:text-blue-900"></i>
                </span>
                <span className=" rounded-[50%]  hover:bg-blue-900">
                  <i class="fa-brands fa-square-instagram fa-2xl hover:text-white"></i>
                </span>
                <span className=" rounded-[50%]  hover:bg-white">
                  <i class="fa-brands fa-pinterest fa-2xl hover:text-red-700"></i>
                </span>
                <span className=" rounded-[50%]  hover:bg-blue-900">
                  <i class="fa-brands fa-github fa-2xl hover:text-white"></i>
                </span>
                <span className=" rounded-[50%]  hover:bg-blue-900">
                  <i class="fa-brands fa-linkedin fa-2xl hover:text-white"></i>
                </span>
              </div>
            </div>
            <div className="footer-container">
              {/* Social media section */}
              <div className="footer-section">
                <div className="social-media-info">
                  <h2>LIKE US ON FACEBOOK</h2>
                  <button className="like-button">Like 90k</button>
                  <button className="share-button">Share</button>
                </div>
              </div>
            </div>
            <h3>SIGN UP FOR OUR NEWSLETTER</h3>
            <form action="#" method="post" className="email-form">
              <input
                type="email"
                name="email"
                placeholder="enter your email address"
              />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PrimaryFooter;
