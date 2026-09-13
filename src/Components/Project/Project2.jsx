import Slider from "react-slick";
import data from '../../Data/project2.json';
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import SectionTitle from "../Common/SectionTitle";

const Project2 = () => {

    useEffect(() => {
        loadBackgroudImages();
      }, []);

      const sliderRef = useRef(null);

      const next = () => {
        sliderRef.current.slickNext();
      };
    
      const previous = () => {
        sliderRef.current.slickPrev();
      };  
      
    const settings = {
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        swipeToSlide: true,
        responsive: [
          {
            breakpoint: 1399,
            settings: {
              slidesToShow: 4,
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
        <div className="project-area styl-two" data-background="/assets/images/home-two/project-bg-two.jpg">
            <div className="container-fluid">
                <div className="row project-section">
                    <div className="col-lg-6">
                        <div className="section-title text-left">
                        <SectionTitle
                                    SubTitle="OUR PROJECT NOW"
                                    Title="Technologys Evolution <br> Towards Brilliance"
                            ></SectionTitle>
                        </div>
                    </div>
                    <div className="col-lg-6  d-flex align-items-center justify-content-end">
                    <div className="project-right2">
                        <div className="cs_slider_arrows cs_style_2 testtimonial_arow_area cs_hide_md">
                            <div className="cs_left_arrow cs_slider_arrow cs_center" onClick={previous}>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_5_106)">
                                <path d="M6.4 1.59961L7.52 2.71961L3.04 7.19961H16V8.79961H3.04L7.52 13.2796L6.4 14.3996L0 7.99961L6.4 1.59961Z" fill="white"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_5_106">
                                <rect width="16" height="16" fill="white" transform="matrix(-1 0 0 1 16 0)"/>
                                </clipPath>
                                </defs>
                                </svg> 
                            </div>
                            <div className="cs_right_arrow cs_slider_arrow cs_center" onClick={next}>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_5_66)">
                                <path d="M9.6 1.59961L8.48 2.71961L12.96 7.19961H0V8.79961H12.96L8.48 13.2796L9.6 14.3996L16 7.99961L9.6 1.59961Z" fill="white"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_5_66">
                                <rect width="16" height="16" fill="white"/>
                                </clipPath>
                                </defs>
                                </svg> 
                            </div>
                            </div>
                        </div>                       
                    </div>
                </div>
                <div className="row project-carousel">
                    <div className="project_item owl-carousel cs_slider_gap_30 project2-item-area">
                        <Slider ref={sliderRef} {...settings}>
                        {data.map((item, i) => (
                        <div key={i} className="col-xl-12 col-lg-12">
                            <div className="project-single-box">
                                <div className="project-thumb">
                                    <img src={item.img} alt="project-thumb" />
                                </div>
                                <div className="project-content">
                                    <h4 className="project-title"><Link to="/project/project-details">{item.title}</Link></h4>
                                    <p className="project-des">{item.desc}</p>
                                </div>
                                <div className="project-icon">
                                    <span><i className="bi bi-arrow-right"></i></span>
                                </div>
                                <div className="project-shape">
                                    <img src="/assets/images/home-two/border-shape.png" alt="shape" />
                                </div>
                            </div>
                        </div>
                        ))}
                        </Slider>
                    </div>
                </div>
            </div>
            <div className="project-bg-shape rotateme">
                <img src="/assets/images/home-two/project-bg-shape.png" alt="shape" />
            </div>
        </div>
    );
};

export default Project2;