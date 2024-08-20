// Import library react
import './Navbar.css';
import Logo from "./../../assets/images/logo_black-9.png";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <nav className="navbar">
                <input type="checkbox" id="menuToggle" className="menu-toggle-checkbox" />
                
                <div className="sideBar">
                    <ul>
                        <Link to="/"><li>Home</li></Link>
                        <Link to="/About"><li>About</li></Link>
                        <Link to="/Products"><li>Products</li></Link>
                        <Link to ="/"><li><button type="button"><i className="fa-solid fa-cart-shopping"></i></button></li></Link>
                    </ul>
                </div> 

                <div className="logo">
                    <Link to="/"><img src={Logo} alt="CoffeeKing" /></Link>
                    
                </div>
                
                <ul className="nav-links">
                    <Link to="/">Home</Link>
                    <Link to="/About">About</Link>
                    <Link to ="/Products">Products</Link>
                </ul>

                <div className="actions">
                    <button type="button"><i className="fa-solid fa-cart-shopping"></i></button>
                </div>

                <label htmlFor="menuToggle" className="menu-toggle-button">
                    <i className="fa-solid fa-bars"></i>
                </label>
            </nav>

        </>

        
    )
}

export default Navbar;