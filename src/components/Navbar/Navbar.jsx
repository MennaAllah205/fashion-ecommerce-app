import React, { useState, useContext } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext";

const Navbar = () => {
    const [menu, setMenu] = useState("shop");
    const { getTotalItem } = useContext(ShopContext); // Corrected use of useContext hook

    return (
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt="Shopper Logo" />
                <p>SHOPPER</p>
            </div>
            <ul className="nav-men">
                <li onClick={() => setMenu("shop")}>
                    <Link to="/" style={{ textDecoration: 'none' }}>Shop</Link>
                    {menu === "shop" && <hr />}
                </li>
                <li onClick={() => setMenu("men")}>
                    <Link to="/men" style={{ textDecoration: 'none' }}>Men</Link>
                    {menu === "men" && <hr />}
                </li>
                <li onClick={() => setMenu("women")}>
                    <Link to="/women" style={{ textDecoration: 'none' }}>Women</Link>
                    {menu === "women" && <hr />}
                </li>
                <li onClick={() => setMenu("kids")}>
                    <Link to="/kids" style={{ textDecoration: 'none' }}>Kids</Link>
                    {menu === "kids" && <hr />}
                </li>
            </ul>
            <div className="nav-login-card">
                <Link to="/login" style={{ textDecoration: 'none' }}>
                    <button>Login</button>
                </Link>
                <Link to="/cart" style={{ textDecoration: 'none' }}>
                    <img src={cart_icon} alt="Cart Icon" />
                </Link>
                <div className="nav-card-count">{getTotalItem()}</div>
            </div>
        </div>
    );
};

export default Navbar;
