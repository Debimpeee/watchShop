import React from 'react'
import "./BreadCrumb.css"
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

const BreadCrumb = () => {
  return (
    <div className='breadCrumb'>
        <span className='breadCrum greyCrumb'>Home</span><MdOutlineKeyboardArrowRight />
        <span className='breadCrum greyCrumb'>Products</span><MdOutlineKeyboardArrowRight />
        <span className='breadCrum greyCrumb'>Cart</span><MdOutlineKeyboardArrowRight />
        <span className='breadCrum blackCrumb'>Checkout</span>
    </div>
  )
}

export default BreadCrumb





