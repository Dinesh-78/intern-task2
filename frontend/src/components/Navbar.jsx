import React from "react";
import '../style/Navbar.css';
const Navbar = () =>{
    return(
        <div className="navbar">
            <h1>Indian Johri</h1>
            <ul>
            <li>ABOUT US</li>
            <li>Shop Now</li>
            <li>Contact Us</li>
            </ul>
            <div>
            <button>Cart</button>
            <button>Login</button>
            <button>SignUp</button>

            </div>

        </div>
    )
}
export default Navbar;