import React, { useState } from 'react';
import Logo from '../../assets/MolemGame.png';
import './Navbar.css';

function Navbar() {
    const [isBurgerClicked, setIsBurgerClicked] = useState(false);

    const toggleBurger = () => {
        setIsBurgerClicked(!isBurgerClicked);
    };

    return (
        <div>
            <nav className="NAVBAR">
                <div className="NAVBAR-LOGO">
                    <img src={Logo} alt="Logo" />
                </div>
                <div className="BURGER" onClick={toggleBurger}>
                    <div className={`bar1 ${isBurgerClicked ? 'change' : ''}`}></div>
                    <div className={`bar2 ${isBurgerClicked ? 'change' : ''}`}></div>
                    <div className={`bar3 ${isBurgerClicked ? 'change' : ''}`}></div>
                </div>
                <div className={`NAVBAR-LINKS ${isBurgerClicked ? 'active' : ''}`}>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Products</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
