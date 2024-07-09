import React, { useContext } from 'react';
import './CartProduct.css';
import { ShopContext } from '../../context/ShopContext';
import { FiMinus } from "react-icons/fi";
import { GoPlus } from "react-icons/go";
import { Link } from 'react-router-dom';
// import { RxCross2 } from 'react-icons/rx';


const CartProduct = () => {
  const { data_product, cartItems, incrementQuantity, decrementQuantity, getDiscount } = useContext(ShopContext);

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

  return (
    <div className='cartProduct'>

      <div className="seperateCont">
        <div className="cartProductHeader">
          <p>Product Images</p>
          <p>Product Description</p>
          <p>Price</p>
          <p>Unit</p>
          <p>Total</p>
        </div>

        <div className="cartProductHeaderTwoo">
          <p>Product Description</p>
          <p>Total</p>
        </div>
        
          {data_product.map((product) => {
            if (cartItems[product.id] > 0) {
              return (
                <div className='productListing' key={product.id}>
                  <img src={product.image} alt={product.name} className='productImage'/>
                  <div className="nameAndesc">
                    <p>{product.name}</p>
                    <h6>{product.description}</h6>
                  </div>
                  <p>₦{product.price}K</p>

                  <div className="units">
                    <div className='cartAddIcon' onClick={() => decrementQuantity(product.id)}>
                        <FiMinus />
                    </div>
                    <button className='cartItemQty'>{cartItems[product.id]}</button>
                    <div className='cartRemoveIcon' onClick={() => incrementQuantity(product.id)}>
                        <GoPlus />
                    </div>
                  </div>
                  <p>₦{calculateItemTotal(product).toFixed(2)}K</p>
                  {/* <div className='cartRemoveIcon' onClick={() => removeFromCart(product.id)}>
                    <RxCross2 color={"#FF9999"}/>
                  </div> */}
                </div>
                
              );
            }
            return null;
          })}
         </div>

        <div className="orderSummaryMain">
          <div className="orderSummary">
            <h4>Order Summary</h4>
            <h5>4 Items</h5>
          </div>
          <hr />
          <div className="subTotal">
            <h5>Subtotal</h5>
            <h5>₦{calculateCartTotal().toFixed(2)}K</h5>
          </div>
          <div className="discounts">
            <h5>Discount (25%)</h5>
            <h5>₦{getDiscount().toFixed(2)}</h5>
          </div>
          <div className="delivery">
            <h5>Delivery Fee</h5>
            <h5>₦{calculateDeliveryFee().toFixed(2)}</h5>
          </div>
          <hr />
          <div className="Totalll">
          <h4>Total</h4>
          <h4>₦{(calculateCartTotal() + calculateDeliveryFee() - getDiscount()).toFixed(2)}K</h4>
          </div>
          <Link to="/checkout">
          <button className='chekOut'>CheckOut</button>
          </Link>
        </div>      
      </div>
  );
};

export default CartProduct;
