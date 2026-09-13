import { Link } from "react-router-dom";

const CaseStudy = () => {
    return (
        <div className="case-studies-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title text-center">
                            <h6 className="section-sub-title">case studies</h6>
                            <h1 className="section-main-title2">Our latest Case Studies</h1>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="case-studies-box">
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <div className="single-case-studies-box">
                                    <div className="case-studies-content">
                                        <h4><Link to="/project/project-details">Travel & Tour Mobile Apps Design</Link></h4>
                                        <h5>Mobile App Design</h5>
                                    </div>
                                    <div className="case-studies-btn">
                                        <Link to="/project/project-details">view more details</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="case-studies-thumb">
                                    <img src="/assets/images/home-3/case-studies.png" alt="thumb" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="case-studies-single-box">
                            <div className="case-studies-thumb">
                                <img src="/assets/images/home-3/case-studies2.png" alt="thumb" />
                                <div className="case-studie-content">
                                    <h3><Link to="/project/project-details">Professional Website Design</Link></h3>
                                    <h6>Mobile App Design</h6>
                                </div>
                                <div className="case-studies-icon">
                                    <i className="bi bi-arrow-right"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="case-studies-single-box">
                            <div className="case-studies-thumb">
                                <img src="/assets/images/home-3/case-studies3.png" alt="thumb" />
                                <div className="case-studie-content">
                                    <h3><Link to="/project/project-details">Professional Website Design</Link></h3>
                                    <h6>Mobile App Design</h6>
                                </div>
                                <div className="case-studies-icon">
                                    <i className="bi bi-arrow-right"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CaseStudy;