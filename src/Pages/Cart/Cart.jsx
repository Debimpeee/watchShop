import React from 'react';
import './Cart.css';
import Crumbs from '../../components/Crumbs/Crumbs';
import ProductCart from '../../components/ProductCart/ProductCart';




const Cart = () => {
  return (
    <div className='cart'>
      <Crumbs />
      <ProductCart/>
    </div>
  );
};

export default Cart;







































