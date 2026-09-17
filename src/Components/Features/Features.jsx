import data from '../../Data/feature.json'

const Features = () => {
    return (
        <section className="feature-area" aria-label="Engineering services overview">
            <div className="container">
                <div className="row about align-items-center">
                    <div className="feature-box" role="region" tabIndex="0" aria-label="Engineering service cards">
                        {data.map((item, i) => (
                            <div key={i} className="feature-sinble-single-box">
                                <div className="feature-icon" aria-hidden="true">
                                    <img src={item.img} alt="" loading="lazy" decoding="async" />
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
        </section>
    );
};

export default Features;
