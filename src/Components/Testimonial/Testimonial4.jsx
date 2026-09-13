import Slider from "react-slick";
import SectionTitle from "../Common/SectionTitle";
import data from '../../Data/testimonial3.json';

const Testimonial4 = () => {

      const settings = {
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        swipeToSlide: true,
        responsive: [
          {
            breakpoint: 1399,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 1199,
            settings: {
              slidesToShow: 2,
            }
          },{
            breakpoint: 575,
            settings: {
              slidesToShow: 1,
            }
          }
        ]
      }; 

    return (
            <div className="testimonial-area style-three">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title text-center">
                            <SectionTitle
                                    SubTitle="TESTIMONIALS"
                                    Title="Few Stories From Our <span>Client</span>"
                            ></SectionTitle>
                            </div>
                        </div>
                        <div className="row">
                            <div className="testi_inner owl-carousel cs_slider_gap_30 test_slider_four">
                                <Slider {...settings}>
                                {data.map((item, index)=>(
                                <div key={index} className="col-lg-12 col-md-12">
                                    <div className="testi-box">
                                        <div className="testi-single-box">
                                            <div className="test-user-img">
                                                <img src={item.image} alt="img" />
                                            </div>
                                            <div className="testi-content">
                                                <div className="testi-icon">
                                                    <img src="/assets/images/testi1.png" alt="testi1" />
                                                </div>
                                                <p className="testi-text">{item.desc}</p>
                                                <ul className="testi-rating">
                                                    <li><i className="bi bi-star-fill"></i></li>
                                                    <li><i className="bi bi-star-fill"></i></li>
                                                    <li><i className="bi bi-star-fill"></i></li>
                                                    <li><i className="bi bi-star-fill"></i></li>
                                                    <li><i className="bi bi-star-fill"></i></li>
                                                </ul>
                                                <h3 className="testi-title">{item.title} <span>{item.subTitle}</span></h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                ))}
                                </Slider>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Testimonial4;