import { Link } from "react-router-dom";


const Footer = () => {

    const Services = [
        'IT Management',
        'Digital Marketing',
        'Web Development',
        'App Development',
        'Digital Marketing',
      ];

      const UsefulLinks = [
        {title:'About Company', link:'/about'},
        {title:'Meet Our Team', link:'/team'},
        {title:'Latest Blog', link:'/blog'},
        {title:'Contact Us', link:'/contact'},
        {title:'Testimonials', link:'/testimonial'}
      ];  

      const LogoContent = {
        img1:'/assets/images/footer-logo.png',
        Content:'Globally monetize plug-and-play data it solu monotonectally disseminate oriented busine multifunctional mind design.'
      }

      const NewsletterContent = {
            Content:'Globally monetize plug-and-play data it solu monotonectally disseminate oriented busine multifunctional mind design.'
      }

      const AdressContent = {
        Title:'Elevating Customer Experience.',
        Number:'+44 920 090 505'
      }

    return (
        <div className="footer_main_area">
            <div className="address-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="address-box">
                                <div className="address-icon">
                                    <img src="/assets/images/address1.png" alt="address1" />
                                </div>
                                <div className="address-title">
                                    <h3>{AdressContent.Title}</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="address-box2">
                                <div className="address-icon">
                                    <img src="/assets/images/address2.png" alt="address1" />
                                </div>
                                <div className="solutek-btn">
                                    <Link to="/contact">
                                        {AdressContent.Number}
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
            <div className="footer-area">
                <div className="container">
                    <div className="row footer">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="footer-widget">
                                <div className="footer-logo">
                                <Link to="/"><img src={LogoContent.img1} alt="footer-logo" /></Link>
                                </div>
                                <p className="footer-widget-text">{LogoContent.Content}</p>
                                <div className="footer-social">
                                    <div className="footer-widget-social">
                                        <a href="#"><i className="bi bi-facebook"></i></a>
                                        <a href="#"><i className="bi bi-twitter"></i></a>
                                        <a href="#"><i className="bi bi-linkedin"></i></a>
                                        <a href="#"><i className="bi bi-instagram"></i></a>                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-6">
                            <div className="footer-widget left">
                                <div className="widget-title">
                                    <h2>Useful Links</h2>
                                </div>
                                <ul>
                                {UsefulLinks.map((item, i) => (
                                    <li key={i}><Link to={item.link}>{item.title}</Link></li>
                                ))}
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="footer-widget left">
                                <div className="widget-title">
                                    <h2>Services.</h2>
                                </div>
                                <ul>
                                {Services.map((item, i) => ( 
                                    <li key={i}><Link to="/service/service-details">{item}</Link></li>
                                ))}
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="footer-widget-newsletter">
                                <div className="widget-title">
                                    <h2>Newsletter</h2>
                                </div>
                                <p className="newsletter-text">{NewsletterContent.Content}</p>
                                <div className="Subscribe-form2">
                                    <form>
                                        <div className="form-field2">
                                            <input type="email" name="EMAIL" placeholder="Enter Your E-mail" required="" />
                                            <button className="subscribe-button" type="submit"><i className="bi bi-send"></i></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row copyright">
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="-copyright-text">
                                <p>© Copyright 2024 By Solutek</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="copyright-list">
                                <ul>
                                    <li><Link to="/">Privacy Policy</Link></li>
                                    <li><Link to="/">Supports</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
	        </div>
        </div>
    );
};

export default Footer;