
const Form = () => {
    return (
        <div className="contact_from_box">
        <form  id="dreamit-form">
            <div className="row">
                <div className="col-lg-6">
                    <div className="form_box">
                        <input type="text" name="name" placeholder="Your Name *" />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="form_box">
                        <input type="email" name="email" placeholder="Your E-Mail *" />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="form_box">
                        <input type="text" name="subject" placeholder="Subject *" />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="form_box">
                        <input type="text" name="phone" placeholder="Phone *" />
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="form_box">
                        <textarea name="message" id="message" cols="30" rows="10" placeholder="Message"></textarea>
                    </div>
                    <div className="quote_button">
                        <button className="btn" type="submit">SENS NOW <i className="bi bi-arrow-right"></i></button>
                    </div>
                </div>
            </div>
        </form>
    <div id="status" className="error"></div>
</div>
    );
};

export default Form;