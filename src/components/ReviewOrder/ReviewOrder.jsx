import React from 'react';
import './ReviewOrder.css';

// const ReviewOrder = ({ cartItems, data_product, shippingData, onConfirm }) => {
const ReviewOrder = ({ cartItems, data_product, onConfirm }) => {
  const calculateItemTotal = (product) => {
    return parseFloat(product.price.replace(/[^\d.-]/g, "")) * cartItems[product.id];
  };

  const calculateCartTotal = () => {
    let total = 0;
    data_product.forEach((product) => {
      if (cartItems[product.id] > 0) {
        total += calculateItemTotal(product);
      }
    });
    return total;
  };

  const total = calculateCartTotal();

  return (
    <div className="review-order">
        <h3>Order Summary</h3>
        <div className="order-summary">
          {data_product.map((product) => (
            cartItems[product.id] > 0 && (
                <div key={product.id} className="order-item">
                  <div className="imgName">
                    <img src={product.image} alt={product.name} className='productImage' />
                    <p>{product.name}</p> x 
                    <p><strong>{cartItems[product.id]}</strong></p>
                  </div>
                  <div className="price">
                    <p>{product.price}</p>
                  </div>
                </div>
              )
            ))}
          <div className="totalh">
            <h4>Total</h4>
            <h4>₦{total.toFixed(2)}</h4>
          </div>
          <button onClick={onConfirm}>Confirm Order</button>
        </div>
    </div>
  );
};

export default ReviewOrder;


