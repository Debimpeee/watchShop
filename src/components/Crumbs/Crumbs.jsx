import React from 'react';
import './Crumbs.css';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-router-dom';


const Crumbs = () => {
  return (
    <div className='crumbs'>
      <span className='crumb grey-crumb'>Home</span><MdOutlineKeyboardArrowRight />
      <Link to="/product" className='crumb grey-crumb'>Products</Link><MdOutlineKeyboardArrowRight />
      <span className='crumb black-crumb'>Cart</span>
    </div>
  );
};

export default Crumbs;


 {/* {step === 1 && <ShippingForm onContinue={handleShippingContinue} />}
        {step === 2 && (
          <ReviewOrder
            cartItems={cartItems}
            data_product={data_product}
            shippingData={shippingData}
            onConfirm={handleOrderConfirm}
          />
        )} */}