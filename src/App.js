import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Deals from "./Deals";
import Home from "./Home";
import Login from "./Login";
import SineUp from './SignUp';
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

export default function App() {
  return(
    <BrowserRouter>
    <Navbar/>
    <div className="pages">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="SignUp" element={<SineUp />} />
            <Route path="Login" element={<Login />} />
            <Route path="Deals" element={<Deals />} />
        </Routes>
        </div>
    </BrowserRouter>
  )
  
}
