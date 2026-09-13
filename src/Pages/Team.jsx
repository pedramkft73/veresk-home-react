import Blog1 from "../Components/Blog/Blog1";
import BreadCumb from "../Components/Common/BreadCumb";
import Team2 from "../Components/Team/Team2";
import Testimonial2 from "../Components/Testimonial/Testimonial2";


const Team = () => {
    return (
        <div className="Team-Page">
            <BreadCumb Title="Team"></BreadCumb>
            <Team2></Team2>
            <Testimonial2></Testimonial2>
            <Blog1></Blog1>
        </div>
    );
};

export default Team;