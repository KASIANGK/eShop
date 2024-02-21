import './Navbar.css'
import Logo from '../../assets/MolemGame.png'

function Navbar() {
    return (
        <div>
            <nav className="NAVBAR"> 
                <div className="NAVBAR-LOGO">
                    <img src={Logo}/>  
                </div>
                <ul className="NAVBAR-LINKS">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Products</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;

