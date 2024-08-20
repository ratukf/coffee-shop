import './History.css';
import image from './../../assets/images/about-history.jpg';

function History() {
    return (
        <section className="history">
            <img src={image} alt="history" />
            <div className="right"> 
                <h2>Our History</h2>
                <p>Coffee King, a family legacy that began as a small coffee stall on a city corner. With a secret family recipe passed down through generations, we serve high-quality coffee that tantalizes the taste buds. Over time, Coffee King has evolved into a modern coffee shop while maintaining its traditional flavors. We are committed to providing an unforgettable coffee experience for every customer.</p>
                <h2>Vission</h2>
                <p>To be the leading purveyor of exceptional coffee experiences, blending our rich family heritage with modern innovation, and inspiring coffee lovers worldwide.</p>
                <h2>Mission</h2>
                <p>Our mission is to uphold and elevate our time-honored family recipe, ensuring the enduring quality and distinctive taste of Coffee King coffee. We are committed to continuously developing new and exciting coffee offerings that harmonize traditional flavors with contemporary tastes, creating unforgettable experiences for our customers. Furthermore, we strive to foster a passionate and loyal community of coffee enthusiasts, supporting local coffee farmers and contributing positively to our society. By setting new standards of excellence in the coffee industry, we aim to inspire and educate coffee lovers about the art and science of coffee, while expanding our business responsibly and maximizing our positive social contributions.</p>
            </div>
        </section>
    )
}

export default History;