import React from 'react';
import './Cart.css';
import Crumbs from '../../components/Crumbs/Crumbs';
import CartProduct from '../../components/CartProduct/CartProduct';

const Cart = () => {
  return (
    <div className='cart'>
      <Crumbs />
      <CartProduct/>
    </div>
  );
};

export default Cart;
