import React, { useState } from 'react';
import './ShippingForm.css';

// const ShippingForm = ({ onContinue }) => {
const ShippingForm = () => {
  const [shippingData, setShippingData] = useState({
    country: '',
    firstName: '',
    lastName: '',
    address: '',
    email: '',
    city: '',
    state: '',
    zip: '',
    phone: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setShippingData({ ...shippingData, [name]: value });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   onContinue(shippingData);
  // };

  return (
    // <form className="shipping-form" onSubmit={handleSubmit}>
    <form className="shipping-form">
      <h3>Shipping Information</h3>

      <div className="formmGroup">

        <div className="formmm">
          {/* <label htmlFor="country">Country</label> */}
          <input
            type="text"
            id="country"
            name="country"
            value={shippingData.country}
            onChange={handleChange}
            placeholder='Country/Region'
            required
          />
        </div>
        <div className="firstLast">
          <div className="firstName">
            {/* <label htmlFor="name">First Name</label> */}
            <input 
            type="text"
            id='firstName'
            name='firstName'
            value={shippingData.firstName}
            onChange={handleChange}
            placeholder='First Name'
            required />
          </div>
          <div className="lastName">
            {/* <label htmlFor="name">Last Name</label> */}
            <input 
            type="text"
            id='lastName'
            name='lastName'
            value={shippingData.lastName}
            onChange={handleChange}
            placeholder='Last Name'
            required />
          </div>
        </div>
        <div className="forrm-group">
          {/* <label htmlFor="address">Address</label> */}
          <input
            type="text"
            id="address"
            name="address"
            value={shippingData.address}
            onChange={handleChange}
            placeholder='Address'
            required
          />
      </div>
      <div className="form-groupp">
          <div className="city">
            {/* <label htmlFor="city">City</label> */}
            <input
              type="text"
              id="city"
              name="city"
              value={shippingData.city}
              onChange={handleChange}
              placeholder='City'
              required
            />
          </div>
          <div className="state">
            {/* <label htmlFor="state">State/Province</label> */}
            <input
              type="text"
              id="state"
              name="state"
              value={shippingData.state}
              onChange={handleChange}
              placeholder='State/Province'
              required
            />
          </div> 
      </div>
        {/* <div className="firstName">
          <label htmlFor="name">First Name</label>
          <input 
          type="text"
          id='firstName'
          name='firstName'
          value={shippingData.firstName}
          onChange={handleChange}
          required />
        </div>
        <div className="lastName">
          <label htmlFor="name">Last Name</label>
            <input 
            type="text"
            id='lastName'
            name='lastName'
            value={shippingData.lastName}
            onChange={handleChange}
            required />
        </div>
      </div>

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

      <div className="formmm-group">
        <div className="email">
            <label htmlFor="email">Email</label>
              <input 
              type="email"
              id='email'
              name='email'
              value={shippingData.email}
              onChange={handleChange}
              required />
        </div>

        <div className="phone-group">
          <label htmlFor="text">Phone Number</label>
          <div className="form-sub">
            <div className="dropDown"> */}
                {/* <FaChevronDown/> */}
                {/* <input 
                type="text"
                id='phoneNumber'
                name='phoneNumber'
                value={shippingData.phoneNumber}
                onChange={handleChange}
                required />
            </div>
            <div className="dropDownNum">
              <input 
              type="text"
              id='phoneNumber'
              name='phoneNumber'
              value={shippingData.phoneNumber}
              onChange={handleChange}
              required />
            </div>  
          </div>
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
        </div> */}
      </div>
      {/* <button type="submit" className="shipping-btn">Continue to Payment</button> */}
    </form>
  );
};

export default ShippingForm;
