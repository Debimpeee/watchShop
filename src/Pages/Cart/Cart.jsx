import React from 'react';
import './Cart.css';
import Crumbs from '../../components/Crumbs/Crumbs';
// import CartProduct from '../../components/CartProduct/CartProduct';
import ProductCart from '../../components/ProductCart/ProductCart';




const Cart = () => {
  return (
    <div className='cart'>
      <Crumbs />
      <ProductCart/>
      {/* <CartProduct/> */}
    </div>
  );
};

export default Cart;
