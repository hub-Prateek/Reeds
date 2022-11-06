import React from 'react'
import { Link } from 'react-router-dom';
export default function Home() {
  return (
    <>
        <div>Home</div>
        <nav>
            <ul>
                <li>
                    <Link to="/SignUp">SignUp</Link>
                    <Link to="/Login">Login</Link>
                </li>
            </ul>
        </nav>
    </>
  )
}
