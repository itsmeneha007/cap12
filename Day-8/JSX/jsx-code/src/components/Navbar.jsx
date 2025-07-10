import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav>
            <img src="https://cdn.pixabay.com/photo/2023/01/28/19/22/ai-generated-7751582_1280.jpg" alt="logo" className="first-img" />
            <input type="text" placeholder='search...' require />
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>More-Fashion</li>
                <li>Contact</li>
            </ul>
            <img src="https://cdn-icons-png.flaticon.com/128/17152/17152809.png" alt="logo"  className="second-img" />
        </nav>
    )
}

export default Navbar;