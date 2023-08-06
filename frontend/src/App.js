// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import HomeScreen from './Screen/HomeScreen';
import NavBar from './Components/Navbar';
import React from 'react'
import BuyScreen from './Screen/BuyScreen';

import PropertyDetailScreen from './Screen/PropertyDetailScreen';
import RentScreen from './Screen/RentScreen';
import ContactScreen from './Screen/contact';


function App() {
  return (
    <BrowserRouter>
      <div >
      
      
      <NavBar />
      <Routes>
      
      <Route path="/" element={<HomeScreen />}></Route>
      <Route path='/rent' element={<RentScreen />}></Route>
      <Route path="/buy" element={<BuyScreen />}></Route>
      <Route path = "/contact_us" element={<ContactScreen />}></Route>
      <Route path='/property/:id' element={<PropertyDetailScreen/>}></Route>
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
