import Slider from "react-slick";
import { useEffect, useState } from "react";

const Brand = ({ variant = "default" }) => {
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
    const isEngineeringStrip = variant === "engineering";
    const DefaultStandardsAndDisciplines = ['ASHRAE','NCC','AIRAH','AS/NZS','MECHANICAL','ELECTRICAL','HYDRAULIC','CIVIL'];
    const StandardsAndDisciplines = isEngineeringStrip
      ? ['MECHANICAL','ELECTRICAL','HYDRAULIC','CIVIL','NCC','ASHRAE','AIRAH','NFPA','COMPLIANCE']
      : DefaultStandardsAndDisciplines;

    useEffect(() => {
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
      speed: prefersReducedMotion ? 0 : (isEngineeringStrip ? 4400 : 600),
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: !prefersReducedMotion,
      autoplaySpeed: isEngineeringStrip ? 0 : 3000,
      cssEase: isEngineeringStrip ? "linear" : "ease",
      pauseOnHover: true,
      pauseOnFocus: true,
      arrows: false,
      swipeToSlide: true,
      accessibility: true,
      responsive: isEngineeringStrip
        ? [
            { breakpoint: 1399, settings: { slidesToShow: 4 } },
            { breakpoint: 1199, settings: { slidesToShow: 3 } },
            { breakpoint: 992, settings: { variableWidth: true, slidesToShow: 1, slidesToScroll: 1 } }
          ]
        : [
            { breakpoint: 1399, settings: { slidesToShow: 4 } },
            { breakpoint: 1199, settings: { slidesToShow: 2 } },
            { breakpoint: 575, settings: { slidesToShow: 1 } }
          ]
    };

    return (
      <section className={`brand-area${isEngineeringStrip ? ' engineering-standards-strip' : ''}`} aria-label={isEngineeringStrip ? "Engineering standards and disciplines" : undefined}>
        <div className="container">
          {!isEngineeringStrip && <h2 id="engineering-standards-title" className="brand-strip-label">Engineering Standards &amp; Disciplines</h2>}
          <div className="row"><div className="brand_list owl-carousel"><Slider {...settings}>
            {StandardsAndDisciplines.map((item, i) => {
              const standardWidth = Math.max(132, (item.length * 10) + 56);
              const slideProps = isEngineeringStrip
                ? {
                    className: "brand-standard-slide",
                    style: { width: standardWidth, "--brand-slide-width": `${standardWidth}px` },
                  }
                : { className: "col-lg-12" };

              return <div key={i} {...slideProps}><div className="brand-box"><div className="brand-thumb"><span className="brand-standard">{item}</span></div></div></div>;
            })}
          </Slider></div></div>
        </div>
      </section>
    );
};

export default Brand;
