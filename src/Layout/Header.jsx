import React from "react";
import "./HeaderCSS.css"

const Header = ({ onData }) => {
  const sendDataToParent = (data) => {
    onData(data);
  };
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
          <ul className="nav d-flex justify-content-end">
          <li className="nav-item custom-nav-items" onClick={()=>sendDataToParent("Home")}>Home</li>
            <li className="nav-item custom-nav-items" onClick={()=>sendDataToParent("About")}>About us</li>
            <li className="nav-item custom-nav-items" onClick={()=>sendDataToParent("Contact")}>Contact</li>
            <li className="nav-item custom-nav-items" onClick={()=>sendDataToParent("Cart")}>Cart
             <span className="cart-number">5</span>
             </li>
          </ul>
          
        </div>
      </div>
    </div>
  );
};

export default Header;
