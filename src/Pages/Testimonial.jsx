import Blog1 from "../Components/Blog/Blog1";
import BreadCumb from "../Components/Common/BreadCumb";
import Testimonial4 from "../Components/Testimonial/Testimonial4";

const Testimonial = () => {
    return (
        <div className="testimonial-page">
            <BreadCumb Title="Testimonial"></BreadCumb>
            <Testimonial4></Testimonial4>
            <Blog1></Blog1>
        </div>
    );
};

export default Testimonial;