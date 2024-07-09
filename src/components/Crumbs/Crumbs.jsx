import React from 'react';
import './Crumbs.css';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

const Crumbs = () => {
  return (
    <div className='crumbs'>
      <span className='crumb grey-crumb'>Home</span><MdOutlineKeyboardArrowRight />
      <span className='crumb grey-crumb'>Products</span><MdOutlineKeyboardArrowRight />
      <span className='crumb black-crumb'>Cart</span>
    </div>
  );
};

export default Crumbs;
