import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import slides from '../../data/home-slides';

import './Slider.css';

function HomeSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slideToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {slides.map((slide, index) => (
        <div key={index} className="slide-container">
          <div className="slide-content-and-image"> {/* Combined class for clarity */}
            <div className="slide-content">
              <h2 className="heading1">{slide.heading1}</h2>
              <h2 className="heading2">{slide.heading2}</h2>
              <p>{slide.text}</p>
            </div>
            <img src={`/images/${slide.image}`} alt="Coffee splash" />
          </div>
        </div>
      ))}
    </Slider>
  );
}

export default HomeSlider;