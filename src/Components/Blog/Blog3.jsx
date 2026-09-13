import { Link } from 'react-router-dom';
import data from '../../Data/blog.json';

const Blog3 = () => {
    return (
        <div className="blog-area style-grid">
            <div className="container">
                <div className="row">
                {data.map((item, i) => (
                    <div key={i} className="col-lg-4 col-md-6">
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
                                    <Link to="/blog/blog-details">REAM MORE<i className="bi bi-arrow-right"></i></Link>
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

export default Blog3;