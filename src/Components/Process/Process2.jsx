import SectionTitle from "../Common/SectionTitle";
import ProcessCard2 from "./ProcessCard2";

const Process2 = () => {
    return (
            <div className="working-proces-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title text-center">
                                <SectionTitle
                                    SubTitle="work process"
                                    Title="WORKS IN 3 EASY STEPS"
                                ></SectionTitle>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="working-process-box before-transprent after-transprent">
                                <ProcessCard2
                                    Image="/assets/images/home-3/process-1.png"
                                    Number="01"
                                    Title="PLAN AND RESEARCH"
                                    Content="Solution is a long established proces reada content a looking at layout point."
                                ></ProcessCard2>
                            </div>
                        </div>	
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="working-process-box after-transprent">
                                <ProcessCard2
                                    Image="/assets/images/home-3/process-2.png"
                                    Number="02"
                                    Title="Design & Prototyping"
                                    Content="Solution is a long established proces reada content a looking at layout point."
                                ></ProcessCard2>
                            </div>
                        </div>	
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="working-process-box before-transprent">
                                <ProcessCard2
                                    Image="/assets/images/home-3/process-3.png"
                                    Number="03"
                                    Title="Finial Solution"
                                    Content="Solution is a long established proces reada content a looking at layout point."
                                ></ProcessCard2>
                            </div>
                        </div>			
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="working-process-bottom">
                                <p>We are Delivering The Best Customer Experience <span> since 2016</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Process2;