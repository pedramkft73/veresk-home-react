import { Link } from "react-router-dom";

const CardLink = ({ isExternal, href, children, ...props }) => (
    isExternal
        ? <a href={href} {...props}>{children}</a>
        : <Link to={href} {...props}>{children}</Link>
);

const BlogCard1 = ({
    BlogImg,
    Title,
    Content,
    Date = "20 June 2024",
    Category = "Comment-05",
    BlogUrl = "/blog/blog-details",
    ImageAlt = "blog1",
    IsWordPressPost = false,
}) => {
    return (
        <div className="blog-singele-box">
        <div className="blog-thumb">
            {IsWordPressPost ? (
                <CardLink isExternal href={BlogUrl} aria-label={`Read ${Title}`}>
                    <img src={BlogImg} alt={ImageAlt} loading="lazy" />
                </CardLink>
            ) : (
                <img src={BlogImg} alt={ImageAlt} />
            )}
        </div>
        <div className="blog-content">
            <div className="blog-date">
                <h4>
                    <i className="bi bi-calendar2-check"></i>{Date}
                    {Category && (
                        <span>
                            {!IsWordPressPost && <i className="bi bi-chat-left-text"></i>}
                            {Category}
                        </span>
                    )}
                </h4>
            </div>
            <h3 className="blog-title">
                <CardLink isExternal={IsWordPressPost} href={BlogUrl}>{Title}</CardLink>
            </h3>
            <p className="blog-tex">{Content}</p>
            <div className="blog-btn">
                <CardLink isExternal={IsWordPressPost} href={BlogUrl}>
                    READ MORE<i className="bi bi-arrow-right"></i>
                </CardLink>
            </div>
        </div>
    </div>
    );
};

export default BlogCard1;
