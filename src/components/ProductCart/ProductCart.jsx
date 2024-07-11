import React, { useContext } from 'react';
import './ProductCart.css';
import { ShopContext } from '../../context/ShopContext';
import { FiMinus } from "react-icons/fi";
import { GoPlus } from "react-icons/go";
import { Link } from 'react-router-dom';
// import { RxCross2 } from 'react-icons/rx';

const ProductCart = () => {
    const { data_product, cartItems, incrementQuantity, decrementQuantity, getDiscount} = useContext(ShopContext);

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

    const calculateTotalItems = () => {
        let totalItems = 0;
        Object.values(cartItems).forEach(quantity => {
            totalItems += quantity;
        });
        return totalItems;
    };

    const formatCurrency = (amount) => {
        return `₦${amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    };

    const subtotal = calculateCartTotal();
    const discount = getDiscount() || 0; // Ensure discount is a number
    const deliveryFee = calculateDeliveryFee();
    const total = subtotal + deliveryFee - discount;
    const totalItems = calculateTotalItems();

    return (
        <div className='productCart'>

            <div className="seperateCont">
                <div className="cartProductHeader">
                    <p>Product</p>
                    <p>Unit</p>
                    <p>Total</p>
                </div>

                {data_product.map((product) => {
                    if (cartItems[product.id] > 0) {
                        return (
                            <div className="productListing" key={product.id}>

                                <div className="pronamdec">
                                    <div className="image">
                                        <img src={product.image} alt={product.name} className='productImage' />
                                    </div>
                                    <div className="nameAndesc">
                                        <p>{product.name}</p>
                                        <h6>{product.description}</h6>

                                        <div className="priceTag">
                                            <h5>{product.price}</h5>
                                        </div>
                                    </div>
                                </div>

                                <div className="units">
                                    <div className='cartAddIcon' onClick={() => decrementQuantity(product.id)}>
                                        <FiMinus size={19} />
                                    </div>
                                    <button className='cartItemQty'>{cartItems[product.id]}</button>
                                    <div className='cartRemoveIcon' onClick={() => incrementQuantity(product.id)}>
                                        <GoPlus size={19} />
                                    </div>
                                </div>

                                <div className="Totalll">
                                    <h4>{formatCurrency(calculateItemTotal(product))}</h4>
                                </div>

                                {/* <div className='cartDeleteIcon' onClick={() => removeFromCart(product.id)}>
                                    <RxCross2 color={"#FF9999"}/>
                                </div>  */}

                            </div>
                        );
                    }
                    return null;
                })}
            </div>

            <div className="orderSummaryMain">
                <div className="orderSummary">
                    <h4>Order Summary</h4>
                    <h5>{totalItems} {totalItems === 1 ? "Item" : "Items"}</h5>
                </div>
                <hr />
                <div className="subTotal">
                    <h5>Subtotal</h5>
                    <h5>{formatCurrency(subtotal)}</h5>
                </div>
                <div className="discounts">
                    <h5>Discount (25%)</h5>
                    <h5>{formatCurrency(discount)}</h5>
                </div>
                <div className="delivery">
                    <h5>Delivery Fee</h5>
                    <h5>{formatCurrency(deliveryFee)}</h5>
                </div>
                <hr />
                <div className="Totalll">
                    <h4>Total</h4>
                    <h4>{formatCurrency(total)}</h4>
                </div>
                <Link to="/checkout">
                    <button className='chekOut'>CheckOut</button>
                </Link>
            </div>

        </div>
    );
};

export default ProductCart;
