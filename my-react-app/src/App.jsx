import React from "react";
import Info from './pages/Info/Info.jsx';
import Register from './pages/Register.jsx'
import Login from './pages/Login.jsx'
import ShoppingCart from "./pages/ShoppingCart/ShoppingCart.jsx";
import NoMatch from "./pages/NoMatch.jsx"
import ForgotPassword from './pages/ForgotPassword.jsx'
import UnderDevelopment from "./pages/UnderDevelopment.jsx";
import Admin from "./pages/Admin/Admin.jsx"
import { Routes, Route } from "react-router-dom";
import { Provider } from 'jotai';

function App() {
  return (
    <Provider>
      <Routes>
        <Route path='/' element={<Login />}></Route> 
        <Route path='/info' element={<Info />}></Route> 
        <Route path='/register' element={<Register />}></Route> 
        <Route path='/shoppingcart' element={<ShoppingCart />}></Route> 
        <Route path='/forgotpassword' element={<ForgotPassword />}></Route> 
        <Route path='/underdevelopment' element={<UnderDevelopment />}></Route> 
        <Route path='/admin' element={<Admin />}></Route> 
        <Route path="*" element={<NoMatch />}></Route> 
      </Routes>
    </Provider>
  )
}

export default App
