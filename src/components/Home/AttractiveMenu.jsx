import CardAttractiveMenu from '../Shared/CardAttractiveMenu';
import attractiveMenu from '../../data/attractive-menu';
import './AttractiveMenu.css';
import {Link} from 'react-router-dom';
import Product from '../Product/Products';

function AttractiveMenu() {
    return (
        <section className="home-menu">
            <div className="home-menu-title">
                <h2>Our Attractive</h2>
                <h2>Menu</h2>
            </div>
            <div className="home-menu-section">
                {attractiveMenu.map((item, index) =>{
                    return  (
                        <CardAttractiveMenu key={index} {...item} />
                    )
                })}
            </div>
            <div className="home-menu-button">
                <Link to ="/Products"><button id="menuButton">Explore more menu</button></Link>
            </div>
        </section>
    )
}

export default AttractiveMenu;