import Slider from "react-slick";
import data from '../../Data/project1.json';
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import SectionTitle from "../Common/SectionTitle";
import loadBackgroudImages from "../Common/loadBackgroudImages";

const Project1 = ({bgImage,ClassAdd,variant = "default"}) => {

    const sliderRef = useRef(null);
    const isEngineeringTools = variant === "engineering-tools";

    const next = () => {
      sliderRef.current.slickNext();
    };
  
    const previous = () => {
      sliderRef.current.slickPrev();
    };  

    useEffect(() => {
        loadBackgroudImages();
      }, []);

    const settings = {
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: isEngineeringTools ? 4200 : 3000,
        pauseOnHover: true,
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
        <div className={ClassAdd} data-background={bgImage}>
            <div className="container-fluid">
                <div className="row project align-items-center">
                    <div className={isEngineeringTools ? "col-xl-9 col-lg-10" : "col-lg-6"}>
                        <div className="section-title text-left">
                            <SectionTitle
                                    SubTitle="WHAT WE'RE BUILDING"
                                    Title={isEngineeringTools ? "Engineering Tools &amp; <span>Digital Solutions</span>" : "Engineering Tools & Digital Solutions"}
                            ></SectionTitle>
                        </div>
                    </div>
                    <div className={isEngineeringTools ? "col-xl-3 col-lg-2" : "col-lg-6"}>
                        <div className="project-right">
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
                <div className="row carousel">
                    <div className="project_list owl-carousel cs_slider_gap_30">
                        <Slider ref={sliderRef} {...settings}>
                            {data.map((item, i) => (
                            <div key={i} className="col-lg-12 col-md-12">
                                <div className="project-single-box">
                                    <div className="project-thumb">
                                        <img src={item.img} alt={item.title} />
                                    </div>
                                    <div className="project-content">
                                        <h3 className="project-title">
                                            {isEngineeringTools ? <span>{item.title}</span> : <Link to="/project/project-details">{item.title}</Link>}
                                        </h3>
                                        <p className="project-description">{item.desc}</p>
                                        {isEngineeringTools ? (
                                            item.link ? (
                                                <a className={`project-cta project-cta--${item.ctaType}`} href={item.link}>
                                                    {item.cta}
                                                </a>
                                            ) : (
                                                <span className={`project-cta project-cta--${item.ctaType}`}>
                                                    {item.cta}
                                                </span>
                                            )
                                        ) : (
                                            <p className="project-text">{item.tag}</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project1;
