import { Link } from 'react-router-dom';
import data from '../../Data/services3.json';
import SectionTitle from '../Common/SectionTitle';
import { useEffect } from 'react';
import loadBackgroudImages from '../Common/loadBackgroudImages';

const Services3 = () => {

    useEffect(() => {
        loadBackgroudImages();
      }, []);

    return (
        <div className="our-service-section" data-background="/assets/images/home-3/service-bg.png">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title text-center">
                            <SectionTitle
                                    SubTitle="OUR SERVICES"
                                    Title="EXCLUSIVE IT SERVICES"
                            ></SectionTitle>
                        </div>
                    </div>
                </div>
                <div className="row">
                {data.map((item, i) => (
                    <div key={i} className="col-lg-4 col-md-6">
                        <div className="service-box">
                            <div className="single-service-box">
                                <div className="service-icon">
                                    <img src={item.icon} alt="icon" />
                                </div>
                                <div className="service-box-content">
                                    <h4 className="service-title">
                                        <Link to="/service/service-details">{item.title}</Link>
                                        </h4>
                                    <p className="service-desc">{item.desc}</p>
                                </div>
                            </div>
                            <div className="service-thumb">
                                <img src={item.image} alt="thumb" />
                            </div>
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </div>
    );
};

export default Services3;