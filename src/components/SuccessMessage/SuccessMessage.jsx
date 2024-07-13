import React from 'react';
import './SuccessMessage.css';

const SuccessMessage = ({ shippingData, paymentData, onReset }) => {
  return (
    <div className="success-message">
      <h3>Order Successful!</h3>
      <div className="details">
        <h4>Shipping Information:</h4>
        <p>Name: {shippingData.name}</p>
        <p>Address: {shippingData.address}</p>
        <p>City: {shippingData.city}</p>
        <p>State: {shippingData.state}</p>
        <p>ZIP: {shippingData.zip}</p>
        <p>Country: {shippingData.country}</p>
      </div>
      <div className="details">
        <h4>Payment Information:</h4>
        <p>Card Name: {paymentData.cardName}</p>
        <p>Card Number: {paymentData.cardNumber}</p>
        <p>Expiry: {paymentData.cardExpiry}</p>
        <p>Billing Address: {paymentData.billingAddress}</p>
        <p>Email: {paymentData.email}</p>
      </div>
      <button onClick={onReset}>Start New Order</button>
    </div>
  );
};

export default SuccessMessage;
