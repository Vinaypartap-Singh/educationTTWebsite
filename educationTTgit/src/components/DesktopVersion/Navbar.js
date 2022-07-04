import React from "react";

const Navbar = () => {
  return (
    <div>
      <div class="navbar_main">
        <div class="nav_brand">
          <a href="/" class="nav_link">
            <h4 class="brand_name">edufocus</h4>
          </a>
        </div>

        <div class="navItems">
          <ul class="navlist_item">
            <li class="navitem">Home</li>
            <li class="navitem">Services</li>
            <li class="navitem">Courses</li>
            <li class="navitem">Testimonial</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
