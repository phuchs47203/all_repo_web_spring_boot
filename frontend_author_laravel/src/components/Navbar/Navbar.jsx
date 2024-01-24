import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <div id='navbar' className='navbar'>
            <div className='navbar_link'>
                <p>
                    <Link to="/home" className='link' > Home</Link>
                </p>
                <p>
                    <Link to="/product" className='link'> Product</Link>
                </p>
            </div>
            <div className='navbar_btn'>
                <button>
                    <Link to="/login" className='link' > Login</Link>
                </button>
                <button>
                    <Link to="/home" className='link' > Register</Link>

                </button>
            </div>
        </div>
    )
}

export default Navbar;