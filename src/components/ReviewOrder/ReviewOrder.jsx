import React from 'react';
import './ReviewOrder.css';

const ReviewOrder = ({ cartItems, data_product, shippingData, onConfirm }) => {
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
      <h3>Review Your Order</h3>
      <div className="revShipCont">
        <div className="shipping-info">
          <h4>Shipping Information</h4>
          <p>{shippingData.name}</p>
          <p>{shippingData.address}</p>
          <p>{shippingData.city}, {shippingData.state}, {shippingData.zip}</p>
          <p>{shippingData.country}</p>
        </div>
        <div className="order-summary">
          <h4>Order Summary</h4>
          {data_product.map((product) => (
            cartItems[product.id] > 0 && (
              <div key={product.id} className="order-item">
                <img src={product.image} alt={product.name} className='productImage' />
                <p>{product.name}</p>
                <p>{cartItems[product.id]} x {product.price}</p>
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
    </div>
  );
};

export default ReviewOrder;


