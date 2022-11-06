import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home';
import SineUp from './SignUp';
import Login from "./Login";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

export default function App() {
  return(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="SignUp" element={<SineUp />} />
            <Route path="Login" element={<Login />} />
        </Routes>
    </BrowserRouter>
  )
  
}
