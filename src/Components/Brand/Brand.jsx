import Slider from "react-slick";

const Brand = () => {

    const BrandImage = [
        '/assets/images/brand-img.png',
        '/assets/images/brand-img1.png',
        '/assets/images/brand-img2.png',
        '/assets/images/brand-img3.png',
        '/assets/images/brand-img4.png'
      ];

      const settings = {
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
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
        <div className="brand-area">
            <div className="container">
                <div className="row">
                    <div className="brand_list owl-carousel">
                     <Slider {...settings}> 
                    {BrandImage.map((item, i) => ( 
                        <div key={i} className="col-lg-12">
                            <div className="brand-box">
                                <div className="brand-thumb">
                                    <img src={item} alt="brand img" />
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