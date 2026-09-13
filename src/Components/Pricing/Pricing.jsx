import SectionTitle from "../Common/SectionTitle";
import PricingCard from "./PricingCard";


const Pricing = () => {

    const SectionDesc = {
        Content:'paradigms. Monotonectally extend open-source mvia competitive methods of empowerment dri revolutionize stand- business.'
    }

    return (
        <div className="pricing-area">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7">
                            <div className="section-title text-left">
                                <SectionTitle
                                    SubTitle="Start Business"
                                    Title="Choose Your Best Plan"
                                ></SectionTitle>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="section-title text-left">
                                <p className="section-descr">{SectionDesc.Content}</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <PricingCard
                                Price="$49"
                                PricePlan="Standard Plan"
                                BtnUrl="/pricing"
                                BtnText="Choose Plan"
                                FeatureList={[ 
                                    '30 Days Trial Features',
                                    'Multi-Language Content',
                                    'Unlimited Features',
                                    'Data backup and recovery',
                                    'Synced To Cloud Database'
                                ]}                                
                            ></PricingCard>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                        <PricingCard
                                Price="$59"
                                PricePlan="Basic Plan"
                                BtnUrl="/pricing"
                                BtnText="Choose Plan"
                                FeatureList={[ 
                                    '30 Days Trial Features',
                                    'Multi-Language Content',
                                    'Unlimited Features',
                                    'Data backup and recovery',
                                    'Synced To Cloud Database'
                                ]}                                
                            ></PricingCard>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                        <PricingCard
                                Price="$69"
                                PricePlan="Beginner Plan"
                                BtnUrl="/pricing"
                                BtnText="Choose Plan"
                                FeatureList={[ 
                                    '30 Days Trial Features',
                                    'Multi-Language Content',
                                    'Unlimited Features',
                                    'Data backup and recovery',
                                    'Synced To Cloud Database'
                                ]}                                
                            ></PricingCard>                            
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                        <PricingCard
                                Price="$79"
                                PricePlan="Premium Plan"
                                BtnUrl="/pricing"
                                BtnText="Choose Plan"
                                FeatureList={[ 
                                    '30 Days Trial Features',
                                    'Multi-Language Content',
                                    'Unlimited Features',
                                    'Data backup and recovery',
                                    'Synced To Cloud Database'
                                ]}                                
                            ></PricingCard>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Pricing;