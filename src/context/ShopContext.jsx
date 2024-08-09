import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const [data_product, setDataProduct] = useState([]);

  const url = "https://api.timbu.cloud/products?organization_id=a063034b7f354a148f4dfb615bd117c6&reverse_sort=false&page=2&size=10&Appid=35EQDHU9265Q1KD&Apikey=059048c0d16b4374a5c62d394a069abd20240721232241987063" 

  useEffect(() =>{
    const fetchProducts = async () => {
      try{
        const response = await axios.get(url)
        setDataProduct(response.items)
        initializeCart(response.items)
      } catch(error){
        console.error('Error fetching products:', error)
      }
    }
    fetchProducts()
  }, [])

  // Initialize cart based on fetched products
  const initializeCart = (products) => {
    let cart = {}
    products.forEach(product => {
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
