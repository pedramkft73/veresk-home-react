import { useEffect, useState } from "react";
import parse from 'html-react-parser';
import loadBackgroudImages from "../Common/loadBackgroudImages";
import VideoModal from "../VideoModal/VideoModal";
import { Link } from "react-router-dom";

const Hero1 = ({bgImg,SubTitle,Title,Content,BtnText,BtnLink,Image,VideoText}) => {

	useEffect(() => {
        loadBackgroudImages();
      }, []);

	  const [iframeSrc, setIframeSrc] = useState('about:blank');
	  const [toggle, setToggle] = useState(false);
	
	  const handelClick = () => {
		setIframeSrc("https://www.youtube.com/embed/rRid6GCJtgc");
		setToggle(!toggle);
	  };
	  const handelClose = () => {
		setIframeSrc('about:blank');
		setToggle(!toggle);
	  };

    return (
        <div className="hero-area d-flex align-items-center" data-background={bgImg}>
		<div className="container">
			<div className="row hero align-items-center">
				<div className="col-lg-6">
					<div className="hero-contant">
						<h5>{SubTitle}</h5>
						<h1>{parse(Title)}</h1>
						<p>{Content}</p>
						<div className="solutek-btn">
							<Link to={BtnLink}>
								{BtnText}
								<div className="solutek-hover-btn hover-bx"></div>
								<div className="solutek-hover-btn hover-bx2"></div>
								<div className="solutek-hover-btn hover-bx3"></div>
								<div className="solutek-hover-btn hover-bx4"></div>
							</Link>
						</div>
						<div className="hero-video-icon" onClick={handelClick}>	
							<span className="video-vemo-icon venobox vbox-item" data-vbtype="youtube" data-autoplay="true"><i className="bi bi-play"></i><span>{VideoText}</span></span>
						</div>
					</div>
				</div>
				<div className="col-lg-6">
					<div className="hero-thumb">
						<img src={Image} alt="hero-thumb" />
					</div>
				</div>
			</div>
		</div>
        <VideoModal
          isTrue={toggle}
          iframeSrc={iframeSrc}
          handelClose={handelClose}        
        ></VideoModal>
	</div>
    );
};

export default Hero1;