import React from "react";
import Home from "../components/Home"
import AboutUs from "../components/AboutUs";
import Contact from "../components/Contact";
const Body=(props)=>{
  console.log("props",props)
    return (
        <div>
          {(props.childData === 'Home')?<Home />:""}
          {(props.childData === 'About')?<AboutUs />:""}
          {(props.childData === 'Contact')?<Contact />:""}
        </div>
    );
}

export default Body;