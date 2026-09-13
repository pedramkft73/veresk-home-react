const ProcessCard2 = ({Image,Number,Title,Content}) => {
    return (
        <div>
            <div className="process-thumb">
            <img src={Image} alt="img" />
            <div className="process-number">
                <span>{Number}</span>
            </div>
            </div>
            <div className="process-content">
                <h4>{Title}</h4>
                <p>{Content}</p>
            </div>           
        </div>
    );
};

export default ProcessCard2;