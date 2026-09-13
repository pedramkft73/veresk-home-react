import { Link } from "react-router-dom";
import parse from 'html-react-parser';
import { useEffect } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";

const About3 = ({bgImg,MainImg,SubTitle,Title,Content,listTitle1,listTitle2,BoxTitle1,BoxTitle2}) => {

    useEffect(() => {
        loadBackgroudImages();
      }, []);
          
    return (
            <div className="about-section" data-background={bgImg}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-lg-6">
                            <div className="about-thumb">
                                <img src={MainImg} alt="thumb" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-contact">
                                <div className="section-title text-left">
                                    <h6 className="section-sub-title">{SubTitle}</h6>
                                    <h1 className="section-main-title">{parse(Title)}</h1>
                                    <p className="section-title-descr">{Content}</p>
                                </div>
                                <div className="about-box-item">
                                    <div className="about-box d-flex align-items-center">
                                        <div className="about-icon">
                                            <img src="/assets/images/about4.png" alt="about4" />
                                        </div>
                                        <div className="about-tiltle">
                                            <h3>{BoxTitle1}</h3>
                                        </div>
                                    </div>
                                    <div className="about-box d-flex align-items-center">
                                        <div className="about-icon">
                                            <img src="/assets/images/about4.png" alt="about4" />
                                        </div>
                                        <div className="about-tiltle">
                                            <h3>{BoxTitle2}</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="about-item-list">
                                    <ul>
                                        <li>{listTitle1}</li>
                                        <li>{listTitle2}</li>
                                    </ul>
                                </div>
                                <div className="solutek-btn">
                                    <Link to="/about">EXPLORE MORE
                                        <div className="solutek-hover-btn hover-bx"></div>
                                        <div className="solutek-hover-btn hover-bx2"></div>
                                        <div className="solutek-hover-btn hover-bx3"></div>
                                        <div className="solutek-hover-btn hover-bx4"></div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default About3;