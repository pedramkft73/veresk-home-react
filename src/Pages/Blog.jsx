import Blog3 from "../Components/Blog/Blog3";
import BreadCumb from "../Components/Common/BreadCumb";

const Blog = () => {
    return (
        <div className="blog-page">
            <BreadCumb Title="Blog"></BreadCumb>
            <Blog3></Blog3>
        </div>
    );
};

export default Blog;