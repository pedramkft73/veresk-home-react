import { Link } from 'react-router-dom';
import data from '../../Data/blog.json';

const Blog4 = () => {

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
        <div className="blog-area style-grid">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="row">
                        {data.map((item, i) => (
                            <div key={i} className="col-lg-6 col-md-6">
                                <div className="single-blog-box">
                                    <div className="single-blog-thumb">
                                        <img src={item.img} alt="thumb" />
                                    </div>
                                    <div className="blog-box-content">
                                    <div className="meta-blog">
                                        <Link to="/blog/blog-details"><span><i className="bi bi-person-plus"></i>By wotech</span></Link>
                                        <p><span><img src="/assets/images/inner/grid-calen.png" alt="icon" /></span>January 5, 2024</p>
                                        </div>
                                        <h3><Link to="/blog/blog-details">{item.title}
                                        </Link></h3>
                                        <div className="blog-button">
                                            <Link to="/blog/blog-details">READ MORE<i className="bi bi-arrow-right"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            ))}

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
                                            <img src="/assets/images/inner/recent-post.png" alt="" />
                                        </div>
                                        <div className="recent-widget-content">
                                            <Link to="/blog/blog-details">Supervisor Disapproved Of Latest Work.
                                            </Link>
                                            <p> feb, 26 2024</p>							
                                        </div>
                                    </div>							
                                    <div className="sidber-widget-recent-post">
                                        <div className="recent-widget-thumb">
                                            <img src="/assets/images/inner/recent-post2.png" alt="" />
                                        </div>
                                        <div className="recent-widget-content">
                                        <Link to="/blog/blog-details">Simplify Streamline Succeed IT Solutions</Link>
                                            <p> June, 15 2024</p>							
                                        </div>
                                    </div>							
                                    <div className="sidber-widget-recent-post">
                                        <div className="recent-widget-thumb">
                                            <img src="/assets/images/inner/recent-post3.png" alt="" />
                                        </div>
                                        <div className="recent-widget-content">
                                        <Link to="/blog/blog-details">Unlocking Potential Through Technology</Link>
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

export default Blog4;