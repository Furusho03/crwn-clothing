import React from "react";
import { Link } from "react-router-dom";
import "./header.styles.scss";
// ReactでSVGをインポートするときの特別な構文
import { ReactComponent as Logo } from "../../assets/crown.svg";

const Header = () => (
  <div className="header">
    <Link to="/" className="logo-container">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link to="/shop" className="option">
        SHOP
      </Link>
      <Link to="/shop" className="option">
        CONTACT
      </Link>
      <Link to="/signin" className="option">
        SIGN IN
      </Link>
    </div>
  </div>
);

export default Header;
