import BreadCumb from "../Components/Common/BreadCumb";
import ServiceDetail from "../Components/ServiceDetail/ServiceDetail";

const ServiceDetails = () => {
    return (
        <div className="service-detail">
            <BreadCumb Title="Service Details"></BreadCumb>
            <ServiceDetail></ServiceDetail>
        </div>
    );
};

export default ServiceDetails;