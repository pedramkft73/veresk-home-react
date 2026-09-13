import data from '../../Data/feature.json'

const Features = () => {
    return (
        <div className="feature-area">
                <div className="container">
                    <div className="row about align-items-center">
                        <div className="feature-box">
                        {data.map((item, i) => (
                            <div key={i} className="feature-sinble-single-box">
                                <div className="feature-icon">
                                    <img src={item.img} alt="feature1" />
                                </div>
                                <div className="feature-content">
                                    <h3 className="feature-title">{item.title}</h3>
                                    <p className="feature-text">{item.desc}</p>
                                </div>
                            </div>
                             ))}

                        </div>
                    </div>
                </div>	
            </div>
    );
};

export default Features;