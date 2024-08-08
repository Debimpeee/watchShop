import React, { useEffect, useState } from 'react';
import './ShippingForm.css';

// const ShippingForm = ({ onContinue }) => {
const ShippingForm = ({onShippingDataChange}) => {
  const [shippingData, setShippingData] = useState({
    country: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: ''
  });

  useEffect(()=>{
    onShippingDataChange(shippingData)
  }, [shippingData])

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
      </div>
    </form>
  );
};

export default ShippingForm;


