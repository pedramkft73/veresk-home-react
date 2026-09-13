import data from '../../Data/services2.json';
import SectionTitle from '../Common/SectionTitle';

const Services2 = () => {
    return (
        <div className="service-area style-two">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title text-center">
                            <SectionTitle
                                    SubTitle="SOLUTEK SERVICES"
                                    Title="We Provide Exclusive Service<br> For Your Business</span>"
                                ></SectionTitle>
                        </div>
                    </div>
                </div>
                <div className="row">
                {data.map((item, i) => (
                    <div key={i} className="col-lg-4 col-md-6">
                        <div className="single-service-box">
                            <div className="service-box-inner">
                                <div className="service-content">
                                    <h4 className="service-title">{item.title}</h4>
                                    <p className="service-des">{item.desc}
                                    </p>
                                </div>
                                <div className="service-icon">
                                    <img src={item.img} alt="icon" />
                                </div>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services2;