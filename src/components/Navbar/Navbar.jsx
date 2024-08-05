import React, { useState, useContext, useEffect, useRef } from 'react';
import './Navbar.css';
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { ShopContext } from '../../context/ShopContext';

const Navbar = () => {
  const [menu, setMenu] = useState("product");
  const { getTotalCartItems } = useContext(ShopContext);
  const [nav, setNav] = useState(false);
  const navigate = useNavigate();
  const cartIconRef = useRef(null);

  const getMenuClass = (menuName) => {
    return menu === menuName ? 'active' : '';
  };

  const handleMenuClick = (path) => {
    setNav(false); 
    navigate(path);
  };

  const toggleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const updateCartCountPosition = () => {
      const cartIconElement = cartIconRef.current;
      if (cartIconElement) {
        const rect = cartIconElement.getBoundingClientRect();
        const cartCountElement = document.querySelector('.cartCount');
        if (cartCountElement) {
          cartCountElement.style.top = `${rect.top}px`;
          cartCountElement.style.right = `${window.innerWidth - rect.right}px`;
        }
      }
    };

    updateCartCountPosition();
    window.addEventListener('resize', updateCartCountPosition);

    return () => {
      window.removeEventListener('resize', updateCartCountPosition);
    };
  }, []);

  return (
    <div className='navbar'>
      <Link to="/product" style={{ textDecoration: "none" }} className="navLogo">
        <img src="/images/Frame8.png" alt="nav logo" />
      </Link>

      <nav>
        <ul className={nav ? 'navMenu active' : 'navMenu'}>
          <li onClick={() => setMenu("home")} className={getMenuClass("home")}>
            <Link style={{ textDecoration: "none" }}>Home</Link>
          </li>
          <li active onClick={() => setMenu("product")} className={getMenuClass("product")}>
            <Link to="/product" style={{ textDecoration: "none" }} onClick={() => handleMenuClick("/product")}>Products</Link>
          </li>
          <li onClick={() => setMenu("about")} className={getMenuClass("about")}>
            <Link style={{ textDecoration: "none" }}>About Us</Link>
          </li>
          <li onClick={() => setMenu("contact")} className={getMenuClass("contact")}>
            <Link style={{ textDecoration: "none" }}>Contact Us</Link>
          </li>
        </ul>
      </nav>

      <div onClick={toggleNav} className="mobile_btn">
        {nav ? <AiOutlineClose size={25}/> : <AiOutlineMenu size={20} />}
      </div>

      <div className="navIcon">
        <div className='cartIcon' ref={cartIconRef}>
          <div className='cartCount'>{getTotalCartItems()}</div>
          <Link to="/cart"><MdOutlineShoppingCart size={20} /></Link>
        </div>
        <div className='user'>
          <button><FaRegUser color={"#08AC0A"} /> Sign Up</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;





























