// CheckOut.js
import React, { useContext } from 'react';
import "./CheckOut.css";
import BreadCrumb from '../../components/BreadCrumbs/BreadCrumb';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../context/ShopContext';
import PaymentForm from '../../components/PaymentForm/PaymentForm';
import { LiaArrowLeftSolid } from "react-icons/lia";

const CheckOut = () => {
  const { data_product, cartItems, getDiscount } = useContext(ShopContext);

  const calculateDeliveryFee = () => {
    return 50;
  };

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

  const subtotal = calculateCartTotal();
  const discount = getDiscount() || 0; // Ensure discount is a number
  const deliveryFee = calculateDeliveryFee();
  const total = subtotal + deliveryFee - discount;

  return (
    <div className='checkOut'>
      <div className="breaddd">
        <BreadCrumb />
      </div>
      <div className="goBack">
        <Link to="/cart" className="backArr">
          <LiaArrowLeftSolid size={25} />
        </Link>
        <div className="goBackLink">
          <p className="backk">Go back to Cart</p>
        </div>
      </div>
      <div className="chekCont">
        <div className="chekForm">
          <div className="paymentMethod">
            <h3>Choose Permanent Payment Method</h3>
            <div className="permanent">
              <div className='permanent-radio'>
                <input type="radio" checked readOnly />
              </div>
              <p className='debit'>Debit card</p>
            </div>
            <div className="carDetails">
              <PaymentForm total={total} />
            </div>
          </div>
        </div>
        <div className="chekSummaryMain">
          <div className="chekSummary">
            <h4>Order Summary</h4>
            <h4>{Object.values(cartItems).reduce((a, b) => a + b, 0)} Items</h4>
          </div>
          <hr />
          <div className="chekSubTotal">
            <h5>Subtotal</h5>
            <h5>₦{subtotal.toFixed(2)}K</h5>
          </div>
          <div className="chekiscounts">
            <h5>Discount (25%)</h5>
            <h5>₦{discount.toFixed(2)}</h5>
          </div>
          <div className="chekelivery">
            <h5>Delivery Fee</h5>
            <h5>₦{deliveryFee.toFixed(2)}</h5>
          </div>
          <hr />
          <div className="chekotalll">
            <h4>Total</h4>
            <h4>₦{total.toFixed(2)}K</h4>
          </div>
          <Link to="/cart">
            <button className='chekOuttt'>Go back to Cart</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CheckOut;
