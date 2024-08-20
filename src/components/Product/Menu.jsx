import CardMenu from '../Shared/CardMenu';
import menu from '../../data/menu';
import './../Shared/CardMenu.css';

function Menu() {
    return (
        <section className="menu">
            <div className="menu-title">
                <h2>Explore Our Menu</h2>
            </div>
            <div className="menu-card">
                {menu.map((item, index) => {
                    return (
                        <CardMenu key={index} {...item} />
                    )
                })}
            </div>
        </section>
    )
}

export default Menu;