import React from "react";
import Info from './pages/Info/Info.jsx';
import ShoppingCart from "./pages/ShoppingCart/ShoppingCart.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Info />}></Route> 
      <Route path='/shoppingcart' element={<ShoppingCart />}></Route> 
    </Routes>
  )
}

export default App
