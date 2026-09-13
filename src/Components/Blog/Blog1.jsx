import { Link } from "react-router-dom";
import SectionTitle from "../Common/SectionTitle";
import BlogCard1 from "../BlogCard/BlogCard1";
import BlogCardStyle2 from "../BlogCard/BlogCardStyle2";

const Blog1 = () => {
    return (
        <div className="blog-area">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="section-title text-left">
                            <SectionTitle
                                    SubTitle="OUR LATEST BLOG"
                                    Title="Exploring Its Potential in<br> Various <span>Industries.</span>"
                            ></SectionTitle>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="project-right">
                            <div className="solutek-btn">
                                <Link to="/blog">
                                    VIEW  all post
                                    <div className="solutek-hover-btn hover-bx"></div>
                                    <div className="solutek-hover-btn hover-bx2"></div>
                                    <div className="solutek-hover-btn hover-bx3"></div>
                                    <div className="solutek-hover-btn hover-bx4"></div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-5 col-lg-6 col-md-6">
                        <BlogCard1
                            BlogImg="/assets/images/blog1.png"
                            Title="Leveraging Descriptive Solutions for Business Growth."
                            Content="Appropriatel promote enterprise-wide vortals throuh in information without equity best  revolutioniz enterprise-wide vortals throuh."                        
                        ></BlogCard1>
                    </div>
                    <div className="col-xl-7 col-lg-6 col-md-6">
                        <BlogCardStyle2
                             BlogImg="/assets/images/blog2.png"
                             Title="How to Create Modern Web Site For Your Business.."
                             Content="Appropriatel promote enterprise-wide vortals throuh in information without equity best  revolutioniz"                            
                        ></BlogCardStyle2>

                        <BlogCardStyle2
                             BlogImg="/assets/images/blog3.png"
                             Title="How to Create Modern Web Site For Your Business.."
                             Content="Appropriatel promote enterprise-wide vortals throuh in information without equity best  revolutioniz"                            
                        ></BlogCardStyle2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog1;