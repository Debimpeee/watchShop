import React, { useContext } from 'react';
import './Item.css';
// import { MdOutlineFavoriteBorder } from 'react-icons/md';
import { ShopContext } from '../../context/ShopContext';

const Item = ({ product }) => {
  const { addToCart } = useContext(ShopContext);
  const { image, name, price, description, id } = product;

  const handleClick = () => {
    addToCart(id);
    scrollToTop(); 
  };

  const scrollToTop = () => {
    const scrollStep = -window.scrollY / (500 / 15); 
    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 15);
  };

  return (
    <div className='item'>
      <div className='main'>
        <img src={image} alt={name} className='itemImage' />
        <div className='namePrice'>
          <p className='propName'>{name}</p>
          <p className='propPrice'>{price}</p>
        </div>
        <div className='nameDesc'>
          <span>{description}</span>
        </div>
        <div className='buyAddContainer'>
          <div className='buyAdd'>
            <button className='buyNow' onClick={handleClick}>Buy Now</button>
            {/* <button className='addToFavorite'>
              <MdOutlineFavoriteBorder className='favoriteIcon' /> Add to Favorite
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
