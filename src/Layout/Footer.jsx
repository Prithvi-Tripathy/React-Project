import React from "react";
import './FooterCSS.css'
const Footer=()=>{
    return (
      <div className="Footer-container">
        <div className="row footer-row">
          <div className="col-8">
            <div>
              &copy; {new Date().getFullYear()} Food App. All rights
              reserved.
            </div>
            </div>
            <div className="col-4">
            <div className="footer-nav">
              <a href="/privacy-policy">Privacy Policy</a>
              <a href="/terms-of-service">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Footer;