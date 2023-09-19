import {
  MenuOpenOutlined,
  CloseOutlined,
  SearchOutlined,
  FavoriteBorder,
  ShoppingCartOutlined,
  AccountCircleOutlined,
} from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import "./navbar.scss";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const iconStyle = {
    fontSize: 24,
  };

  return (
    <div className="navbar">
      <div className="desktop-view-left">
        <div className="drop-down">
          <label htmlFor="language" style={{ fontSize: 12 }}>
            Language
          </label>
          <select name="language" id="language">
            <option value="english" defaultValue>
              english
            </option>
          </select>
        </div>
        <div className="drop-down">
          <label htmlFor="currency" style={{ fontSize: 12 }}>
            currency
          </label>
          <select name="currency" id="currency">
            <option value="inr" defaultValue>
              INR
            </option>
            <option value="usd" defaultValue>
              USD
            </option>
          </select>
        </div>
        <NavLink>Men</NavLink>
        <NavLink>Women</NavLink>
        <NavLink>Kids</NavLink>
      </div>
      <h1 className="logo">Easy Shop</h1>
      <div className="desktop-view-right">
        <NavLink>Home</NavLink>
        <NavLink>About</NavLink>
        <NavLink>Contact</NavLink>
        <NavLink>Stores</NavLink>
        <div className="cart-icon">
          <ShoppingCartOutlined style={iconStyle} />
          <span className="cart-item-count">0</span>
        </div>
        <div>
          <FavoriteBorder style={iconStyle} />
        </div>
        <div>
          <AccountCircleOutlined style={iconStyle} />
        </div>
      </div>

      <div className="menu-icon" onClick={() => setMenuOpen((prev) => !prev)}>
        {menuOpen ? (
          <CloseOutlined style={iconStyle} />
        ) : (
          <MenuOpenOutlined style={iconStyle} />
        )}
      </div>

      {/*------------------ menu for mobile view ------------------------ */}
      <div className={`mobile-menu-options ${menuOpen ? "active" : "close"}`}>
        <NavLink>Home</NavLink>
        <NavLink>About</NavLink>
        <NavLink>Contact</NavLink>
        <NavLink>Stores</NavLink>

        <NavLink className="icon-option">
          <div className="cart-icon">
            <ShoppingCartOutlined style={iconStyle} />
            <span className="cart-item-count">0</span>
          </div>
          <span>Cart</span>
        </NavLink>
        <NavLink className="icon-option">
          <FavoriteBorder style={iconStyle} />
          <span>Favorites</span>
        </NavLink>
        <NavLink className="icon-option">
          <AccountCircleOutlined style={iconStyle} />
          <span>My Profile</span>
        </NavLink>
        <div style={{ borderBottom: "1px solid lightgray" }}></div>
        <NavLink>Men</NavLink>
        <NavLink>Women</NavLink>
        <NavLink>Kids</NavLink>
        <div style={{ borderBottom: "1px solid lightgray" }}></div>
        <label htmlFor="language" style={{ fontSize: 12 }}>
          Language
        </label>
        <select name="language" id="language">
          <option value="english" defaultValue>
            english
          </option>
        </select>
        <label htmlFor="currency" style={{ fontSize: 12 }}>
          currency
        </label>
        <select name="currency" id="currency">
          <option value="inr" defaultValue>
            INR
          </option>
          <option value="usd" defaultValue>
            USD
          </option>
        </select>
      </div>
      {/*-------------------- Menu for Mobile --------------------- */}

      {/* -------------------Desktop Menu -------------------------- */}
    </div>
  );
};

export default Navbar;
