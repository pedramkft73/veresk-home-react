import Slider from "react-slick";
import SectionTitle from "../Common/SectionTitle";
import data from '../../Data/testimonial1.json';

const Testimonial1 = () => {
    const settings = {
      dots: false,
      infinite: true,
      speed: 600,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      swipeToSlide: true,
      accessibility: true,
      responsive: [
        { breakpoint: 1399, settings: { slidesToShow: 3 } },
        { breakpoint: 1199, settings: { slidesToShow: 2 } },
        { breakpoint: 575, settings: { slidesToShow: 1 } }
      ]
    };

    return (
      <section className="testimonial-area veresk-testimonial-area" aria-label="Client feedback">
        <div className="container">
          <div className="row">
            <div className="col-lg-12"><div className="section-title text-center"><SectionTitle SubTitle="CLIENT FEEDBACK" Title="What Our Clients <span>Say</span>" /></div></div>
            <div className="row"><div className="testi_list owl-carousel cs_slider_gap_301"><Slider {...settings}>
              {data.map((item, index) => (
                <div key={index} className="col-lg-12 col-md-12">
                  <div className="testi-box"><div className="testi-single-box">
                    <div className="testi-icon" aria-hidden="true"><img src="/assets/images/testi1.png" alt="" loading="lazy" decoding="async" /></div>
                    <div className="testi-content">
                      <p className="testi-text">{item.desc}</p>
                      <div className="testi-client">
                        <div className="testi-author"><img src={item.image} alt={`${item.title} portrait`} loading="lazy" decoding="async" /></div>
                        <div className="testi-client-meta"><h3 className="testi-title">{item.title}</h3><span className="testi-role">{item.subTitle}</span></div>
                      </div>
                    </div>
                  </div></div>
                </div>
              ))}
            </Slider></div></div>
          </div>
        </div>
      </section>
    );
};

export default Testimonial1;
