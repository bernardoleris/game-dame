import { useState } from 'react'
import React from "react";
import Navbar from './components/Navbar';
import Info from './components/Info';

function App() {
  return (
    <div className='app'>
        <Navbar />
        <Info />
    </div>
  )
}

export default App
