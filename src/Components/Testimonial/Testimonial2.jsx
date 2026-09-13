import Slider from "react-slick";
import data from '../../Data/testimonial1.json';
import SectionTitle from "../Common/SectionTitle";

const Testimonial2 = () => {

      const settings = {
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        swipeToSlide: true,
        responsive: [
          {
            breakpoint: 1399,
            settings: {
              slidesToShow: 3,
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
        <div className="testimonial-area style-two">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title text-center">
                            <SectionTitle
                                    SubTitle="CLIENTS FEEDBACK"
                                    Title="Perspectives and Experiences"
                            ></SectionTitle>
                        </div>
                    </div>
                    <div className="row">
                        <div className="testi_list owl-carousel cs_slider_gap_301">
                            <Slider {...settings}>
                                {data.map((item, index)=>(
                                <div key={index} className="col-lg-12 col-md-12">
                                    <div className="testi-box">
                                        <div className="testi-single-box">
                                            <div className="testi-box-inner">
                                                <div className="testi-icon">
                                                    <img src="/assets/images/testi1.png" alt="testi1" />
                                                </div>
                                                <div className="testi-content">
                                                    <p className="testi-desc">{item.desc}</p>
                                                    <ul className="testi-rating">
                                                        <li><i className="bi bi-star-fill"></i></li>
                                                        <li><i className="bi bi-star-fill"></i></li>
                                                        <li><i className="bi bi-star-fill"></i></li>
                                                        <li><i className="bi bi-star-fill"></i></li>
                                                        <li><i className="bi bi-star-fill"></i></li>
                                                    </ul>
                                                    <h3 className="testi-user-name">{item.title}<span>{item.subTitle}</span></h3>
                                                </div>
                                            </div>
                                            <div className="testi-author">
                                                <img src={item.image} alt="testi" />
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

export default Testimonial2;