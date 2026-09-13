import { useEffect } from "react";
import parse from 'html-react-parser';
import loadBackgroudImages from "../Common/loadBackgroudImages";
import { Link } from "react-router-dom";

const About2 = ({bgImg,MainImg,SubTitle,Title,Content,listTitle1,listTitle2,ContactText,Number}) => {

    useEffect(() => {
        loadBackgroudImages();
      }, []);

    return (
        <div className="about-area style-two" data-background={bgImg}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="about-thumbail">
                            <div className="about-thumb">
                                <img src={MainImg} alt="about-thumb" />	
                            </div>
                            <div className="about-shape">
                                <img src="/assets/images/home-two/about-shape.png" alt="about1" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-section-content">
                            <div className="section-title text-left">
                                <h5 className="section-sub-title">{SubTitle}</h5>
                                <h1 className="section-main-title">{parse(Title)}</h1>
                                <p className="section-title-descr">{Content}</p>
                            </div>
                            <div className="about-list-item">
                                <ul>
                                    <li><img src="/assets/images/home-two/about-icon2.png" alt="icon" />{listTitle1}</li>
                                    <li><img src="/assets/images/home-two/about-icon2.png" alt="icon" />{listTitle2}</li>
                                </ul>
                            </div>
                            <div className="solutek-btn">
                                 <Link to="/about" className="btn-2">EXPLORE MORE</Link>
                            </div>
                            <div className="about-contact-box">
                                <div className="call-box">
                                    <div className="about-contact">
                                        <img src="/assets/images/home-two/call-icon.png" alt="icon" />
                                    </div>
                                    <div className="about-contact-content">
                                        <h4>{ContactText}</h4>
                                        <p>{Number}</p>
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

export default About2;