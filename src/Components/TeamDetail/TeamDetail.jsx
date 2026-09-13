const TeamDetail = () => {
    return (
        <div className="team-details-area">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <div className="team-thumb">
                        <img src="/assets/images/inner/team-details.png" alt="thumb" />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="team-details-right">
                        <div className="team-details-content">
                            <div className="team-member-title">
                                <h4>Anowar Hossin Omio</h4>
                                <p>Dream-IT Founder &amp; CEO</p>
                            </div>
                            <p className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor creative
                            labore et dolore magna aliqua ipsum suspendisse ultrices gravida commodo viverra accu
                            eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        <div className="row add-bg">
                            <div className="col-lg-6 col-md-6">
                                <div className="contact-info-box">
                                    <div className="contact-info-icon">
                                    <i className="bi bi-telephone"></i>
                                    </div>
                                    <div className="contact-info-content">
                                        <h4>Call us Any time</h4>
                                        <p>+123 (4567) 890</p>
                                    </div>
                                </div>
                            </div>					
                            <div className="col-lg-6 col-md-6">
                                <div className="contact-info-box">
                                    <div className="contact-info-icon">
                                    <i className="bi bi-envelope"></i>
                                    </div>
                                    <div className="contact-info-content">
                                        <h4>Send E-Mail</h4>
                                        <p>info@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="team-details-social-icon">
                            <ul>
                                <li>Social Media</li>
                                <li><a href="#"><i className="bi bi-facebook"></i></a></li>
                                <li><a href="#"><i className="bi bi-twitter"></i></a></li>
                                <li><a href="#"><i className="bi bi-linkedin"></i></a></li>
                                <li><a href="#"><i className="bi bi-instagram"></i></a></li>
                            </ul>
                        </div>
                        <div className="team-details-location-box">
                        <div className="contact-info-icon">
                                <i className="bi bi-geo-alt"></i>
                            </div>
                            <div className="contact-info-content">
                                <h4>Location</h4>
                                <p>21 King Street 5th Floor Hamilton, Ontario Canada</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6">
                    <div className="contact_from_box">
                        <form  id="dreamit-form">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form_box">
                                        <input type="text" name="name" placeholder="Your Name *" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form_box">
                                        <input type="email" name="email" placeholder="Your E-Mail *" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form_box">
                                        <input type="text" name="subject" placeholder="Subject *" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form_box">
                                        <input type="text" name="phone" placeholder="Phone *" />
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form_box">
                                        <textarea name="message" id="message" cols="30" rows="10" placeholder="Message"></textarea>
                                    </div>
                                    <div className="quote_button">
                                        <button className="btn" type="submit">SENS NOW <i className="bi bi-arrow-right"></i></button>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <div id="status" className="error"></div>
                    </div>
                </div>			
                <div className="col-lg-6">
                    <div className="team-details-skills">
                        <h4>My Skills</h4>
                        <div className="wrapper">
                            <div className="skill">
                                <p>SEO Optimization</p>
                                <div className="skill-bar skill1 wow slideInLeft animated animated animated animated">
                                    <span className="skill-count1">95%</span>
                                </div>
                            </div>
                            <div className="skill">
                                <p>Web Development</p>
                                <div className="skill-bar skill2 wow slideInLeft animated animated animated animated">
                                    <span className="skill-count2">99%</span>
                                </div>
                            </div>
                            <div className="skill">
                                <p>Data Optimization</p>
                                <div className="skill-bar skill1 wow slideInLeft animated animated animated animated">
                                    <span className="skill-count1">85%</span>
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

export default TeamDetail;