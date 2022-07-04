import React from "react";
import "./MobileCss/Mobile.css";
import { BiSearchAlt2 } from "react-icons/bi";

const MobileUpperNav = () => {
  return (
    <div>
      <div className="mobile_nav">
        <div class="nav_brand">
          <a href="/" class="nav_link">
            <h4 class="brand_name">edufocus</h4>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MobileUpperNav;
