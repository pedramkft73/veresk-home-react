import Slider from "react-slick";
import data from '../../Data/project1.json';
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import SectionTitle from "../Common/SectionTitle";
import loadBackgroudImages from "../Common/loadBackgroudImages";

const Project1 = ({bgImage,ClassAdd,variant = "default"}) => {
    const sliderRef = useRef(null);
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
    const isEngineeringTools = variant === "engineering-tools";

    const next = () => sliderRef.current?.slickNext();
    const previous = () => sliderRef.current?.slickPrev();
    const activateOnKey = (event, action) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        action();
      }
    };

    useEffect(() => {
      loadBackgroudImages();
      const media = window.matchMedia?.('(prefers-reduced-motion: reduce)');
      if (!media) return undefined;
      const update = () => setPrefersReducedMotion(media.matches);
      update();
      media.addEventListener?.('change', update);
      return () => media.removeEventListener?.('change', update);
    }, []);

    const settings = {
      dots: false,
      infinite: true,
      speed: prefersReducedMotion ? 0 : 600,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: false,
      swipeToSlide: true,
      accessibility: true,
      autoplay: !prefersReducedMotion,
      autoplaySpeed: isEngineeringTools ? 4200 : 3000,
      pauseOnHover: true,
      pauseOnFocus: true,
      responsive: [
        { breakpoint: 1399, settings: { slidesToShow: 4 } },
        { breakpoint: 1199, settings: { slidesToShow: 2 } },
        { breakpoint: 575, settings: { slidesToShow: 1 } }
      ]
    };

    return (
      <section className={ClassAdd} data-background={bgImage} aria-label={isEngineeringTools ? "Engineering tools and digital solutions" : "Projects"}>
        <div className="container-fluid">
          <div className="row project align-items-center">
            <div className={isEngineeringTools ? "col-xl-9 col-lg-10" : "col-lg-6"}>
              <div className="section-title text-left">
                <SectionTitle
                  SubTitle="WHAT WE'RE BUILDING"
                  Title={isEngineeringTools ? "Engineering Tools &amp; <span>Digital Solutions</span>" : "Engineering Tools & Digital Solutions"}
                />
              </div>
            </div>
            <div className={isEngineeringTools ? "col-xl-3 col-lg-2" : "col-lg-6"}>
              <div className="project-right">
                <div className="cs_slider_arrows cs_style_2 testtimonial_arow_area cs_hide_md">
                  <div className="cs_left_arrow cs_slider_arrow cs_center" role="button" tabIndex="0" aria-label="Previous tools" onClick={previous} onKeyDown={(e) => activateOnKey(e, previous)}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M6.4 1.6 7.52 2.72 3.04 7.2H16v1.6H3.04l4.48 4.48-1.12 1.12L0 8l6.4-6.4Z" fill="white"/></svg>
                  </div>
                  <div className="cs_right_arrow cs_slider_arrow cs_center" role="button" tabIndex="0" aria-label="Next tools" onClick={next} onKeyDown={(e) => activateOnKey(e, next)}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="m9.6 1.6-1.12 1.12 4.48 4.48H0v1.6h12.96l-4.48 4.48 1.12 1.12L16 8 9.6 1.6Z" fill="white"/></svg>
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
                      <div className="project-thumb"><img src={item.img} alt={item.title} loading="lazy" decoding="async" /></div>
                      <div className="project-content">
                        <h3 className="project-title">{isEngineeringTools ? <span>{item.title}</span> : <Link to="/project/project-details">{item.title}</Link>}</h3>
                        <p className="project-description">{item.desc}</p>
                        {isEngineeringTools ? (
                          item.link ? <a className={`project-cta project-cta--${item.ctaType}`} href={item.link}>{item.cta}</a> : <span className={`project-cta project-cta--${item.ctaType}`}>{item.cta}</span>
                        ) : <p className="project-text">{item.tag}</p>}
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Project1;
