import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Cart from "./Pages/Cart/Cart"
import Product from "./Pages/Product/Product"
import CheckOut from "./Pages/CheckOut/CheckOut"
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <div>
      <BrowserRouter>

        <Navbar/>

        <Routes>

          <Route path="/" element={<Navigate to="/product" replace />} />
          <Route path="/product" element={<Product/>}>
            <Route path=':productId' element={<Product/>}/>
          </Route>

          <Route path='/cart' element={<Cart/>}/>

          <Route path='/checkout' element={<CheckOut/>}/>

        </Routes>

        <Footer/>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
