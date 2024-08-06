import React, { useContext, useState } from 'react';
import './Item.css';
import { ShopContext } from '../../context/ShopContext';
import Modal from '../../components/Modal/Modal';

const Item = ({ product }) => {
  const { addToCart } = useContext(ShopContext);
  const { image, name, price, description, details, id } = product;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddToCart = () => {
    addToCart(id);
    closeModal(); // Close the modal after adding to cart
  };

  const handleViewProduct = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='item'>
      <div className='main'>
        <div className='imageContainer'>
          <img src={image} alt={name} className='itemImage'/>
          {/* <img src={image} alt={name} className='itemImage' onClick={handleAddToCart} /> */}
        </div>
        <div className='namePrice'>
          <p className='propName'>{name}</p>
          <p className='propPrice'>{price}</p>
        </div>
        <div className='nameDesc'>
          <span>{description}</span>
        </div>
        <div className='buyAdd'>
          <button onClick={handleViewProduct}>Quick Buy</button>
        </div>
      </div>
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <div className='modalContent'>
            <img src={image} alt={name} className='modalImage' />
            <h2>{name}</h2>
            <p>{details}</p>
            <p className='modalPrice'>{price}</p>
            <button className='modalAddToCart' onClick={handleAddToCart}>Add To Cart</button>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Item;
