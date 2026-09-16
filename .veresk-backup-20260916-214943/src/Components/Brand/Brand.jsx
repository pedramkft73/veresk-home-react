import Slider from "react-slick";

const Brand = ({ variant = "default" }) => {

    const isEngineeringStrip = variant === "engineering";
    const DefaultStandardsAndDisciplines = [
        'ASHRAE',
        'NCC',
        'AIRAH',
        'AS/NZS',
        'MECHANICAL',
        'ELECTRICAL',
        'HYDRAULIC',
        'CIVIL'
      ];
    const StandardsAndDisciplines = isEngineeringStrip
      ? ['MECHANICAL', 'ELECTRICAL', 'HYDRAULIC', 'CIVIL', 'NCC', 'ASHRAE', 'AIRAH', 'NFPA', 'COMPLIANCE']
      : DefaultStandardsAndDisciplines;

      const settings = {
        dots: false,
        infinite: true,
        speed: isEngineeringStrip ? 4400 : 600,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: isEngineeringStrip ? 0 : 3000,
        cssEase: isEngineeringStrip ? "linear" : "ease",
        pauseOnHover: true,
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
              slidesToShow: isEngineeringStrip ? 3 : 2,
            }
          },{
            breakpoint: 575,
            settings: {
              slidesToShow: isEngineeringStrip ? 2 : 1,
            }
          }
        ]
      };      

    return (
        <div
            className={`brand-area${isEngineeringStrip ? ' engineering-standards-strip' : ''}`}
            aria-label={isEngineeringStrip ? "Engineering standards and disciplines" : undefined}
            aria-labelledby={isEngineeringStrip ? undefined : "engineering-standards-title"}
        >
            <div className="container">
                {!isEngineeringStrip && (
                    <h2 id="engineering-standards-title" className="brand-strip-label">
                        Engineering Standards &amp; Disciplines
                    </h2>
                )}
                <div className="row">
                    <div className="brand_list owl-carousel">
                     <Slider {...settings}> 
                    {StandardsAndDisciplines.map((item, i) => (
                        <div key={i} className="col-lg-12">
                            <div className="brand-box">
                                <div className="brand-thumb">
                                    <span className="brand-standard">{item}</span>
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

export default Brand;
