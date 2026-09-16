import SectionTitle from "../Common/SectionTitle";
import data from '../../Data/services1.json';

const Services1 = () => {
    return (
        <section className="sservice-area" aria-label="Engineering capabilities">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-12">
                        <div className="section-title text-center">
                            <SectionTitle
                                SubTitle="ENGINEERING CAPABILITIES"
                                Title="Engineering Support Across the Project Lifecycle"
                            />
                        </div>
                    </div>
                    {data.map((item, i) => (
                        <div key={i} className="col-xl-3 col-lg-4 col-md-6">
                            <div className="service-single-box">
                                <div className="service-icon" aria-hidden="true">
                                    <img src={item.icon} alt="" loading="lazy" decoding="async" />
                                </div>
                                <div className="service-content">
                                    <h3 className="service-title">{item.title}</h3>
                                    <p className="service-text">{item.desc}</p>
                                    <div className="service-btn">
                                        <a href={item.btnLink}><i className="bi bi-plus" aria-hidden="true"></i><span> {item.btnText}</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="service-shape bounce-animate3" aria-hidden="true">
                    <img src="/assets/images/service5.png" alt="" loading="lazy" decoding="async" />
                </div>
                <div className="service-shape2" aria-hidden="true">
                    <img src="/assets/images/service7.png" alt="" loading="lazy" decoding="async" />
                </div>
                <div className="service-shape3 bounce-animate4" aria-hidden="true">
                    <img src="/assets/images/service8.png" alt="" loading="lazy" decoding="async" />
                </div>
            </div>
        </section>
    );
};

export default Services1;
