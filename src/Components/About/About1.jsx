import parse from 'html-react-parser';

const About1 = ({ MainImg, ImgTitle, SubTitle, Title, Content, listTitle, BottomText, BtnUrl, BtnText }) => {
    return (
        <section className="about-area" aria-labelledby="veresk-ai-engineering-title">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="about-thumb">
                            <img src={MainImg} alt="Engineer using AI-powered digital engineering tools" loading="lazy" decoding="async" />
                            <div className="about-shape" aria-hidden="true">
                                <img src="/assets/images/about1.png" alt="" loading="lazy" decoding="async" />
                            </div>
                            {ImgTitle && (
                                <h3 className="about-title">{ImgTitle}</h3>
                            )}
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="section-title text-left">
                            <p className="section-sub-title">{SubTitle}</p>
                            <h2 id="veresk-ai-engineering-title" className="section-main-title">{parse(Title)}</h2>
                            <p className="section-title-descr">{Content}</p>
                        </div>
                        <div className="about-box d-flex align-items-center">
                            <div className="about-icon" aria-hidden="true">
                                <img src="/assets/images/about4.png" alt="" loading="lazy" decoding="async" />
                            </div>
                            <div className="about-tiltle">
                                <h3>{listTitle}</h3>
                            </div>
                        </div>
                        <div className="about-text">
                            <p>{BottomText}</p>
                        </div>
                        <div className="solutek-btn">
                            <a href={BtnUrl}>
                                {BtnText}
                                <div className="solutek-hover-btn hover-bx"></div>
                                <div className="solutek-hover-btn hover-bx2"></div>
                                <div className="solutek-hover-btn hover-bx3"></div>
                                <div className="solutek-hover-btn hover-bx4"></div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About1;
