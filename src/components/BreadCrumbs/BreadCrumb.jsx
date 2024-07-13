import React from 'react'
import "./BreadCrumb.css"
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-router-dom';


const BreadCrumb = () => {
  return (
    <div className='breadCrumb'>
        <span className='breadCrum greyCrumb'>Home</span><MdOutlineKeyboardArrowRight />
        <Link to="/product" className='breadCrum greyCrumb'>Products</Link><MdOutlineKeyboardArrowRight />
        <Link to="/cart" className='breadCrum greyCrumb'>Cart</Link><MdOutlineKeyboardArrowRight />
        <span className='breadCrum blackCrumb'>Checkout</span>
    </div>
  )
}

export default BreadCrumb





