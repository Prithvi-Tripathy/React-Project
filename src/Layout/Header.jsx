import React from "react";
import "./HeaderCSS.css"
const Header = () => {
  return (
    <div className="mx-2">
      <div className="row align-items-center">
        <div className="col-4">
        <img className="logo-img" src="https://media.istockphoto.com/id/1435983029/vector/food-delivery-logo-images.jpg?s=612x612&w=0&k=20&c=HXPxcjOxUiW4pMW1u9E0k2dJYQOU37a_0qZAy3so8fY=" alt="" />
            Food App
        </div>
        <div className="col-8">
          <ul className="nav d-flex justify-content-end">
          <li className="nav-item custom-nav-items">Home</li>
            <li className="nav-item custom-nav-items">About us</li>
            <li className="nav-item custom-nav-items">Contact</li>
            <li className="nav-item custom-nav-items">cart</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
