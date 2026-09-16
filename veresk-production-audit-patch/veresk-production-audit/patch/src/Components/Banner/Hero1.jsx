import { useEffect } from "react";
import parse from 'html-react-parser';
import loadBackgroudImages from "../Common/loadBackgroudImages";

const Hero1 = ({ bgImg, SubTitle, Title, Content, BtnText, BtnLink, Image, VideoText }) => {
    useEffect(() => {
        loadBackgroudImages();
    }, []);

    return (
        <section className="hero-area d-flex align-items-center" data-background={bgImg} aria-labelledby="veresk-home-title">
            <div className="container">
                <div className="row hero align-items-center">
                    <div className="col-lg-6">
                        <div className="hero-contant">
                            <h5>{SubTitle}</h5>
                            <h1 id="veresk-home-title">{parse(Title)}</h1>
                            <p>{Content}</p>
                            <div className="solutek-btn">
                                <a href={BtnLink}>
                                    {BtnText}
                                    <div className="solutek-hover-btn hover-bx"></div>
                                    <div className="solutek-hover-btn hover-bx2"></div>
                                    <div className="solutek-hover-btn hover-bx3"></div>
                                    <div className="solutek-hover-btn hover-bx4"></div>
                                </a>
                            </div>
                            <div className="hero-video-icon">
                                <a className="video-vemo-icon venobox vbox-item" href="https://veresk.com.au/online-tools/">
                                    <i className="bi bi-arrow-up-right" aria-hidden="true"></i><span>{VideoText}</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="hero-thumb">
                            <img src={Image} alt="Veresk engineer reviewing technical engineering information" fetchPriority="high" decoding="async" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero1;
