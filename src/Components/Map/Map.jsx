
const Map = () => {
    
    const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233667.9067777347!2d90.11481839453124!3d23.780840500000014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x63e259d796515e63%3A0x8b68319aae711aa1!2sIT%20Park%20BD!5e0!3m2!1sen!2sbd!4v1716707554611!5m2!1sen!2sbd";

    return (
        <div className="google-map">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <iframe src={mapUrl}  loading="lazy"></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Map;