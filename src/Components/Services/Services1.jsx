import SectionTitle from "../Common/SectionTitle";
import data from '../../Data/services1.json';
import { Link } from "react-router-dom";

const Services1 = () => {
    return (
            <div className="sservice-area">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12">
                            <div className="section-title text-center">
                                <SectionTitle
                                    SubTitle="SOLUTEK COMPANY"
                                    Title="How Professional IT Services<br> Can Drive <span>Success.</span>"
                                ></SectionTitle>
                            </div>
                        </div>
                        {data.map((item, i) => (
                        <div key={i} className="col-xl-3 col-lg-4 col-md-6">
                            <div className="service-single-box">
                                <div className="service-icon">
                                    <img src={item.icon} alt="service1" />
                                </div>
                                <div className="service-content">
                                    <h3 className="service-title">{item.title}</h3>
                                    <p className="service-text">{item.desc}</p>
                                    <div className="service-btn">
                                        <Link to={item.btnLink}><i className="bi bi-plus"></i><span> {item.btnText}</span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
                    <div className="service-shape bounce-animate3">
                        <img src="/assets/images/service5.png" alt="service5" />
                    </div>
                    <div className="service-shape2">
                        <img src="/assets/images/service7.png" alt="service5" />
                    </div>
                    <div className="service-shape3 bounce-animate4">
                        <img src="/assets/images/service8.png" alt="service5" />
                    </div>
                </div>
            </div>
    );
};

export default Services1;