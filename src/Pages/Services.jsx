import Blog1 from "../Components/Blog/Blog1";
import BreadCumb from "../Components/Common/BreadCumb";
import Services4 from "../Components/Services/Services4";
import Team1 from "../Components/Team/Team1";

const Services = () => {
    return (
        <div className="service-page">
            <BreadCumb Title="Services"></BreadCumb>
            <Services4></Services4>
            <Team1></Team1>
            <Blog1></Blog1>
        </div>
    );
};

export default Services;