import { Link } from "react-router-dom";
import data from '../../Data/blog.json';
import SectionTitle from "../Common/SectionTitle";

const Blog2 = () => {
    return (
        <div className="blog-area style-two">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-12">
                        <div className="section-title text-center">
                            <SectionTitle
                                    SubTitle="Latest Blog"
                                    Title="Explore Blogs & News"
                            ></SectionTitle>
                        </div>
                    </div>
                </div>
                <div className="row">
                {data.slice(0,3).map((item, i) => (
                    <div key={i} className="col-lg-4 col-md-6">
                        <div className="single-blog-box">
                            <div className="single-blog-thumb">
                                <img src={item.img} alt="thumb" />
                                <div className="blog-meta-top">
                                    <Link to="/blog/blog-details">{item.category}</Link>
                                </div>
                            </div>
                            <div className="blog-box-content">
                            <div className="meta-blog">
                                <Link to="/blog/blog-details"><span><i className="bi bi-person"></i>HOSSAIN ASIF</span></Link>
                                <p><span><img src="/assets/images/home-two/mesage-icon.png" alt="icon" /></span>COMMENTS</p>
                                </div>
                                <h3><Link to="/blog/blog-details">{item.title}</Link></h3>
                                <div className="blog-button">
                                    <Link to="/blog/blog-details" className="btn-2">read post</Link>
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

export default Blog2;