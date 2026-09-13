import BreadCumb from "../Components/Common/BreadCumb";
import Contact1 from "../Components/Contact/Contact1";
import Map from "../Components/Map/Map";

const Contact = () => {
    return (
        <div className="contact-page">
            <BreadCumb Title="Contact"></BreadCumb>
            <Contact1></Contact1>
            <Map></Map>
        </div>
    );
};

export default Contact;