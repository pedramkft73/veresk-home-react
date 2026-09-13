import { Link } from "react-router-dom";

const ProjectDetail = () => {

    const InfoBox = [
        {title:'Date', info:'10 January, 2024'},
        {title:'Client', info:'Kodesolution Ltd'},
        {title:'Website', info:'www.domain.com'},
        {title:'Location', info:'New York, USA'},
      ];      

      const Services = [
        'Database Security',
        'Technology Consult',
        'App Development',
        'UI/UX Design',
        'Cyber Security',
      ];

    return (
            <div className="project-details-area">
                <div className="container">
                    <div className="row">
                        <div className="project-details">
                            <div className="project-details-thumb">
                                <img src="/assets/images/inner/project-det-thu.png" alt="thu" />
                            </div>
                        </div>
                    </div>
                    <div className="row project-box-info">
                    {InfoBox.map((item, i) => (  
                        <div key={i} className="col-lg-3 col-md-3">
                            <div className="project-details-box">
                                <p>{item.title}</p>
                                <h6>{item.info}</h6>
                            </div>
                        </div>
                        ))}
                    </div>
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="project-details-content">
                                        <h4 className="project-details-title">Here To Know About This Project</h4>

                                        <p className="project-details-desc">Alternative innovation to ethical network environmental whiteboard methods empowerment. Dramatically architect go forward opportunities before user-centric partnerships. Credibly implement exceptional </p>

                                        <p className="project-details-desc">Continually fashion orthogonal leadership skills whereas wireless metrics. Uniquely syndicate exceptional opportunities with interdependent users. Globally enhance fully tested meta-services rather than pandemic solutions. Proactively integrate client-integrate go forward architectures and turnkey meta-services.Interactively harness integrated ROI whereas frictionless products. 	
                                        </p>
                                        <div className="project-det-title">
                                            <h3>The Challenge Of Project</h3>
                                        </div>
                                        <p className="project-det-desc">Innovate wireless e-markets for inexpensive e-markets. Monotonectally grow progressive processes before seamless ideas facilitate an expanded array of scenarios rather than backend users. Objectively impact intuitive users and low-risk high-yield networks. Conveniently supply visionary</p>
                                    </div>
                                    <div className="row align-items-center">
                                        <div className="col-lg-6">
                                            <div className="project-details-item-images">
                                                <img src="/assets/images/inner/project-det-img.png" alt="img" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="project-details-list-item">
                                                <h4>Process & Results</h4>
                                                <ul>
                                                    <li><i className="bi bi-check-circle-fill"></i>Technology Consultancy</li>
                                                    <li><i className="bi bi-check-circle-fill"></i>Maintenance And Support</li>
                                                    <li><i className="bi bi-check-circle-fill"></i>We Provide best services</li>
                                                    <li><i className="bi bi-check-circle-fill"></i>Requirements Gathering</li>
                                                    <li><i className="bi bi-check-circle-fill"></i>Maintenance good Support</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <a className="project-details-text" href="project-details.html">Competently architect intermandated deliverables client
                                            niches continually underwhelm
                                        </a>
                                        <p className="project-details-desc">Appropriately communicate economically sound e-commerce after enterprise services. Dramatically target cross-media solutions and error-free platforms. Monotonectally pontificate 24/365 human capital and dynamic potentialities compellingly pursue	
                                        </p>
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

export default ProjectDetail;