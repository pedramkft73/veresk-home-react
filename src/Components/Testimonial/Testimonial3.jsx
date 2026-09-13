import { useEffect } from 'react';
import data from '../../Data/testimonial2.json';
import parse from 'html-react-parser';
import loadBackgroudImages from '../Common/loadBackgroudImages';

const Testimonial3 = () => {

    useEffect(() => {
        loadBackgroudImages();
      }, []);

    const TestimonialContent = {
        bgImg:'/assets/img/faq_img_1.jpg',
        SubTitle:'client review',
        Title:'Customized Solutions to<br> Meet Client <span>Needs.</span>',
        Content:'Solution is a long established fact that a reader will be distracted the reada content of a page when looking at layout the point.',
        AuthorImage:'/assets/images/home-3/test-thumb.png',
        AuthorName:'Brandon A. Vela',
        AuthorDesignation:'ui Designer'        
      }

    return (
        <div className="testimonial-area style-four" data-background="/assets/images/home-3/test-bg.png">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="section-title text-left">
                            <h6 className="section-sub-title">{TestimonialContent.SubTitle}</h6>
                            <h1 className="section-main-title test_title_area3">{parse(TestimonialContent.Title)}</h1>
                            <p>{TestimonialContent.Content}</p>
                        </div>
                        <div className="testi-thumb">
                            <img src={TestimonialContent.AuthorImage} alt="thumb" />
                            <div className="testi-autor">
                                <h4 className="testi-user-name">{TestimonialContent.AuthorName}
                                    <span>{TestimonialContent.AuthorDesignation}</span>
                                </h4>
                            </div>
                            <div className="slide-shape">
                                <div className="slide-shape-inner">
                                    <img src="/assets/images/home-3/slide-shape.png" alt="shape" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="row">
                            <section className="splide">
                                <div className="splide__track">
                                    <div className="splide__list">
                                    {data.map((item, i) => (
                                        <div key={i} className="splide__slide">
                                            <div className="col-lg-12">
                                                <div className="testi-box">
                                                    <div className="testimonial-single-box">
                                                        <div className="testi-user-rating">
                                                            <ul className="testi-rating">
                                                                <li><i className="bi bi-star-fill"></i></li>
                                                                <li><i className="bi bi-star-fill"></i></li>
                                                                <li><i className="bi bi-star-fill"></i></li>
                                                                <li><i className="bi bi-star-fill"></i></li>
                                                                <li><i className="bi bi-star-fill"></i></li>
                                                            </ul>
                                                        </div>
                                                        <div className="testi-text">
                                                            <p className="testi-desc">{item.desc}
                                                            </p>
                                                        </div>
                                                        <div className="testi-review-user">
                                                            <div className="testi-quote-icon">
                                                                <img src="/assets/images/home-3/testi-quote.png" alt="quote" />
                                                            </div>
                                                            <h3>From <span>200+</span> reviews</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>								  
                                        ))}
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial3;