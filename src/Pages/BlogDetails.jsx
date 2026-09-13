import BlogDetail from "../Components/BlogDetail/BlogDetail";
import BreadCumb from "../Components/Common/BreadCumb";

const BlogDetails = () => {
    return (
        <div className="blog-detail">
            <BreadCumb Title="Blog Details"></BreadCumb>
            <BlogDetail></BlogDetail>
        </div>
    );
};

export default BlogDetails;