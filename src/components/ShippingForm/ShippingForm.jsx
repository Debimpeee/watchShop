import React, { useState } from 'react';
import './ShippingForm.css';

const ShippingForm = ({ onContinue }) => {
  const [shippingData, setShippingData] = useState({
    // name: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    country: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setShippingData({ ...shippingData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onContinue(shippingData);
  };

  return (
    <form className="shipping-form" onSubmit={handleSubmit}>
      <h3>Shipping Information</h3>

      <div className="forrm-group">
        <label htmlFor="address">Address</label>
        <input
          type="text"
          id="address"
          name="address"
          value={shippingData.address}
          onChange={handleChange}
          required
        />
      </div>
      
      <div className="form-groupp">
          <div className="city">
            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              name="city"
              value={shippingData.city}
              onChange={handleChange}
              required
            />
          </div>
          <div className="zip">
            <label htmlFor="zip">ZIP/Postal Code</label>
            <input
              type="text"
              id="zip"
              name="zip"
              value={shippingData.zip}
              onChange={handleChange}
              required
            />
          </div>
      </div>
    
      <div className="form-grouup">
        <div className="country">
            <label htmlFor="country">Country</label>
            <input
              type="text"
              id="country"
              name="country"
              value={shippingData.country}
              onChange={handleChange}
              required
            />
        </div>

        <div className="state">
            <label htmlFor="state">State/Province</label>
            <input
              type="text"
              id="state"
              name="state"
              value={shippingData.state}
              onChange={handleChange}
              required
            />
        </div>
      </div>
      <button type="submit" className="shipping-btn">Continue to Payment</button>
    </form>
  );
};

export default ShippingForm;
