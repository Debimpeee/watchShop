// PaymentForm.js
import React, { useState } from 'react';
import './PaymentForm.css';

const PaymentForm = ({ total }) => {
  const [formData, setFormData] = useState({
    cardName: '',
    cardNumber: '',
    cardExpiry: '',
    cardCVV: '',
    billingAddress: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Payment Data:', formData);
  };

  const formatCurrency = (amount) => {
    return `₦${amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  return (
    <form className="payment-form" onSubmit={handleSubmit}>
      <h3>Card details</h3>
      <div className="formCont">
        <div className="form-group">
          <label htmlFor="cardName">Card Name</label>
          <input
            type="text"
            id="cardName"
            name="cardName"
            value={formData.cardName}
            onChange={handleChange}
            required
            placeholder='Enter name on the card'
          />
        </div>
        <div className="form-groupInside">
          <label htmlFor="cardNumber">Card Number</label>
          <div className="inside">
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleChange}
              required
              placeholder='Card number'
            />
            <div className="twoBoxes">
              <input
                type="text"
                id="cardExpiry"
                name="cardExpiry"
                value={formData.cardExpiry}
                onChange={handleChange}
                required
                placeholder='MM/YY'
              />
              <input
                type="text"
                id="cardCVV"
                name="cardCVV"
                value={formData.cardCVV}
                onChange={handleChange}
                required
                placeholder='CVV'
              />
            </div>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="billingAddress">Billing Address</label>
          <input
            type="text"
            id="billingAddress"
            name="billingAddress"
            value={formData.billingAddress}
            onChange={handleChange}
            required
            placeholder='Enter billing address'
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder='Enter email'
          />
        </div>
      </div>
      <button type="submit">Pay {formatCurrency(total)}</button>
    </form>
  );
};

export default PaymentForm;
