import { Link } from "react-router-dom";

const BlogDetail = () => {

    const Services = [
        'Database Security',
        'IT Solution',
        'Technology Consult',
        'App Development',
        'UI/UX Design',
        'Cyber Security',
      ]; 

      const BlogTag = [
        'Cyber Security',
        'Learning',
        'Software',
        'Development',
        'Marketing',
        'Technology',
      ]; 

    return (
            <div className="blog-details-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="blog-details-thumb">
                                        <img src="/assets/images/home-two/blog-thu.png" alt="thumb" />
                                    </div>
                                    <div className="blog-details-content">
                                        <div className="meta-blog">
                                            <span className="mate-text">By Author</span>
                                            <span><i className="bi bi-calendar-check-fill"></i>05 January, 2024</span>
                                            <span><img src="/assets/images/inner/category-icon.png" alt="" />IT Solutions</span>
                                        </div>
                                        <h4 className="blog-details-title">Solution This Business For is Marketing Blog</h4>

                                        <p className="blog-details-desc">Alternative innovation to ethical network environmental whiteboard pursue compelling results for methods empowerment. Dramatically architect go forward opportunities before user-centric Credibly implement exceptional</p>	

                                        <p className="blog-details-desc">Continually fashion orthogonal leadership skills whereas wireless metrics. Uniquely syndicate exce opportunities with interdependent users. Globally enhance fully tested meta-services rather than solutions. Proactively integrate client-integrate go forward architectures and turnkey meta Interactively harness integrated ROI whereas frictionless products. </p>

                                        <div className="blog-details-author-talk">
                                            <div className="blog-details-quote">
                                                <img src="/assets/images/testi1.png" alt="img" />
                                            </div>
                                            <div className="blog-details-author-title">
                                                <p>Competently architect intermandated deliverables client with niches continually underwhelm build cross-media growth strategies without robust.</p>
                                                <span>CEO &amp; Founder</span>
                                            </div>
                                        </div>

                                        <h3 className="blog-details-title">Our Begin Now To Beingonl</h3>

                                        <p className="blog-details-desc two">Dynamically optimize leading-edge value via pandemic manufactured products. Conveniently seize sticky growth strategies and ethical potentialities. Professionally create high-quality rather than intuitive portals.</p>

                                        <div className="blog-details-list-item">
                                            <ul>
                                                <li><i className="bi bi-check-circle-fill"></i>Innovate wireless market</li>
                                                <li><i className="bi bi-check-circle-fill"></i>Productivate resource sucking</li>
                                                <li><i className="bi bi-check-circle-fill"></i>Proactively unleash oriented communities</li>
                                                <li><i className="bi bi-check-circle-fill"></i>Credibly develop progressive archi</li>
                                            </ul>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6">
                                                <div className="blog-details-thumb two">
                                                    <img src="/assets/images/home-two/blog-thu2.png" alt="" />
                                                </div>
                                            </div>                            	
                                            <div className="col-lg-6 col-md-6">
                                                <div className="blog-details-thumb">
                                                    <img src="/assets/images/home-two/blog-thu3.png" alt="" />
                                                </div>
                                            </div>
                                        </div>

                                        <h3 className="blog-details-title two">Arcu At Mauris Facilisis Fermentum</h3>

                                        <p className="blog-details-desc three">Progressively target highly efficient business for distributed interfaces. Globally evisculate pand networks rather than viral collaboration and idea-sharing. Continually utilize turnkey networks via productize intuitive information whereas</p>
                                    </div>
                                    <div className="blog-details-socila-box">
                                        <div className="row align-items-center">
                                            <div className="col-lg-6 col-md-6">
                                                <div className="blog-details-category">
                                                    <span><a href="#">Digital Marketing</a></span>
                                                    <span><a className="active-className" href="#">Development</a></span>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="blog-details-social-icon">
                                                    <ul>
                                                        <li><a href="#"><i className="bi bi-facebook"></i></a></li>
                                                        <li><a href="#"><i className="bi bi-twitter"></i></a></li>
                                                        <li><a href="#"><i className="bi bi-linkedin"></i></a></li>
                                                        <li><a href="#"><i className="bi bi-instagram"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="single-comment-area">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="blog-details-comment-title">
                                                    <h4>2 Comments</h4>
                                                </div>
                                                <div className="blog-details-comment">
                                                    <div className="blog-details-comment-reply">
                                                        <a href="#">Reply</a>
                                                    </div>
                                                    <div className="blog-details-comment-thumb">
                                                        <img src="/assets/images/testi4.png" alt="" />
                                                    </div>
                                                    <div className="blog-details-comment-content">
                                                    <h2>Maria Manda</h2>
                                                    <span>22 August, 2024</span>
                                                    <p>Interactively visualize top-line internal or organic sources rather than top-line niche mark
                                                        unleash 24/7 opportunities after high standards in process improvements. Uniquely deploy 
                                                        methodologies with reliable information.  
                                                    </p>
                                                    </div>
                                                </div>									
                                                <div className="blog-details-comment style-two">
                                                    <div className="blog-details-comment-reply">
                                                        <a href="#">Reply</a>
                                                    </div>
                                                    <div className="blog-details-comment-thumb">
                                                        <img src="/assets/images/testi5.png" alt="img" />
                                                    </div>
                                                    <div className="blog-details-comment-content">
                                                    <h2>Johon Alex</h2>
                                                    <span>22 August, 2024</span>
                                                    <p>Interactively visualize top-line internal or organic sources rather than top-line niche mark
                                                        unleash 24/7 opportunities after high standards in process.
                                                    </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="blog-details-contact">
                                            <div className="blog-details-contact-title">
                                                <h4>Leave A Comments</h4>
                                            </div>
                                            <form action="#">
                                                <div className="row">
                                                    <div className="col-lg-6">
                                                        <div className="contact-input-box">
                                                            <input type="text" name="Name" placeholder="Full Name*" required="" />
                                                        </div>
                                                    </div>					
                                                    <div className="col-lg-6">
                                                        <div className="contact-input-box">
                                                            <input type="text" name="Email" placeholder="Email Address*" required="" />
                                                        </div>
                                                    </div>							
                                                    <div className="col-lg-12">
                                                        <div className="contact-input-box">
                                                            <input type="text" name="Web Site" placeholder="Your Website*" required="" />
                                                        </div>
                                                    </div>									
                                                    <div className="col-lg-12">
                                                        <div className="contact-input-box">
                                                            <textarea name="Message" id="Meassage" placeholder="Write Comments..."></textarea>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <div className="input-check-box">
                                                        <input type="checkbox" />
                                                            <span>Save your email info in the browser for next comments.</span>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <div className="blog-details-submi-button">
                                                            <button type="submit">Post Comments</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="widget-sidber">
                                    <div className="widget_search">
                                        <form action="#" method="get">
                                            <input type="text" name="s" value="" placeholder="Search Here" title="Search for:" />
                                            <button type="submit" className="icons">
                                                <i className="fa fa-search"></i>
                                            </button>
                                        </form>
                                    </div>
                                    </div>
                                    <div className="widget-sidber">
                                        <div className="widget-sidber-content">
                                            <h4>Main Services</h4>
                                        </div>
                                        <div className="widget-category">
                                            <ul>
                                            {Services.map((item, i) => (
                                                <li key={i}><Link to="/service/service-details"><img src="/assets/images/inner/category-icon.png" alt="" />{item}<i className="bi bi-arrow-right"></i></Link></li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="widget-sidber">
                                        <div className="widget-sidber-content">
                                            <h4>Popular Post</h4>
                                        </div>
                                        <div className="sidber-widget-recent-post">
                                            <div className="recent-widget-thumb">
                                                <img src="/assets/images/inner/recent-post.png" alt="img" />
                                            </div>
                                            <div className="recent-widget-content">
                                            <Link to="/blog/blog-details">Regional Manager limited time
                                            </Link>	
                                                <p> feb, 26 2024</p>							
                                            </div>
                                        </div>							
                                        <div className="sidber-widget-recent-post">
                                            <div className="recent-widget-thumb">
                                                <img src="/assets/images/inner/recent-post2.png" alt="img" />
                                            </div>
                                            <div className="recent-widget-content">
                                            <Link to="/blog/blog-details">The Complete App Development</Link>
                                                <p> June, 15 2024</p>							
                                            </div>
                                        </div>							
                                        <div className="sidber-widget-recent-post">
                                            <div className="recent-widget-thumb">
                                                <img src="/assets/images/inner/recent-post3.png" alt="img" />
                                            </div>
                                            <div className="recent-widget-content">
                                            <Link to="/blog/blog-details">Easy and Most Powerful Server</Link>
                                                <p> april, 10 2024</p>							
                                            </div>
                                        </div>
                                    </div>							
                                    <div className="widget-sidber">
                                        <div className="widget-sidber-content">
                                            <h4>Tags</h4>
                                        </div>	
                                        <div className="widget-catefories-tags">
                                        {BlogTag.map((item, i) => (
                                            <a href="#" key={i}>{item}</a>
                                        ))}
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

export default BlogDetail;