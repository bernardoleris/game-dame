import React from "react";
import Info from './pages/Info/Info.jsx';
import Register from './pages/Register/Register.jsx'
import ShoppingCart from "./pages/ShoppingCart/ShoppingCart.jsx";
import NoMatch from "./pages/NoMatch.jsx"
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Register />}></Route> 
      <Route path='/info' element={<Info />}></Route> 
      <Route path='/shoppingcart' element={<ShoppingCart />}></Route> 
      <Route path="*" element={<NoMatch />}></Route> 
    </Routes>
  )
}

export default App
