import React from 'react';
import { Link } from 'react-router-dom';
import "./NavbarStyle.css";
import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css";
import { IconName } from "react-icons/fa";

export default function Navbar() {
  return (
    <>
      <section>
        <header>
          <h2><Link to="/Home">Reeds</Link></h2>
          <div className="navigation">
            <Link to="/Home">Home </Link>
            <Link to="/Deals">Deals </Link>
            <Link to="Search"></Link>
            <Link to="/SignUp"><button>SignUp/Login</button></Link>
          </div>
        </header>
        <div className="content">
          <div className="info">
            <h2>Let Us Help You Get Your <br /><span>DreamDeals!</span></h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta magnam aut aperiam. Ducimus, soluta repudiandae!</p>
            <Link to="SignUp">Get Started</Link>
          </div>
        </div>
        <div className="footer">


        </div>
      </section>
    </>
  )
}
