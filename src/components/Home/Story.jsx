import './Story.css';
import image from './../../assets/images/home-tamping.jpg';

function Story() {
    return (
        <div className="story-container">
            <div className="text-section">
                <h2>Fantastic Coffee Sip Story</h2>
                <p>Every sip of our coffee is a journey. From carefully selected beans harvested at peak ripeness to the expert brewing of our baristas, each cup tells a unique story. Indulge in rich flavors, enticing aromas, and a cozy atmosphere.</p>
                <p>We serve the highest quality coffee that will tantalize your taste buds. Each coffee bean is meticulously selected and roasted to perfection to deliver rich and complex flavors. Taste the difference in every sip.</p>
            </div>
            <div className="story-image-section">
                <img src={image} alt="Coffee-sip-story" />
            </div>
        </div>
    )
}

export default Story;
