import data from '../../Data/team1.json';
import SectionTitle from '../Common/SectionTitle';

const Team1 = () => {
    return (
            <div className="team-area style-two">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title text-center">
                               <SectionTitle
                                    SubTitle="OUR TEAM MEMBER"
                                    Title="Dedicated Team Members"
                                ></SectionTitle>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                    {data.map((item, i) => (
                        <div key={i} className="col-xl-3 col-lg-4 col-md-6">
                            <div className="single-team-box">
                                <div className="single-team-thumb">
                                    <img src={item.img} alt="thumb" />
                                    <div className="team-content">
                                        <div className="team-inner-title">
                                            <h4><a href="team-details.html">{item.title}</a></h4>
                                            <p>{item.desc}</p>
                                        </div>
                                        <div className="team-social-icon">
                                            <ul>
                                                <li><a href="#">facebook</a></li>
                                                <li><a href="#">twitter</a></li>
                                                <li><a href="#">behance</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
    );
};

export default Team1;