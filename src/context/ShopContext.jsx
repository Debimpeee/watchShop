import React, { createContext, useEffect, useState } from "react";
import data_product from "../components/Datas/data"

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(() => {
    let cart = {}
    data_product.forEach(product => {
      cart[product.id] = 0
    })
    return cart;
  });

  // Initialize cart based on fetched products
  const initializeCart = () => {
    let cart = {}
    data_product.forEach(product => {
      cart[product.id] = 0
    })
    setCartItems(cart)
  }

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev };
      updatedCart[itemId] = 0;
      return updatedCart;
    });
  };

  const incrementQuantity = (itemId) => {
    addToCart(itemId);
  };

  const decrementQuantity = (itemId) => {
    removeFromCart(itemId);
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = data_product.find((product) => product.id === Number(item));
        totalAmount += itemInfo.price * cartItems[item];
      }
    }
    return totalAmount;
  };

  const getDiscount = () => {
    const totalAmount = getTotalCartAmount();
    return totalAmount * 0.25; // 25% discount
  };

  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  };

  const contextValue = {
    data_product,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    incrementQuantity,
    decrementQuantity,
    getDiscount,
    getTotalCartItems,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;