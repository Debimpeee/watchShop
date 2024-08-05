import React, { useState } from 'react'
import "./ContactForm.css"
import { FaChevronDown } from "react-icons/fa6";

const ContactForm = ({ onContinue }) => {
  const [contactData, setContactData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setContactData({...contactData, [name]: value})
  }

  return (
    <form className='contactForm'>
      <h3>Contact Details</h3>
      <div className="formmGroup">
        <div className="firstName">
          <label htmlFor="name">First Name</label>
          <input 
          type="text"
          id='firstName'
          name='firstName'
          value={contactData.firstName}
          onChange={handleChange}
          required />
        </div>
        <div className="lastName">
          <label htmlFor="name">Last Name</label>
            <input 
            type="text"
            id='lastName'
            name='lastName'
            value={contactData.lastName}
            onChange={handleChange}
            required />
        </div>
      </div>
      <div className="formm-group">
          <label htmlFor="email">Email</label>
            <input 
            type="email"
            id='email'
            name='email'
            value={contactData.email}
            onChange={handleChange}
            required />
      </div>
      <div className="formmm-group">
        <label htmlFor="text">Phone Number</label>
        <div className="form-sub">
          <div className="dropDown">
              {/* <FaChevronDown/> */}
              <input 
              type="text"
              id='phoneNumber'
              name='phoneNumber'
              value={contactData.phoneNumber}
              onChange={handleChange}
              required />
          </div>
          <div className="dropDownNum">
            <input 
            type="text"
            id='phoneNumber'
            name='phoneNumber'
            value={contactData.phoneNumber}
            onChange={handleChange}
            required />
          </div>  
        </div>
      </div>
    </form>
  )
}

export default ContactForm
