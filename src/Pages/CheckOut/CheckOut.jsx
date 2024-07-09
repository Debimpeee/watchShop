import React, { useContext } from 'react'
import "./CheckOut.css"
import BreadCrumb from '../../components/BreadCrumbs/BreadCrumb'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../context/ShopContext'
import PaymentForm from '../../components/PaymentForm/PaymentForm'
import { LiaArrowLeftSolid } from "react-icons/lia";


const CheckOut = () => {

  const { data_product, cartItems, getDiscount  } = useContext(ShopContext);

  const calculateDeliveryFee = () => {
    return 50;
  };

  const calculateItemTotal = (product) => {
    return product.price * cartItems[product.id];
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

const PermanentRadioButton = () => {
  return (
    <div className='permanent-radio'>
      <input
        type="radio"
        checked
        readOnly
      />
    </div>
  );
};

  return (
    <div className='checkOut'>

      <div className="breaddd">
        <BreadCrumb/>
      </div>

      <div className="goBack">
        <div className="backArr">
          <LiaArrowLeftSolid />
        </div>
      <Link to="/cart" className="goBackLink">
        <p className="backk">Go back to Cart</p>
      </Link>
    </div>

      <div className="chekCont">
      
        <div className="chekForm">

            <div className="paymentMethod">
              {/* <h3>Choose Permanent Payment Method</h3>
              <div className="permanent">
                <PermanentRadioButton />
                <p className='debit'>Debit card</p>
              </div> */}
              <div className="carDetails">
              <PaymentForm/>
            </div>
          </div>
        
        </div>


        <div className="chekSummaryMain">
            <div className="chekSummary">
              <h4>Order Summary</h4>
              <h4>4 Items</h4>
            </div>
            <hr />
            <div className="chekSubTotal">
              <h5>Subtotal</h5>
              <h5>₦{calculateCartTotal().toFixed(2)}K</h5>
            </div>
            <div className="chekiscounts">
              <h5>Discount (25%)</h5>
              <h5>₦{getDiscount().toFixed(2)}</h5>
            </div>
            <div className="chekelivery">
              <h5>Delivery Fee</h5>
              <h5>₦{calculateDeliveryFee().toFixed(2)}</h5>
            </div>
            <hr />
            <div className="chekotalll">
            <h4>Total</h4>
            <h4>₦{(calculateCartTotal() + calculateDeliveryFee() - getDiscount()).toFixed(2)}K</h4>
            </div>
            <Link to="/cart">
            <button className='chekOuttt'>Go back to Cart</button>
            </Link>
          </div>      
      </div>
      </div>
  )
}

export default CheckOut






