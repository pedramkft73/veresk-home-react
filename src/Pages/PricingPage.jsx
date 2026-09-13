import Blog1 from '../Components/Blog/Blog1';
import BreadCumb from '../Components/Common/BreadCumb';
import Pricing from '../Components/Pricing/Pricing';

const PricingPage = () => {
    return (
        <div className='pricing-page'>
            <BreadCumb Title="Pricing"></BreadCumb> 
            <Pricing></Pricing>
            <Blog1></Blog1>
        </div>
    );
};

export default PricingPage;