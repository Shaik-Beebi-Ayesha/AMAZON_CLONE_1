import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Products from "./components/Products";
import Footer from "./components/Footer";
import Checkout from './components/Checkout'
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";


function App() {


  return (
    <>
      
      
      <Router>
        <div className="font-boyFont">
          <Routes>
            <Route path="/home" element={<><Header /><Banner/><Products/><Footer /></>}></Route> 
             <Route path="/checkout" element={<><Header/><Checkout/></>}></Route> 
            
            
            <Route path='/signin' element={<Signin/>}></Route>
            <Route path='/signup' element={<Signup/>}></Route>
            <Route path="/" element={<><Header /><Banner/><Products/><Footer /></>}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
