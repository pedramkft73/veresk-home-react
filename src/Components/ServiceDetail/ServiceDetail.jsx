import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import data from '../../Data/faq.json';

const ServiceDetail = () => {

    const Services = [
        'Database Security',
        'IT Solution',
        'Technology Consult',
        'App Development',
        'UI/UX Design',
        'Cyber Security',
      ];  

      const accordionContentRef = useRef(null);
      const [openItemIndex, setOpenItemIndex] = useState(-1);
      const [firstItemOpen, setFirstItemOpen] = useState(true);
    
      const handleItemClick = index => {
        if (index === openItemIndex) {
          setOpenItemIndex(-1);
        } else {
          setOpenItemIndex(index);
        }
      };
      useEffect(() => {
        if (firstItemOpen) {
          setOpenItemIndex(0);
          setFirstItemOpen(false);
        }
      }, [firstItemOpen]);   
      

    return (
            <div className="services-details-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="services-details-thumb">
                                        <img src="/assets/images/inner/service-details.png" alt="thumb" />
                                    </div>
                                    <div className="services-details-content">
                                        <h4 className="services-details-title">Best Solutions for App Development</h4>

                                        <p className="services-details-desc">Alternative innovation to ethical network environmental whiteboard pursue compelling results for premier methods empowerment. Dramatically architect go forward opportunities before user-centric partnerships.Credibly implement exceptional </p>

                                        <p className="services-details-desc">Continually fashion orthogonal leadership skills whereas wireless metrics. Uniquely syndicate exceptional opportunities with interdependent users. Globally enhance fully tested meta-services rather than pandemic solutions. Proactively integrate client-integrate go forward architectures and turnkey meta-services.Interactively harness integrated ROI whereas frictionless products. 	
                                        </p>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6">
                                            <div className="service-detalis-text-box">
                                                <div className="service-details-content">
                                                    <h4>Why Choose Us</h4>
                                                    <p>Alternative innovation to ethical network
                                                        environmental whiteboard pursue
                                                        compelling results for premier  methods
                                                        empowerment forward.</p>
                                                </div>
                                                <div className="service-details-list">
                                                    <ul>
                                                        <li><i className="bi bi-arrow-right"></i>Success Stories</li>
                                                        <li><i className="bi bi-arrow-right"></i>Success service</li>
                                                        <li><i className="bi bi-arrow-right"></i>Success store</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="service-details-icon-box">
                                                <div className="service-det-icon">
                                                    <img src="/assets/images/inner/det-icon.png" alt="icon" />
                                                </div>
                                                <div className="service-det-content">
                                                    <h3>Empowering Your Success</h3>
                                                    <p>Alternative innovation to ethical network
                                                        environmental whiteboard pursue
                                                        compelling results for premier  methods
                                                        empowerment forward environmental
                                                        whiteboard pursue process dsign.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        <div className="tab_container">
                                            <div className="feq-content">
                                                <h3 className="faq-title">Frequently Asked Questions</h3>
                                                <p className="faq-description">Alternative innovation to ethical network environmental whiteboard pursue compelling results for premier methods empowerment. Dramatically architect go forward opportunities</p>
                                            </div>
                                            <div id="tab" className="tab_content">
                                                <ul className="accordion">
                                                {data.map((item, index)=>(
                                                    <li key={index} className={`cs_accordian ${index === openItemIndex ? "active" : "" }`}>
                                                        <a onClick={() => handleItemClick(index)}><span>{item.title}</span></a>
                                                        <p ref={accordionContentRef}>{item.desc}</p>
                                                    </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="widget-sidber">
                                        <div className="widget-sidber-content">
                                            <h4>Main Services</h4>
                                        </div>
                                        <div className="widget-category">
                                            <ul>
                                            {Services.map((item, i) => ( 
                                                <li key={i}><Link to="/service/service-details"><img src="/assets/images/inner/category-icon.png" alt="" />{item}<i className="bi bi-arrow-right"></i></Link></li>
                                            ))}
                                            </ul>
                                        </div>
                                    </div>						
                                    <div className="widget-sidber">
                                        <div className="widget-sidber-content">
                                            <h4>Downloads</h4>
                                        </div>
                                        <div className="widget-sidber-download-button">
                                            <a href="#"><i className="bi bi-file-earmark-pdf"></i>Service Report<span><i className="bi bi-download"></i></span></a>

                                            <a className="active" href="#"><i className="bi bi-file-earmark-pdf"></i>Download Lists<span><i className="bi bi-download"></i></span></a>
                                        </div>
                                    </div>
                                    <div className="widget-sidber-contact-box">
                                        <div className="widget-sidber-contact">
                                            <img src="/assets/images/inner-images/sidber-cont-icon.png" alt="" />
                                        </div>
                                        <p className="widget-sidber-contact-text">Call Us Anytime</p>
                                        <h3 className="widget-sidber-contact-number">+123 (4567) 890</h3>
                                        <span className="widget-sidber-contact-gmail"><i className="bi bi-envelope-fill"></i>example@gmail.com</span>
                                        <div className="widget-sidber-contact-btn">
                                           <Link to="/contact">Contact Us <i className="bi bi-arrow-right"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default ServiceDetail;