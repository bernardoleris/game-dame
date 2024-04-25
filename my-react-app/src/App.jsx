import { useState } from 'react'
import React from "react";
import Navbar from './components/Navbar/Navbar.jsx';
import Info from './components/Info/Info.jsx';

function App() {
  return (
    <div className='app'>
        <Navbar />
        <Info />
    </div>
  )
}

export default App
