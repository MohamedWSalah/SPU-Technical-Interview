import React from "react";
import logo from "./Logo.png";
function Footer() {
  return (
    <div className="card fixed-bottom bg-primary">
      <div>
        <p className="card-text">
          <img
            src={logo}
            alt="logo"
            style={{ height: 40, width: 90, paddingTop: 5 }}
          />
        </p>
      </div>
    </div>
  );
}

export default Footer;
