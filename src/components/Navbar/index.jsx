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

  return (
    <div className="navbar">
      <div className="desktop-view-left">
        {/* --------------- Languages -------------- */}
        <div className="drop-down">
          <label htmlFor="language" style={{ fontSize: 12 }}>
            Lang
          </label>
          <select name="language" id="language">
            <option value="english" defaultValue>
              english
            </option>
          </select>
        </div>
        {/*--------- Currencies ------------------- */}
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
        {/* ----------- Product  Categories -------- */}
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
        {/* -------- Account Options -------- */}
        <div className="cart-icon">
          <ShoppingCartOutlined className="icon" />
          <span className="cart-item-count">0</span>
        </div>
        <div>
          <FavoriteBorder className="icon" />
        </div>
        <div>
          <AccountCircleOutlined className="icon" />
        </div>
      </div>

      <div className="menu-icon" onClick={() => setMenuOpen((prev) => !prev)}>
        {menuOpen ? (
          <CloseOutlined className="icon" />
        ) : (
          <MenuOpenOutlined className="icon" />
        )}
      </div>

      {/*------------------ menu for mobile view ------------------------ */}
      <div className={`mobile-menu-options ${menuOpen ? "active" : "close"}`}>
        {/* -------pages--------- */}
        <NavLink>Home</NavLink>
        <NavLink>About</NavLink>
        <NavLink>Contact</NavLink>
        <NavLink>Stores</NavLink>
        {/* ------------ Account related ---------- */}
        <NavLink className="icon-option">
          <div className="cart-icon">
            <ShoppingCartOutlined className="icon" />
            <span className="cart-item-count">0</span>
          </div>
          <span>Cart</span>
        </NavLink>
        <NavLink className="icon-option">
          <FavoriteBorder className="icon" />
          <span>Favorites</span>
        </NavLink>
        <NavLink className="icon-option">
          <AccountCircleOutlined className="icon" />
          <span>My Profile</span>
        </NavLink>
        <div style={{ borderBottom: "1px solid lightgray" }}></div>
        {/* -----Product Categories ---------- */}
        <NavLink>Men</NavLink>
        <NavLink>Women</NavLink>
        <NavLink>Kids</NavLink>
        <div style={{ borderBottom: "1px solid lightgray" }}></div>
        {/* --------------- Languages ------------ */}
        <label htmlFor="language" style={{ fontSize: 12 }}>
          Language
        </label>
        <select name="language" id="language">
          <option value="english" defaultValue>
            english
          </option>
        </select>
        {/* ----------- Currencies --------------- */}
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
