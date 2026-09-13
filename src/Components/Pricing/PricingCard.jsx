import { Link } from "react-router-dom";

const PricingCard = ({Price,PricePlan,FeatureList,BtnUrl,BtnText}) => {
    return (
        <div className="pricing-single-box">
            <div className="pricing-head">
                <h1 className="priching-doller">{Price}</h1>
                <h3 className="priching-title">{PricePlan}</h3>
            </div>
            <div className="pricing-body">
                <ul className="pricing-list">
                {FeatureList?.map((item, index) => (
                    <li key={index}><i className="bi bi-check-circle"></i>{item}</li>
                ))}
                </ul>
                <div className="solutek-btn">
                    <Link to={BtnUrl}>
                        {BtnText}
                        <div className="solutek-hover-btn hover-bx"></div>
                        <div className="solutek-hover-btn hover-bx2"></div>
                        <div className="solutek-hover-btn hover-bx3"></div>
                        <div className="solutek-hover-btn hover-bx4"></div>
                    </Link>
                </div>
            </div>
    </div>
    );
};

export default PricingCard;