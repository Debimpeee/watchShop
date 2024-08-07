import React, { useContext, useState } from 'react';
import './CheckOut.css';
import BreadCrumb from '../../components/BreadCrumbs/BreadCrumb';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../context/ShopContext';
import ShippingForm from '../../components/ShippingForm/ShippingForm';
import ReviewOrder from '../../components/ReviewOrder/ReviewOrder';
import PaymentForm from '../../components/PaymentForm/PaymentForm';
import SuccessMessage from '../../components/SuccessMessage/SuccessMessage';
import { LiaArrowLeftSolid } from 'react-icons/lia';

const CheckOut = () => {
  const { data_product, cartItems, getDiscount } = useContext(ShopContext);
  const [step, setStep] = useState(1);
  const [shippingData, setShippingData] = useState(null);
  const [paymentData, setPaymentData] = useState(null);

  const calculateDeliveryFee = () => {
    return 50; // Example function, replace with actual logic
  };

  // Calculate subtotal and total based on cart items and discounts
  const calculateCartTotal = () => {
    let subtotal = 0;
    data_product.forEach(product => {
      if (cartItems[product.id] > 0) {
        subtotal += parseFloat(product.price.replace(/[^\d.-]/g, '')) * cartItems[product.id];
      }
    });

    const discount = getDiscount() || 0;
    const deliveryFee = calculateDeliveryFee();
    const total = subtotal + deliveryFee - discount;

    return { subtotal, total };
  };

  const { subtotal, total } = calculateCartTotal();

  const handleOrderConfirm = () => {
    if(Object.values(shippingData).some(value => value === '')){
      alert("Please fill in your shipping details")
      return
    }
    setStep(2);
  };

  const handleShippingDataChange = (data) =>{
    setShippingData(data)
  }

  const handlePaymentSubmit = (data) => {
    setPaymentData(data);
    setStep(3);
  };

  const resetCheckout = () => {
    setStep(1);
    setShippingData({});
    setPaymentData(null);
  };

  return (
    <div className="checkout">
      <div className="breadcrumbs">
        <BreadCrumb />
      </div>
      <div className="goBack">
        <Link to="/cart" className="back-arrow">
          <LiaArrowLeftSolid size={20} />
        </Link>
        <p className="back-link">Go back to Cart</p>
      </div>
      <div className="checkout-content">
        {step === 1 && (
          <div className="shipping-info">
            {/* <ContactForm/> */}
            <ShippingForm onShippingDataChange={handleShippingDataChange}/> 
            <ReviewOrder
              cartItems={cartItems}
              data_product={data_product}
              shippingData={shippingData}
              onConfirm={handleOrderConfirm}
            />
          </div>
        )}
        </div>

        {/* Payment Form and Success Message */}
        <div className="payment-info">
          {step === 2 && <PaymentForm total={total} onSubmit={handlePaymentSubmit} />}
          {step === 3 && (
            <SuccessMessage
              shippingData={shippingData}
              paymentData={paymentData}
              onReset={resetCheckout}
            />
          )}
        </div>
      </div>
  );
};

export default CheckOut;



