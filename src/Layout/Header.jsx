import React from "react";
import "./HeaderCSS.css"

const Header = () => {
  return (
    <div className="">
      <div className="row align-items-center header-row">
        <div className="col-4">
          <img
            className="logo-img"
            src={require("../images/icons/output-onlinepngtools.png")}
            alt=""
          />
          Food App
        </div>
        <div className="col-8">
          <ul className="nav d-flex justify-content-center">
          <li className="nav-item custom-nav-items" onClick={()=>{}}>Home</li>
            <li className="nav-item custom-nav-items">About us</li>
            <li className="nav-item custom-nav-items">Contact</li>
            <li className="nav-item custom-nav-items">Cart
             <span className="cart-number">5</span>
             </li>
          </ul>
          
        </div>
      </div>
    </div>
  );
};

export default Header;
