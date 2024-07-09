import React, { useContext } from 'react';
import Item from "../../components/Items/Item";
import './Product.css';
import { ShopContext } from '../../context/ShopContext';

const Product = () => {
  const { data_product } = useContext(ShopContext);

  return (
    <div className='product'>
      <h1>Our Best Deals For You!</h1>
      <div className="productContainer">
        {data_product.map((item) => (
          <Item key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default Product;
