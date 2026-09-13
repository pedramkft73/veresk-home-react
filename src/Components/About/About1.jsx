import parse from 'html-react-parser';
import { Link } from 'react-router-dom';
const About1 = ({MainImg,ImgTitle,SubTitle,Title,Content,listTitle,BottomText,BtnUrl,BtnText}) => {
    return (
        <div className="about-area">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-lg-6">
                            <div className="about-thumb">
                                <img src={MainImg} alt="about-thumb" />
                                <div className="about-shape">
                                    <img src="/assets/images/about1.png" alt="about1" />
                                </div>
                                <h4 className="about-title">{ImgTitle}</h4>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="section-title text-left">
                                <h5 className="section-sub-title">{SubTitle}</h5>
                                <h1 className="section-main-title">{parse(Title)}</h1>
                                <p className="section-title-descr">{Content}</p>
                            </div>
                            <div className="about-box d-flex align-items-center">
                                <div className="about-icon">
                                    <img src="/assets/images/about4.png" alt="about4" />
                                </div>
                                <div className="about-tiltle">
                                    <h3>{listTitle}</h3>
                                </div>
                            </div>
                            <div className="about-text">
                                <p>{BottomText}</p>
                            </div>
                            <div className="solutek-btn">
                                <Link to={BtnUrl}>
                                {BtnText}
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
    );
};

export default About1;