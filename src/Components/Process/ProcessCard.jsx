const ProcessCard = ({Img,Title,Content}) => {
    return (
        <div>
            <div className="project-icon">
            <img src={Img} alt="icon" />
        </div>
        <div className="projects-content">
            <h4 className="project-title"><a href="project-details.html">{Title}</a></h4>
            <p className="project-des">{Content}
            </p>
        </div>           
        </div>
    );
};

export default ProcessCard;