import Slider from "react-slick";
import data from '../../Data/hero.json';
import { Link } from "react-router-dom";
import parse from 'html-react-parser';

const Hero3 = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 900,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        swipeToSlide: true,
      };

    return (
        <div className="hero-active owl-carousel">
            <Slider {...settings}>
            {data.map((item, i) => (
                <div key={i} className="hero-area style-three d-flex align-items-center">
                    <div className="container">
                        <div className="row hero align-items-center">
                            <div className="col-lg-5 col-md-7">
                                <div className="hero-contant">
                                    <h6>{item.subTitle}</h6>
                                    <h1>{parse(item.title)}</h1>
                                    <p>{item.desc}</p>
                                    <div className="solutek-btn">
                                        <Link to="/about" className="btn-2">Get Started</Link>
                                    </div>
                                    <div className="hero-btn-3">
                                        <div className="hero-btn-profile">
                                            <img src="/assets/images/home-3/hero-pro.png" alt="img" /><Link to="/about"><span>MEET</span>Our Experts</Link>
                                        </div>
                                    </div>
                                    <div className="hero-left-shape">
                                        <img src="/assets/images/home-3/hero-geo.png" alt="shape" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-5">
                                <div className="hero-thumb-3">
                                    <div className="hero-img hero_image_3">
                                        <img src={item.image} alt="thumb" />
                                    </div>
                                    <div className="hero-thumb-shape">
                                        <img src="/assets/images/home-3/hero-rs.png" alt="shpae" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                ))}
            </Slider>
            
        </div>
    );
};

export default Hero3;